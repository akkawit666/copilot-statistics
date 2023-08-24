import * as vscode from 'vscode';
import axios from 'axios';

let statusBarItem: vscode.StatusBarItem;
let ev: vscode.Disposable | null = null;
let currentSecret = '';

function saveUserSecretAPIKey(context: vscode.ExtensionContext, secret: string) {
	context.globalState.update('userSecret', secret);
}

function getUserSecretAPIKey(context: vscode.ExtensionContext): string | undefined {
	return context.globalState.get('userSecret');
}

let copilotSuggestionsCount = 0;
let copilotSuggestionsWordsCount = 0;

let previousText = "";

function setSecretAPIKey(context: vscode.ExtensionContext) {
  vscode.window
  .showInputBox({
    value: currentSecret,
    password: true,
    placeHolder: 'ป้อน API Key ของคุณที่นี่',
    prompt: 'สามารถหา API Key ได้ที่ https://betimes-social-listening-app.demotoday.net',
  })
  .then(secret => {

    if (secret) {
      currentSecret = secret;
      saveUserSecretAPIKey(context, secret);

      registerSuggestionListener();
    }

  });
}

function isTabPress(change: vscode.TextDocumentContentChangeEvent): boolean {
  return change.text.length > 1 && change.rangeLength !== 0;
}

function registerSuggestionListener() {

  if (!statusBarItem) {
    statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    if (currentSecret)
    {
      statusBarItem.text = 'Copilot Suggestions: 0';
      statusBarItem.tooltip = 'Copilot Suggestions Count';
    }
    else {
      statusBarItem.text = 'Copilot Suggestions: 0 (API Key not set)';
      statusBarItem.tooltip = 'Copilot Suggestions Count (API Key not set)';
    }
    statusBarItem.show();
  }
  
  if (ev == null) {
    ev = vscode.workspace.onDidChangeTextDocument(event => {
      const activeEditor = vscode.window.activeTextEditor;
      if (!activeEditor || event.document !== activeEditor.document) {
        return;
      }
      const change = event.contentChanges[0];
      const updatedText = activeEditor.document.getText();
      if (updatedText.length > previousText.length) {
    
        if (isTabPress(change) && currentSecret) {
          const currentLengthChange = change.text.replace(/\s/g,'').length;
  
          if (currentLengthChange > 0)
          {
            copilotSuggestionsCount++;
            copilotSuggestionsWordsCount += currentLengthChange;
            statusBarItem.text = 'Copilot Suggestions: ' + copilotSuggestionsCount + ' (' + copilotSuggestionsWordsCount + ' words)';
    
            axios.post('https://betimes-social-listening-app.demotoday.net/api/v1/copilot-stats', {
              apiKey: currentSecret,
              wordsCount: currentLengthChange
            }).then((response) => {
              console.log(response.data);
            }, (error) => {
              vscode.window.showErrorMessage(error);
            });
          }
        }
  
      }
      previousText = updatedText;
    });
  }
  
}

export function activate(context: vscode.ExtensionContext) {
  console.log('GitHub Copilot Stats Extension is now active!');

  // check if user secret api key is already saved
  const userSecret = getUserSecretAPIKey(context);
  currentSecret = userSecret || '';
  
  if (!userSecret) {
		vscode.window
		.showInputBox({
			placeHolder: 'ป้อน API Key ของคุณที่นี่',
      password: true,
			prompt: 'สามารถหา API Key ได้ที่ https://betimes-social-listening-app.demotoday.net',
		})
		.then(secret => {

			if (secret) {
				currentSecret = secret;
				saveUserSecretAPIKey(context, secret);
				registerSuggestionListener();
			}
			else {
				vscode.window.showErrorMessage('ป้อน API Key เพื่อเก็บสถิติ');
			}
		});
	}
	else {
		console.log('GitHub Copilot Stats API Key: ' + userSecret);
		registerSuggestionListener();
	}

  const setSecretAPIKeyCommand = vscode.commands.registerCommand(
    'extension.setApiKey',
    () => setSecretAPIKey(context)
  );

  context.subscriptions.push(setSecretAPIKeyCommand);
}

export function deactivate() {
  console.log('GitHub Copilot Stats Extension is now inactive!');
}
