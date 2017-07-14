/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function handValue(hand) {
  let total = 0
  let As = []
  for (let i = 0; i < hand.length; i++) {
    let cardValue = 0
    if (hand[i] === 'J' || hand[i] === 'Q' || hand[i] === 'K') {
      cardValue = 10
    } else if (hand[i] !== 'A') {
      cardValue = Number(hand[i])
    } else {
      // else the number is an 'A'
      As.push(hand[i])
    }
    total = total + cardValue
  }
  console.log(As)
  for (let i = 0; i < As.length; i++) {
    // for each ace. check logic for if the total is over 21 or not
    if (total + 11 <= 21) {
      total += 11
    } else {
      total += 1
    }
  }
  return total
}
//
// if (total <= 21){
//   total += 11
// }
// if ('A') { total <= 21
// }
// else {'A' = 11
// that goes logic goes here
// if the total is over

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
