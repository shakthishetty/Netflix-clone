function otp(e){
    // e.preventDefault()
    let getUser = localStorage.getItem("otp")
    console.log(getUser)
    let otp1 = document.querySelector("#otp1").value
    let otp2 = document.querySelector("#otp2").value
    let otp3 = document.querySelector("#otp3").value
    let otp4 = document.querySelector("#otp4").value
    let otp5 = document.querySelector("#otp5").value
    let otp6 = document.querySelector("#otp6").value
    let error = document.querySelector(".error")
    let final = otp1 + otp2 + otp3 + otp4 + otp5 + otp6
    console.log(final)
    if(getUser === final){
        alert("OTP VERIFIED SUCCEFULLY")
        return true
    }else{
        error.style.display = "block"
        return false
    }
    }

