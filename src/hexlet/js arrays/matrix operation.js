/* src: https://stackoverflow.com/a/61523756/12620868 */

let MatrixProd = (A, B) =>
  A.map((row, i) =>
    B[0].map((_, j) =>
      row.reduce((acc, _, n) =>
        acc + A[i][n] * B[n][j], 0
      ),
    ),
  );

export default (m1, m2) => m1.map(
  (m1Row, m1RowIndex) => m2[0].map(
    (m2Col, m2ColIndex) => m1Row.reduce(
      (acc, m1Col, m1ColIndex) => acc + m1[m1RowIndex][m1ColIndex] * m2[m1ColIndex][m2ColIndex],
      0,
    ),
  ),
);

const m1 = [[1, 2], [3, 2]];
const m2 = [[3, 2], [1, 1]];

const m11 = [
  [2, 5],
  [6, 7],
  [1, 8],
];
const m22 = [
  [1, 2, 1],
  [0, 1, 0],
];

const m222 = [
  [ 1, 0 ],
  [ 2, 1 ],
  [ 1, 0 ],
];

console.log(MatrixProd(m1, m2));
console.log(MatrixProd(m11, m22));
