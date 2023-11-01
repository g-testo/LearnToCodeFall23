let myScores = [92, 98, 84, 76, 89, 99, 100]; // 92
let yourScores = [82, 98, 94, 88, 92, 100]; // 

function calcMedian(scores){
    scores.sort(function(a,b){
        return a - b;
    })
    console.log(scores)
    const middleIndex = Math.floor(scores.length / 2)
    console.log(middleIndex);
    if(scores.length%2 == 1){
        let middleEl = scores[middleIndex];
        return middleEl;
    } else {
        return (scores[middleIndex - 1] + scores[middleIndex])/2;
    }
}
let median = calcMedian(yourScores);
console.log(median);