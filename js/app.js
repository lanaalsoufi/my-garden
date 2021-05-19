'use strict';

let allFlowers = [];

let tableElement = document.getElementById('table');
let formElement = document.getElementById('form');
formElement.addEventListener('submit', addNewFlower);


function Flower (name, image, season){
    this.name = name;
    this.image =`./img/${image}.jpeg`;
    this.season = season;
    allFlowers.push(this);
}


function addNewFlower(event){
    event.preventDefault();
    let flowerName = event.target.name.value;
    let flowerImg = event.target.image.value;
    let flowerSeason = event.target.season.value;
    new Flower (flowerName, flowerImg, flowerSeason);
    saveLocal();
    renderTable();
}


function renderTable(){
    tableElement.innerHTML ='';

    let headRow = document.createElement('tr');
    tableElement.appendChild(headRow);

    let th1 = document.createElement('th');
    headRow.appendChild(th1);
    th1.innerHTML='# Image';

    let th2 = document.createElement('th');
    headRow.appendChild(th2);
    th2.innerHTML ='Name';
    
    let th3 = document.createElement('th');
    headRow.appendChild(th3);
    th3.innerHTML= 'Season';


    for (let i = 0; i < allFlowers.length; i++){
        let rowElement = document.createElement('tr');
        tableElement.appendChild(rowElement);

        let td1 = document.createElement('td');
        rowElement.appendChild(td1);
        td1.innerHTML =`<span onclick ="deleteRow(${i})">X</span> <img src="${allFlowers[i].image}">`;

        let td2 = document.createElement('td');
        rowElement.appendChild(td2);
        td2.innerHTML=allFlowers[i].name;

        let td3 = document.createElement('td');
        rowElement.appendChild(td3);
        td3.innerHTML=allFlowers[i].season;
    }

}
getLocal();
renderTable();


function saveLocal(){
    let data = JSON.stringify(allFlowers);
    localStorage.setItem('Flowers', data);

}


function getLocal(){
    let data = localStorage.getItem('Flowers');
    if (data){
        allFlowers = JSON.parse(data);
    }


}


function deleteRow (num){
    allFlowers.splice(num,1);
    saveLocal();
    renderTable();

}


function clearTable (){
    tableElement.innerHTML ='';
    allFlowers =[];
    saveLocal();
    renderTable();

}

