console.log("working");
// increment decrement operators
// pre increment decrement first it will increment or decrement after printing takes place
let c=3;
console.log(3);
// it will print 3
console.log(++c);
// first it will increment then print 4
console.log(c);
console.log(--c);
console.log(c);
// bitwise operators
// &&,||,<<,>>
console.log(2|3);
console.log(2&3);
console.log(2^3);
console.log(2<<3);
console.log(2>>3);
// rule for & operator both conditions should be true like both should be 1 corresponding values
// if not 1 then it will be 0 only
// xor operator when both values should be different then it will have 1
// or if have same then 0
// right one
// ----------------------------------------
// ternary operator
let x=2;
let y=3
x > y ? console.log("x is greater then three") : console.log("x is less than y");
x>y? x++:x--;
console.log(x);
// -------------------------------------
// if else blocks
// if else if and else blocks
// switch
// how does if blocks work
// function nameoffn()
// {

// }
// let g =3;
let g=0;

// how does if loop works
// if a certain condition is written inside the paranthesis of if block is true  then we enter the inside the body of if 
// basically  enters inside the curly braces of if loop
if(g>2){
console.log(g);
}
// if can be used alone but else is always come with if
// only if the if block condition is true it will enter inside the if block otherwise it will auto. enter the else block
if(g>4){
console.log(g);
}
else if(g==3){
    console.log("g value is 3");
}
else{
console.log("enter inside the else block");
}

// -------------------
// if a person is adult,child or senior citizen
let age=66;

if(age<18)
{
    console.log("i m a child");
}
else if(age>=18 && age<60)
{
console.log("i m adult");
}
else{
    console.log("i m senior");
}
// --------------
let number=1;
switch(number){
    case 1:
        console.log("i m one");
        break;
    case 2:
        console.log("i m two");
        break;
    case 3:
        console.log("i m three");
        break;
        case 4:
            console.log("i m four");
            break;
            case true:
                console.log("i will be true");
                break;
                default:
                    console.log("i will be greater than four");
                    break;        
}

