const output = document.getElementById("output");
const input = document.getElementById("commandInput");
const terminal = document.getElementById("terminal");

function print(text) {
    output.innerHTML += text + "\n";
    // Scroll the terminal div to the bottom
    terminal.scrollTop = terminal.scrollHeight;
}

const commands = {
    help: `
Available Commands:
  help       → list of commands
  whoami     → your intro
  skills     → programming skills
  projects   → GitHub projects
  socials    → your links
  contact    → email / telegram
  experience → experience details
  education  → education history
  quote      → random quote
  ascii      → ascii art
  clear      → clears screen
`,

    whoami: `
Name: Manish
Role: Developer / Security Enthusiast
Location: India
About: Passionate about coding, cybersecurity, and building cool tools.
`,

    skills: `
Languages: Python, JavaScript, C, Bash
Tools: Git, Linux, BurpSuite, Nmap
Special: Terminal UI Designs, Automation, OSINT
`,

    projects: `
GitHub Projects:
- https://github.com/TheManishCode
`,

    socials: `
Instagram: https://instagram.com/
GitHub: https://github.com/TheManishCode
Telegram: https://t.me/
`,

    contact: `
Email: themanishcode@gmail.com
Telegram: @your_telegram
`,

    experience: `
• Built several automation tools
• Experience in Pentesting labs
• Completed multiple cybersecurity projects
`,

    education: `
• BCA (in progress)
• Self-taught security researcher
`,

    quote() {
        const list = [
            "Stay anonymous, stay safe.",
            "Code, break, learn, repeat.",
            "Hacking is an art of curiosity."
        ];
        return list[Math.floor(Math.random() * list.length)];
    },

    ascii: `
███╗   ███╗ █████╗ ███╗   ██╗██╗██╗  ██╗██╗
████╗ ████║██╔══██╗████╗  ██║██║██║ ██╔╝██║
██╔████╔██║███████║██╔██╗ ██║██║█████╔╝ ██║
██║╚██╔╝██║██╔══██║██║╚██╗██║██║██╔═██╗ ██║
██║ ╚═╝ ██║██║  ██║██║ ╚████║██║██║  ██╗██║
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═╝╚═╝
`
};

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        const cmd = input.value.trim();
        print(`guest@manish:~$ ${cmd}`);

        if (cmd === "clear") {
            output.innerHTML = "";
        }
        else if (commands[cmd]) {
            if (typeof commands[cmd] === "function") {
                print(commands[cmd]());
            } else {
                print(commands[cmd]);
            }
        } 
        else if (cmd !== "") {
            print(`Command not found: ${cmd}\nType 'help' to see available commands.`);
        }

        input.value = "";
    }
});

// Auto-run commands on load to fix the blank screen issue
window.onload = function() {
    print(commands.ascii);
    print(commands.whoami);
    print("\nType 'help' to see available commands.\n");
    input.focus();
};
