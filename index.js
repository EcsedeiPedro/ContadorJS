let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

CURRENT_NUMBER.style.color = 'red';

const buttonSub = document.getElementById('sub');

buttonSub.setAttribute('disabled', '');

const buttonAdd = document.getElementById('add');

function increment() {
    count++;
    CURRENT_NUMBER.innerHTML = count;
    if (count == 10) {
        buttonAdd.setAttribute('disabled', '');
        CURRENT_NUMBER.style.color = 'green';
    } else {
        buttonAdd.removeAttribute('disabled');
        buttonSub.removeAttribute('disabled');
        CURRENT_NUMBER.style.color = 'black';
    }
}

function decrement() {
    count--;
    CURRENT_NUMBER.innerHTML = count;
    if (count == 0) {
        CURRENT_NUMBER.style.color = 'red';
        buttonSub.setAttribute('disabled', '');
    } else {
        buttonSub.removeAttribute('disabled');
        buttonAdd.removeAttribute('disabled');
        CURRENT_NUMBER.style.color = 'black';
    }
}