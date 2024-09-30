async function search(){
    try{
        let search  = document.querySelector(".search1")
        let input = document.querySelector("input").value
        let users = await fetch(`https://www.omdbapi.com/?s=${input}&apikey=86e84a3d`)
        users = await users.json()
      users = users.Search
      console.log(users)
      search.innerHTML = ""
      users.map(({Title,Poster})=>{
        let search  = document.querySelector(".search1")
        search.innerHTML= ` <div class="search2">
        <div class="name">
           <img src=${Poster} alt="">
        </div>
        <div class="name1">
           <h1>${Title}</h1>
        </div>
     </div>` +search.innerHTML
      })
    }catch(err){
        console.log(err)
    }
   
    

}