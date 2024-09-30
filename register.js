function register(e){

e.preventDefault()

let fullname = document.getElementById("fullname").value.trim()
let email = document.getElementById("email").value.trim()
let mobile = document.getElementById("mobile").value.trim()
let password = document.getElementById("password").value.trim()
let cpassword = document.getElementById("cpassword").value.trim()
let error = document.querySelector(".error")
let error1 = document.querySelector(".error1")
let error3 = document.querySelector(".error3")
let error4 = document.querySelector(".error4")
let error5 = document.querySelector(".error5")

//    console.log(fullname)
error.innerHTML = ""
error.style.display = "block"

error1.innerHTML = ""
error1.style.display = "none"

error3.innerHTML = ""
error3.style.display = "none"

error4.innerHTML = ""
error4.style.display = "none"

error5.innerHTML = ""
error5.style.display = "none"


let mobilePattern = /^[6-9][0-9]{9}$/g;
let isMobile = mobilePattern.test(mobile)

let  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let isEmail = emailPattern.test(email)


let passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
let isPassword = passwordValidation.test(password)


if(!fullname){
  error.innerText = "Fullname is required"
  error.style.display = "block"
  return false
}

if(!email){
    error1.innerText = "Please enter a valid email address."
    error1.style.display = "block"
    return false
}else if(!isEmail){
    error1.innerText = "Please enter a valid email address."
    error1.style.display = "block"
    return false
}

if(!mobile){
    error3.innerText = "Please enter a valid mobile number."
    error3.style.display = "block"
    return false
}else if(!isMobile){
    error3.innerText = "Please enter a valid mobile number."
    error3.style.display = "block"
    return false
}

if(!password){
    error4.innerText = "Password is required."
    error4.style.display = "block"
    return false
}



if(!cpassword){
    error5.innerText = "Password is required."
    error5.style.display = "block"
    return false
}else if(!isPassword){
    error5.innerText = "Invalid Password."
    error5.style.display = "block"
    return false
}



let users = {
    Fullname: fullname,
    email: email,
    mobile: mobile,
    password: cpassword,
   
}
if(password === cpassword){
let localStorageUser =  JSON.parse(localStorage.getItem("users"))|| []
let userFound = localStorageUser.find((user)=>user.email===email || user.mobile===mobile)
// console.log(userFound)
if(!userFound){
    localStorageUser.push(users)
    localStorage.setItem("users",JSON.stringify(localStorageUser))
    // alert("submitted")
    window.open("./login.html")
    return true
}else{
    alert("user already exists")
    return false
}
}else{
    alert("invalid password")
    return false
}
}