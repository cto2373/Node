class Grid {
    #countString;
    #countTable;
    #grid = [];

    constructor(table, string) {
        this.#countTable = table;
        this.#countString = string;
    }

    get_grid(min, max) {
        this.#RandomGrid(min, max);
        console.log(this.#grid);
    }

    get_min_path() {
        console.log('min shortcut ->');
        this.shortcut(this.#grid);
    }

    #RandomGrid(min, max) {
        for (let i = 0; i < this.#countString; i++) {
            let string = [];

            for (let i = 0; i < this.#countTable; i++) {
                string.push(Math.floor(Math.random() * (max - min) + min ))
            }
            this.#grid.push(string);
        }
    }

    #borders(range, position, string) {
        if (range % 2 !== 0) {
            var border = Math.floor(range / 2);
        }
        let minPosition = position - border;
        let maxPosition = position + border;

        let subString = string.slice(minPosition, maxPosition + 1);
        let value = Math.min(...subString);

        for (let i = minPosition; i <= maxPosition; i++) {
            if (string[i] === value) {
                return  i;
            }
        }

    }
    shortcut( grid) {
        let path = [];
        let position = 0;
        grid.forEach((string=new Array, index) => {
            if (index === 0) {
                let minValue = Math.min(...string)
                path.push(minValue);
                position = string.indexOf(minValue);

            } else {
                if (position > 0 && position < string.length - 1) { 
                    
                    position = this.#borders(3, position, string)
                    path.push(string[position])

                } else if (position == 0) {

                    let subString = string.slice(0, (position + 1) + 1);
                    path.push(Math.min(...subString));

                    switch (Math.min(...subString)) {
                        case string[position]:
                            position = position;
                            break;
                        case string[position + 1]:
                            position = position + 1;
                        default:
                    }
                } else if (position == string.length - 1) {
                    // console.log('второе условие');
                    // console.log(position);
                    let subString = string.slice(position - 1, position + 1);
                    path.push(Math.min(...subString));

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
}       


const steck = new Grid(5,10 )
steck.get_grid(10,100)
steck.get_min_path()
