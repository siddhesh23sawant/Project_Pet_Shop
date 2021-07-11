// onLoad = alert(rnd_gen());


function rnd_gen()
{
    home = Math.random();
    home = Math.floor(home * 1000);
    adopted = Math.random();
    adopted = Math.floor(adopted * 1200);
    vaccinated = Math.random();
    vaccinated = Math.floor(vaccinated * 500);
    return home,adopted,vaccinated;
}

var home, adopted, vaccinated = rnd_gen();

document.querySelector(".home").textContent = home;
document.querySelector(".adopted").textContent = adopted;
document.querySelector(".vaccinated").textContent = vaccinated;