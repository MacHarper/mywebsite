const translations = {
    'english': 'Hello',
    'spanish': 'Hola',
    'french': 'Bonjour',
    'german': 'Hallo',
    // Add more languages as needed
    'italian': 'Ciao',
    'japanese': 'こんにちは',
    'korean': '안녕하세요',
    // ... 37 more languages
};

let currentLanguage = 'english';

function changeLanguage() {
    const helloText = document.getElementById('helloText');

    const languageKeys = Object.keys(translations);
    const currentIndex = languageKeys.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % languageKeys.length;

    currentLanguage = languageKeys[nextIndex];
    helloText.innerHTML = `<p>${translations[currentLanguage]}</p>`;
}
