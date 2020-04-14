/*  Task 1 */

var a = prompt('Enter your Number')
var b = Math.floor(Math.random()*(20-1))+1
console.log('User Number',a);
console.log('Lucky Number',b);
if (a==b)
{
console.log('user wins');
}else{
console.log('user loose')
}


/*  Task 2 */

var numbers = [];
for (i=1; i<6 ; i++){
let numb = prompt('Enter your' +' '+i+ ' '+'number')
numbers.push(numb);
}
console.log('***',numbers);
var b = Math.floor(Math.random()*(20-1))+1
var win = 0;
var l = 0;
console.log('Lucky Number',b);
for (i=0;i<5;i++){
    if(numbers[i]==b){
        win = win+1
        }else{
        l = l+1
        }
}
console.log('user win', win);
console.log('user loose', l)
win>l?'User wins':'User loose'


/*  Task 3  - functions (incomplete) */
var numbers = [];
for (i=1; i<6 ; i++){
let numb = prompt('Enter your' +' '+i+ ' '+'number')
numbers.push(numb);
}
console.log('***',numbers);
var b = Math.floor(Math.random()*(20-1))+1

function comp(_numbers,_b){
var win = 0;
var l = 0;
for (i=0;i<5;i++){
    if(numbers[i]==b){
        win = win+1
        }else{
        l = l+1

}
}
}


/*  Task 5 - Regex */
var a = "abcd1234"
a.match("^([a-zA-Z0-9]+)$");