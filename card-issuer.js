const cardTypes = [
  {
    cardType: 'AMEX',
    beginsWith: [34, 37],
    numberLength: [15]
  },
  {
    cardType: 'Discover',
    beginsWith: [6011],
    numberLength: [16]
  },
  {
    cardType: 'Mastercard',
    beginsWith: [51, 52, 53, 54, 55],
    numberLength: [16]
  },
  {
    cardType: 'VISA',
    beginsWith: [4],
    numberLength: [13, 16]
  }
];

function getIssuer(number) {
  let cardType = 'Unknown';
  cardTypes.forEach(card => {
    card.beginsWith.forEach(code => {
      if (number.toString().startsWith(code.toString())) {
        card.numberLength.forEach(len => {
          if (number.toString().length === len) {
            cardType = card.cardType;
          }
        });
      }
    });
  });
  return cardType;
}
console.log(getIssuer(4111111111111111));
console.log(getIssuer(378282246310005));

console.log(getIssuer(447660103007));
console.log(getIssuer(9111111111111111));
