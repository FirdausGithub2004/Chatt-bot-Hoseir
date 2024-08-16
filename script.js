let step = 0;
let rem3, rem5, rem7;

document.addEventListener('DOMContentLoaded', (event) => {
    greet('Hoseir', '2024');
});

function checkEnter(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    if (message) {
        addMessageToChat('user', message);
        processUserMessage(message);
        userInput.value = '';
    }
}

function addMessageToChat(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender}`;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function greet(botName, birthYear) {
    addMessageToChat('bot', `Hallo! nama saya ${botName}.`);
    addMessageToChat('bot', `Saya dibuat pada ${birthYear}.`);
    remindName();
}

function remindName() {
    addMessageToChat('bot', 'Tolong, sebutkan nama anda tuan.');
}

function processUserMessage(message) {
    if (step === 0 && message.toLowerCase().includes('nama saya')) {
        const name = message.split(' ').slice(-1)[0];
        addMessageToChat('bot', `Sungguh, nama yang mengesankan tuan ${name}!`);
        guessAge();
    } else if (step === 1) {
        rem3 = parseInt(message);
        addMessageToChat('bot', 'Masukkan sisa pembagian umur anda dari 5.');
        step++;
    } else if (step === 2) {
        rem5 = parseInt(message);
        addMessageToChat('bot', 'Masukkan sisa pembagian umur anda dari 7.');
        step++;
    } else if (step === 3) {
        rem7 = parseInt(message);
        const age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;
        addMessageToChat('bot', `Umur anda adalah ${age}; itu adalah umur yang tepat untuk memulai belajar Programming tuan!
            
        Sekarang saya akan membuktikan bahwa saya bisa menebak angka apapun yang anda inginkan tuan.
                                                                                                                            `);
        step = 4; // Continue to next function
    } else if (step === 4) {
        count();
        
    } else if (step === 5) {
        step++;
        test();
    } else if (step === 6) {
        if (parseInt(message) === 2) {
            addMessageToChat('bot', 'Completed, Semoga harimu menyenangkan!');
            step = 0; // Reset step for next interaction
        } else {
            addMessageToChat('bot', 'Tolong, Coba kembali tuan.');
        }
    } else {
        addMessageToChat('bot', 'Saya tidak mengerti. Coba masukkan sesuatu yang lain.');
    }
}

function guessAge() {
    addMessageToChat('bot', 'Biarkan saya menebak umur anda tuan.');
    addMessageToChat('bot', 'Masukkan sisa pembagian umur anda dari 3.');
    step = 1;
}

function count() {
    
    const num = 10; // Example value
    for (let counter = 0; counter <= num; counter++) {
        setTimeout(() => {
            addMessageToChat('bot', `${counter} !`);
        }, counter * 500);
    }
    step = 5; // Move to next step after count is done
}

function test() {
    addMessageToChat('bot', 'Mari menguji pengetahuan Programming anda tuan.');
    addMessageToChat('bot', 'Kenapa kita menggunakan Metode?');
    addMessageToChat('bot', '1. To repeat a statement multiple times.');
    addMessageToChat('bot', '2. To decompose a program into several small subroutines.');
    addMessageToChat('bot', '3. To determine the execution time of a program.');
    addMessageToChat('bot', '4. To interrupt the execution of a program.');
    step = 6; // Set the step to 6 for checking user's answer in processUserMessage
}
