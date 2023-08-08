let text = document.querySelector('.text');
let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
window.onload = ()=>{
    text.classList.add('textmove');
    img1.classList.add('img1move');
    img2.classList.add('img2move');
}
//================================================================================

    let title = document.querySelector('.title');
    let About_text = document.querySelector('.About_text');
    let img4 = document.querySelector('.img4');
    let title1 = document.querySelector('.title1');
    let card = document.querySelectorAll('#card');
    window.onscroll = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 210) {
            title.style.opacity = 1;
        } else {
            title.style.opacity = 0;
        }
        if (window.scrollY >= 220) {
            About_text.style.left = "0%";
        } else {
            About_text.style.left = "100%";
        }
        if (window.scrollY >= 215) {
            img4.style.opacity = 1;
        } else {
            img4.style.opacity = 0;
        }
        if (window.scrollY >= 570) {
            title1.style.top = "0%";
        } else {
            title1.style.top = "-20%";
        }
       card.forEach(card =>{
        if (window.scrollY >= 760) {
            card.style.left = "0%";
        } else {
            card.style.left = "100%";
        }
       })
    };



//==============================Language
let Language = document.querySelector('.Language');
let txt = document.querySelectorAll('#txt');

let text_in_english = ['Home', 'About', 'Services','Contact us', 'Industrial Maintenance and Supplies'];

// Store the original text content in an array
let originalTextContent = Array.from(txt).map(t => t.textContent);

Language.addEventListener('click', () => {
    let value = Language.getAttribute('value');
    if (value == 'FR') {
        Language.setAttribute('value', 'EN');
        txt.forEach(t => {
            let vv = t.getAttribute('data-value');
            t.textContent = text_in_english[vv];
        });
    } else if (value == 'EN') {
        Language.setAttribute('value', 'FR');
        
        // Restore the original text content
        txt.forEach((t, index) => {
            t.textContent = originalTextContent[index];
        });
    }
});


//responsiv ====================================================

let fa_bars = document.querySelector('.fa-bars');
let nav = document.querySelector('.nav');
fa_bars.addEventListener('click', ()=>{
   fa_bars.classList.toggle('fa-xmark');

   nav.classList.toggle('slidNav');
})