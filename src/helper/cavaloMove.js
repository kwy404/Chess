const cavalo = ({boardPeaces, myPeaces, x, y, newHints, objectHint}) => {
    //Horse move
    newHints.push(objectHint(y + 2, x - 1, false))
    newHints.push(objectHint(y + 2, x + 1, false))
    newHints.push(objectHint(y - 2, x - 1, false))
    newHints.push(objectHint(y - 2, x + 1, false))
    newHints.push(objectHint(y - 1, x - 2, false))
    newHints.push(objectHint(y - 1, x + 2, false))
    newHints.push(objectHint(y + 1, x - 2, false))
    newHints.push(objectHint(y + 1, x + 2, false))
}

export default cavalo;