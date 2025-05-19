let a = Math.floor(Math.random() * 20) + 1;
console.log('Random value of a:' + '\n' + `a=${a}` + '\n');
function manyChecks(a) {
    return (a > 10 ? 'a is bigger than 10 ' : 'a is less than or equal to 10 ' + (a === 5 ? 'an example of a special case ' : '')) + (a === 15 ? 'but a is not 15 ' : '') + (a > 5 ? 'and a is greater than 5 ' : 'and a is less than or equal to 5 ') + (a % 2 ? 'and a is odd' : 'and a is even');
}
function manyChecksIfElse(a) {
    let s = '';
    if (a > 10) {
        s += 'a is bigger than 10 ';
    }
    else {
        s += 'a is less than or equal to 10 ';
    };
    if (a == 5) {
        s += 'an example of a special case ';
    }
    if (a == 15) {
        s += 'but a is not 15 ';
    }
    if (a > 5) {
        s += 'and a is greater than 5 ';
    }
    else {
        s += 'and a is less than or equal to 5 ';
    };
    if (a % 2 == 1) {
        s += 'and a is odd';
    }
    else {
        s += 'and a is even';
    };
    return s;
}
function manyChecksSwitchCase(a) {
    let s = '';
    switch (true) {
        case a > 10:
            s += 'a is bigger than 10 ';
            break;
        case a <= 10:
            s += 'a is less than or equal to 10 ';
    }
    switch (true) {
        case a == 5:
            s += 'an example of a special case ';
            break;
        case a == 15:
            s += 'but a is not 15 ';
    }
    switch (true) {
        case a > 5:
            s += 'and a is greater than 5 ';
            break;
        case a <= 5:
            s += 'and a is less than or equal to 5 ';
    }
    switch (true) {
        case a % 2 == 1:
            s += 'and a is odd';
            break;
        case a % 2 == 0:
            s += 'and a is even';
    }
    return s;
}    
console.log('Result achieved with ternary operator "?":');  
console.log(manyChecks(a)+'\n');
console.log('Result achieved with operator if/else:');
console.log(manyChecksIfElse(a)+'\n');
console.log('Result achieved with operator switch/case:');
console.log(manyChecksSwitchCase(a));
