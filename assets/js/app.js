const acordion = document.querySelectorAll('.acordion .acordion-item');

for(let i = 0; i < acordion.length; i++){
    
    acordion[i].addEventListener('click', () => {
        for(h = 0; h < acordion.length;h++){
            acordion[h].classList.remove('active')
        }

        acordion[i].classList.toggle('active');
    });
}