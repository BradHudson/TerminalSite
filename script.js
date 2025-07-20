/**
 * Terminal Portfolio Website - JavaScript
 * A retro hacking-style terminal interface for Brad Hudson's portfolio
 */

class Terminal {
    constructor() {
        this.output = document.getElementById('terminal-output');
        this.input = document.getElementById('terminal-input');
        this.commandHistory = [];
        this.historyIndex = -1;
        this.currentDirectory = '/';
        this.isProcessing = false;
        
        // Initialize terminal
        this.init();
    }

    init() {
        // Focus input and set up event listeners
        this.input.focus();
        this.input.addEventListener('keydown', (e) => this.handleKeydown(e));
        
        // Keep input focused when clicking anywhere
        document.addEventListener('click', () => this.input.focus());
        
        // Show initial welcome message
        this.showWelcomeMessage();
    }

    async showWelcomeMessage() {
        const welcomeMessages = [
            "Initializing secure terminal connection...",
            "Loading quantum encryption protocols...",
            "Establishing encrypted tunnel to bradhudson.dev...",
            "Authentication successful. Welcome, guest user.",
            "",
            "╔═══════════════════════════════════════════════════════════════╗",
            "║                    BRAD HUDSON - PORTFOLIO v2.1              ║",
            "║                      Terminal Interface                       ║",
            "║                                                               ║",
            "║  WARNING: Unauthorized access is monitored and recorded      ║",
            "║  All activities are logged for security purposes             ║",
            "╚═══════════════════════════════════════════════════════════════╝",
            "",
            "Type 'help' for available commands or 'hack personal_data' if you dare...",
            ""
        ];

        for (let i = 0; i < welcomeMessages.length; i++) {
            await this.typeText(welcomeMessages[i], 'info-text', 30);
            await this.delay(50);
        }
    }

    async handleKeydown(e) {
        if (this.isProcessing) return;

        switch (e.key) {
            case 'Enter':
                e.preventDefault();
                await this.processCommand();
                break;
            case 'ArrowUp':
                e.preventDefault();
                this.navigateHistory(-1);
                break;
            case 'ArrowDown':
                e.preventDefault();
                this.navigateHistory(1);
                break;
            case 'Tab':
                e.preventDefault();
                // Could implement auto-completion here
                break;
        }
    }

    navigateHistory(direction) {
        if (this.commandHistory.length === 0) return;

        if (direction === -1) {
            // Up arrow
            if (this.historyIndex === -1) {
                this.historyIndex = this.commandHistory.length - 1;
            } else if (this.historyIndex > 0) {
                this.historyIndex--;
            }
        } else {
            // Down arrow
            if (this.historyIndex < this.commandHistory.length - 1) {
                this.historyIndex++;
            } else {
                this.historyIndex = -1;
                this.input.value = '';
                return;
            }
        }

        this.input.value = this.commandHistory[this.historyIndex] || '';
    }

    async processCommand() {
        const command = this.input.value.trim();
        if (!command) return;

        this.isProcessing = true;
        
        // Add command to history
        this.commandHistory.push(command);
        this.historyIndex = -1;

        // Display the command
        await this.addOutput(`guest@bradhudson.dev:${this.currentDirectory}$ ${command}`, 'command-line');
        
        // Clear input
        this.input.value = '';

        // Process the command
        await this.executeCommand(command);

        this.isProcessing = false;
        this.scrollToBottom();
    }

    async executeCommand(commandLine) {
        const parts = commandLine.split(' ');
        const command = parts[0].toLowerCase();
        const args = parts.slice(1);

        // Add random hacking logs before processing
        await this.addHackingLogs();

        switch (command) {
            case 'help':
                await this.helpCommand();
                break;
            case 'ls':
                await this.lsCommand();
                break;
            case 'cd':
                await this.cdCommand(args[0]);
                break;
            case 'cat':
                await this.catCommand(args[0]);
                break;
            case 'message':
            case 'sendmsg':
            case 'email':
                await this.messageCommand();
                break;
            case 'projects':
            case 'list_projects':
                await this.projectsCommand();
                break;
            case 'hack':
                if (args[0] === 'personal_data') {
                    await this.hackCommand();
                } else {
                    await this.unknownCommand(commandLine);
                }
                break;
            case 'clear':
                this.clearScreen();
                break;
            case 'whoami':
                await this.whoamiCommand();
                break;
            case 'pwd':
                await this.pwdCommand();
                break;
            default:
                await this.unknownCommand(commandLine);
        }
    }

    async addHackingLogs() {
        const logs = [
            "Establishing secure connection to remote host...",
            "Authenticating user credentials...",
            "Analyzing network traffic...",
            "Accessing encrypted sectors...",
            "Verifying security protocols...",
            "Initializing command execution environment..."
        ];

        const selectedLogs = this.getRandomItems(logs, 2 + Math.floor(Math.random() * 3));
        
        for (let log of selectedLogs) {
            await this.typeText(log, 'info-text', 20);
            await this.delay(100 + Math.random() * 200);
        }
    }

    async helpCommand() {
        await this.typeText("Executing command: help...", 'info-text', 20);
        await this.delay(200);
        
        const helpText = `
╔══════════════════════════════════════════════════════════════════╗
║                        AVAILABLE COMMANDS                        ║
╚══════════════════════════════════════════════════════════════════╝

  help                    - Display this help menu
  ls                      - List files and directories
  cd <directory>          - Change directory (projects, ..)
  cat <file>              - Display file contents
  message                 - Open secure communication channel
  projects                - List Brad's development projects
  hack personal_data      - Attempt unauthorized data access (RISKY!)
  whoami                  - Display current user information
  pwd                     - Show current directory
  clear                   - Clear terminal screen

╔══════════════════════════════════════════════════════════════════╗
║ WARNING: Some commands may trigger security protocols            ║
║ Unauthorized access attempts are logged and monitored           ║
╚══════════════════════════════════════════════════════════════════╝
`;

        await this.addOutput("Checksum verification: OK", 'success-text');
        await this.delay(100);
        await this.addOutput("Operation complete. Elapsed time: 147ms.", 'info-text');
        await this.delay(200);
        await this.addOutput(helpText, 'output-text');
    }

    async lsCommand() {
        await this.typeText("Executing command: ls...", 'info-text', 20);
        await this.delay(150);
        await this.typeText("Scanning directory structure...", 'info-text', 20);
        await this.delay(200);

        let files;
        if (this.currentDirectory === '/') {
            files = [
                "about.txt           2.1KB    Personal information file",
                "projects/           DIR      Development projects directory", 
                "contact.msg         1.8KB    Encrypted contact information",
                "data/               DIR      Protected data directory",
                "resume.pdf          245KB    Professional resume document",
                ".secrets/           DIR      [ACCESS DENIED]"
            ];
        } else if (this.currentDirectory === '/projects') {
            files = [
                "../                 DIR      Parent directory",
                "portfolio_site/     DIR      This terminal portfolio",
                "webapp_dashboard/   DIR      React analytics dashboard",
                "mobile_app/         DIR      Flutter cross-platform app",
                "ai_chatbot/         DIR      Python NLP chatbot",
                "blockchain_tool/    DIR      Web3 development tool"
            ];
        }

        await this.addOutput("Directory scan complete.", 'success-text');
        await this.delay(100);
        await this.addOutput("Operation complete. Elapsed time: 89ms.", 'info-text');
        await this.delay(150);
        
        await this.addOutput("\nDirectory listing:", 'output-text');
        for (let file of files) {
            await this.typeText(file, 'output-text', 15);
            await this.delay(50);
        }
    }

    async cdCommand(directory) {
        await this.typeText(`Executing command: cd ${directory || ''}...`, 'info-text', 20);
        await this.delay(150);

        if (!directory) {
            await this.addOutput("Error: No directory specified", 'error-text');
            return;
        }

        if (directory === 'projects' && this.currentDirectory === '/') {
            this.currentDirectory = '/projects';
            await this.typeText("Changing directory to: /projects", 'info-text', 20);
            await this.delay(100);
            await this.addOutput("Directory changed successfully.", 'success-text');
        } else if (directory === '..' && this.currentDirectory === '/projects') {
            this.currentDirectory = '/';
            await this.typeText("Changing directory to: /", 'info-text', 20);
            await this.delay(100);
            await this.addOutput("Directory changed successfully.", 'success-text');
        } else if (directory === 'data' || directory === '.secrets') {
            await this.typeText("Attempting to access restricted directory...", 'warning-text', 20);
            await this.delay(300);
            await this.addOutput("ACCESS DENIED: Insufficient privileges", 'error-text');
            await this.addOutput("Security breach attempt logged", 'warning-text');
        } else {
            await this.addOutput(`Error: Directory '${directory}' not found`, 'error-text');
        }

        // Update prompt
        document.querySelector('.prompt').textContent = `guest@bradhudson.dev:${this.currentDirectory}$ `;
        await this.addOutput("Operation complete. Elapsed time: 67ms.", 'info-text');
    }

    async catCommand(filename) {
        await this.typeText(`Executing command: cat ${filename || ''}...`, 'info-text', 20);
        await this.delay(150);

        if (!filename) {
            await this.addOutput("Error: No filename specified", 'error-text');
            return;
        }

        await this.typeText("Accessing file system...", 'info-text', 20);
        await this.delay(200);
        await this.typeText("Decrypting file contents...", 'info-text', 20);
        await this.delay(250);

        if (filename === 'about.txt') {
            const aboutContent = `
╔══════════════════════════════════════════════════════════════════╗
║                           ABOUT BRAD HUDSON                      ║
╚══════════════════════════════════════════════════════════════════╝

Full Stack Developer & Technology Enthusiast

Brad Hudson is a passionate software engineer with 5+ years of experience 
building scalable web applications and innovative digital solutions. 

SPECIALIZATIONS:
• Frontend: React, Vue.js, TypeScript, Next.js
• Backend: Node.js, Python, Java, Express
• Databases: PostgreSQL, MongoDB, Redis
• Cloud: AWS, Docker, Kubernetes
• Mobile: React Native, Flutter

CURRENT FOCUS:
Exploring AI/ML integration in web applications and building
developer tools that enhance productivity and code quality.

WHEN NOT CODING:
Brad enjoys hiking, photography, and contributing to open-source
projects. Always learning and sharing knowledge with the dev community.

Contact: brad@bradhudson.dev | GitHub: @bradhudson
`;
            await this.addOutput("File decryption successful.", 'success-text');
            await this.delay(100);
            await this.addOutput(aboutContent, 'output-text');
        } else if (filename === 'contact.msg') {
            await this.addOutput("Error: File is encrypted with quantum encryption", 'error-text');
            await this.delay(100);
            await this.addOutput("Use 'message' command to establish secure communication", 'warning-text');
        } else {
            await this.addOutput(`Error: File '${filename}' not found or access denied`, 'error-text');
        }

        await this.addOutput("Operation complete. Elapsed time: 234ms.", 'info-text');
    }

    async messageCommand() {
        await this.typeText("Initiating secure message protocol...", 'info-text', 20);
        await this.delay(300);
        await this.typeText("Encrypting payload with RSA-2048...", 'info-text', 20);
        await this.delay(400);
        await this.typeText("Establishing secure channel to brad@bradhudson.dev...", 'info-text', 20);
        await this.delay(350);
        
        // Simulate progress
        const percentages = [15, 32, 58, 73, 89, 100];
        for (let percent of percentages) {
            await this.typeText(`Secure handshake progress: ${percent}%...`, 'success-text', 15);
            await this.delay(150);
        }

        await this.addOutput("Message protocol established. Opening secure transmission window...", 'success-text');
        await this.delay(200);
        
        const contactMessage = `
╔══════════════════════════════════════════════════════════════════╗
║                   SECURE COMMUNICATION LINK                     ║
╚══════════════════════════════════════════════════════════════════╝

Encrypted communication channel is now active.

SECURE CONTACT OPTIONS:
→ Email: brad@bradhudson.dev
→ LinkedIn: linkedin.com/in/brad-hudson-dev
→ GitHub: github.com/bradhudson
→ Twitter: @brad_codes

Click to open secure email client:
`;
        
        await this.addOutput(contactMessage, 'output-text');
        
        // Create clickable email link
        const emailLink = document.createElement('span');
        emailLink.className = 'link-text';
        emailLink.textContent = '📧 [ENCRYPTED EMAIL TERMINAL] - Click to send message';
        emailLink.style.cursor = 'pointer';
        emailLink.onclick = () => window.open('mailto:brad@bradhudson.dev?subject=Hello from Terminal Portfolio', '_blank');
        
        const linkDiv = document.createElement('div');
        linkDiv.appendChild(emailLink);
        this.output.appendChild(linkDiv);
        
        await this.delay(200);
        await this.addOutput("Operation complete. Elapsed time: 1247ms.", 'info-text');
    }

    async projectsCommand() {
        await this.typeText("Executing command: projects...", 'info-text', 20);
        await this.delay(200);
        await this.typeText("Accessing project database...", 'info-text', 20);
        await this.delay(250);
        await this.typeText("Decrypting project metadata...", 'info-text', 20);
        await this.delay(300);

        const projectsContent = `
╔══════════════════════════════════════════════════════════════════╗
║                      BRAD'S DEVELOPMENT PROJECTS                 ║
╚══════════════════════════════════════════════════════════════════╝

[1] TERMINAL PORTFOLIO SITE
    Type: Personal Website
    Tech: HTML, CSS, Vanilla JavaScript
    Desc: Retro hacking-style terminal interface (you're using it now!)
    Demo: ████ CURRENTLY ACTIVE ████

[2] ANALYTICS DASHBOARD
    Type: Web Application
    Tech: React, Node.js, PostgreSQL, Chart.js
    Desc: Real-time business intelligence dashboard with data visualization
    Status: Production Ready
    
[3] TASK MANAGEMENT APP
    Type: Mobile + Web Application  
    Tech: Flutter, Firebase, Redux
    Desc: Cross-platform productivity app with real-time collaboration
    Status: Beta Testing

[4] AI CHATBOT FRAMEWORK
    Type: Open Source Library
    Tech: Python, TensorFlow, FastAPI
    Desc: Configurable NLP chatbot with training pipeline
    Status: Active Development

[5] BLOCKCHAIN VOTING SYSTEM
    Type: Decentralized Application
    Tech: Solidity, Web3.js, React
    Desc: Transparent voting platform using Ethereum smart contracts
    Status: Proof of Concept

[6] CODE REVIEW AUTOMATION TOOL
    Type: Developer Tool
    Tech: TypeScript, GitHub API, OpenAI API
    Desc: AI-powered code review assistant with security analysis
    Status: MVP Complete

For detailed project information, visit: github.com/bradhudson
`;

        await this.addOutput("Project database decrypted successfully.", 'success-text');
        await this.delay(150);
        await this.addOutput(projectsContent, 'output-text');
        await this.addOutput("Operation complete. Elapsed time: 445ms.", 'info-text');
    }

    async hackCommand() {
        await this.typeText("Executing command: hack personal_data...", 'warning-text', 20);
        await this.delay(200);
        await this.typeText("WARNING: Unauthorized access attempt detected!", 'error-text', 30);
        await this.delay(400);
        
        const hackSequence = [
            "Attempting unauthorized access to personal_data.db...",
            "Scanning for vulnerabilities...",
            "Bypassing firewall v3.1...",
            "Attempting SQL injection...",
            "Trying buffer overflow exploit...",
            "Bruteforcing encryption keys..."
        ];

        for (let step of hackSequence) {
            await this.typeText(step, 'warning-text', 25);
            await this.delay(200 + Math.random() * 300);
        }

        // Simulate failed progress
        const progressSteps = [12, 27, 45, 61, 78, 94];
        for (let progress of progressSteps) {
            await this.typeText(`Access progress: ${progress}%...`, 'warning-text', 20);
            await this.delay(150);
        }

        await this.delay(500);
        await this.typeText("ACCESS DENIED: Insufficient Privileges", 'error-text', 40);
        await this.delay(300);
        await this.typeText("INTRUSION DETECTED - Logging IP address...", 'error-text', 30);
        await this.delay(400);
        await this.typeText("Initiating counter-intrusion protocol...", 'error-text', 30);
        await this.delay(500);
        await this.typeText("Security forces dispatched to your location... 🚨", 'error-text', 40);
        await this.delay(800);
        await this.typeText("Just kidding! 😄", 'success-text', 50);
        await this.delay(300);
        await this.typeText("Here's some public info about Brad instead:", 'success-text', 30);
        await this.delay(200);

        // Show the same content as about.txt
        const aboutContent = `
╔══════════════════════════════════════════════════════════════════╗
║                    PUBLIC INFORMATION ONLY                       ║
╚══════════════════════════════════════════════════════════════════╝

Nice try! But Brad's personal data is protected by quantum encryption 
and a very good sense of humor. Here's what I can share publicly:

INTERESTS: 
• Building cool terminal UIs (like this one!)
• Exploring new programming languages and frameworks
• Contributing to open source projects
• Mentoring junior developers

FUN FACTS:
• Coded his first website at age 12
• Can solve a Rubik's cube in under 2 minutes
• Prefers dark mode for everything (obviously)
• Thinks the best debugger is console.log() 

MOTTO: "Code with purpose, debug with patience, deploy with confidence"

If you want to know more, use the 'message' command like a normal person! 😉
`;

        await this.addOutput(aboutContent, 'output-text');
        await this.addOutput("Operation complete. Elapsed time: 3.7 seconds.", 'info-text');
    }

    async whoamiCommand() {
        await this.typeText("Executing command: whoami...", 'info-text', 20);
        await this.delay(150);
        
        await this.addOutput("Current User: guest", 'output-text');
        await this.addOutput("Host: bradhudson.dev", 'output-text');
        await this.addOutput("Session: Terminal Portfolio v2.1", 'output-text');
        await this.addOutput("Access Level: Visitor (Read-Only)", 'warning-text');
        await this.addOutput("Operation complete. Elapsed time: 34ms.", 'info-text');
    }

    async pwdCommand() {
        await this.typeText("Executing command: pwd...", 'info-text', 20);
        await this.delay(100);
        
        await this.addOutput(this.currentDirectory, 'output-text');
        await this.addOutput("Operation complete. Elapsed time: 12ms.", 'info-text');
    }

    async unknownCommand(command) {
        await this.typeText(`Executing command: ${command}...`, 'info-text', 20);
        await this.delay(200);
        await this.typeText("Command not found in system database...", 'warning-text', 20);
        await this.delay(150);
        await this.typeText("Checking security protocols...", 'warning-text', 20);
        await this.delay(200);
        
        const responses = [
            `Command '${command}' not found. Type 'help' for available commands.`,
            `ERROR: '${command}' is not a recognized command.`,
            `Access denied: '${command}' requires elevated privileges.`,
            `Unknown command: '${command}'. Nice try, hacker!`
        ];
        
        const response = responses[Math.floor(Math.random() * responses.length)];
        await this.addOutput(response, 'error-text');
        await this.addOutput("Operation failed. Elapsed time: 156ms.", 'info-text');
    }

    clearScreen() {
        this.output.innerHTML = '';
    }

    async typeText(text, className = 'output-text', speed = 30) {
        const div = document.createElement('div');
        div.className = `output-line ${className}`;
        this.output.appendChild(div);

        for (let i = 0; i < text.length; i++) {
            div.textContent += text[i];
            this.scrollToBottom();
            if (speed > 0) await this.delay(speed);
        }
    }

    async addOutput(text, className = 'output-text') {
        const div = document.createElement('div');
        div.className = `output-line ${className}`;
        div.textContent = text;
        this.output.appendChild(div);
        this.scrollToBottom();
    }

    scrollToBottom() {
        this.output.scrollTop = this.output.scrollHeight;
        const terminalContent = document.querySelector('.terminal-content');
        terminalContent.scrollTop = terminalContent.scrollHeight;
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    getRandomItems(array, count) {
        const shuffled = array.slice().sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
}

// Initialize terminal when page loads
document.addEventListener('DOMContentLoaded', () => {
    new Terminal();
}); 