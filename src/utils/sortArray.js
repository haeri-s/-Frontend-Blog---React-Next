const descendingComparator = (a, b, orderBy) => {
  const valueA = eval(`a.${orderBy}`);
  const valueB = eval(`b.${orderBy}`);
  if (valueB < valueA) {
    return -1;
  }
  if (valueB > valueA) {
    return 1;
  }
  return 0;
}

const getComparator = (a, b, order, orderBy) => {
  return order === 'desc'
    ? descendingComparator(a, b, orderBy)
    : descendingComparator(a, b, orderBy) * -1;
}

// sortArray
// array -> 정렬할 array
// odr -> asc: 오름차순, desc: 내림차순
// orderBy -> 정렬기준
export const sortArray = (array, odr, orderBy) => {
  try {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = getComparator(a[0], b[0], odr, orderBy);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  } catch(err) {
    console.log(err)
    return array
  }
};
