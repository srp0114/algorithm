function solution(s, skip, index) {
    var answer = '';
    const skipArr = skip.split("");
    
    const ASCII = Array.from({length:26}, (_, i) => String.fromCharCode(i + 97));
    let skipASCII = ASCII.filter(ch => !skipArr.includes(ch));
    
    for(const str of s) {
        let idx = skipASCII.indexOf(str);
        let moveIdx = (idx + index) % skipASCII.length;
        answer += skipASCII[moveIdx];
    }
    
    return answer;
}