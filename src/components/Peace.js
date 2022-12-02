import calculateHints from '../helper/hintsCalculate';
import promovate from '../helper/promovate';


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
  myPeaces,
  moves,
  setMoves,
  gameStart,
  promovateAudio,
  hightLightRed,
  setHightlightRed,
  dragStop,
  setDragStop
}) {
  const movePeace = () => {
    const oldBoardPeace = [...boardPeaces];
    const foundPosition = hints.find((e) => e.x === x && e.y === y);
    if (foundPosition) {
      const focusPeace = peaceFocus.split(":");
      oldBoardPeace[y - 1][x - 1] = oldBoardPeace[focusPeace[1] - 1][focusPeace[0] - 1];
      oldBoardPeace[focusPeace[1] - 1][focusPeace[0] - 1] = 0;
      setBoardPeaces(oldBoardPeace);
      setPeaceFocus(null);
      setHints([]);
      setMoves(moves + 1)
      if(moves === 0){
        gameStart.play()
      } else{
        moveSelf.play();
      }
    }
  };

  const killPeace = () => {
    try {
      const oldBoardPeace = [...boardPeaces];
      const foundPosition = hints.find((e) => e.x === x && e.y === y);
      const focusPeace = peaceFocus.split(":");
      if (foundPosition) {
        if (!myPeaces.find((e) => e === oldBoardPeace[y - 1][x - 1]) && oldBoardPeace[y - 1][x - 1] !== 12) {
          oldBoardPeace[y - 1][x - 1] = oldBoardPeace[focusPeace[1] - 1][focusPeace[0] - 1];
          oldBoardPeace[focusPeace[1] - 1][focusPeace[0] - 1] = 0;
          setBoardPeaces(oldBoardPeace);
          setPeaceFocus(null);
          setHints([]);
          setMoves(moves + 1)
          promovate({boardPeaces, myPeaces, x, y, p, setBoardPeaces, promovateAudio})
          if(moves === 0){
            gameStart.play()
          } else{
            capture.play()
          }
        }
      }
    } catch (error) {
      
    }
  };

  const auxClickHighlight = () => {
    const oldHightLightRed = [...hightLightRed]
    const found = oldHightLightRed.find(e => e.x === x && e.y === y)
    if(found){
      const index = oldHightLightRed.indexOf(found)
      oldHightLightRed.splice(index, 1)
    } else{
      oldHightLightRed.push({x: x, y: y})
    }
    setHightlightRed(oldHightLightRed)
  }

  return (
    <div>
      {!blank ? (
        <div
          onClick={() => {
            setHightlightRed([])
            setHints([]);
            setPeaceFocus(`${x}:${y}`);
            calculateHints({boardPeaces, myPeaces, setHints, x, y});
            killPeace();
          }}
          onDragStart={() => {
            setHightlightRed([])
            setHints([]);
            setPeaceFocus(`${x}:${y}`);
            calculateHints({boardPeaces, myPeaces, setHints, x, y});
            setDragStop(false)
          }}
          onDragCapture={() => {
            setDragStop(true)
          }}
          onMouseOut={() => {
            if(dragStop){
              killPeace();
            }
          }}
          onAuxClick={(e) => {
            auxClickHighlight()
            e.preventDefault()
          }}
          draggable="true"
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
            setHightlightRed([])
            setHints([]);
            movePeace();
            promovate({boardPeaces, myPeaces, x, y, p, setBoardPeaces, promovateAudio})
          }}
          onMouseOut={() => {
            if(dragStop){
              movePeace();
              promovate({boardPeaces, myPeaces, x, y, p, setBoardPeaces, promovateAudio})
              setTimeout(() => {
                setDragStop(false)
              }, 50);
            }
          }}
          onAuxClick={(e) => {
            auxClickHighlight()
            e.preventDefault()
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
