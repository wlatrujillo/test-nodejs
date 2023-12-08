export function cyberReindeer(road, time) {
    const roadSign = '.';
    const santaSled = 'S';
    const barrier = '|';
    const openBarrier = '*';

    function replaceCharacter(str, index, replacement) {
        return (
            str.slice(0, index) +
            replacement +
            str.slice(index + replacement.length)
        );
    }

    let result = [];
    let roadSlead = new String(road);

    for (let i = 0; i < time; i++) {
        if (road[i] != barrier) {
            roadSlead = replaceCharacter(road, i, santaSled);
        }
        result.push(roadSlead)
    }
    return result;
}