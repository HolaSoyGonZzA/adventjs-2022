function createCube(size) {
  let top = [];
  let bottom = [];
  let triangle = '/\\'
  let bottomTriangle = '\\/'
  let slash = '_\\'
  let bottomSlash = '_/'
  let nextLine = '\n'
  let space = ' ';

  for (let i = 1; i <= size; i++) {
    top.push(space.repeat(size - i) + triangle.repeat(i) + slash.repeat(size));
    bottom.push(space.repeat(size - i) + bottomTriangle.repeat(i) + bottomSlash.repeat(size));
  }

  let topString = top.join(nextLine);
  let bottomString = bottom.reverse().join(nextLine);

  return topString + nextLine + bottomString;
}
