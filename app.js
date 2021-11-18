class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false
        this._ratings = [];
    }
    get title() {
        return this._title
    }
    get isCheckedOut() {
        return this._isCheckedOut
    }
    get rating() {
        return this._ratings
    }
    set isCheckedOut(status) {
        this._isCheckedOut = status
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut
    }
    getAverageRating() {
        const lastIndex = this._ratings.length - 1;
        return this._ratings.reduce((a, b, i) => {
            if (i === lastIndex) return (a + b) / (lastIndex + 1);
            return a + b
        })
    }
    addRating(newRating) {
        // make sure input is between 1 and 5.
        if (newRating >= 1 && newRating <= 5) {
            this._ratings.push(newRating)
        }
    }

}

class Book extends Media {
    /**
     * @param{string} title
     * @param{string} author
     * @param{number} pages
     */
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages
    }
    get author() {
        return this._author
    }
    get pages() {
        return this._pages
    }

}

class Movie extends Media {
    /**
     * 
     * @param {string} title 
     * @param {string} director 
     * @param {number} runTime 
     */
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime
    }
    get director() {
        return this._director
    }
    get runTime() {
        return this._runTime
    }
    shuffle() {
        //The method returns a randomly sorted array of all the songs in the songs property.
        const copy = this._songs.slice(0);
        copy.sort((a, b) => {
            return (Math.random() * 10) - (Math.random() * 10)
        });
        return copy
    }
}

//Create a CD class that extends Media
class CD extends Media {
    /**
     * @param{string} artist
     * @param{array} songs: array of strings
     */
    constructor(title, artist, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs
    }
    get artist() {
        return this._artist
    }
    get songs() {
        return this._songs
    }
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson',
    544);
historyOfEverything.toggleCheckOutStatus();

console.log("Book - '" + historyOfEverything.title + "' is checked out: " + historyOfEverything.isCheckedOut);

//Call .addRating() three times on historyOfEverything with inputs of 4, 5, and 5.
[4, 5, 5].forEach(v => historyOfEverything.addRating(v));

console.log("Book- '" + historyOfEverything.title + "' average rating: " + historyOfEverything.getAverageRating());

const speed = new Movie('Speed', 'Jan de Bont', 116);

//Call toggleCheckOutStatus() on the speed instance.
speed.toggleCheckOutStatus();

console.log("\nMovie - '" + speed.title + "' is checked out: " + speed.isCheckedOut);

//Call .addRating() three times on speed with inputs of 1, 1, and 5.
[1, 1, 5].forEach(v => speed.addRating(v))

console.log("'" + speed.title + "' average rating: " + speed.getAverageRating())

//Create class called Catalog that holds all of the Media items in our library.
class Catalog {

    addMedia(media) {
        const name = media.constructor.name;
        if (!Catalog.media.some(v => v === name)) {
            Catalog.media.push(name);
            this["_" + name] = [];
        }
        this["_" + name].push(media)
    }
}
Catalog.media = [];



