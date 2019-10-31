export class Point {
    // // x and y are optional '?' when create an object
    // private x: number;
    // private y: number;
    // constructor(x?: number, y?: number) {
    //     this.x = x;
    //     this.y = y;
    // }
    // alternative way
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    draw() {
        console.log('x: ' + this._x + ', y: ' + this._y);
    }
    // properties
    // it seems like a member but actually it is a method
    // getter properties
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    // setter properties
    set x(value) {
        if (value < 0) {
            throw new Error('value cannot be lesser than 0');
        }
        this._x = value;
    }
    set y(value) {
        if (value < 0) {
            throw new Error('value cannot be lesser than 0');
        }
        this._y = value;
    }
}
