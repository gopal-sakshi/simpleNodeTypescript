function addNum(num1:number, num2:number):number {
    return num1+num2;
}

// const total1 = addNum('gopal', 3);       argument of type string not assignable to number
const total2 = addNum(2, 3);
console.log(total2);