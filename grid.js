let position = 0;
function shortcut(grid) {
    path = [];
    grid.forEach((string, index) => {
        if (index === 0) {
            let minValue = Math.min(...string)
            path.push(minValue);
            position = string.indexOf(minValue);
            
        } else {
            if (position > 0 && position < string.length - 1) {

                position = borders(3, position, string)
                path.push(string[position])

            } else if (position == 0) {
                let subString = string.slice(0, (position + 1) + 1);
                sideborder(1, subString, string);
            } else if (position == string.length - 1) {
                let subString = string.slice(position - 1, position + 1);
                sideborder(-1, subString, string);
            }
        }
    });
    console.log(path);
}
    
function sideborder(indexBorder, subString, string) {
    path.push(Math.min(...subString));

    switch (Math.min(...subString)) {
        case string[position]:
            position = position;
            break;
        case string[position + indexBorder]:
            position = position + indexBorder;
        default:
    }
}


function borders(range, position, string) {
    if (range % 2 !== 0) {
        var border = Math.floor(range / 2);
    }
    let minPosition = position - border;
    let maxPosition = position + border;

    let subString = string.slice(minPosition, maxPosition + 1);

    let minValue = Math.min(...subString);

    for (let i = minPosition; i <= maxPosition; i++){
        if (string[i] === minValue) {
            return  i
        }
    }

}
// console.log(path);

let grid = [
    [1000, 10, 2, 11, 1, -119],
    [-100, -1, 0, 1, 7, -13],
    [-1, 19, 2, 8, 11, -12],
    [-1, 6, 4, 9, 6, -10],
]

shortcut(grid)
