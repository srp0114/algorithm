function solution(picks, minerals) {
    var answer = 0;
    
    // 전체 곡괭이 수
    const totalPicks = picks.reduce((prev, curr) => {
        return prev + curr;
    }, 0)
    
    // 가진 곡괭이로 자를 수 있는 광물
    const slicedMinerals = minerals.slice(0, totalPicks * 5);
    
    // 광물 5개 단위로 자르기
    const countedMinerals = slicedMinerals.reduce((prev, curr, index) => {
        const idx = Math.floor(index/5);
        
        // prev[idx] 없다면 0,0,0으로 초기화 (diamond, iron, stone 순)
        if(!prev[idx]) {
            prev[idx] = [0, 0, 0];
        }
        
        // 각 광물 카운트
        if (curr === "diamond") {
            prev[idx][0]++;
        } else if (curr === "iron") {
            prev[idx][1]++;
        } else if (curr === "stone") {
            prev[idx][2]++;
        }
        
        return prev;
    }, []);
    
    // 다이아 우선으로 처리. 그 다음 철 
    // 다이아몬드는 곡괭이에 따른 피로도 차이가 크기 때문에 1순위로.
    const sortedMinerals = countedMinerals.sort((a,b) => b[0] - a[0] || b[1] - a[1]);
    
    // 피로도 계산
    sortedMinerals.forEach((value) => {
        const [diamond, iron, stone] = value;
        if(picks[0]) {
            answer += diamond + iron + stone;
            picks[0]--;
        } else if (picks[1]) {
            answer += diamond * 5 + iron + stone;
            picks[1]--;
        } else if (picks[2]) {
            answer += diamond * 25 + iron * 5 + stone;
            picks[2]--;
        }
    })
    
    return answer;
}