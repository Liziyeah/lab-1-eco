//Primer llamado a la api

const getFirstData = async () => {
    try{
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        document.getElementById('dog-image').src = data.message
        
    }catch(error) {
        console.error(error);
        
    }
}

const callFirstData = document.getElementById('first-api')
callFirstData.addEventListener('click', getFirstData)

//Segundo llamado
const getSecondData = async () => {
    try{
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        const sectionText = document.getElementById('cats-messages');
        const text = document.createElement('p');
        text.innerHTML = data.fact;
        sectionText.appendChild(text);
        
    }catch(error) {
        console.error(error);
        
    }
}

const callSecondData = document.getElementById('second-api');
callSecondData.addEventListener('click', getSecondData);

//Tercer llamado
