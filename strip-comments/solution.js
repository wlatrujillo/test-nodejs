export function solution(input, markers) {

    let lines = input.split('\n');

    let removeComments = (str, markers) => {
        let line = str;
        for (let marker of markers) {
            if (str.indexOf(marker) >= 0)
                line = str.slice(0, str.indexOf(marker));
        }
        return line.trim();

    }



    console.log("line before:", lines);


    let result = lines.map(line => removeComments(line, markers));

    console.log("line after:", result);



    return result.join('\n');

};

function solution2(input, markers) {
    return input.split('\n').map(
        line => markers.reduce(
            (line, marker) => line.split(marker)[0].trim(), line
        )
    ).join('\n')
}

function solution3(input, markers) {
    return input.replace(new RegExp(`\\s*[${markers.join('|')}].+`, 'g'), '');
}