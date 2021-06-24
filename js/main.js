// Modalni ochuvchi hamma elementlarni topiladi
let modElsLink = document.querySelectorAll('.js-open-modal');
// Modal topiladi
let modalEl = document.querySelector('.modal');
// Modalni yopuvchi element topiladi
let modalCloseBtn = modalEl.querySelector('.js-close-modal');

// Modalni ochuvchi funksiya (modalga mos klassni qo'shadi)

let openModal = function() {
  modalEl.classList.add('modal--open');
}

// Modalni yopuvchi funksiya (modaldan mos klassni olib tashlaydi)

let closeModal = function() {
  modalEl.classList.remove('modal--open');
}


// Agar modalni ochuvchi tugmalar bo'lsa
if(modElsLink.length > 0) {
  modElsLink.forEach(function (link) {
    link.addEventListener('click', function(e) {
      e.preventDefault()

      openModal()
    })
  })
}
  // Ularning har biriga link deb murojaat qiladi
    // va har biriga click hodisasida
      // tabiiy reaksiyani to'xtatib
      // Modalni ochish funksiyasini ishga tushiradi



      if(modalCloseBtn) {
        modalCloseBtn.addEventListener('click', function(e) {
          e.preventDefault();

          closeModal();
        })
      }
// Agar modalni yopuvchi tugma bo'lsa
  // U tugmaga click hodisasida
    // Modalni yopish funksiyasini ishga tushirishni buyuradi




