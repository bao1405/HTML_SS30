function stepOnStairs(){
    let steps = prompt("");
    let arr = genArr(steps);
    console.log(...arr);
    for(let i = 0; i < arr.length; i++){
        let subArr =[];
        for(let j = i; j <= i + 1; j++){
            if(arr[j]){
                subArr.push(arr[j]);
            }
        }
        if(subArr.length == 2){
            let arr2 = genArr(steps - 1);
            arr2[i] = subArr.reduce((pre,cur) => (pre += cur));
            console.log(...arr2);
        }
    }
}

function genArr(steps){
    let arr = [];
    for(let i = 0 ; i <= steps ;i++){
        arr.push(1);
    }
    return arr;
}

stepOnStairs();