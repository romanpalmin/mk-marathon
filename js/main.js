(()=>{
    // --------------------------- TASK #0 --------------------------- //
    console.log('Task #0');

    const player1 = {
        name: 'Scorpion',
        hp: 100,
        img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
        weapon: ['Knife', 'gun'],
        attack: function(){
            console.log(`${this.name} fight`);
        }
    }

    const player2 = {
        name: 'Sub-Zero',
        hp: 100,
        img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
        weapon: ['ice', 'spear'],
        attack: function(){
            console.log(`${this.name} fight`);
        }
    }

    // --------------------------- TASK #1 --------------------------- //
    console.log('Task #1');

    function createPlayer_1(playerClass, playerName, playerHp){
        const $arena = document.querySelector('.arenas')
        const $divPlayer = document.createElement('div');
        const $divProgressBar = document.createElement('div');
        const $divLife = document.createElement('div');
        const $divName = document.createElement('div');
        const $divCharacter = document.createElement('div');
        const $imgCharacter = document.createElement('img');

        $divPlayer.className = playerClass;
        $divProgressBar.className = 'progressbar';
        $divLife.className = 'life';
        $divLife.style.width = '100%';
        $divName.className = 'name';
        $divCharacter.className = 'character';
        $imgCharacter.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
        $divName.innerHTML = playerName;

        $divPlayer.appendChild($divProgressBar);
        $divPlayer.appendChild($divCharacter);

        $divProgressBar.appendChild($divLife);
        $divProgressBar.appendChild($divName);
        $divCharacter.appendChild($imgCharacter);

        $arena.appendChild($divPlayer);
    }

    // --------------------------- TASK #2 --------------------------- //
    console.log('Task #2');

    /**
     * Закомментировано в связи с реализацией метода createPlayer,
     * принимающего объект
     */
    //createPlayer_1('player1', 'SCORPION', 50);
    //createPlayer_1('player2', 'SUB-ZERO', 80);

    // --------------------------- TASK #3* -------------------------- //
    console.log('Task #3*');
    function createPlayer(playerClass, player){
        const $arena = document.querySelector('.arenas')
        const $divPlayer = document.createElement('div');
        const $divProgressBar = document.createElement('div');
        const $divLife = document.createElement('div');
        const $divName = document.createElement('div');
        const $divCharacter = document.createElement('div');
        const $imgCharacter = document.createElement('img');

        $divPlayer.className = playerClass;
        $divProgressBar.className = 'progressbar';
        $divLife.className = 'life';
        $divLife.style.width = '100%';
        $divName.className = 'name';
        $divCharacter.className = 'character';
        $imgCharacter.src = player.img;
        $divName.innerHTML = player.name;

        $divPlayer.appendChild($divProgressBar);
        $divPlayer.appendChild($divCharacter);

        $divProgressBar.appendChild($divLife);
        $divProgressBar.appendChild($divName);
        $divCharacter.appendChild($imgCharacter);

        $arena.appendChild($divPlayer);
    }
    createPlayer('player1', player1);
    createPlayer('player2', player2);

    //  todo оставить только один из вариантов
})();