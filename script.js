document.getElementById('changeColorBtn').addEventListener('click', function () {
    var textToChange = document.getElementById('textToChange');
    var currentColor = textToChange.style.color;

    if (currentColor === 'black') {
        textToChange.style.color = 'red';
    } else {
        textToChange.style.color = 'black';
    }
});
