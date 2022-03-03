//   function gameWin(stones)
//  {
//     if(stones === 1) return false;
//     if(stones === 2 || stones === 3)
//      return true;

//     gameWin(stones - 2);
// }
// console.log(gameWin(4))

function canWin(stones) {
    if(stones <= 1) return false;
    if(stones === 2 || stones === 3) return true;

    const moves = [2, 3, 5];

    for(let i = 0; i < moves.length; i++) {
        if(!canWin(stones - moves[i])) return true;
    }
    return false;
}