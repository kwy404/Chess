const peao = ({boardPeaces, myPeaces, x, y, newHints, objectHint}) => {
    if (boardPeaces[y - 1][x - 1] === 1) {
        if (
          boardPeaces[y - 2][x - 2] !== 0 &&
          !myPeaces.find((e) => e === boardPeaces[y - 2][x - 2])
        ) {
          if (x > 1) {
            newHints.push(objectHint(y - 1, x - 1, true));
          }
        }
        if (
          boardPeaces[y - 2][x] !== 0 &&
          !myPeaces.find((e) => e === boardPeaces[y - 2][x])
        ) {
          if (x < 8) {
            newHints.push(objectHint(y - 1, x + 1, true));
          }
        }
        //Primeira casa
        if (y === 7) {
          //Caso tenha alguma peça a frente
          if (boardPeaces[y - 2][x - 1] === 0) {
            newHints.push(objectHint(y - 1, x, false));
            if (boardPeaces[y - 3][x - 1] === 0) {
              newHints.push(objectHint(y - 2, x, false));
            }
          }
        } else {
          if (boardPeaces[y - 2][x - 1] === 0) {
            newHints.push(objectHint(y - 1, x, false));
          }
        }
      }
}

export default peao;