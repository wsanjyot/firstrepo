const url = "https://catfact.ninja/facts"

let factpara = document.querySelector("#facts")
 
let button = document.querySelector("#btn")

const getFacts = async () => {
    console.log('fetching data....');
    let response = await fetch(url);
    console.log(response)
    let data = await response.json();
    factpara.innerHTML = data.data[2].fact
}

button.addEventListener("click", getFacts);
