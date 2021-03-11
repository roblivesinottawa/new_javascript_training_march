window.onload = () => {
    randomUserGenerator()
}

// this function fetches the data from the API
const randomUserGenerator = () => {
    fetch('https://randomuser.me/api/') //fetch method creates a promise
    .then((response) => {
        return response.json() //json allows the use of data received from the API
    }).then((data) => {
        console.log(data)
        showRandomUserData(data)
    })
}

showRandomUserData = (randomUser) => {
    // use DOM methods to change our HTML to the data from the API
    document.getElementById('name').innerText = //access the HTML element and the replace the data inside it with API data
   `${randomUser.results[0].name.title}
    ${randomUser.results[0].name.first}
    ${randomUser.results[0].name.last}`

    document.getElementById('age').innerText = 
    `${randomUser.results[0].dob.age}`
    
    document.getElementById('email').innerText = 
    `${randomUser.results[0].email}`
    
    document.getElementById('phone').innerText = 
    `${randomUser.results[0].phone}`

}
