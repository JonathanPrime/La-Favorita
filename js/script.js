let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () => {

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if (window.scrollY > 60) {
    document.querySelector('#scroll-top').classList.add('active');
  } else {
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader() {
  document.querySelector('.loader-container').classList.add('fade-out');
}

popupWhatsApp = () => {

  let btnClosePopup = document.querySelector('.closePopup');
  let btnOpenPopup = document.querySelector('.whatsapp-button');
  let popup = document.querySelector('.popup-whatsapp');
  let sendBtn = document.getElementById('send-btn');

  btnClosePopup.addEventListener("click", () => {
    popup.classList.toggle('is-active-whatsapp-popup')
  })

  btnOpenPopup.addEventListener("click", () => {
    popup.classList.toggle('is-active-whatsapp-popup')
    popup.style.animation = "fadeIn .6s 0.0s both";
  })

  let sendDom = document.getElementById('whats-dom');
  sendDom.addEventListener("click", () => {
    let msg = document.getElementById('send-dom').value;
    let relmsg = msg.replace(/ /g, "%20");
    //just change the numbers "1515551234567" for your number. Don't use +001-(555)1234567     
    window.open('https://wa.me/573143229091?text=' + relmsg, '_blank');
  });

  let sendDom1 = document.getElementById('whats-dom-1');
  sendDom1.addEventListener("click", () => {
    let msg = document.getElementById('send-dom-1').value;
    let relmsg = msg.replace(/ /g, "%20");
    //just change the numbers "1515551234567" for your number. Don't use +001-(555)1234567     
    window.open('https://wa.me/573143229091?text=' + relmsg, '_blank');
  });

  let sendDom2 = document.getElementById('whats-dom-2');
  sendDom2.addEventListener("click", () => {
    let msg = document.getElementById('send-dom-2').value;
    let relmsg = msg.replace(/ /g, "%20");
    //just change the numbers "1515551234567" for your number. Don't use +001-(555)1234567     
    window.open('https://wa.me/573143229091?text=' + relmsg, '_blank');
  });

  let sendDom3 = document.getElementById('whats-dom-3');
  sendDom3.addEventListener("click", () => {
    let msg = document.getElementById('send-dom-3').value;
    let relmsg = msg.replace(/ /g, "%20");
    //just change the numbers "1515551234567" for your number. Don't use +001-(555)1234567     
    window.open('https://wa.me/573143229091?text=' + relmsg, '_blank');
  });

  let sendDom4 = document.getElementById('whats-dom-4');
  sendDom4.addEventListener("click", () => {
    let msg = document.getElementById('send-dom-4').value;
    let relmsg = msg.replace(/ /g, "%20");
    //just change the numbers "1515551234567" for your number. Don't use +001-(555)1234567     
    window.open('https://wa.me/573143229091?text=' + relmsg, '_blank');
  });

  let sendDom5 = document.getElementById('whats-dom-5');
  sendDom5.addEventListener("click", () => {
    let msg = document.getElementById('send-dom-5').value;
    let relmsg = msg.replace(/ /g, "%20");
    //just change the numbers "1515551234567" for your number. Don't use +001-(555)1234567     
    window.open('https://wa.me/573143229091?text=' + relmsg, '_blank');
  });

  let sendDom6 = document.getElementById('whats-dom-6');
  sendDom6.addEventListener("click", () => {
    let msg = document.getElementById('send-dom-6').value;
    let relmsg = msg.replace(/ /g, "%20");
    //just change the numbers "1515551234567" for your number. Don't use +001-(555)1234567     
    window.open('https://wa.me/573143229091?text=' + relmsg, '_blank');
  });

  let sendDom7 = document.getElementById('whats-dom-7');
  sendDom7.addEventListener("click", () => {
    let msg = document.getElementById('send-dom-7').value;
    let relmsg = msg.replace(/ /g, "%20");
    //just change the numbers "1515551234567" for your number. Don't use +001-(555)1234567     
    window.open('https://wa.me/573143229091?text=' + relmsg, '_blank');
  });

  let sendDom8 = document.getElementById('whats-dom-8');
  sendDom8.addEventListener("click", () => {
    let msg = document.getElementById('send-dom-8').value;
    let relmsg = msg.replace(/ /g, "%20");
    //just change the numbers "1515551234567" for your number. Don't use +001-(555)1234567     
    window.open('https://wa.me/573143229091?text=' + relmsg, '_blank');
  });

  let sendDom9 = document.getElementById('whats-dom-9');
  sendDom9.addEventListener("click", () => {
    let msg = document.getElementById('send-dom-9').value;
    let relmsg = msg.replace(/ /g, "%20");
    //just change the numbers "1515551234567" for your number. Don't use +001-(555)1234567     
    window.open('https://wa.me/573143229091?text=' + relmsg, '_blank');
  });

  let sendDom10 = document.getElementById('whats-dom-10');
  sendDom10.addEventListener("click", () => {
    let msg = document.getElementById('send-dom-10').value;
    let relmsg = msg.replace(/ /g, "%20");
    //just change the numbers "1515551234567" for your number. Don't use +001-(555)1234567     
    window.open('https://wa.me/573143229091?text=' + relmsg, '_blank');
  });

  sendBtn.addEventListener("click", () => {
    let msg = document.getElementById('whats-in').value;
    let relmsg = msg.replace(/ /g, "%20");
    //just change the numbers "1515551234567" for your number. Don't use +001-(555)1234567     
    window.open('https://wa.me/573143229091?text=' + relmsg, '_blank');

  });
  /* Open pop-up in 15 seconds */
  /* setTimeout(() => {
    popup.classList.toggle('is-active-whatsapp-popup');
  }, 15000); */
}

popupWhatsApp();


function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut();