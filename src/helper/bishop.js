const bishop = ({boardPeaces, myPeaces, x, y, newHints, objectHint}) => {
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
  }
  
  export default bishop;
  