var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var noaction = document.querySelector('.modal__actions button');
console.log(selectPlanButtons);
var toggleBtn = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
//console.log(backdrop);

//backdrop.style.display = 'block';
for(var i = 0; i < selectPlanButtons.length; i++){
    selectPlanButtons[i].addEventListener('click',() => {
        modal.classList.add('open');
        backdrop.classList.add('open');
    }); 
}

backdrop.addEventListener('click',() => {
    if(mobileNav){
        mobileNav.classList.remove('open');
    }
    modelFun();
   
});

function modelFun(){
    debugger;
    //modal.style.display = 'none';
    //backdrop.style.display = 'none';
    if(modal){
        modal.classList.remove('open');
    }
    
    backdrop.classList.remove('open');
}
if(noaction){
noaction.addEventListener('click',() => {
    modelFun();
});
}

toggleBtn.addEventListener('click', () => {
    if(mobileNav){
        mobileNav.classList.add('open');
    }
    backdrop.classList.add('open');
});
