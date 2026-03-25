const email=document.getElementById("email");
const password=document.getElementById("password");
const message=document.getElementById("validationmessage");
const submit=document.getElementById("submit");


email.addEventListener("input",()=>{
  var email1=email.value;
  
  if(email1.includes("@")&&email1.includes(".")){
    message.textContent="valid email";
    message.style.color="green";
  }else{
    message.textContent="invalid email";
    message.style.color="red";
  }
});

var users=[];

submit.addEventListener("click",(event)=>{
 event.preventDefault(); 
  
  let emailValue=email.value;
  let passwordValue=password.value;

let user={
  gmail:emailValue,
  password:passwordValue
};

  // 👉 purana data nikalo
  

  // 👉 new add kar
  users.push(user);
  
  localStorage.setItem("users",JSON.stringify(users));
  alert("submited");
   
  
});