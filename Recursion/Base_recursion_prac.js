function fun(n) {
  if (n == 1) {
    return 0;
  } else {
    return 1 + fun(Math.floor(n / 2));
  }
}
console.log(fun(190));
