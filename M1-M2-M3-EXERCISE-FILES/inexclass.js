class calenderDay{
    // private fields
    #day;
    #month;
    #year;

    constructor(day, month, year){
        this.#day = day;
        this.#month = month;
        this.#year = year;
    }

    // public methods
    tostring(){
        return `${this.#day}/${this.#month}/${this.#year}`;
    }
}


// Using our new class
let day1= new calenderDay(15, 8, 2026);
console.log(day1.tostring());