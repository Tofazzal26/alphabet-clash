

const audio = new Audio();

let isGamePlay = false;

let artBoard = document.getElementById('art-board');




function handleKeyboardPressButton(event) {

    if ( isGamePlay == false) return;

    const playerPress = event.key;
    const expectedValue = document.getElementById('currentAlphabet');
    const expected = expectedValue.innerText;
    const expectedElement = expected.toLowerCase();



    if( playerPress === 'Escape') {
        gameOver();
    }

    if( playerPress === expectedElement) {

        audio.src = "./Audio/Correct.mp3"
        audio.play();
        
        const scoreElement = scoreBoardElementId('current-score');
        const updateScore = scoreElement + 1;
        setUpdatedValue('current-score', updateScore);


        removeBackgroundColor(expectedElement);
        continueGame();
    }else {

        

        audio.src = "./Audio/Wrong.mp3";
        audio.play();
        
        const lifeElement = scoreBoardElementId('current-life');
        const updateLife = lifeElement - 1;

        
        const updatedLifePercentage = (updateLife / 5) * 100;
        artBoard.style.background = `linear-gradient(#FFFFFFB3 ${updatedLifePercentage}%,red)`;

        
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

    isGamePlay = true;

    continueGame();
}

function gameOver(){
    isGamePlay = false;
    hideElementId('play-screen');
    showElementId('gameOver');
    const lastScore = scoreBoardElementId('current-score'); 
    setUpdatedValue('last-score', lastScore);
    const alphabetElement = getTextElementId('currentAlphabet');
    removeBackgroundColor(alphabetElement);
    artBoard.style.background = `linear-gradient(#FFFFFFB3 100%,red)`;
}



