class Polygon {
  constructor(array) {
    this.sides = array;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    let sides = this.sides;
    return this.sides.reduce((total, side) => (total += side), 0);
  }
}

class Triangle extends Polygon {
  calculateValid() {
    const side1 = this.sides[0];
    const side2 = this.sides[1];
    const side3 = this.sides[2];

    return (
      side1 < side2 + side3 && side2 < side1 + side3 && side3 < side1 + side2
    );
  }

  get isValid() {
    return this.countSides === 3 && this.calculateValid();
  }
}

class Square extends Polygon {
  get isValid() {
    const side1 = this.sides[0];
    const side2 = this.sides[1];
    const side3 = this.sides[2];
    const side4 = this.sides[3];
    return side1 === side2 && side1 === side3 && side1 === side4;
  }

  get area() {
    return this.sides[0] ** 2;
  }
}
