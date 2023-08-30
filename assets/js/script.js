console.log('we');
/* 

Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

*/

listaSpesa = ['pasta', 'pomodori', 'prosciutto', 'formaggio', 'snack', 'latte']
console.log(listaSpesa);

//DOM
const ulEl = document.createElement('ul');

i = 0
while (i < listaSpesa.length) {
    
    const el =  listaSpesa[i]
    console.log(el);
    
    
    i++
}
