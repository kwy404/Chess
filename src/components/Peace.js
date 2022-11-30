function Peace({
  x,
  y,
  p,
  className,
  blank,
  boardPeaces,
  setBoardPeaces,
  setPeaceFocus,
  peaceFocus,
  setHints,
  hints,
  moveSelf,
  capture,
  ilegal,
  myPeaces
}) {
  const objectHint = (newY, newX, canKill) => {
    return { x: newX, y: newY, canKill: canKill };
  };

  const movePeace = () => {
    const oldBoardPeace = [...boardPeaces];
    const foundPosition = hints.find((e) => e.x === x && e.y === y);
    if (foundPosition) {
      const focusPeace = peaceFocus.split(":");
      oldBoardPeace[y - 1][x - 1] = oldBoardPeace[focusPeace[1] - 1][focusPeace[0] - 1];
      oldBoardPeace[focusPeace[1] - 1][focusPeace[0] - 1] = 0;
      setBoardPeaces(oldBoardPeace);
      setPeaceFocus(null);
      setHints([])
      moveSelf.play();
    }
  };

  const killPeace = () => {
    const oldBoardPeace = [...boardPeaces];
    const foundPosition = hints.find((e) => e.x === x && e.y === y);
    const focusPeace = peaceFocus.split(":");
    if (foundPosition) {
      if(!myPeaces.find(e => e === oldBoardPeace[y - 1][x - 1])){
        oldBoardPeace[y - 1][x - 1] = oldBoardPeace[focusPeace[1] - 1][focusPeace[0] - 1];
        oldBoardPeace[focusPeace[1] - 1][focusPeace[0] - 1] = 0;
        setBoardPeaces(oldBoardPeace);
        setPeaceFocus(null);
        setHints([])
        capture.play();
      }
    }
  }

  const calculateHints = () => {
    const newHints = [];
    //Peao
    if (boardPeaces[y - 1][x - 1] === 1) {
      //Primeira casa
      if(boardPeaces[y - 2][x - 2] !== 0 && !myPeaces.find(e => e === boardPeaces[y - 2][x - 2])){
        if(x > 1){
          newHints.push(objectHint(y - 1, x - 1, true))
        }
      } if(boardPeaces[y - 2][x] !== 0  && !myPeaces.find(e => e === boardPeaces[y - 2][x]) ){
        if(x < 8){
          newHints.push(objectHint(y - 1, x + 1, true))
        }
      }
      if (y === 7) {
        //Caso tenha alguma peça a frente
        if (boardPeaces[y - 2][x - 1] === 0) {
          newHints.push(objectHint(y - 1, x, false));
        }
        if (boardPeaces[y - 3][x - 1] === 0) {
          newHints.push(objectHint(y - 2, x, false));
        }
      } else{
        if (boardPeaces[y - 2][x - 1] === 0) {
          newHints.push(objectHint(y - 1, x, false));
        }
      }
    } //Cavalo
    setHints(newHints);
  };
  return (
    <div>
      {!blank ? (
        <div
          onClick={() => {
            setPeaceFocus(`${x}:${y}`);
            calculateHints();
            killPeace()
          }}
          style={{
            backgroundImage: `url('https://images.chesscomfiles.com/chess-themes/pieces/classic/150/${p}.png')`,
            transform: `translateX(calc(62.5px * ${
              x - 1
            })) translateY(calc(62.5px * ${y - 1}))`,
          }}
          className={className}
        />
      ) : (
        <div
          onClick={() => {
            movePeace();
          }}
          style={{
            transform: `translateX(calc(62.5px * ${
              x - 1
            })) translateY(calc(62.5px * ${y - 1}))`,
          }}
          className={`peace blank square-${x}${y}`}
        />
      )}
    </div>
  );
}

export default Peace;
