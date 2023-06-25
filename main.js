const gitHubURL= "https://api.github.com/users/"

const search = document.querySelector("#Search")
const bigContainer =document.querySelector(".container")

const userContainer = document.querySelector(".user_container")

const submit =document.querySelector("#submit")


userContainer.style.display="none";

handleUser("")


async function handleUser(user) {
     const response = await fetch(gitHubURL+user)
     const responseData = await response.json();
     console.log(responseData)
     getUserInfo(responseData)
}

function getUserInfo (user) {

     const box =` <div class="user_box">
     <div class="profile_image">
          <a href= "${user.html_url}" target="_blank" >
               <img src="${user.avatar_url}" class="avatar"
                    alt="profile_image" /></a>
                    <div class="joined">
                         <div class="join"><h3>joined</h3></div>
                         <h3 class="year" >${ new Date (user.created_at).getFullYear()}</h3>
                         
                    </div>           
     </div>
     <div class="user_info" id="user_info">
          <h2 class="name">${user.name}</h2>
          <h2 class="login">${user.login}</h2>
          <p class="bio"> ${user.bio}</p>
          <div class="user_bio">
               <a  class="btn" href="${user.html_url}" target="_blank"> View
                    Profile </a>

               <ul class="user_details">
                    <li> ${user.followers}     <strong>Followers</strong></li>
                    <li> ${user.following}     <strong>Following</strong></li>
                    <li> ${user.public_repos}  <strong>Repos</strong></li>
               </ul>

          </div>


     </div>


</div>
     `

     userContainer.innerHTML= box
}





submit.addEventListener( "click" , (e)=>{
     e.preventDefault();
   const user = search.value ;

   if( user==""){
     swal("ooops!", "please insert correct userName !", "error");
     userContainer.style.display="none";
     
   } else{
     userContainer.style.display="flex";
     handleUser(user)
     search.value=""
   }
  

})