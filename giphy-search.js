const API_Key = 'f28WO0B82TphBfSrQc1fS8N6h4XuDP0e'

function renderGifs(response){
    const gifData = response.data;
    let html = '';
for (let gif of gifData){
    let url = gif.fixed_height.url;
    let alt = gif.title;  
     html += '<img src="${url}" alt="${alt}" />';
}


}

function queryResults(topic, num){
fetch('https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${topic}&limit=${num}&offset=0&rating=g&lang=en&bundle=messaging_non_clips'
).then(x => x.json())
.then(renfderGifs);
}

function formsubmitted(event){
    event.preventDefault();
   let queriedTopic = document.querySelectorAll('[name=giphy-content]').value; 
   queriedTopic = queriedTopic.trim();
   queriedTopic = encodeURIComponent(queriedTopic);
   let numOfGifs = document.querySelectorAll('[name=number-of-gifs]').value;
   queryResults(queriedTopic, numOfGifs);

}

document.querySelector(".js-gif-search-form").addEventListener("submit", formSubmitted);    

