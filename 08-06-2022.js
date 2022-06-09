// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    let space = str.split(" ");
    //rearrege the array 
  space.forEach((n,index)=>{
      space[index] = [n[0], n.slice(1,n.length)];                                     
  })
        //first letter goes to the back
  space.forEach((n,index)=>{
      space[index] = n.reverse();
  })  
        //add "ay" to the back
  space.forEach((n,index)=>{
    if(space[index][1] === "!" || space[index][1] === "?"){
      space[index][1] = space[index][1]
    }else{
      space[index][1] = space[index][1] + "ay";
    }
  })
        //join each letter
  space.forEach((n,index)=>{
      space[index] = n.join("");
  })                        
        // join the entire sentence
  return space.join(" ")
  }