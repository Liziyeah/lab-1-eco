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

const categories = {
    limit: [],
    name: [],
    type: [],
}

const getThirdData = async () => {
    try{
        const response = await fetch('https://api.jikan.moe/v4/anime');
        const data = await response.json();
        categories.limit = [];
        categories.name = [];
        categories.type = [];
        
        data.data.forEach(category => {
            categories.limit.push(category.mal_id);
            categories.name.push(category.title_english);
            categories.type.push(category.type);
            
        });       
        showCategories();
    }catch(error) {
        console.error(error);
        
    }
}

const showCategories = () => {
    const limitSection = document.getElementById('limit-section');
    const nameSection = document.getElementById('name-section');
    const typeSection = document.getElementById('type-section');

    limitSection.innerHTML += categories.limit.map(id => `<p>${id}</p>`).join('');
    nameSection.innerHTML += categories.name.map(name => `<p>${name || "No name"}</p>`).join('');
    typeSection.innerHTML += categories.type.map(type => `<p>${type || "No type"}</p>`).join('');
}

const callThirdData = document.getElementById('button-third');
callThirdData.addEventListener('click', getThirdData);