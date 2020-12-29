const Point = require('./Point');
const { triangleClassify } = require('./utils');

class Triangle {
  constructor(coords) {
    this.points = [...coords.map((coord) => new Point(coord[0], coord[1]))];
  }

  static getType = (triangle) => {
    const pointA = triangle.points[0];
    const pointB = triangle.points[1];
    const pointC = triangle.points[2];

    const AB = Point.getDistance(pointA, pointB);
    const BC = Point.getDistance(pointB, pointC);
    const CA = Point.getDistance(pointA, pointC);

    return triangleClassify(AB, BC, CA);
  };

  static getPerimeter = (triangle) => {
    const pointA = triangle.points[0];
    const pointB = triangle.points[1];
    const pointC = triangle.points[2];

    const AB = Point.getDistance(pointA, pointB);
    const BC = Point.getDistance(pointB, pointC);
    const CA = Point.getDistance(pointA, pointC);

    return AB + BC + CA;
  };
}

module.exports = Triangle;
