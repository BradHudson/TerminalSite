# Terminal Portfolio Website

A retro hacking-style terminal interface portfolio website built with vanilla HTML, CSS, and JavaScript. Features authentic CRT monitor effects, typing animations, and verbose "hacking" logging for a nostalgic computing experience.

## 🖥️ Features

### Visual Effects
- **CRT Monitor Simulation**: Scanlines, screen curvature, and subtle flicker effects
- **Retro Typography**: VT323 monospace font with terminal-style green text
- **Typing Animation**: Character-by-character text output with realistic delays
- **Blinking Cursor**: Authentic terminal cursor animation
- **Responsive Design**: Works on desktop, tablet, and mobile devices

### Terminal Functionality
- **Command History**: Navigate previous commands with up/down arrow keys
- **Auto-focus**: Terminal input stays focused for seamless typing experience
- **Multiple Directories**: Navigate between root and projects folder
- **Error Handling**: Realistic error messages and access denied scenarios

### Available Commands

| Command | Description |
|---------|-------------|
| `help` | Display all available commands with descriptions |
| `ls` | List files and directories in current location |
| `cd <directory>` | Change directory (supports `projects` and `..`) |
| `cat <file>` | Display file contents (try `about.txt`) |
| `message` | Open secure communication channel with contact info |
| `projects` | List Brad's development projects with descriptions |
| `hack personal_data` | Attempt unauthorized access (spoiler: it fails humorously) |
| `whoami` | Display current user information |
| `pwd` | Show current directory path |
| `clear` | Clear the terminal screen |

### Hacking Theme Features
- **Verbose Logging**: Each command includes realistic "hacking" output with:
  - Connection establishment messages
  - Authentication steps
  - Progress indicators
  - Checksum verifications
  - Elapsed time reports
- **Security Simulation**: Access denied messages and intrusion detection
- **Random Delays**: Authentic processing delays between output lines
- **Error Scenarios**: Failed authentication and permission denied responses

## 🚀 Getting Started

### Local Development
1. Clone or download the project files
2. Open `index.html` in your web browser
3. Start typing commands to explore the portfolio

### File Structure
```
TerminalSite/
├── index.html          # Main HTML structure
├── style.css           # CRT effects and terminal styling
├── script.js           # Terminal functionality and commands
└── README.md           # This documentation
```

### Browser Compatibility
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Responsive**: Mobile and tablet friendly
- **No Backend Required**: Runs entirely client-side

## 🎮 Usage Examples

```bash
# Get help
guest@bradhudson.dev:~$ help

# Explore the file system
guest@bradhudson.dev:~$ ls
guest@bradhudson.dev:~$ cat about.txt

# Navigate directories
guest@bradhudson.dev:~$ cd projects
guest@bradhudson.dev:/projects$ ls
guest@bradhudson.dev:/projects$ cd ..

# View projects
guest@bradhudson.dev:~$ projects

# Try to hack (spoiler: you can't!)
guest@bradhudson.dev:~$ hack personal_data

# Get contact information
guest@bradhudson.dev:~$ message
```

## 🛠️ Technical Implementation

### CSS Features
- **Flexbox Layout**: Modern responsive design
- **CSS Animations**: Cursor blinking, CRT flicker, loading dots
- **Custom Scrollbar**: Terminal-themed scroll styling
- **Media Queries**: Mobile-first responsive breakpoints

### JavaScript Architecture
- **Class-based Design**: Clean OOP structure with Terminal class
- **Async/Await**: Smooth typing animations with proper timing
- **Event Handling**: Keyboard navigation and command processing
- **Command Router**: Extensible command system for easy additions

### Key Methods
- `typeText()`: Character-by-character typing animation
- `addHackingLogs()`: Random verbose logging simulation
- `executeCommand()`: Command parsing and routing
- `navigateHistory()`: Arrow key command history navigation

## 🎨 Customization

### Colors
Edit CSS variables in `style.css`:
```css
:root {
    --terminal-green: #00ff00;
    --terminal-bg: #000;
    --error-red: #ff4444;
    --warning-yellow: #ffaa00;
}
```

### Commands
Add new commands in `script.js`:
```javascript
case 'newcommand':
    await this.newCommandFunction();
    break;
```

### Content
Modify personal information in the command functions:
- `aboutContent` in `catCommand()`
- Project list in `projectsCommand()`
- Contact information in `messageCommand()`

## 📱 Mobile Experience
- Touch-friendly interface
- Virtual keyboard support
- Optimized font sizes for small screens
- Maintains retro aesthetic on all devices

## 🔧 Performance
- **Lightweight**: Pure vanilla JavaScript, no frameworks
- **Fast Loading**: Minimal dependencies (only Google Fonts)
- **Efficient Animations**: CSS transforms for smooth effects
- **Memory Friendly**: Proper cleanup and event management

## 🎯 Future Enhancements
- Tab completion for commands
- Sound effects for typing and beeps
- Additional terminal themes (amber, blue)
- File download simulation
- Network status indicators

## 📄 License
This project is open source and available under the MIT License.

## 🤝 Contributing
Feel free to submit issues and enhancement requests!

---

**Built with ❤️ and lots of terminal nostalgia** 