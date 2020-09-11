
const buscarData = async () => {
    const input = document.querySelector("#input-id");
    try {
        const res = await axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${input.value}`);
        const dataResp = res.data[0];
        console.log(dataResp)
        mostrarData(dataResp)
    }catch(err) {
        console.error(`hubo un error`);
        alert("No se ha encontrado la raza ingresada");
    } 
}

const mostrarData = (dataResp) => {
    const container = document.querySelector("#container");
    // const sectionRaza = document.createElement("section");
    const info = document.createElement("tr");
    const tituloName = document.createElement("th");
    const infoName = document.createElement("td"); 
    const tituloTemp = document.createElement("th");
    const infoTemp = document.createElement("td");
    const tituloOrigin = document.createElement("th");
    const infoOrigin = document.createElement("td");
    const tituloDescription = document.createElement("th");
    const infoDescription = document.createElement("td");

    info.className = "info-api";
    tituloName.innerText = "Race";
    tituloName.className = "titulo";
    infoName.innerText = dataResp.name;
    tituloTemp.innerText = "Temperament";
    tituloTemp.className = "titulo";
    infoTemp.innerText = dataResp.temperament;
    tituloOrigin.innerText = "Origin";
    tituloOrigin.className = "titulo";
    infoOrigin.innerText = dataResp.origin;
    tituloDescription.innerText = "Description";
    tituloDescription.className = "titulo";
    infoDescription.innerText = dataResp.description;

    tituloDescription.appendChild(infoDescription);
    tituloOrigin.appendChild(infoOrigin);
    tituloTemp.appendChild(infoTemp);
    tituloName.appendChild(infoName);
    info.appendChild(tituloName);
    info.appendChild(tituloTemp);
    info.appendChild(tituloOrigin);
    info.appendChild(tituloDescription);
    container.appendChild(info);
}


const seccionRazas = async () => {
    let seccionRandom = document.querySelector("#seccion-random");
    seccionRandom.style.display = "none";

    let seccionRaza = document.querySelector("#seccion-raza");
    seccionRaza.style.display = "flex";

    let buttonSearch = document.querySelector("#search").addEventListener("click", buscarData);
}

const cargarImagen = () => {
    axios.get(`https://api.thecatapi.com/v1/images/search/`)
    .then(resp => {
        let seccionRaza = document.querySelector("#seccion-raza");
        seccionRaza.style.display = "none";
        let seccionRandom = document.querySelector("#seccion-random");
        let imagen = document.querySelector("#random-cat-image");
        imagen.classList.add("imgRandom");
        imagen.src = resp.data[0].url;
        seccionRandom.style.display = "block";
        seccionRandom.appendChild(imagen);
    }).catch(err => console.log(`La imagen no fue encontrada`));
}

const load = () => {
    const random = document.querySelector("#random");
    random.addEventListener("click", cargarImagen);
    const raza = document.querySelector("#raza");
    raza.addEventListener("click", seccionRazas);
}