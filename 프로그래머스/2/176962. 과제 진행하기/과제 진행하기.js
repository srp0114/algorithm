function solution(plans) {
    const answer = [];
    
    const changePlans = plans.map((value) => {
        let [name, start, playtime] = value;
        const [hour, min] = start.split(":").map(Number);
        start = hour * 60 + min;
        return [name, start, Number(playtime)];
    })
    
    // 시간순으로 정렬
    changePlans.sort((a,b) => a[1] - b[1]);
    
    const restPlan = [];

    // 마지막 항목 제외
    for(let i = 0; i< changePlans.length - 1; i++) {        
        const [name, start, playtime] = changePlans[i];
        // 다음 시작 시간
        const nextStart = changePlans[i+1][1];
        const time = start + playtime;     

        if (time <= nextStart) {
            answer.push(name); // [i]번 과제 완료
            
            // 과제 잔여 시간
            let restTime = nextStart - start - playtime;
            
            while (restPlan.length) {
                const [restName, restPlaytime] = restPlan.pop();
                
                if(restPlaytime <= restTime) { //멈춘 과제 완료한 경우
                    restTime -= restPlaytime;
                    answer.push(restName);
                } else { // 멈춘 과제를 다 하지 못한 경우
                    restPlan.push([restName, restPlaytime - restTime]); // 다시 restPlan push
                    break;
                }
            }
        } else {
            restPlan.push([name, playtime - (nextStart - start)]);
        }
    }
    
    // 마지막 항목 추가
    answer.push(changePlans[changePlans.length - 1][0]);

    // 남은 멈춘 과제 차례로 완료
    while (restPlan.length) {
        answer.push(restPlan.pop()[0]);
    }
    
    return answer;
}