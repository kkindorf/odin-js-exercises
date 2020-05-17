const removeFromArray = function() {
  let args = Array.from(arguments);
  let array = args[0];
  let itemsToRemove = [];
  for(let i = 1; i < args.length; i++) {
    itemsToRemove.push(args[i]);
  }
  for(let j = 0; j < itemsToRemove.length; j++) {
    //if the current item to remove is in the array, 
    //remove it from the array
    if(array.indexOf(itemsToRemove[j]) > -1) {
      let indexToRemove = array.indexOf(itemsToRemove[j]);
      array.splice(indexToRemove, 1);
    }    
  }
  return array;
}

module.exports = removeFromArray
