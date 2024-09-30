function login(){
    window.open("./login.html")
}



function register(e){
    // e.preventDefault()
  
    let email = document.getElementById("email").value.trim()
    let email1 = document.getElementById("email1").value.trim()
    let error = document.querySelector(".error")
    let eror = document.querySelector(".eror")
    let button = document.querySelector("button")
    console.log(email1)

    error.innerHTML = ""
    eror.innerHTML =""
 

if(!email){
    error.innerHTML = "Email is required."
    error.style.display = "block"
    return false

}else{
   window.open("./register.html")
// document.getElementById("registerForm").submit();
}




}

function register1(e){
    // e.preventDefault()
  
    let email1 = document.getElementById("email1").value.trim()
    
    let eror = document.querySelector(".eror")
    console.log(email1)

  
    eror.innerHTML =""




    if(!email1){
        eror.innerHTML = "Email is required."
        eror.style.display = "block"
        return false
    
    }else{
           window.open("./register.html")
        
        }


}



function updateImages(imagePathPrefix, totalImages) {//('image/', 9)
    let images = document.querySelectorAll(".containe1 img");//nodelist[img,img]

   
    let shuffledIndexes = Array.from({ length: totalImages }, (_, i) => i + 1)//[1.2.3.4.5.6.7.8.9]
                               .sort(() => Math.random() - 0.5);[4,5,1,2,3,8,6,9,7]

    
    images.forEach((img, index) => {
        img.src = `${imagePathPrefix}image${shuffledIndexes[index]}.jpg`;
    });
}

function demo1(event) {
    const value = event.target.value;
    if(value === 'English'){
        updateImages('image/', 9);
    }else if (value === 'Global') {
        updateImages('images/', 9); 
    } else if (value === 'TvShows') {
        updateImages('img/', 10); 
    } else if (value === 'Movies-OtherLanguge') {
        updateImages('imagess/', 7); 
    }
}

function demo(){
    
    
    updateImages('image/', 9)
    updateImages('images/', 9)
    updateImages('img/', 10)
    updateImages('imagess/', 7)

}