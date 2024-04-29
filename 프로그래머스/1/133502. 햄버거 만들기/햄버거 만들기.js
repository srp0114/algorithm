function solution(ingredient) {
    const set = [1, 2, 3, 1];
    let hamburger = 0;

    for(let i = 0; i < ingredient.length; i++) {
        let arr = ingredient.slice(i, i + 4);

        if(arr.toString() === set.toString()) {
            ingredient.splice(i, 4);
            hamburger++;
            i -= 3;
        }
    }

    return hamburger;
}
