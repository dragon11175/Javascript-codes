function userdata(userId){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{console.log("data:",userId);
      resolve("success");
    },2000);
  });
};

async function getalldata(){
  await userdata(234);
  await userdata(4556);
}

getalldata();