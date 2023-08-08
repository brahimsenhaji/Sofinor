let text = document.querySelector('.text');

window.onload = ()=>{
    text.classList.add('textmove');
}


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