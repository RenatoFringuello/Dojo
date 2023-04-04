const sentenceDom = document.getElementById('sentenceDom');
let words = [];
const nWords = 20;
const apiUrl = 'https://flynn.boolean.careers/exercises/api/random/word';

function injectSentence(words, domElement){
    domElement.innerText = '';
    for (let i = 0; i < words.length; i++) {
        domElement.innerText += words[i];
    }
    domElement.innerText = domElement.innerText.split('.').join(' ');
}

function getWord(){
    axios.get(apiUrl)
    .then((response)=>{
        words.push(response.data.response + '.');
    })
    .catch((err)=>{
        console.error(err);
    })
    .then(()=>{
        //display the list of words
        if(words.length == nWords){
            console.clear();
            console.log(words);
            injectSentence(words, sentenceDom);
        }
    });
}

for (let i = 0; i < nWords; i++) {
    getWord();
}