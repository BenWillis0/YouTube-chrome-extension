console.log('hey');

let lastLocation = window.location.pathname;

setInterval(() => {load();},1000);



removeViews = newViews => {
    for(let i = 0;i < newViews.length;i++){
        newViews[i].firstChild.textContent = '';
        newViews[i].firstElementChild.textContent = '';

    }
}

const load = () => {
    let views = document.querySelectorAll("#metadata-line");
    removeViews(views);  
    
};

window.onload = load();
window.onhashchange = load();




