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
    'portuguese': 'Olá',
    'dutch': 'Hallo',
    'swedish': 'Hej',
    'turkish': 'Merhaba',
    'greek': 'Χαίρετε',
    'hindi': 'नमस्ते',
    'hebrew': 'שלום',
    'thai': 'สวัสดี',
    'vietnamese': 'Chào bạn'
};

let currentLanguage = 'english';

function changeLanguage() {
    const magicText = document.getElementById('anywhereText');
    const helloText = document.getElementById('helloText');

    const languageKeys = Object.keys(translations);
    const currentIndex = languageKeys.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % languageKeys.length;

    currentLanguage = languageKeys[nextIndex];
    helloText.innerHTML = `<p>${translations[currentLanguage]}</p>`;

    // Display "Click anywhere for magic" text only with the English word "Hello"
    magicText.style.display = currentLanguage === 'english' ? 'block' : 'none';
}
