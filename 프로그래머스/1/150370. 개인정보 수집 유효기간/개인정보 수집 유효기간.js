function solution(today, terms, privacies) {
    var answer = [];
    
    const expire = new Date(today);
    const map = new Map();
    
    terms.map((term) => {
        let [docu, mon] = term.split(" ");
        map.set(docu, parseInt(mon));
    })
    
    privacies.map((privacy, index) => {
        let [start, docuType] = privacy.split(" ");
        let date = new Date(start);
        
        date.setMonth(date.getMonth() + map.get(docuType));
        
        if (date <= expire) {
            answer.push(index + 1);        
        }
    } )
    
    return answer;
}