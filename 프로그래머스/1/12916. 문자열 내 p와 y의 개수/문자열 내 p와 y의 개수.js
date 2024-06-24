function solution(s){
    let flag = false;
    let countp = 0;
    let county = 0;
    
    const str = [...s.toLowerCase()];
    str.map((v) => {
        if(v === "p") countp++;
        if(v === "y") county++;
    })

    if(countp === county) flag = true;

    return flag;
}