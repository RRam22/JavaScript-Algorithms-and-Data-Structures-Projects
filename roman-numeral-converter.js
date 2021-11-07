function convertToRoman(num) {
 let result = [];
 //list angka dan romawinya
 let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      romawi = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

//looping angka while angkanya lebih besar dari suatu angka lain,tetap looping
numbers.map((number, i) => {
  while ( num >= number) {
    result += romawi[i];
    num -= number;
  }
});
  return result
}

console.log(convertToRoman(36));