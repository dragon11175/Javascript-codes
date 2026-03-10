var checkeven=new Promise((resolve,reject)=>{
  let a=7;
  if(a%2==0){
    resolve("even");
  }
  else{
    reject("fail");
  }
});


checkeven.then((result)=>{
  console.log(result);
}).catch((error)=>{console.log(error)
});