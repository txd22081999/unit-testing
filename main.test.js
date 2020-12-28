const Triangle = require('./Triangle');
const Point = require('./Point');

// const a = [2, -2];
// const b = [-2, -1];
// const c = [1, 2];

// const a = [2, Math.sqrt(5)];
// const b = [Math.sqrt(7), 3];
// const c = [4, 3];

// const a = [4, 3];
// const b = [Math.sqrt(7), 3];
// const c = [Math.sqrt(20), Math.sqrt(5)];

const a = [0, 0];
const b = [0, 0];
const c = [0, 1];

const TRIANGLE_TYPE = {
  KHONG_PHAI_TAM_GIAC: 'Khong phai tam giac',
  TAM_GIAC_CAN: 'Tam giac can',
  TAM_GIAC_VUONG: 'Tam giac vuong',
  TAM_GIAC_DEU: 'Tam giac deu',
  TAM_GIAC_NHON: 'Tam giac nhon',
  TAM_GIAC_TU: 'Tam giac tu'
};

const {
  KHONG_PHAI_TAM_GIAC,
  TAM_GIAC_CAN,
  TAM_GIAC_DEU,
  TAM_GIAC_NHON,
  TAM_GIAC_VUONG,
  TAM_GIAC_TU
} = TRIANGLE_TYPE;

// describe('Test chức năng tính khoảng cách giữa 2 điểm', () => {
//   test('Khoảng cách giữa A(1,2) và B(5,3) bằng sqrt(17)', () => {
//     const pointA = new Point(1, 2);
//     const pointB = new Point(5, 3);
//     const distance = Point.getDistance(pointA, pointB);
//     console.log(distance);
//     expect(distance).toBe(Math.sqrt(17));
//   });
// });

// describe('Test chức năng tính khoảng cách giữa 2 điểm', () => {
//   test('Khoảng cách giữa A(4,-2) và B(-1,2) bằng sqrt(41)', () => {
//     const pointA = new Point(4, -2);
//     const pointB = new Point(-1, 2);
//     const distance = Point.getDistance(pointA, pointB);
//     console.log(distance);
//     expect(distance).toBe(Math.sqrt(41));
//   });
// });

// describe('Test chức năng tính khoảng cách giữa 2 điểm', () => {
//   test('Khoảng cách giữa A(45617,54561) và B(47813,75647) bằng sqrt(449441812)', () => {
//     const pointA = new Point(45617, 54561);
//     const pointB = new Point(47813, 75647);
//     const distance = Point.getDistance(pointA, pointB);
//     console.log(distance);
//     expect(distance).toBe(Math.sqrt(449441812));
//   });
// });

// describe('Test chức năng tính khoảng cách giữa 2 điểm (Class Point)', () => {
//   test('Khoảng cách giữa A(4.5,9.2) và B(1.3,6.1) bằng 4.45533', () => {
//     const pointA = new Point(4.5, 9.2);
//     const pointB = new Point(1.3, 6.1);
//     const distance = Point.getDistance(pointA, pointB);
//     console.log(distance);
//     expect(distance).toBe(Math.sqrt(19.85));
//   });
// });

// -----------------------------------
// describe('Test chức năng phân loại tam giác (Class Triangle)', () => {
//   test('Tam giác cân với A(2,-2) B(-2,-1) C(1,2)', () => {
//     const pointA = [2, -2];
//     const pointB = [-2, -1];
//     const pointC = [1, 2];

//     const triangle = new Triangle([pointA, pointB, pointC]);
//     const type = Triangle.getType(triangle);
//     console.log(type);
//     expect(type).toBe(TAM_GIAC_CAN);
//   });

//   test('Không phải tam giác với A(2,-2) B(-2,-1) C(1,2)', () => {
//     const pointA = [2, Math.sqrt(5)];
//     const pointB = [Math.sqrt(7), 3];
//     const pointC = [4, 3];

//     const triangle = new Triangle([pointA, pointB, pointC]);
//     const type = Triangle.getType(triangle);
//     console.log(type);
//     expect(type).toBe(TAM_GIAC_TU);
//   });

//   test('Không phải tam giác với A(4, 3) B(sqrt(7), 3) C(20, 5)', () => {
//     const pointA = [4, 3];
//     const pointB = [Math.sqrt(7), 3];
//     const pointC = [20, 5];
//     const triangle = new Triangle([pointA, pointB, pointC]);
//     const type = Triangle.getType(triangle);

//     expect(type).toBe(TAM_GIAC_TU);
//   });

//   test('Tam giác vuông với A(-2, 3) B(5, 2) C(-1, 0)', () => {
//     const pointA = [-2, 3];
//     const pointB = [5, 2];
//     const pointC = [-1, 0];
//     const triangle = new Triangle([pointA, pointB, pointC]);
//     const type = Triangle.getType(triangle);

//     expect(type).toBe(TAM_GIAC_VUONG);
//   });

//   test('Tam giác cân với A(2, 3*sqrt(7)) B(1, 0) C(3, 0)', () => {
//     const pointA = [2, 3 * Math.sqrt(7)];
//     const pointB = [1, 0];
//     const pointC = [3, 0];
//     const triangle = new Triangle([pointA, pointB, pointC]);
//     const type = Triangle.getType(triangle);

//     expect(type).toBe(TAM_GIAC_CAN);
//   });

//   test('Tam giác đều với A(sqrt(3), 4 + sqrt(3)) B(3, 1) C(-sqrt(3), 4 - sqrt(3))', () => {
//     const pointA = [Math.sqrt(3), 4 + Math.sqrt(3)];
//     const pointB = [3, 1];
//     const pointC = [-Math.sqrt(3), 4 - Math.sqrt(3)];
//     const triangle = new Triangle([pointA, pointB, pointC]);
//     const type = Triangle.getType(triangle);

//     expect(type).toBe(TAM_GIAC_DEU);
//   });
// });

describe('Test chức năng phân loại tính chu vi tam giác (Class Triangle)', () => {
  test('Chu vi bằng 12.488851938354607 với A(2,-2) B(-2,-1) C(1,2)', () => {
    const pointA = [2, -2];
    const pointB = [-2, -1];
    const pointC = [1, 2];

    const triangle = new Triangle([pointA, pointB, pointC]);
    const perimeter = Triangle.getPerimeter(triangle);
    expect(perimeter).toBe(12.488851938354607);
  });

  test('Chu vi bằng 27.458947335248844 với A(5, 2) B(3,8) C(-1, -4)', () => {
    const pointA = [5, 2];
    const pointB = [3, 8];
    const pointC = [-1, -4];

    const triangle = new Triangle([pointA, pointB, pointC]);
    const perimeter = Triangle.getPerimeter(triangle);
    expect(perimeter).toBe(27.458947335248844);
  });
});
