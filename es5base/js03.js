function chessboardSpace(numberOfGrains) {
    let chessboardSpaces = 1;
    let placedGrains = 1;
    while (placedGrains < numberOfGrains) {
      placedGrains *= 2;
      chessboardSpaces += 1;
    }
    return chessboardSpaces;
}

let res = chessboardSpace(11)

console.log(res)

