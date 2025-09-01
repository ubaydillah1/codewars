function findEvenIndex(arr: number[]) {
  let numberToDevide = 0;

  while (numberToDevide < arr.length) {
    const left = arr.slice(0, numberToDevide);
    const right = arr.slice(numberToDevide + 1);

    const leftResult = left.reduce((acc, curr) => acc + curr, 0);
    const rightResult = right.reduce((acc, curr) => acc + curr, 0);

    if (leftResult === rightResult) return numberToDevide;

    numberToDevide++;
  }

  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
