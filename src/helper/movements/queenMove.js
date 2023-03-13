const queen = ({boardPeaces, myPeaces, x, y, newHints, objectHint}) => {
    // Bishop-like moves
    // Top-left
    for(let upX = x - 2, upY = y - 2; upX >= 0 && upY >= 0; upX--, upY--){
      if(myPeaces.some((e => e === boardPeaces[upY][upX]))){
        break;
      }
      newHints.push(objectHint(upY + 1, upX + 1, false));
      if(boardPeaces[upY][upX] !== 0){
        break;
      }
    }
    // Top-right
    for(let upX = x, upY = y - 2; upX < 8 && upY >= 0; upX++, upY--){
      if(myPeaces.some((e => e === boardPeaces[upY][upX]))){
        break;
      }
      newHints.push(objectHint(upY + 1, upX + 1, false));
      if(boardPeaces[upY][upX] !== 0){
        break;
      }
    }
    // Bottom-left
    for(let downX = x - 2, downY = y; downX >= 0 && downY < 8; downX--, downY++){
      if(myPeaces.some((e => e === boardPeaces[downY][downX]))){
        break;
      }
      newHints.push(objectHint(downY + 1, downX + 1, false));
      if(boardPeaces[downY][downX] !== 0){
        break;
      }
    }
    // Bottom-right
    for(let downX = x, downY = y; downX < 8 && downY < 8; downX++, downY++){
      if(myPeaces.some((e => e === boardPeaces[downY][downX]))){
        break;
      }
      newHints.push(objectHint(downY + 1, downX + 1, false));
      if(boardPeaces[downY][downX] !== 0){
        break;
      }
    }
    //Rook moves
    //Top - bottom
    for(let upY = y - 2; upY >= 0; upY--){
        if(myPeaces.some((e => e === boardPeaces[upY][x - 1]))){
            break;
        }
        newHints.push(objectHint(upY + 1, x, false))
        if(boardPeaces[upY][x - 1] !== 0){
            break;
        }
    }
    for(let downY = y; downY < 8; downY++){
        if(myPeaces.some((e => e === boardPeaces[downY][x - 1]))){
            break;
        }
        newHints.push(objectHint(downY + 1, x, false))
        if(boardPeaces[downY][x - 1] !== 0){
            break;
        }
    }
    //Left - right
    for(let leftX = x - 2; leftX >= 0; leftX--){
        if(myPeaces.some((e => e === boardPeaces[y - 1][leftX]))){
            break;
        }
        newHints.push(objectHint(y, leftX + 1, false))
        if(boardPeaces[y - 1][leftX] !== 0){
            break;
        }
    }
    for(let rightX = x; rightX < 8; rightX++){
        if(myPeaces.some((e => e === boardPeaces[y - 1][rightX]))){
            break;
        }
        newHints.push(objectHint(y, rightX + 1, false))
        if(boardPeaces[y - 1][rightX] !== 0){
            break;
        }
    }
  }
  
  export default queen;
  