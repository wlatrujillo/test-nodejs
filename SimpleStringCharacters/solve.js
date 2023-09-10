export function solve(s) {

    let uppercase = s.match(/[A-Z]/g) || [];
    let lowercase = s.match(/[a-z]/g) || [];
    let numbers = s.match(/[0-9]/g) || [];
    let characters = s.match(/[^0-9a-zA-Z]/g) || [];


    return [uppercase.length,
    lowercase.length,
    numbers.length,
    characters.length]


}