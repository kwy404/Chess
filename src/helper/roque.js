const castle = new Audio('https://images.chesscomfiles.com/chess-themes/sounds/_WEBM_/default/castle.webm')

const roque = ({ boardPeaces, fromX, fromY, toX, toY, setBoardPeaces }) => {
    const oldBoardPeace = [...boardPeaces];
    // Verificar se a jogada é um roque
    if (fromX == 4 && Math.abs(fromX - toX) == 2 && fromY == 8) {
        if(toX === 2 && boardPeaces[7][1] === 0 && boardPeaces[7][2] === 0){
            oldBoardPeace[7][2] = 6;
            oldBoardPeace[7][3] = 2;
            oldBoardPeace[7][0] = 0;
            castle.play()
        } else if(toX === 6 && boardPeaces[7][5] === 0 && boardPeaces[7][6] === 0){
            oldBoardPeace[7][7] = 0;
            oldBoardPeace[7][6] = 6;
            oldBoardPeace[7][5] = 2;
            oldBoardPeace[7][3] = 0;
            castle.play()
        }
        setBoardPeaces(oldBoardPeace);
      
    }
  };
  
  export default roque;
  