

function hideElementId(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementId(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getArandomAlphabet() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabet.split('');
    
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    
    const alphabetNum = alphabets[index];
    return alphabetNum;
}


function setBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#ffa500]');
}

function removeBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#ffa500]');
}

