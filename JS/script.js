window.onload = function(){

    // DEFINING ELEMENTS
    const mode_btn = document.querySelector('#mode');
    const body = document.querySelector('body');

    const menubtn= document.querySelector('.menubtn');
    const navlist= document.querySelector('.navlist');
    const closebtn= document.querySelector('.close');

    const projectcard = document.getElementsByClassName('project-card');

    // CHECKING THEME PEFERENCE
    if(localStorage.getItem('Theme')){
        body.classList.add('dark-mode');
        mode_btn.classList.toggle('isdark');
        menubtn.classList.toggle('darkbtn');
        for(i=0;i<projectcard.length;i++){
            projectcard[i].classList.toggle('dark-card');
        }
        
    }

    //ONCLICK EVENTS
    mode_btn.onclick= function(){
        mode_btn.classList.toggle('isdark');
        menubtn.classList.toggle('darkbtn');
        body.classList.toggle('dark-mode');
        for(i=0;i<projectcard.length;i++){
            projectcard[i].classList.toggle('dark-card');
        }

        // STORING THE PEFERENCE
        if( body.classList.contains('dark-mode')){
            localStorage.setItem('Theme','dark-mode');
        }
        else{
            localStorage.removeItem('Theme');
        }
    }

    // MENU BUTTON ONCLICK EVENTS
    menubtn.addEventListener('click',function(){
        navlist.classList.toggle('isactive');
    });
    closebtn.addEventListener('click',function(){
        navlist.classList.toggle('isactive');
    });
}