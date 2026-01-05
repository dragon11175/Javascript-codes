async function fetchuserdata(){
  try{
    const response = await fetch('https://api.github.com/users/nykz');
    console.log(response);
  }catch(e){
    console.error(e);
  }
};
//here we make code to fetch data from a github account data with the help of fetch function in js



fetchuserdata();

