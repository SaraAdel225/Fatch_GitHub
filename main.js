let input = document.querySelector(".header input")
let send = document.querySelector(".header button")
let repo = document.querySelector(".repo")

send.onclick = function(){
    if(input.value == " " | input.value == null | input.value == "" ){
        repo.innerHTML = "Please Enter GitHub UserName"
    }else{
        repo.innerHTML = ""
        fetch(`https://api.github.com/users/${input.value}/repos`)
        .then((repo)=>{
            return repo.json()
        }).then((returnRepo)=>{
            returnRepo.forEach(element => {
                // console.log(element.html_url)
                let divRepo = document.createElement("div")
                let nameRepo = document.createElement("h4")
                let textRepo = document.createTextNode(`${element.name}`)

                nameRepo.appendChild(textRepo)
                divRepo.appendChild(nameRepo)
                repo.appendChild(divRepo)
                divRepo.classList.add("divRepo")
                

                let link = document.createElement("a")
                let textLink = document.createTextNode("Visit")

                link.href= `https://github.com/${input.value}/${element.name}`
                link.setAttribute('target', '_blank')

                link.appendChild(textLink)
                divRepo.appendChild(link)

            });
        })
    }
}