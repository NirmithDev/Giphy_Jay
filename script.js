console.log("Nirmith it is loaded")
//take in user input
let a = document.getElementById("submit")
//set up the API 
let APIKEY = "FsgtpTBkKdTJ5857mWYKnAQ2iva4Aq9B"

a.addEventListener("click",()=>{
    console.log("BUTTON IS CLICKED SUCCESSFULLY")
    
    let b = document.getElementById("searchs").value.trim();
    console.log(b)
    if(b!=""){
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=`;
    url = url.concat(b)
    console.log(url)
    fetch(url).then(res =>res.json()).then(content=>{
        /*
        Dummy syntax
        <div id="o">
            <a href="https://giphy.com/gifs/movie-film-cute-l0E9CrSVVI3g4" target="_blank">
                <img src="https://media2.giphy.com/media/l0E9CrSVVI3g4/giphy.gif?cid=90447d2cg9lypdm7i5zeqg5pxw141dft2e3f8apjc84hgi7g&rid=giphy.gif&ct=g" alt="happy feet" width="200" height="200">
            </a>
        </div>
        */
        //this is the entire output
        //console.log(content.data)
        outputContainer=''
        //output container for DOM manipulation
        //assign it to the list and then append it to the main container
        arr=content.data
        //console.log(arr)
        //for loop thru it and then append it to the output container and then display it
        for(i=0;i<arr.length;i++){
            //console.log(arr[i].url)
            outputContainer+=`
            <div id="o">
                <a href=${arr[i].url} target="_blank">
                    <img src=${arr[i].images.downsized.url} alt=${arr[i].title} width="200" height="200">
                </a>
            </div>
            `
        }
            document.querySelector('#out').innerHTML=outputContainer
        })
    }else{
        outputContainer=`
        <div id="out" >
                <div class="containe">
                    <div class="box box1"></div>
                    <div class="box box2"></div>
                    <div class="box box3"></div>
                    <div class="box box4"></div>
                </div>
            </div>
            <div id="stuff">
                <p>YOU DIDN'T INPUT ANYTHING</p>
            </div>
        `
        document.querySelector('#output').innerHTML=outputContainer

    }
            
    
})

//