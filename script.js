
window.onload = neuerdiv();
function neuerdiv(){
	var div=document.createElement('div');
	div.id ='gameZona';
	document.body.appendChild(div);
}

let gameZona = document.querySelector("#gameZona");

let mas = [
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1], 
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    
]
for (let x = 0; x < mas.length; x++){
    for(let y = 0; y < mas[x].length; y++){
        if (mas[x][y] === 1) {
            mas[x][y] = document.createElement("div")
            console.log(mas[x][y])
            mas[x][y].classList.add("brick")
        }
        if (mas[x][y] === 0) {
             mas[x][y] = document.createElement("div")
            mas[x][y].classList.add("brick2")
        }
        gameZona.appendChild(mas[x][y])
    }
}
