console.log('we');
/* 

Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

*/

 const listaSpesa = ['pasta', 'pomodori', 'prosciutto', 'formaggio', 'snack', 'latte']
//console.log(listaSpesa);

//DOM
const ulEl = document.getElementById('listaspesa');

let i = 0;

while(i < listaSpesa.length){
    
    const liEL = document.createElement('li');
    liEL.append(listaSpesa[i]);
    ulEl.append(liEL);

    i++
} 