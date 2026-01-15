// arrow function of addition to number

let lalit=(a,b)=>{
    return a+b;
}

console.log(lalit(3,5));



//arrow function to chaange a string in uppercase

let stringupper=(letter)=>{
  return letter.toUpperCase();
}

console.log(stringupper("lalit"));



// aroow function to check number even or not 

let even_or_not=(number)=>{
  
  if(number %2===0){
    console.log("your number is  even")
  }else{
    console.warn("your number is not even")
  }
}

even_or_not(567);// call the function 



//arrow function to return first element of array 

let first_element_array=(jhonny)=>{
  return jhonny[0];
}

 console.log(first_element_array([2,3,4,5,6]));
 
 
 
// funtion to give square of a number 

let square_number=(a)=>{
    return a*a;
}

console.log(square_number(4));

// function to check sum of all array elements 

let get_sum_all=(jhonny)=>{
   var temp=0;
  for(let i=0;i<jhonny.length;i++){
    temp=temp+jhonny[i];
  }
    console.log(temp);  
}

get_sum_all([5,6,7,8,9,0]);