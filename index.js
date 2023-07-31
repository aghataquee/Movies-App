const inpt_field=document.getElementById("search-field");
const cntainer=document.getElementById('container');
inpt_field.addEventListener('change',()=>{
    const moviename=inpt_field.value;
    fetchmovieDetails(moviename);
})
async function fetchmovieDetails(moviename){
    const apiKey=" d70a904f";
    const apiUrl=`http://www.omdbapi.com/?i=tt3896198&apikey=d70a904f`;
    
    try{
        const response=await fetch(apiUrl);
        const data=response.json();
        if(data.Response=='True'){
            displaymoviedetails(data);

        }
        else{
            displayErrorMessage('Movie not found');
        }
    }
    catch{
        console.log("Error fetching movie details")
        displayErrorMessage("Error fetching movie details")

    }
        
    
    
}
function displaymoviedetails(movie){
    const moviedetails=document.createElement('div');
    moviedetails.classList.add('props');
    moviedetails.innerHTML=`
    <h2>${movie.title}</h2>
    <h3>${movie.year}</h3>
    <h3>${movie.director}</h3>
    `
    cntainer.appendChild(moviedetails);

}
function displayErrorMessage(message){
    document.getElementById('error-Message').textContent=message;
}