const output = document.getElementById("terminal-output");
const input = document.getElementById("commandInput");

// Helper function to print text with optional class for color
function print(text, className = "") {
    const line = document.createElement("div");
    line.className = className;
    line.textContent = text; 
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
}

// Data & Logic
const commands = {
    help: `
Available commands:
  whoami     - User introduction
  skills     - Technical capabilities
  projects   - GitHub repositories
  socials    - Connect links
  contact    - Communication channels
  ls         - List directory contents
  quote      - Display a random quote
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

    // LS Command: Mimics a Linux file listing
    ls: `
drwxr-xr-x  guest  guest  4096  Nov 25 12:00  .
drwxr-xr-x  root   root   4096  Nov 25 00:00  ..
-rwxr-xr-x  guest  guest   512  Nov 25 12:01  whoami
-rw-r--r--  guest  guest  1024  Nov 25 12:02  skills.md
-rw-r--r--  guest  guest  2048  Nov 25 12:03  projects.txt
-rw-r--r--  guest  guest   128  Nov 25 12:04  contact.info
-r--------  admin  admin    64  Nov 25 00:00  secret_key.pem
`,

    // Quote Command: Dynamic function
    quote: function() {
        const quotes = [
            "\"Talk is cheap. Show me the code.\" - Linus Torvalds",
            "\"Programs must be written for people to read, and only incidentally for machines to execute.\" - Abelson & Sussman",
            "\"Security is not a product, but a process.\" - Bruce Schneier",
            "\"The only truly secure system is one that is powered off, cast in a block of concrete and sealed in a lead-lined room with armed guards.\" - Gene Spafford",
            "\"Hacking is not about the illegal act, it's about the art of curiosity.\" - Anonymous",
            "\"It’s not a bug; it’s an undocumented feature.\"",
            "\"First, solve the problem. Then, write the code.\""
        ];
        return quotes[Math.floor(Math.random() * quotes.length)];
    }
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
            // Check if it's a dynamic function (like quote) or static text
            if (typeof commands[cmd] === "function") {
                print(commands[cmd]());
            } else {
                print(commands[cmd]);
            }
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
    input.disabled = true; 
    
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
