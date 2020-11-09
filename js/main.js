document.getElementById('color').addEventListener('input', getColor)

function getColor(){
    let col = document.getElementById('color').value

    document.getElementById('Visualizar').style.background=col
    document.getElementById('Visualizar').innerHTML=col
}