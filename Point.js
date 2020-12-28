class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static getDistance = (pointA, pointB) => {
    return Math.sqrt((pointB.x - pointA.x) ** 2 + (pointB.y - pointA.y) ** 2);
  };
}

module.exports = Point;
