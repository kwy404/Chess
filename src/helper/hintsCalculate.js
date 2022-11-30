import cavalo from "./cavaloMove";
import peao from "./peaoMove";

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
        cavalo({boardPeaces, myPeaces, setHints, x, y, newHints, objectHint})
    } catch (error) {}
    setHints(newHints);
  };

export default calculateHints;