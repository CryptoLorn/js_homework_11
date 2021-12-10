//є масив -

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

for (let i = 0; i < users.length; i++){
    let div = document.createElement('div');
    div.innerText = `${users[i].name} ${users[i].age} ${users[i].status}`;

    let button = document.createElement('button');
    button.innerText = 'Add';
    button.onclick = function (){
        let favorites = JSON.parse(localStorage.getItem('favorites'));

        if (!favorites){
            let favorites = [];
            favorites.push(users[i]);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
        else{
            favorites.push(users[i]);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    }

    div.appendChild(button);
    document.body.appendChild(div);
}