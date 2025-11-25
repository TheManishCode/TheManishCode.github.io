const output = document.getElementById("terminal-output");
const input = document.getElementById("commandInput");

// Helper function to print text with optional class for color
function print(text, className = "") {
    const line = document.createElement("div");
    line.textContent = text;
    if (className) line.classList.add(className);
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
}

// Commands Data
const commands = {
    help: `
Available commands:
  whoami     - User introduction
  skills     - Technical capabilities
  projects   - GitHub repositories
  socials    - Connect links
  contact    - Communication channels
  clear      - Clear terminal output
`,

    whoami: `
User: Manish
Role: Developer / Security Researcher
Status: Online
------------------------------------
Passionate about cybersecurity, tool development, 
and exploring the depths of the web.
`,

    skills: `
[Languages]  Python, JavaScript, C, Bash
[Tools]      Git, Docker, BurpSuite, Metasploit
[Focus]      Automation, Web Security, OSINT
`,

    projects: `
- File_Validator (Flutter, Secure Hash)
- Encrypted_Messenger (FastAPI, React)
- TheListeningLibrary (Audiobook Platform)
- Check GitHub for more...
`,

    socials: `
GitHub:    https://github.com/TheManishCode
Instagram: @your_handle
Telegram:  @your_handle
`,

    contact: `
Email: themanishcode@gmail.com
`,
};

// Handle Input
input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        const cmd = input.value.trim().toLowerCase();
        
        // Print the command line like: > help
        const cmdLine = document.createElement("div");
        cmdLine.innerHTML = `<span class="prompt">></span> ${cmd}`;
        output.appendChild(cmdLine);

        if (cmd === "clear") {
            output.innerHTML = "";
        }
        else if (commands[cmd]) {
            print(commands[cmd]);
        } 
        else if (cmd !== "") {
            print(`Command '${cmd}' not found. Type 'help' for list.`, "error");
        }

        input.value = "";
        output.scrollTop = output.scrollHeight;
    }
});

// Startup Sequence
window.onload = async function() {
    input.disabled = true; // Disable input during startup
    
    print("Connecting to Manish Mainframe...", "highlight");
    await new Promise(r => setTimeout(r, 800));
    
    print("Connection established. Bypassing security protocols...", "highlight");
    await new Promise(r => setTimeout(r, 1000));
    
    print("Authentication successful. Welcome, GUEST.", "success");
    print("--------------------------------------------------");
    print("Type 'help' to see a list of available commands.");
    
    input.disabled = false;
    input.focus();
};
