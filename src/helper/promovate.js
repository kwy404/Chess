const promovate = ({boardPeaces, x, y, p, setBoardPeaces, promovateAudio}) => {
    //auto promovate to queen
    if(y === 1){
        const oldBoardPeace = [...boardPeaces]
        oldBoardPeace[y - 1][x - 1] = 5
        setBoardPeaces(oldBoardPeace)
        promovateAudio.play()
    }
}

export default promovate;