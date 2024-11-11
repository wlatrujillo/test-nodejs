module.exports = function createMagicFunction(potions, goal) {

    let finded = {};

    for(let i=0; i<potions.length; i++){
       
        let currentPower = potions[i];
        let complement = Math.abs(currentPower - goal);

        if(finded[complement]!=undefined){
            return [finded[complement], i];
        }

        if(finded[currentPower]==undefined)
            finded[currentPower] = i; 

    }

}
