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
    const magicText = document.getElementById('magicText');
    const helloText = document.getElementById('helloText');

    const languageKeys = Object.keys(translations);
    const currentIndex = languageKeys.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % languageKeys.length;

    currentLanguage = languageKeys[nextIndex];
    helloText.innerHTML = `<p>${translations[currentLanguage]}</p>`;

    // Hide "Click anywhere for magic" text after the first click
    if (currentIndex === -1) {
        magicText.style.display = 'none';
    }
}
