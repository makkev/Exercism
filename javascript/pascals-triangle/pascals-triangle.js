export const rows = r => {
  let tri = [];
  if (r > 0) {
    let totalCols = 0;
    for (let i = 0; i < r; i++) {
      totalCols = i + 1;
      for (let j = 0; j < totalCols; j++) {
        if (j === 0) tri[i] = [1];
        else if (j === totalCols - 1) tri[i].push(1);
        else tri[i].push(tri[i-1][j] + tri[i-1][j-1]);
      }
    }
  }
  return tri;
};
