# Translate URL Cleaner

A simple Google Chrome extension that copies the Google Translate URL of the open tab and removes the destination language portion (`&tl=XX` or `?tl=XX`) so that when opening the URL, the default destination language (or previously selected one) is displayed automatically.

## Features

- One-click cleaning and copying of Google Translate links
- Preserves your preferred target language settings
- Lightweight and fast (Manifest V3)
- Clean, minimal popup UI with status feedback

## Installation

1. Download or clone this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top right).
4. Click **Load unpacked** and select the folder containing the extension files.
5. The extension icon should appear in your toolbar.

## Usage

1. Navigate to any Google Translate page (`translate.google.com`).
2. Click the extension icon in the toolbar.
3. Click **"Copy Cleaned URL"**.
4. The cleaned link is copied to your clipboard — ready to share or open in a new tab!

## How It Works

The extension queries the active tab, removes target language parameters using regex, and writes the result to the clipboard.

## Files

- `manifest.json` – Extension configuration
- `popup.html` – Popup interface
- `popup.js` – Core logic
- Icons and assets

## License

This project is licensed under the [MIT License](LICENSE) — see the LICENSE file for details.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to fork the repo and submit a pull request.

---

Made with ❤️ for better translation link sharing.
