function toWeirdCase(string) {
  return string
    .split(' ')
    .map(word => {
      return word
        .split('')
        .map((letter, idx) => {
          if (idx === 0 || idx % 2 === 0) {
            return letter.toUpperCase();
          } else {
            return letter;
          }
        })
        .join('');
    })
    .join(' ');
}

toWeirdCase('hello world');
console.log(toWeirdCase('hello world'));
