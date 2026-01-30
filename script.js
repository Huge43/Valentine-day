const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const mainImage = document.getElementById('valentine-img');
const questionText = document.querySelector('p');

let fontSize = 16;

// Liste des messages qui défileront
const messages = [
    "Tu es sûre ?",
    "Vraiment sûre ?",
    "Réfléchis bien",
    "Réfléchis encore",
    "Si tu dis non, je vais être triste",
    "Très très triste",
    "Bon, j'arrête de demander",
    "Je rigole, DIS OUI !",
    "DIS OUI"
];

let messageIndex = 0;

// Logique pour le bouton NON
noButton.addEventListener('click', () => {
    // 1. Agrandissement du bouton OUI
    fontSize += 15;
    yesButton.style.fontSize = fontSize + 'px';
    yesButton.style.padding = (fontSize / 2) + 'px ' + fontSize + 'px';

    // 2. Changement du texte de la question
    // On passe au message suivant dans la liste
    questionText.innerText = messages[messageIndex];
    
    // On augmente l'index pour le prochain clic, 
    // et on reste sur le dernier message si on arrive à la fin de la liste
    if (messageIndex < messages.length - 1) {
        messageIndex++;
    }
});

// Logique pour le bouton OUI
yesButton.addEventListener('click', () => {
    mainImage.src = "Happy Sir Alex GIF by Manchester United.gif"; // Ton image de réussite
    questionText.innerText = "Yéééé je savais que tu dirais oui! ❤️";
    
    yesButton.style.display = "none";
    noButton.style.display = "none";
});