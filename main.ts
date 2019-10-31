import { Point } from './point';

// types in TS
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, 'a', true];

function printTopic(topic: string) {
    let lineLength = 40;
    let spaceLength = (lineLength - topic.length - 2)/2;
    let frontSpaceLength = topic.length%2 == 1 ? spaceLength + 1 : spaceLength;
    console.log('-'.repeat(lineLength));
    console.log('|' + ' '.repeat(frontSpaceLength) + topic + ' '.repeat(spaceLength) + '|');
    console.log('-'.repeat(lineLength));
}

// enum
printTopic('enum');
const ColorRed = 0;
const ColorBlue = 1;
const ColorGreen = 2;

enum Color {
    Red = ColorRed,
    Blue = ColorBlue,
    Green = ColorGreen
}
let backgroundColor = Color.Red;
console.log('background color now is ' + backgroundColor);

// type assertion
printTopic('type assertion');
let message;
message = 'Hi I am Howard';
let endWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');

console.log('endWithC: ' + endWithC);
console.log('alternativeWay: ' + alternativeWay);


// arrow function
printTopic('arrow function');
let log = function(message) {
    console.log(message);
}
let doLog = (message) => console.log(message);

// interface
printTopic('interface');
interface P {
    x: number,
    y: number
}

let dropPoint = (point: P) => {
    // ...
    console.log('x: ' + point.x);
    console.log('y: ' + point.y);
}
dropPoint({x: 1, y: 2});


let point = new Point(1, 2);
let pointX = point.x;
point.y = 20;
point.draw();
