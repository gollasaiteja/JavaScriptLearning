var url = "http://api.icndb.com/jokes/random/"
async function convert(){
    var whereid;
    let response = await fetch(`${url}`,{method:'GET'});
    let data = await response.json()
    console.log('Response',response)
    whereid = data.value.joke
    document.getElementById('result').innerText=whereid
}
