function addString(str1:string, str2:string):string {
    return str1 + str2;
}

// const total1 = addNum('gopal', 3);       argument of type string not assignable to number
const fullName = addString('john', 'tucker');
console.log(fullName);