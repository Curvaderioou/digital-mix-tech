var cases = document.querySelectorAll('.case-item-item');

document.addEventListener('scroll', () => {
    cases.forEach(umCase => {
        topo = umCase.getBoundingClientRect().top;
    
        if (topo > (window.innerHeight / 2)) {
            umCase.style = `filter: grayscale(100%);`;
        }
        else if (topo < (window.innerHeight / 2)) {
            umCase.style = `filter: grayscale(0%);`;
        }
    
    });
})