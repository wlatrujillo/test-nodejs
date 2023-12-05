export function findFirstRepeated(gifts) {
  let map = [];
    // Code here
    for(let i=0; i<gifts.length; i++){
      for(let j=i+1; j<gifts.length; j++){
        if(gifts[i] == gifts[j]){
          map.push({value: gifts[i], index: j});
        }
      }
    }
    console.log(map);
    if(map.length == 0) return -1;
    return map.sort((a,b) => a.index - b.index)[0].value;
  }