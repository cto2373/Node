function shortcut(path, grid) {
    path = [];
    let position = 0;
    grid.forEach((string, index) => {
        if (index === 0) {
            let minValue = Math.min(...string)
            path.push(minValue);
            position = string.indexOf(minValue);
            
        }else{
            if (position > 0 && position < string.length - 1) {
                let subString = string.slice(position - 1, (position + 1) + 1);
                path.push(Math.min(...subString));

                console.log(position);
                switch (Math.min(...subString)) {
                    case string[position - 1]:
                        position = position - 1;
                        break;
                    case string[position]:
                        position = position;
                        break;
                    case string[position + 1]:
                        position = position + 1;
                    default:
                }
            } else if (position == 0) {
                let subString = string.slice(0, (position + 1) + 1);
                path.push(Math.min(...subString));

                console.log(position);
                switch (Math.min(...subString)) {
                    case string[position]:
                        position = position;
                        break;
                    case string[position + 1]:
                        position = position + 1;
                    default:
                }
            } else if (position == string.length - 1) {
                let subString = string.slice(position - 1, position + 1);
                console.log(subString);
                console.log(position + 1);
                path.push(Math.min(...subString));

                console.log(position);
                switch (Math.min(...subString)) {
                    case string[position]:
                        position = position;
                        break;
                    case string[position - 1]:
                        position = position - 1;
                    default:
                }
            }
        }
    });
    console.log(path);
}

let grid = [
    [10, -10, -2, 11, 1, -119],
    [-10, -1, 0, 1, 7, -13],
    [-1, 19, 2, 8, 1, -12],
    [-1, 6, 4, 9, 6, -10],
]

shortcut(0,grid)
