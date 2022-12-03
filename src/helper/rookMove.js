const rook = ({boardPeaces, myPeaces, x, y, newHints, objectHint}) => {
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
    console.log(newHints)
}

export default rook;