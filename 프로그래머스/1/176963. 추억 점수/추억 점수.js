function solution(name, yearning, photo) {
    const result = [];
    const map = new Map();
    
    // 사진과 그리움 점수 매치해서 map에 추가
    name.map((name,index) => {
        map.set(name, yearning[index])
    });
    
    
    photo.forEach((v) => {
        let remember = 0;
        
        v.map((value) => {
            
            // 그리움 점수 가져오기
            let missing = map.get(value);
            
            // 그리움 점수가 없는 경우
            if(missing === undefined) 
                remember += 0;
            else 
                remember += missing;
        })
        result.push(remember);
    })
    
    return result;
}