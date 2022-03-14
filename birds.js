'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    let index = {};
    let mostSigthed = 0, typeBirdId = 5
    
    for(let birdId of arr){
        if(!index.hasOwnProperty(birdId)) {
            index[birdId] = 0;  
        }
        index[birdId] += 1;
        mostSigthed = Math.max(index[birdId], mostSigthed);
    }
        
    for(let [birdId, sightCount] of Object.entries(index)){
        if(sightCount === mostSigthed){
            typeBirdId=Math.min(typeBirdId, birdId);
        }
    }
    
    return typeBirdId;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
