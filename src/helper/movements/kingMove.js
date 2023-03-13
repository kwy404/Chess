const king = ({ boardPeaces, myPeaces, x, y, newHints, objectHint }) => {
  // Check all 8 squares around the king
  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      if (dx === 0 && dy === 0) continue; // Skip the current square
      const cy = y + dy;
      const cx = x + dx;
      if (cy < 1 || cy > 8 || cx < 1 || cx > 8) continue; // Out of bounds
      const targetPiece = boardPeaces[cy - 1][cx - 1];
      if (!myPeaces.includes(targetPiece)) {
        newHints.push(objectHint(cy, cx, targetPiece !== 0));
      }
    }
  }
};

export default king;
