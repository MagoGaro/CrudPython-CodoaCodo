function convertDateFormat(string) {
    var info = string.split('-');
    let info2 = info[2]
    info2= string.split(':');
    console.log(info);
    console.log(info2);
    let n = 2;
    
    return info[2].substring(info[2].length-n) + '/' + info[1] + '/' + info[0] + ' ' + info2[0].substring(info2[0].length-n)+ ':'  + info2[1] + ':' + info2[2];
  }

fetch('https://magogaro.pythonanywhere.com/log')
.then(res=> res.json())
.then(data =>{
    console.log(data);
    for (let i = 0;i < data.length;i++)
    {
    let fecha = data[i]['fecha_hora'];
    
    logsito.innerHTML += `<tr>
    <td scope="row">${data[i]['id_producto']}</td>
    <td>${data[i]['usuario']}</td>
    <td>${data[i]['operacion']}</td>
    <td>${convertDateFormat(fecha)}</td>
    </tr>
    
    `}
}).catch(err =>{
    console.error(err);
})
