document.getElementById('pierwszaBtn').addEventListener('click', function() {
    document.getElementById('pierwsza').style.display = 'block';
    document.getElementById('druga').style.display = 'none';
    this.classList.add('active');
    document.getElementById('drugaBtn').classList.remove('active');
});

document.getElementById('drugaBtn').addEventListener('click', function() {
    document.getElementById('pierwsza').style.display = 'none';
    document.getElementById('druga').style.display = 'block';
    this.classList.add('active');
    document.getElementById('pierwszaBtn').classList.remove('active');
});

fetch("liga1.json")
.then(function(response){
    return response.json();
})
.then(function(teams){
    let placeholder = document.querySelector("#liga1");
    let out = "";
    for(let item of teams){
        out += `
        <div class="team" onclick="swap('${item.shortcut}')">
                        <div class="team-info" id="${item.shortcut}-info">
                            <img src="images/teams/${item.shortcut}.png" class="logo" alt="Team Logo">
                            <h2>${item.team}</h2>
                        </div>
                        <div class="team-players" id="${item.shortcut}-players" style="display: none;">
                            <div class="team-name">
                                <img src="images/teams/${item.shortcut}.png" class="logo" alt="Team Logo">
                                <h3>${item.team}</h3>
                            </div>
                            <div class="players">
                                <div class="linia">
                                    <img src="images/linie/top.png" alt="Top Lane">
                                    <h3>${item.top}</h3>
                                </div>
                                <div class="linia">
                                    <img src="images/linie/jg.png" alt="Jungle">
                                    <h3>${item.jg}</h3>
                                </div>
                                <div class="linia">
                                    <img src="images/linie/mid.png" alt="Mid Lane">
                                    <h3>${item.mid}</h3>
                                </div>
                                <div class="linia">
                                    <img src="images/linie/adc.png" alt="ADC">
                                    <h3>${item.adc}</h3>
                                </div>
                                <div class="linia">
                                    <img src="images/linie/sup.png" alt="Support">
                                    <h3>${item.sup}</h3>
                                </div>         
                            </div>
                        </div>
                    </div>`
    }
    placeholder.innerHTML = out;
})
fetch("liga2.json")
.then(function(response){
    return response.json();
})
.then(function(teams){
    let placeholder = document.querySelector("#liga2");
    let out = "";
    for(let item of teams){
        out += `
        <div class="team" onclick="swap2('${item.shortcut}2')">
                        <div class="team-info" id="${item.shortcut}2-info">
                            <img src="images/teams/${item.shortcut}.png" class="logo" alt="Team Logo">
                            <h2>${item.team}</h2>
                        </div>
                        <div class="team-players" id="${item.shortcut}2-players" style="display: none;">
                            <div class="team-name">
                                <img src="images/teams/${item.shortcut}.png" class="logo" alt="Team Logo">
                                <h3>${item.team}</h3>
                            </div>
                            <div class="players">
                                <div class="linia">
                                    <img src="images/linie/top.png" alt="Top Lane">
                                    <h3>${item.top}</h3>
                                </div>
                                <div class="linia">
                                    <img src="images/linie/jg.png" alt="Jungle">
                                    <h3>${item.jg}</h3>
                                </div>
                                <div class="linia">
                                    <img src="images/linie/mid.png" alt="Mid Lane">
                                    <h3>${item.mid}</h3>
                                </div>
                                <div class="linia">
                                    <img src="images/linie/adc.png" alt="ADC">
                                    <h3>${item.adc}</h3>
                                </div>
                                <div class="linia">
                                    <img src="images/linie/sup.png" alt="Support">
                                    <h3>${item.sup}</h3>
                                </div>         
                            </div>
                        </div>
                    </div>`
    }
    placeholder.innerHTML = out;
})

function swap(team) {
    const infoDiv = document.getElementById(`${team}-info`);
    const playersDiv = document.getElementById(`${team}-players`);

    if (infoDiv.style.display === "none") {
        infoDiv.style.display = "flex";
        playersDiv.style.display = "none";
    } else {
        infoDiv.style.display = "none";
        playersDiv.style.display = "flex";
    }
}
function swap2(team) {
    const infoDiv = document.getElementById(`${team}-info`);
    const playersDiv = document.getElementById(`${team}-players`);

    if (infoDiv.style.display === "none") {
        infoDiv.style.display = "flex";
        playersDiv.style.display = "none";
    } else {
        infoDiv.style.display = "none";
        playersDiv.style.display = "flex";
    }
}