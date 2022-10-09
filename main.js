let playerName = '';// let var const
let level = '';

// start login form js
letsGetStarted = () => {
    let playerNameElement =
        document.getElementById('playerName');
    let levelElement =
        document.getElementById('level');
    setBorderColor(playerNameElement)

    // _nimal____ trim() =>> nimal
    let tempPlayerName = playerNameElement.value;
    if (tempPlayerName.trim() === '') { // trim rid spaces _abc_ => after trim()==> abc
        playerNameElement.style.borderColor = 'red';
        alert('please insert name and level to continue!');
        return;
    }

    playerName = tempPlayerName;
    level = levelElement.value;
    //====> redirect to gaming console==>
    window.location.href = "game.html";
    console.log(playerName)

}
setBorderColor = (element) => {
    element.style.borderColor = '';
}
// end login form js

// start game console js
setPlayerData = () => {
    document.getElementById('player-name')
        .innerHTML=playerName;
    document.getElementById('player-level')
        .innerHTML=level;
    console.log(playerName)
}
// end game console js
