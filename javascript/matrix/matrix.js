export class Matrix {
  constructor(s) {
    this.matrixStr = s;
  }

  get rows() {
    return this.matrixStr.split('\n').map(r =>
      r.split(' ').map(s => parseInt(s))
    );
  }

  get columns() {
    return this.rows[0].map((n, i) =>
      this.rows.map(r => r[i])
    );
  }
}

