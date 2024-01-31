/* cattura navbar */
let mainNavbar = document.querySelector('#mainNavbar');

/* cattura logo gatti */
let logoA = document.querySelector('#logoA');
let logoB = document.querySelector('#logoB');

/* cattura toggler */
let navIcon = document.querySelector('#navIcon');

/* evento click sul toggle */
let confirm = false;

navIcon.addEventListener('click', ()=>{
    if(confirm == false){
        navIcon.style.transform = 'rotate(-130deg)';
        confirm = true;
    } else {
        navIcon.style.transform = 'rotate(0deg)';
        confirm = false;
    }
    
});

/* evento scroll */
window.addEventListener('scroll', ()=>{
   /* console.log(window.scrollY) */;
   if(window.scrollY > 0){
    mainNavbar.style.backgroundColor = 'var(--main)';
    mainNavbar.style.padding = '10px';
    logoA.classList.add('d-none');
    logoB.classList.remove('d-none');
}else{
    mainNavbar.style.backgroundColor = 'transparent';
    mainNavbar.style.padding = '0px';
    logoA.classList.remove('d-none');
    logoB.classList.add('d-none');
   }
   
});

/* set interval */
function createInterval(finalNumber, elemento){

    let counter = 0;

    let interval = setInterval(()=>{
        
        console.log(counter);
        if(counter < finalNumber){
            counter++
            elemento.innerHTML = counter;
            
        } else {
            clearInterval(interval);
        }
    }, 1);
}

/* cattura span con il numerino dentro */
let firstSpan = document.querySelector('#first-span');
let secondSpan = document.querySelector('#second-span');
let thirdSpan = document.querySelector('#third-span');

createInterval(300, firstSpan);
createInterval(1000, secondSpan);
createInterval(120, thirdSpan);

/* intersectionObserver() */
let titoloIntersecato = document.querySelector('#titoloIntersecato');

let check = false;

let observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting && check ==false){
            createInterval(300, firstSpan);
            createInterval(1000, secondSpan);
            createInterval(120, thirdSpan);
            check = true;
        } 
    });
})

observer.observe(titoloIntersecato);

/* mouse enter leave */
 
/* cattura camioncini */
let camioncini = document.querySelectorAll('.fa-truck-monster');
/* cattura card */
let colonne = document.querySelectorAll('.col-custom-trasporti');

/* per ogni colonna, tenendo traccia della singola colonna e dell' indice (dato che stanno in un singolo array-like) */
colonne.forEach((colonna, i)=>{
     /* variabile d' appoggioper tornare al text-accent di origine */
      let columnsConfirm = false;

     /* deve partire l'evento mouseenter che toglie il colore accent all'icona e lo da marrone*/
     colonna.addEventListener('mouseenter', ()=>{
        if(columnsConfirm == false){
            camioncini[i].classList.remove('text-accent');
            camioncini[i].classList.add('text-sec');
        }else{
            camioncini[i].classList.remove('text-blackCus');
            camioncini[i].classList.add('text-whiteCus');
        }
     });
     
     /* quando l'utente esce con il mouse leave dalla colonna, deve togliere il colore sec e deve dare il colore nero all' icona */
      colonna.addEventListener('mouseleave', ()=>{
        if(columnsConfirm == false){
            camioncini[i].classList.remove('text-sec');
            camioncini[i].classList.add('text-blackCus');
            columnsConfirm = true;
        }else{
            camioncini[i].classList.remove('text-whiteCus');
            camioncini[i].classList.add('text-accent');
            columnsConfirm = false;
        }
        
      });

});

/* sezione categorie */
let categories= [
    {name : 'auto', icon : '<i class="fa-solid fa-car fa-beat-fade my-3 fa-2x"></i>', announcements : 26},

    {name : 'elettronica', icon : '<i class="fa-solid fa-robot fa-beat-fade my-3 fa-2x"></i>', announcements : 2000},

    {name : 'abbigliamento', icon : '<i class="fa-solid fa-shirt fa-beat-fade my-3 fa-2x"></i>', announcements : 700},

    {name : 'animali', icon : '<i class="fa-solid fa-hippo fa-beat-fade my-3 fa-2x"></i>', announcements : 1},

    {name : 'sport', icon : '<i class="fa-solid fa-person-skiing fa-beat-fade my-3 fa-2x"></i>', announcements : 46},

    {name : 'giardinaggio', icon : '<i class="fa-solid fa-tree fa-beat-fade my-3 fa-2x"></i>', announcements : 39},

    {name : 'edilizia', icon : '<i class="fa-solid fa-city fa-beat-fade my-3 fa-2x"></i>', announcements : 10},

    {name : 'viaggi', icon : '<i class="fa-solid fa-plane-departure fa-beat-fade my-3 fa-2x"></i>', announcements : 10000},
];

/* ci siamo catturati il contenitore papà delle card per le categorie */
let cardsCategoryWrapper = document.querySelector('#cardsCategoryWrapper');

categories.forEach((categoria)=>{
    let div = document.createElement('div');
    div.classList.add('col-12', 'col-md-3', 'mb-4');
    div.innerHTML = `
            <div class="category-card">
                <div class="border-dashed">
                    ${categoria.icon}
                    <h3>${categoria.name}</h3>
                    <p class="fw-bold">${categoria.announcements}</p>
                </div>
            </div>
    `;

    cardsCategoryWrapper.appendChild(div);
});