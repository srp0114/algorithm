function solution(s, skip, index) {
    let answer = '';
    const skipArr = new Set(skip);

    const fullAlphabet = Array.from({length: 26}, (_, i) => String.fromCharCode(i + 97));
    let effectiveAlphabet = fullAlphabet.filter(ch => !skipArr.has(ch));

    for (let ch of s) {
        if (skipArr.has(ch)) {
            answer += ch;
        } else {
            let currentIndex = effectiveAlphabet.indexOf(ch);
            if (currentIndex !== -1) {
                let newIndex = currentIndex;
                for (let i = 0; i < index; i++) {
                    newIndex = (newIndex + 1) % effectiveAlphabet.length;
                }
                answer += effectiveAlphabet[newIndex];
            } else {
                answer += ch;
            }
        }
    }

    return answer;
}
