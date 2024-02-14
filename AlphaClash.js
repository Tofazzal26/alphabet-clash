






function handleKeyboardPressButton(event) {
    const playerPress = event.key;
    const expectedValue = document.getElementById('currentAlphabet');
    const expected = expectedValue.innerText;
    const expectedElement = expected.toLowerCase();
    console.log("expected",expectedElement);
    console.log("player press", playerPress);

    if( playerPress === expectedElement) {
        console.log('you win a point');
        removeBackgroundColor(expectedElement);
        continueGame();
    }else {
        console.log('you lose a point...');
    }

}
document.addEventListener('keyup', handleKeyboardPressButton)


function continueGame() {
   const alphabet = getArandomAlphabet()
   const currentAlphabetShow = document.getElementById('currentAlphabet');
   currentAlphabetShow.innerText = alphabet;

   setBackgroundColor(alphabet);

}

function play() {
    hideElementId('home-screen');
    showElementId('play-screen');
    continueGame();
}

