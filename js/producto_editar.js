let argurl = location.search.split('&');

let data = [];

for(let x = 0; x < argurl.length; x++){
    data[x] = argurl[x].split('=');
}

document.getElementById('id').value = decodeURIComponent(data[0][1])
document.getElementById('nombre').value = decodeURIComponent(data[1][1])
document.getElementById('precio').value = decodeURIComponent(data[2][1])
document.getElementById('stock').value = decodeURIComponent(data[3][1])
document.getElementById('imagen').value = decodeURIComponent(data[4][1])

function modificar(){
    let id = document.getElementById('id').value;
    let n = document.getElementById('nombre').value;
    let p = document.getElementById('precio').value;
    let s = document.getElementById('stock').value;
    let i = document.getElementById('imagen').value;

    let producto ={
        nombre: n,
        precio: p,
        stock: s,
        imagen: i
    };

    let url= 'https://magogaro.pythonanywhere.com/productos/'+id;
    let options = {
        body: JSON.stringify(producto),
        method: 'PUT',
        headers: {'Content-Type':'application/json'}
    }

    fetch(url, options)
    .then(function(){
        alert("Producto modificado exitosamente");
        window.location.href = './productos.html'
    }).catch(error =>{
        alert('No pudo modificarse el prodcto');
        console.error(error);
    })
}
