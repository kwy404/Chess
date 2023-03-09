import cavalo from "./cavaloMove";
import peao from "./peaoMove";
import rook from "./rookMove";
import queen from "./queen";
import bishop from "./bishop";
import king from "./king";

const objectHint = (newY, newX, canKill) => {
  return { x: newX, y: newY, canKill: canKill };
};

const calculateHints = ({ boardPeaces, myPeaces, setHints, x, y }) => {
  const newHints = [];

  const peacesMap = {
    1: () => {peao({ boardPeaces, myPeaces, setHints, x, y, newHints, objectHint })},
    2: () => rook({ boardPeaces, myPeaces, setHints, x, y, newHints, objectHint }),
    3: () => cavalo({ boardPeaces, myPeaces, setHints, x, y, newHints, objectHint }),
    4: () => bishop({ boardPeaces, myPeaces, setHints, x, y, newHints, objectHint }),
    5: () => queen({ boardPeaces, myPeaces, setHints, x, y, newHints, objectHint }),
    6: () => king({ boardPeaces, myPeaces, setHints, x, y, newHints, objectHint }),
    7: () => peao({ boardPeaces, myPeaces, setHints, x, y, newHints, objectHint }),
  };

  const pieceValue = boardPeaces[y - 1][x - 1];
  const pieceFunc = peacesMap[pieceValue];
  if (pieceFunc) {
    pieceFunc();
  }

  setHints(newHints);
};

export default calculateHints;
