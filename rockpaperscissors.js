var rockPaperScissors = function(player1throw, player2throw) {
    if (player1throw === player2throw) {
        return 'Draw';
    } else if (player1throw === 'Paper') {
        if (player2throw === 'Scissors') {
            return 'Player 2 wins!'
        } else {
         return 'Player 1 wins!';
        }
    } else if (player1throw === 'Scissors') {
        if (player2throw === 'Rock'){
            return 'Player 2 wins!';
        } else {
            return 'Player 1 wins!';
        } 
    } else if (player1throw === 'Rock') {
        if (player2throw === 'Paper'){
            return 'Player 2 wins!';
        } else {
            return 'Player 1 wins!';
        }
    }
};

console.log(rockPaperScissors('Rock', 'Scissors'));