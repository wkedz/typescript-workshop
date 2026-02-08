var value = 1234;
console.log(value, typeof value);
var str = "Alice";
console.log(str, typeof str);
var bool = true;
console.log(bool, typeof bool);
var days = {
    "monday": 1,
    "tuesday": 2,
    "wednesday": 3,
    "thursday": 4,
    "friday": 5,
    "saturday": 6,
    "sunday": 7
};
console.log(days, typeof days);
var arr = [1, 2, 3, 4, 5];
console.log(arr, typeof arr);
function add(a, b) {
    return a + b;
}
console.log(add(2, 3), typeof add);
var everything = [value, str, bool, days, add, arr];
for (var _i = 0, everything_1 = everything; _i < everything_1.length; _i++) {
    var item = everything_1[_i];
    console.log(item, typeof item);
}
