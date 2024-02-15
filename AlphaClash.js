

function handleKeyboardPressButton(event) {
    const playerPress = event.key;
    const expectedValue = document.getElementById('currentAlphabet');
    const expected = expectedValue.innerText;
    const expectedElement = expected.toLowerCase();

    if( playerPress === 'Escape') {
        gameOver();
    }

    if( playerPress === expectedElement) {
        
        const scoreElement = scoreBoardElementId('current-score');
        const updateScore = scoreElement + 1;
        setUpdatedValue('current-score', updateScore);


        removeBackgroundColor(expectedElement);
        continueGame();
    }else {
        
        const lifeElement = scoreBoardElementId('current-life');
        const updateLife = lifeElement - 1;
        setUpdatedValue('current-life',updateLife);
        if( updateLife === 0) {
            gameOver();
        }
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
    hideElementId('gameOver');
    showElementId('play-screen');

    setUpdatedValue('current-life', 5);
    setUpdatedValue('current-score', 0);

    continueGame();
}

function gameOver(){
    hideElementId('play-screen');
    showElementId('gameOver');
    const lastScore = scoreBoardElementId('current-score'); 
    setUpdatedValue('last-score', lastScore);
    const alphabetElement = getTextElementId('currentAlphabet');
    removeBackgroundColor(alphabetElement);
}



