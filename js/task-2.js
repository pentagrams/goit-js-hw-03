const countProps = function(obj) {
    const lengthObj = Object.keys(obj).length;
    return lengthObj;
};



console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3