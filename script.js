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
        if (window.scrollY >= 210) {
            title.style.opacity = 1;
        } else {
            title.style.opacity = 0;
        }
        if (window.scrollY >= 210) {
            About_text.style.left = "0%";
        } else {
            About_text.style.left = "100%";
        }
        if (window.scrollY >= 210) {
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

let text_in_english = ['Home', 'About', 'Services','Contact us', 'Industrial Maintenance and Supplies','About','Sofinord, your trusted ally, stands out in industrial maintenance, supply and services. With an absolute dedication to excellence, we offer complete solutions to meet the complex needs of modern industries. From maintenance to industrial supply, repair and automation, Sofinord excels. From pneumatics and hydraulics to electrical cabinets, our expertise is extensive and reliable.'," Sofinord's mission is crystal clear: we are your ultimate partner for industrial success. With quality, reliability and innovation at our core, we're ready to meet the challenges of modern industry. Count on us for maintenance, repairs, upgrades - we exceed expectations. Join Sofinord to unlock the true potential of your industrial operations.",'Services','Industrial Maintenance and Supplies','Industrial machinery repair and commissioning','Automatism, Pneumatics, Hydraulics','Installation and realization of electrical boxes','Contact us','SEND A MESSAGE','Home','About','Services'];

// Store the original text content in an array
let originalTextContent = Array.from(txt).map(t => t.textContent);

Language.addEventListener('click', () => {
    let value = Language.getAttribute('value');
    if (value == 'EN') {
        Language.setAttribute('value', 'FR');
        txt.forEach(t => {
            let vv = t.getAttribute('data-value');
            t.textContent = text_in_english[vv];
        });
    } else if (value == 'FR') {
        Language.setAttribute('value', 'EN');
        
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

//------------------------------------------------------------------------------------------

//function to send a message

const btn = document.getElementById('button');


document.getElementById('form')
.addEventListener('submit', function (event) {
event.preventDefault();

   btn.textContent = 'SENDING...';

   const serviceID = 'default_service';
   const templateID = 'template_9ww89f6';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.textContent = 'SEND MESSAGE';
      //if u want to alert a messag
       
      //Delet the input filde after sending the message
        let from_name = document.querySelector('#from_name');
        let email_id = document.querySelector('#email_id');
        let message = document.querySelector('#message');
            from_name.value = '';
            email_id.value = '';
            message.value = '';

    }, (err) => {
      btn.textContent = 'SEND MESSAGE';
      alert(JSON.stringify(err));
    });


});