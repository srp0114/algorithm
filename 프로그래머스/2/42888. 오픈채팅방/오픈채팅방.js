function solution(record) {
    const map = new Map();
    let noNickname = [];
    let result = [];
    
    record.forEach((v) => {
        let [message, uid, nickname] = v.split(" ");  
        if(message !== "Leave") map.set(uid, nickname);
        if(message !== "Change") noNickname.push([message, uid]);
    })
    
    noNickname.forEach((v) => {
        let [msg, id] = v
        msg = msg === "Enter" ? "들어왔습니다." : "나갔습니다.";
        result.push(`${map.get(id)}님이 ${msg}`)
    })
    
    return result;
}
