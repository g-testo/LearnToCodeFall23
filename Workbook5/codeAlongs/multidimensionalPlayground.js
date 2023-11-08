let maze = [
    [true, true, true, false, true],
    [false, false, true, false, true],
    [true, true, true, false, true],
    [true, false, false, false, true],
    [true, true, true, true, true],
];

console.log(maze[0][0]);
console.log(maze[2][3]);
console.log(maze[4][1]);

for(let i=0;i<maze.length;i++){
    for(let j=0;j<maze[i].length;j++){
        console.log(maze[i][j]);
    }
}

for(let row of maze){
    for(let column of row){
        console.log(column);
    }
}


let lockerAndAccessCode = [
    ["Locker 1", 135],
    ["Locker 2", 159],
    ["Locker 3", 642]
];

console.log(lockerAndAccessCode[2][1]);
console.log(lockerAndAccessCode[1]);