const translations = {
    'english': 'Hello',
    'spanish': 'Hola',
    'french': 'Bonjour',
    'german': 'Hallo',
    'italian': 'Ciao',
    'japanese': 'こんにちは',
    'korean': '안녕하세요',
    'chinese': '你好',
    'russian': 'Привет',
    'arabic': 'مرحبًا',
};

let currentLanguage = 'english';

function changeLanguage() {
    const helloContainer = document.getElementById('helloContainer');
    const magicText = document.getElementById('magicText');
    const helloText = document.getElementById('helloText');

    const languageKeys = Object.keys(translations);
    const currentIndex = languageKeys.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % languageKeys.length;

    currentLanguage = languageKeys[nextIndex];
    helloText.innerHTML = `<p>${translations[currentLanguage]}</p>`;

    // Display "Click anywhere for magic" text only on the first click
    if (currentIndex === -1) {
        magicText.style.display = 'none';
    }
}
