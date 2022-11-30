import calculateHints from '../helper/hintsCalculate';

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
}) {
  const movePeace = () => {
    const oldBoardPeace = [...boardPeaces];
    const foundPosition = hints.find((e) => e.x === x && e.y === y);
    if (foundPosition) {
      const focusPeace = peaceFocus.split(":");
      oldBoardPeace[y - 1][x - 1] =
        oldBoardPeace[focusPeace[1] - 1][focusPeace[0] - 1];
      oldBoardPeace[focusPeace[1] - 1][focusPeace[0] - 1] = 0;
      setBoardPeaces(oldBoardPeace);
      setPeaceFocus(null);
      setHints([]);
      moveSelf.play();
    }
  };

  const killPeace = () => {
    const oldBoardPeace = [...boardPeaces];
    const foundPosition = hints.find((e) => e.x === x && e.y === y);
    const focusPeace = peaceFocus.split(":");
    if (foundPosition) {
      if (!myPeaces.find((e) => e === oldBoardPeace[y - 1][x - 1])) {
        oldBoardPeace[y - 1][x - 1] =
          oldBoardPeace[focusPeace[1] - 1][focusPeace[0] - 1];
        oldBoardPeace[focusPeace[1] - 1][focusPeace[0] - 1] = 0;
        setBoardPeaces(oldBoardPeace);
        setPeaceFocus(null);
        setHints([]);
        capture.play();
      }
    }
  };

  return (
    <div>
      {!blank ? (
        <div
          onClick={() => {
            setHints([]);
            setPeaceFocus(`${x}:${y}`);
            calculateHints({boardPeaces, myPeaces, setHints, x, y});
            killPeace();
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
