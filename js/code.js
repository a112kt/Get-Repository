let theInput =document.querySelector("#input")
let getBtn = document.querySelector(".btn")
let reposData = document.querySelector(".show-data")
// Get Repos Function 
function getRepos(){
  if(theInput.value ==""){
  reposData.innerHTML="<span>Please Enter Github UserName</span>";
  }
  else{
      fetch(`https://api.github.com/users/${theInput.value}/repos`).then(
         (res)=>{
            return res.json();
         })
         .then((data)=>{
           reposData.innerHTML="";


           data.forEach(repo=>{
            
            let mainDev = document.createElement("div")
            let repoName = document.createTextNode(repo.name)
            mainDev.appendChild(repoName)
         //create repo url 
         let url = document.createElement('a')

         //repo url text
         let urlText = document.createTextNode("visit")

         //append repo url Text
         url.appendChild(urlText)

         // add the hyperRef text
         url.href=`https://github.com/${theInput.value}/${repo.name}`

         // set attribute blank
         url.setAttribute('target','_blank')

          //create stars count span
          let star = document.createElement("span");

         //create star text
          let starText = document.createTextNode(`stars ${repo.stargazers_count}`)

         //add star count text to stars span
         star.appendChild(starText);

         //append star count text to stars span to main dev
         mainDev.appendChild(star)

         //class to maindev
         mainDev.className='repo_box'






         //append url to main dev
         mainDev.appendChild(url);

         //append mainDev to container
         reposData.appendChild(mainDev)
           })
         })
  }

}

getBtn.onclick = function(){
   getRepos();
}