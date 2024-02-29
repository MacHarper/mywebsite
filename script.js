let language = 'english';

function changeLanguage() {
    const helloText = document.getElementById('helloText');

    if (language === 'english') {
        helloText.innerHTML = '<p>Hola</p>';
        language = 'spanish';
    } else {
        helloText.innerHTML = '<p>Hello</p>';
        language = 'english';
    }
}
