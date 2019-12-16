console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const image_container = document.querySelector("#dog-image-container")
const dogBreed = document.querySelector("#dog-breeds")
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const breedDropdown = document.querySelector("#breed-dropdown")


fetch(imgUrl)
    .then(function(response){
        return response.json()  
    })
    .then(function(response){
        console.log(response.message)
        response.message.forEach(function(message){
            const img = document.createElement('img')
            img.src = message
            image_container.appendChild(img)
        })
    })




fetch(breedUrl)
    .then(function(response){
        return response.json()
    .then(function(response){
        console.log(response.message)
        for (const breed in response.message){
            if (breed[0] == "a"){
                const li = document.createElement("li")
                li.setAttribute("id", breed)
                li.innerHTML = breed
                dogBreed.appendChild(li)
                li.addEventListener("click", function(e){
                    li.style.color = "blue"
                })
            }
        }
        breedDropdown.addEventListener("input", function(e){
            console.log(e)
            dogBreed.innerHTML = ''
            if (e.target.value == "b"){
                for (const breed in response.message){
                    if (breed[0] == "b"){
                        const li = document.createElement("li")
                        li.setAttribute("id", breed)
                        li.innerHTML = breed
                        dogBreed.appendChild(li)
                        li.addEventListener("click", function(e){
                            li.style.color = "blue"  
                        })
                    }
                }
            }
            else if (e.target.value == "c"){
                for (const breed in response.message){
                    if (breed[0] == "c"){
                        const li = document.createElement("li")
                        li.setAttribute("id", breed)
                        li.innerHTML = breed
                        dogBreed.appendChild(li)
                        li.addEventListener("click", function(e){
                            li.style.color = "blue"  
                        })
                    }
                }
            }
            else if (e.target.value == "d"){
                for (const breed in response.message){
                    if (breed[0] == "d"){
                        const li = document.createElement("li")
                        li.setAttribute("id", breed)
                        li.innerHTML = breed
                        dogBreed.appendChild(li)
                        li.addEventListener("click", function(e){
                            li.style.color = "blue"
                        })
                    }
                }
            }           
        })
    })
})


    



// Customer.all.each do | customer |
//  customer # Each thing in the array
// end

// const myFunction = function(){

// }

// Customer.forEach(function(customer){
//     customer // Each thing in the array
// })


// let showDogImage = 
//     response.message.forEach(message)
//     const img = document.createElement('img')
//     img.innerHTML = message
//     image_container.appendChild(img)

