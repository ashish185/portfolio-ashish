var obj = {
  m: 99,
  getValue: function () {
    return this.m
  }
}

var { getValue } = obj

var o2 = { m: 88, getValue }
var m = 999
console.log(o2.getValue()); //88
console.log(obj.getValue()); //99
console.log(getValue()); //999 but in Node js it will give Undefined (Strange: **********)