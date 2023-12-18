const dataAnimation = document.querySelectorAll('[data-animation]');
const animatedClass = 'animated';

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null;
            if(!immediate) func.apply(context, args)
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};

const animationScroll = () => {
    const formWindow = window.innerHeight*0.75;
    const windowTop = window.scrollY + formWindow;
    dataAnimation.forEach(element => {
        if(windowTop > element.offsetTop){
            element.classList.add(animatedClass);
        } else {
            element.classList.remove(animatedClass);
        }
    })
}

animationScroll();

if(dataAnimation.length > 0){   
    window.addEventListener('scroll', debounce(animationScroll, 50));
}