# GitHub Copilot Stats Extension

This Visual Studio Code extension tracks and displays statistics about your usage of GitHub Copilot suggestions and the time spent in each project folder. It counts the number of Copilot suggestions, the total number of words added using Copilot, and logs the time spent in the currently active folder. Please note that this extension doesn't directly count suggestions from GitHub Copilot as there is no official API or function for production use yet. Therefore, stats may vary slightly.

## Installation

1. Open Visual Studio Code.
2. Navigate to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing `Ctrl+Shift+X`.
3. Search for "GitHub Copilot Stats" and install it.
4. You might need to reload Visual Studio Code after the installation.

## Usage

1. After installation, you will be prompted to enter your API Key. This key is necessary for authenticating with the remote server where your stats are stored.
2. If you don't have an API Key, you can obtain it [here](https://betimes-social-listening-app.demotoday.net).
3. Once the API Key is entered, the extension will start tracking your Copilot suggestions and time spent in each folder automatically.

### Commands

- `GitHub Copilot Stats: Set API Key`: Allows you to set or update your API Key.

## Features

- Counts the number of Copilot suggestions you've used.
- Tracks the total number of words added using Copilot.
- Logs the time spent in each project folder.
- Provides a status bar item showing the current count of Copilot suggestions and word count.
- Stores time tracking data for each folder you work in, which can be sent to a configured server for analysis.

## Change Log

### Version 1.2.4
- **New Feature**: Added time tracking functionality to log time spent in each project folder.
- **Enhancement**: Automatic data sending feature implemented for time tracking data.
- **Improvement**: Stability and performance enhancements in data handling and API integration.

### Version 1.1.4
- Previous stable release.

## Contributing

Feedback and contributions are welcome. Please open an issue or pull request on our [GitHub repository](https://github.com/akkawit666/copilot-statistics.git).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
