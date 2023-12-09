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

    let index = 0;
    for (let i = 0; i < time; i++) {
        if(i == 1) {
            road = road.replace(santaSled, roadSign);
        }
        if (i == 5) {
            road = road.replaceAll(barrier, openBarrier);
        }
        if (road[index] != barrier) {
            roadSlead = replaceCharacter(road, index, santaSled);
            index++;
        }
        result.push(roadSlead)
    }
    return result;
}