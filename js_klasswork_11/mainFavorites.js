let favorites = JSON.parse(localStorage.getItem('favorites'));

for (let i = 0; i < favorites.length; i++){
    let div = document.createElement('div');
    div.innerText = `${favorites[i].name} ${favorites[i].age} ${favorites[i].status}`;

    document.body.appendChild(div);
}