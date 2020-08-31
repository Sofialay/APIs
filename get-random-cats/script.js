//https://api.thecatapi.com/v1/images/search/

const seccionRazas = () => {
    let imgStyle = document.querySelector("#img-style");
    imgStyle.style.display = "none";
    const removeImg = document.querySelector(".imgRandom");
    removeImg.remove();
}

const cargarImagen = () => {
        axios.get(`https://api.thecatapi.com/v1/images/search/`)
        .then(resp => {
            let imgStyle = document.querySelector("#img-style");
            let img = document.createElement("img");
            img.className = "imgRandom";
            img.src = resp.data[0].url;
            imgStyle.style.display = "block";
            imgStyle.appendChild(img);
        }).catch(err => console.log(`La imagen no fue encontrada`));
    }

const load = () => {
    const random = document.querySelector("#random");
    random.addEventListener("click", cargarImagen);
    const raza = document.querySelector("#raza");
    raza.addEventListener("click", seccionRazas);
}