let words = [];
const nWords = 20;
const apiUrl = 'https://flynn.boolean.careers/exercises/api/random/word';

function getWord(){
    axios.get(apiUrl)
    .then((response)=>{
        words.push(response.data.response);
    })
    .catch((err)=>{
        console.error(err);
    })
    .then(()=>{
        //display the list of words
        console.clear();
        console.log(words);
    });
}

for (let i = 0; i < nWords; i++) {
    getWord();
}