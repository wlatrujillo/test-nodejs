export function maxDistance(movements) {

    let maxDistance = 0;

    let left = 0;
    let rigth = 0;
    let bidireccional = 0;

    for (let mov of movements.split('')) {

        if (mov === '>') {
            rigth++;
        }

        if (mov === '<') {
            left++;
        }

        if (mov === '*') {
            bidireccional++;
        }

    }

    

    if (left >= rigth) {
        maxDistance = left + bidireccional - rigth
    }

    if (rigth > left) {
        maxDistance = rigth + bidireccional - left
    }

    return maxDistance;
}