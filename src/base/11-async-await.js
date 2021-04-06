
//const getImagenPromesa = () => new Promise(resolve => resolve('https://holamundo.com'))
    
//getImagenPromesa().then(console.log);

export  const getImagen = async() => {

    try{
        const apiKey = 'U1EcdsdDnWHPhup4SXfT3mhOGGlzGtMs';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json(); 

        const {url} = data.images.original;
        
        return url; 
    }catch(error){
        //manejo del error
        //console.error(error)
        return 'No existe';
    }
}

