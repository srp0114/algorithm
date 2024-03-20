function solution(bandage, health, attacks) {
    const [t, x, y] = bandage;
    const lastAttackTime = attacks[attacks.length - 1][0] // 마지막 공격 시간
    
    let currentHealth = health; // 현재 체력 - 초기값 = 초기상태로 설정
    let success = 0; // 연속 성공성
    let j = 0; // 공격 시간을 알기 위해
    
    for(let i = 1; i <= lastAttackTime; i++) {       
        if(attacks[j][0] === i) {
            success = 0; // 연속성 초기화
            currentHealth -= attacks[j][1];
            j++; // 다음 공격시간 인덱스로 증가
            if(currentHealth <= 0) {
                break;
            }
        } else {
            success++; // 연속 성공값 +1
            if(currentHealth < health) { // 최대 체력보다 현재 체력이 작은 경우
                if(success === t) { // 연속 성공을 한 경우
                    currentHealth += x + y; // t+x 추가
                    success = 0; // 연속 성공값 초기회
                }
                else { // 연속 성공을 못한 경우
                    currentHealth += x; // x값만 추가
                }
                
                if(currentHealth > health) {
                    currentHealth = health;
                }
            } 
        }
    }
    
    return currentHealth <= 0 ? -1 : currentHealth;
}