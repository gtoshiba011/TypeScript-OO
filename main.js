import { Point } from './point';
// types in TS
let a;
let b;
let c;
let d;
let e = [1, 2, 3];
let f = [1, 'a', true];
function printTopic(topic) {
    let lineLength = 40;
    let spaceLength = (lineLength - topic.length - 2) / 2;
    let frontSpaceLength = topic.length % 2 == 1 ? spaceLength + 1 : spaceLength;
    console.log('-'.repeat(lineLength));
    console.log('|' + ' '.repeat(frontSpaceLength) + topic + ' '.repeat(spaceLength) + '|');
    console.log('-'.repeat(lineLength));
}
// enum
printTopic('enum');
const ColorRed = 0;
const ColorBlue = 1;
const ColorGreen = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = ColorRed] = "Red";
    Color[Color["Blue"] = ColorBlue] = "Blue";
    Color[Color["Green"] = ColorGreen] = "Green";
})(Color || (Color = {}));
let backgroundColor = Color.Red;
console.log('background color now is ' + backgroundColor);
// type assertion
printTopic('type assertion');
let message;
message = 'Hi I am Howard';
let endWithC = message.endsWith('c');
let alternativeWay = message.endsWith('c');
console.log('endWithC: ' + endWithC);
console.log('alternativeWay: ' + alternativeWay);
// arrow function
printTopic('arrow function');
let log = function (message) {
    console.log(message);
};
let doLog = (message) => console.log(message);
// interface
printTopic('interface');
let dropPoint = (point) => {
    // ...
    console.log('x: ' + point.x);
    console.log('y: ' + point.y);
};
dropPoint({ x: 1, y: 2 });
let point = new Point(1, 2);
let pointX = point.x;
point.y = 20;
point.draw();
