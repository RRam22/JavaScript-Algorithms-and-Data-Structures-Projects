function rot13(str) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let newStr = '';
//pake loop

  for(let i = 0; i < str.length; i++){
    let index = alphabet.indexOf(str[i]);
    if(index == -1){//buat spasi
      newStr += str[i];
    } else {
      let newIndex = (index + 13) % 26;
      newStr += alphabet[newIndex];
    }
  }
  return newStr;
}
  

console.log(rot13("SERR PBQR PNZC"));