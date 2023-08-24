# GitHub Copilot Stats Extension

This is a Visual Studio Code extension that tracks and displays statistics about your usage of GitHub Copilot suggestions. It counts the number of suggestions and the total number of words added using Copilot. It actually doesn't count from actually using github co-pilot as there is no API or function for production use yet. Stats may vary slightly.

## Installation

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or pressing `Ctrl+Shift+X`.
3. Search for "GitHub Copilot Stats" and install it.
4. After installation, you might need to reload Visual Studio Code.

## Usage

1. After installation, you'll be prompted to enter your API Key. This key is used to authenticate with the remote server.
2. If you don't have an API Key, you can get it from [here](https://betimes-social-listening-app.demotoday.net).
3. Once the API Key is entered, the extension will start tracking your Copilot suggestions automatically.

### Commands

- `GitHub Copilot Stats: API Key`: Allows you to set or update your API Key.

## Features

- Counts the number of Copilot suggestions you've used.
- Tracks the total number of words added using Copilot.
- Provides a command to manually calculate and display your Copilot usage stats.