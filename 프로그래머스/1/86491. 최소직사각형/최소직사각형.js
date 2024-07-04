function solution(sizes) {
    const longArr = [];
    const shortArr = [];
    
    sizes.map((v) => {
        const [long, short] = v.toString().split(",").map(Number);
        
        if(long < short) {
            longArr.push(short);
            shortArr.push(long);
        } else {
            longArr.push(long);
            shortArr.push(short);
        }
    })
    
    return (Math.max(...longArr) * Math.max(...shortArr));   
}