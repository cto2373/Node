class Grid {
    #countString;
    #countTable;
    #grid = [];

    constructor(table, string) {
        this.#countTable = table;
        this.#countString = string;
    }

    get_grid() {
        this.#RandomGrid();
        console.log(this.#grid);
    }

    get_min_value() {
        console.log('min value ->');
        console.log(this.#findMinValue(this.#grid[0]));
    }

    #RandomGrid() {
        for (let i = 0; i < this.#countString; i++) {
            let string = [];

            for (let i = 0; i < this.#countTable; i++) {
                string.push(Math.floor(Math.random() * 10))
            }
            this.#grid.push(string);
        }
    }

    #findMinValue(grid) {
        let minValue = 0;
        grid.forEach((string, index )=> {
            minValue.push(Math.min(string));
        });
        return minValue
    }
    
    // shortcut(path, grid) {
    //     path = [];
    //     let position = 0;
    //     grid.forEach((string, index) => {
    //         if (index === 0){
    //             path.push(Math.min(...string));
    //             position = string.indexOf(Math.min(...string));
    //         } else {
    //             if (position > 0 && position < string.length - 1) {
    //                 let subString = string[index+1].slice(position - 1, position + 1);
    //                 path.push(Math.min(...subString));
    //                 switch (Math.min(...subString)) {
    //                     case string[index+1][position] - 1:
    //                         position = position - 1;
    //                         break;
    //                     case string[index + 1][position]:
    //                         position = position;
    //                         break;
    //                     case string[index+1][position] + 1:
    //                         position = position + 1;
    //                     default:
    //                 }

    //             }
    //         }
    //     });
    // }
}


const steck = new Grid(6, 4)
steck.get_grid()
// steck.get_min_value()
