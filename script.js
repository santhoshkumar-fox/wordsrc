const $input = document.getElementById("wordinput");
const $def = document.getElementById("defanition");
const $audio = document.getElementById("audiosrc");
const $ss = document.getElementById("ss");



const url  = "https://api.dictionaryapi.dev/api/v2/entries/en/";
$input.addEventListener("keypress",function(e){
    if(e.code == "Enter" && e.target.value !== ""){

        console.log("enter hited!");

        var theword = e.target.value;
        fetchgetapi(theword);
    }
});


async function fetchgetapi(word){
    try {
        console.log("enter api");
        const response = await fetch(url+word);

        if (response.status !== 200) throw new Error("No Path Available");

        const data = await response.json();

        // console.log(data[0].meanings[0].definitions[0].definition)
        // console.log(data[0].phonetics[1].audio)

        $def.innerText = data[0].meanings[0].definitions[0].definition;
        var a = String(data[0].phonetics[1].audio);
        document.getElementById("audiosrc").setAttribute('src', a);
        

        
    } catch (error) {
        console.log(error.message);
        $def.value = error.message;
        
    }

}
fetchgetapi('someone');
