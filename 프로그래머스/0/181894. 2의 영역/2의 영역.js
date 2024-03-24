function solution(arr) {
    let twoIndex = [];
    
    arr.forEach((value, index) => {
        if(arr[index] === 2) twoIndex.push(index);
    });
    
    const sliceArr = arr.slice(twoIndex[0], twoIndex[twoIndex.length-1] + 1);
    
    return sliceArr.length === 0 ? [-1] : sliceArr;
}