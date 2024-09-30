function login(e){
     e.preventDefault()
    let email = document.getElementById("emailorphone").value.trim()
    // console.log(email)
    let mobile = document.getElementById("emailorphone").value.trim()
    // console.log(mobile)
    let password = document.getElementById("password").value.trim()
    let error1 = document.querySelector(".error1")
    let error4 = document.querySelector(".error4")

    error1.innerHTML = ""

    error4.innerHTML = ""


    if(!email){
        error1.innerHTML = "Field is mandontaory"
        error1.style.display = "block"
        return false
    }


    if(!password){
        error4.innerHTML = "Password is mandontaory"
        error4.style.display = "block"
        return false
    }
    // console.log(password)

     
let localStorageUser = JSON.parse(localStorage.getItem("users"))|| [];
let userFound = localStorageUser.find((user)=>(user.email===email || user.mobile===mobile) && user.password === password)
if(userFound){
    const otp = Math.floor(100000 + Math.random() * 900000);
    alert(`Login succefull: the otp ${otp}`)
    localStorage.setItem("otp",+otp)
    window.open("./otp.html")
    return true
}else{
    alert(" Invalid email or Password")
    return false
}

}
