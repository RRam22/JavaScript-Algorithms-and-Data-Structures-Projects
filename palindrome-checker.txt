function palindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-z0-9]/g,'');

  let backward = str.split('');
  backward = backward.reverse().join('').toString();
  if(backward === str){
    return true;
  }
  else { return false;}
  
}




console.log(palindrome("eye"));