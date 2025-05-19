let a = Math.floor(Math.random() * 100);
let answer;
console.log('Random value of a:'+'\n'+`a=${a}`+'\n');
answer = (a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);
console.log('Result achieved with ternary operator "?":'+'\n'+`answer = ${answer}`+'\n');
if (a > 10) {
    answer = (2 * a) + 1; 
}
else {
    if (a * 2 > 5) {
        answer = (2 * a) + 1;
    }
    else {
        if (a % 2 == 0) {
            answer = 6;
        }
        else {
            answer = 7;
        }
    }
}
console.log('Result achieved with operator if/else:'+'\n'+`answer = ${ answer }`+'\n');
switch (true) {
    case a > 10:
        answer = (2 * a) + 1;
        break;
    case (a <= 10) && (a * 2 > 5):
        answer = (2 * a) + 1;
        break;
    case (a <= 10) && (a * 2 <= 5) && (a % 2 == 0):
        answer = 6;
        break;
    case (a <= 10) && (a * 2 <= 5) && (a % 2 == 1):
        answer = 7;
        break;
}
console.log('Result achieved with operator switch/case:' + '\n' + `answer = ${answer}` + '\n');
