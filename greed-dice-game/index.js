
const score = (dices) => {

    if (dices.length > 5) throw new Error("Size not allowed it should be 5");

    if (dices.find(n => n < 1 || n > 6)) throw new Error("Dice values should be between 1 and 6");

    let counter = {};
    let score = 0;

    for (const n of dices) {
        if (!counter[n]) counter[n] = 1;
        else counter[n] += 1;
    }

    let diff = 0;

    for (const n in counter) {
        if (counter[n] >= 3) {
            if (n == 1) score += 1000
            else score += n * 100;
        }

        diff = counter[n] % 3;
        if (n == 1) score += diff * 100;
        if (n == 5) score += diff * 50;

    }

    return score;
}

export { score }