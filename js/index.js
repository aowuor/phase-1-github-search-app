document.addEventListener("DOMContentLoaded",function(){
 
    let editedName;
    let form = document.getElementById('github-form')
    form.addEventListener("submit", (e) => {
        e.preventDefault();
       let users = e.target[0].value;
       editedName = users.split(" ").join('')
       getdata(editedName)
    })

    function getdata(editedName){
        let url = `https://api.github.com/search/users?q=` + editedName
        fetch(url)
        .then((res) => res.json())
        .then((matchedUsers) => {
            console.log(matchedUsers)
            for(let user of matchedUsers.items) {
                console.log(user.login)
                let ul = document.getElementById('user_list');
                let li = document.createElement('li');
                ul.appendChild(li);
                li.innerText = user.login
                
                li.addEventListener("click", () =>{
                    displayUserInfo(user)  
                })
            }  
        })
    }
    

    function displayUserInfo(user){
        let reposUl = document.getElementById('repos_list')
        let userList = document.createElement('li')
        reposUl.appendChild(userList)

        let userDiv = document.createElement('div')
        userList.appendChild(userDiv)

        let userAvatar = document.createElement('img')
        userDiv.appendChild(userAvatar)
        userAvatar.src = user.avatar_url
        userAvatar.setAttribute('height', 300)

        let userLogin = document.createElement('h4')
        userDiv.appendChild(userLogin)
        userLogin.innerText = user.login

        let userUrl = document.createElement('a')
        userDiv.appendChild(userUrl)
        userUrl.setAttribute('href', user.repos_url)
        userUrl.setAttribute('target', "_blank")
        userUrl.innerText = user.repos_url
    }
    
})