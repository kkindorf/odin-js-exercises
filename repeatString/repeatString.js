const repeatString = function(str, num) {
   let concatonatedString = '';
   if(num == 0 || num < 0)  {
       return (num == 0 ? '' : 'ERROR');
   }
   else {
    for(let i = 0; i < num; i++) {
        concatonatedString += str;
    }
       return concatonatedString;
   }
}

module.exports = repeatString
