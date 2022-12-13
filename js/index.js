const setUpEvents=()=>{
    const form = document.querySelector("#github-form")
    form.addEventListener("submit",function(e){
        e.preventDefault()
       const search = document.querySelector("#search").value
       const githubNames = search.split(" ").join("")
       fetch ("https://api.github.com/users/"+githubNames,{
        method: 'GET',
        headers: {
            'content-type':'application/json',
            Accept: 'application/vnd.github.v3+json'
        }
       })
       .then ((res)=>res.json())
       .then ((data)=>{
    //we grab elements using the querySelector
    let userList = document.querySelector("#user-list");
    let repoList= document.querySelector("#repos-list");
       //we are creating elements to store data
    let userName = document.createElement('div')
    let avatar = document.createElement('div')
    let link = document.createElement('div')
    let repos = document.createElement('div')
    //we are appending lists
    userList.appendChild(userName)
    userList.appendChild(avatar)
    userList.appendChild(link)
    repoList.appendChild(repos)
    //here we are interpolating string values
    userName.innerHTML=`<a href="https://www.github.com${githubNames}"></a>`
    avatar.innerHTML=`<img  src="${data.avatar_url}"/>`
     link.innerHTML=`${data.url}`
    repos.innerHTML=`${data.public_repos}`
    console.log(data)
    })
    })}
window.onload = function (){
    setUpEvents();
}


// document.addEventListener("DOMContentLoaded",function(){
 
//     let form = document.getElementById('github-form')
//     form.addEventListener("submit", (e) => {
//         e.preventDefault();
//        let users = e.target[0].value;
//        let editedName = users.split(" ").join('')
//        console.log(editedName)
//        getdata(editedName)
//     })

//     function getdata(editedName){
//         let url = `https://api.github.com/search/users?q=` + editedName
//         console.log(url)
//         fetch(url)
//         .then((res) => res.json())
//         .then((matchedUsers) => {
//         // matchedUsers.forEach()
//             console.log(matchedUsers)
//             let ul = getElementById('user_list');
//             ul.appendChild(li);
//             let li = document.createElement('li');
//             li.innerText = matchedUsers.login
//             console.log("..... " + li) 
//         })
//     }
    
    
    
// })

// let user = {
//     method: "GET",
//     headers: {
//         "Content-type": "application/json",
//         Accept: "application/vnd.github.v3+json"
//     },
//     body: JSON.stringify(user)
// };
