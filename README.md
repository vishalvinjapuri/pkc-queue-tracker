https://github.com/user-attachments/assets/60b307a1-272c-47bd-9fdf-9eb480979d16

# Pokémon Center Queue Tracker

A Chrome extension that displays your current position in the Pokémon Center website's queue system.

## Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top-right corner
4. Click "Load unpacked" and select the extension directory

## How It Works

The extension monitors your queue position on the Pokémon Center website by:

1. Injecting a transparent overlay into the page (see content.js, lines 7-21)
2. Making periodic API calls to check your position
3. Automatically clearing the tracker once you've passed the queue

## Technical Details

### Manifest
The extension uses Manifest V3 and requires the following permissions:

```6:7:manifest.json
    "permissions": ["scripting", "storage", "activeTab"],
    "host_permissions": ["https://www.pokemoncenter.com/*"],
```

### Content Script
The main functionality is implemented in `content.js`, which:
- Creates a non-intrusive overlay
- Polls the queue API every 10 seconds
- Handles error states gracefully
- Automatically cleans up when the queue is passed

## Development

To modify the extension:

1. Update the manifest.json for any new permissions or resources
2. Modify content.js for core functionality changes
3. Test locally using Chrome's developer mode
4. Update version number in manifest.json before releasing

## License

GNU General Public License v3.0

## Contributing

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## Support

For issues or feature requests, please open an issue in the GitHub repository.

---

*Note: This extension is not affiliated with or endorsed by The Pokémon Company or Nintendo.*
