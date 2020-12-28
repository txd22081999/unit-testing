const triangleClassify = (a, b, c) => {
  //   const { a, b, c } = triangle;
  console.log(a, b, c);
  let result = '';

  if (a < b + c && b < a + c && c < a + b) {
    if (
      a * a == b * b + c * c ||
      b * b == a * a + c * c ||
      c * c == a * a + b * b
    ) {
      result = 'Tam giac vuong';
    } else if (a == b && b == c) {
      result = 'Tam giac deu';
    } else if (a == b || a == c || b == c) {
      result = 'Tam giac can';
    } else if (
      a * a > b * b + c * c ||
      b * b > a * a + c * c ||
      c * c > a * a + b * b
    ) {
      result = 'Tam giac tu';
    } else {
      result = 'Tam giac nhon';
    }
  } else {
    result = 'Khong phai tam giac';
  }

  return result;
};

module.exports = { triangleClassify };
