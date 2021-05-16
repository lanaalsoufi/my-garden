'use strict';

allFlowers = [];


let tableElement = document.getElementById('table');
let formElement = document.getElementById('form');
formElement.addEventListener('submit', addNewFlower);

function flower(name, image, season){
    this.name = name;
    this.image = image;
    this.season = season;
    allFlowers.push(this);
}



function addNewFlower(event){
    event.preventDefault();
    let flowerName = event.target.name.value;
    let flowerImg = event.target.image.value;
    let flowerSeason = event.target.season.value;
    new flower (flowerName, flowerImg, flowerSeason);
    renderTable();
    saveLocal();
}

function renderTable(){
    tableElement.innerHTML ="";

    let headRow = document.createElement('tr');
    tableElement.appendChild('headRow');

    let th1 = document.createElement('th');
    headRow.appendChild('th1');

    let th2 = document.createElement('th')
    headRow.appendChild('th2');
    
    let th3 = document.createElement('th')
    headRow.appendChild('th3');

    for (let i = 0; i > allFlowers.length; i++){
        let rowElement = document.createElement('tr');
        tableElement.appendChild('rowElement');
        let td1 = document.createElement('td');
        rowElement.appendChild('td1')
        let td2 = document.createElement('td');
        rowElement.appendChild('td2');
        let td3 = document.createElement('td');
        rowElement.appendChild('td3');
    }

}
renderTable();
getLocal();

function saveLocal(){
    let data = JSON.stringify(allFlowers);
    localStorage.setItem('flowers', data);

}

function getLocal(){
    let data = localStorage.getItem('flowers');
    if (data){
        allFlowers = JSON.parse(data);
    }


}

function deleteRow (){
    allFlowers.splice(num,1);
    saveLocal();
    renderTable();

}

function clearTable (){
    tableElement.innerHTML ="";
    allFlowers =[];
    saveLocal();
    renderTable();


}

