// Vicentico Card
var vicen_likes = 0;
var countVicen = document.querySelector(".likes-Vicen");

function like_Vicen(){
    vicen_likes++;
    countVicen.innerText = vicen_likes + " like(s)"
}

// Los Cafres
var caf_likes = 0;
var countCaf = document.querySelector(".likes-Caf");

function like_Caf(){
    caf_likes++;
    countCaf.innerText = caf_likes + " like(s)"
}

// Los Angeles Azules
var laa_likes = 0;
var countLaa = document.querySelector(".likes-Laa");

function like_Laa(){
    laa_likes++;
    countLaa.innerText = laa_likes + " like(s)"
}