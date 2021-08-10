export const shuffle = list => {
    var j, x, i;
    for (i = list.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = list[i];
      list[i] = list[j];
      list[j] = x;
    }
    return list;
  };