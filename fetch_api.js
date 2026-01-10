async function fetchuserdata(){
  try{
    const response = await fetch('https://api.github.com/users/dragon11175');
    const result=response.json();
    console.log(result);
  }catch(e){
    console.error(e);
  }
};
//here we make code to fetch data from a github account data with the help of fetch function in js



fetchuserdata();

