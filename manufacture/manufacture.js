export function manufacture(gifts, materials) {
    // Code here
    let includeLetter = (letter) => materials.includes(letter);
    let filterGifts = (gift) => gift.split('').every(includeLetter); 
    return gifts.filter(filterGifts); 
  }