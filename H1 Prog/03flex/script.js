const panels = document.querySelectorAll('.panel');

function toggelOpen(){
    this.classList.toggle('open');

}

function toggelActive(e){
    if (e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }

}

panels.forEach(panel => panel.addEventListener('click', toggelOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggelActive));