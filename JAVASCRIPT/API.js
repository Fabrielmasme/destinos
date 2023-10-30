async function logMovies() {
    const response = await fetch('https://randomuser.me/api');
    const user = await response.json();

    console.log(user.results[0].name.first);
    console.log(user.results[0].name.last);
    console.log(user.results[0].picture.thumbnail);

    document.querySelector(".caja_api .info_usuario #foto").src = user.results[0].picture.thumbnail;

    document.querySelector(".caja_api .info_usuario #nombre").textContent = user.results[0].name.first;

    document.querySelector(".caja_api .info_usuario #apellido").textContent = user.results[0].name.last;

}
    
logMovies();



