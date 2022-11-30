const cavalo = ({boardPeaces, myPeaces, x, y, newHints, objectHint}) => {
    if (boardPeaces[y - 1][x - 1] === 3) {
        try {
          //Can kill
          if (
            boardPeaces[y - 3][x - 1] !== 0 &&
            !myPeaces.find((e) => e === boardPeaces[y - 3][x - 2])
          ) {
            newHints.push(objectHint(y - 2, x - 1, true));
          } else {
            if (boardPeaces[y - 3][x - 2] === 0) {
              newHints.push(objectHint(y - 2, x - 1, false));
            }
          }
        } catch (error) {}
        try {
          //Can kill
          if (
            boardPeaces[y - 3][x] !== 0 &&
            !myPeaces.find((e) => e === boardPeaces[y - 3][x])
          ) {
            newHints.push(objectHint(y - 2, x + 1, true));
          } else {
            newHints.push(objectHint(y - 2, x + 1, false));
          }
        } catch (error) {}
        try {
          //Can kill
          if (
            boardPeaces[y - 2][x + 1] !== 0 &&
            !myPeaces.find((e) => e === boardPeaces[y - 2][x + 1])
          ) {
            newHints.push(objectHint(y - 1, x + 2, true));
          } else {
            newHints.push(objectHint(y - 1, x + 2, false));
          }
        } catch (error) {}
        try {
          //Can kill
          if (
            boardPeaces[y - 2][x - 1] !== 0 &&
            !myPeaces.find((e) => e === boardPeaces[y - 2][x - 1])
          ) {
            newHints.push(objectHint(y - 1, x - 2, true));
          } else {
            newHints.push(objectHint(y - 1, x - 2, false));
          }
        } catch (error) {}
        try {
          //Can kill
          if (
            boardPeaces[y - 1][x + 1] !== 0 &&
            !myPeaces.find((e) => e === boardPeaces[y - 1][x + 1])
          ) {
            newHints.push(objectHint(y + 1, x + 2, true));
          } else {
            newHints.push(objectHint(y + 1, x + 2, false));
          }
        } catch (error) {}
        try {
          //Can kill
          if (
            boardPeaces[y - 2][x + 1] !== 0 &&
            !myPeaces.find((e) => e === boardPeaces[y - 2][x + 1])
          ) {
            newHints.push(objectHint(y + 2, x + 1, true));
          } else {
            newHints.push(objectHint(y + 2, x + 1, false));
          }
        } catch (error) {}
        try {
          //Can kill
          if (
            boardPeaces[y - 2][x - 1] !== 0 &&
            !myPeaces.find((e) => e === boardPeaces[y - 2][x - 1])
          ) {
            newHints.push(objectHint(y + 2, x - 1, true));
          } else {
            newHints.push(objectHint(y + 2, x - 1, false));
          }
        } catch (error) {}
        try {
          //Can kill
          if (
            boardPeaces[y - 1][x - 1] !== 0 &&
            !myPeaces.find((e) => e === boardPeaces[y - 1][x - 1])
          ) {
            newHints.push(objectHint(y + 1, x - 2, true));
          } else {
            newHints.push(objectHint(y + 1, x - 2, false));
          }
        } catch (error) {}
      }
}

export default cavalo;