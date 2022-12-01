import cavalo from "./cavaloMove";
import peao from "./peaoMove";
import rook from "./rookMove";

const objectHint = (newY, newX, canKill) => {
    return { x: newX, y: newY, canKill: canKill };
};

const calculateHints = ({boardPeaces, myPeaces, setHints, x, y}) => {
    const newHints = [];
    //Peao
    try {
        peao({boardPeaces, myPeaces, setHints, x, y, newHints, objectHint})
    } catch (error) {}
    //Cavalo
    try {
        if (boardPeaces[y - 1][x - 1] === 3) {
            cavalo({boardPeaces, myPeaces, setHints, x, y, newHints, objectHint})
        }
    } catch (error) {}
    try {
        if (boardPeaces[y - 1][x - 1] === 2) {
            rook({boardPeaces, myPeaces, setHints, x, y, newHints, objectHint})
        }
    } catch (error) {}
    setHints(newHints);
  };

export default calculateHints;