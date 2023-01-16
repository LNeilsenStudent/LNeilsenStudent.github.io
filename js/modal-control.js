const openModalButton = document.querySelectorAll('[data-modal-target]')
const closeModalButton = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('dark-overlay')





// Personal Data goes here: ----------------------------------------------------------------
const alex_info = ["Alex Milnes", "(Student Number: S3987656, General Information: Alex was born in Sydney, Australia, is a loving husband and father of twin boys has relocated to Brazil. He has a diploma in security and risk management, worked as a security operations manager, Hobbies: Playing cricket and rugby. Reading about politics and economics, IT Interest: Alex job profile was also to liaison with the technology department to combat and deter security threats, which got him interested to know about IT and cyber security, IT Experience: Alex has experience with biometrics which he got during his work as security operations manager, Languages: English and Portuguese) "]
const chris_info = ["Chris Box", "write some stuff about chris (stdent No. personal info, etc). write some stuff about chris (stdent No. personal info, etc). write some stuff about chris (stdent No. personal info, etc). write some stuff about chris (stdent No. personal info, etc). write some stuff about chris (stdent No. personal info, etc). write some stuff about chris (stdent No. personal info, etc). write some stuff about chris (stdent No. personal info, etc). "]
const ash_info = ["Ash Choudhry", "write some stuff about ash (stdent No. personal info, etc). write some stuff about ash (stdent No. personal info, etc). write some stuff about ash (stdent No. personal info, etc). write some stuff about ash (stdent No. personal info, etc). write some stuff about ash (stdent No. personal info, etc). write some stuff about ash (stdent No. personal info, etc). write some stuff about ash (stdent No. personal info, etc). write some stuff about ash (stdent No. personal info, etc). "]
const lachie_info = ["Lachie Neilsen", "write some stuff about lachie (stdent No. personal info, etc). write some stuff about lachie (stdent No. personal info, etc). write some stuff about lachie (stdent No. personal info, etc). write some stuff about lachie (stdent No. personal info, etc). write some stuff about lachie (stdent No. personal info, etc). write some stuff about lachie (stdent No. personal info, etc). write some stuff about lachie (stdent No. personal info, etc). "]
const ida_info = ["Ida Gange", "write some stuff about ida (stdent No. personal info, etc). write some stuff about ida (stdent No. personal info, etc). write some stuff about ida (stdent No. personal info, etc). write some stuff about ida (stdent No. personal info, etc). write some stuff about ida (stdent No. personal info, etc). write some stuff about ida (stdent No. personal info, etc). write some stuff about ida (stdent No. personal info, etc). write some stuff about ida (stdent No. personal info, etc). "]
// Myer-Briggs data goes here: -------------------------------------------------------------
const alex_mb = ["ENFJ-A", "Extraversion: 71%<br>Intuitive: 59%<br>Thinking: 34%<br>Judging: 78%<br>Assertive: 51%"]
const chris_mb = ["ISTJ-T", "Extraversion: 2%<br>Intuitive: 23%<br>Thinking: 52%<br>Judging: 68%<br>Assertive: 31%"]
const ash_mb = ["ESFJ-A", "Extraversion: 71%<br>Intuitive: 59%<br>Thinking: 34%<br>Judging: 78%<br>Assertive: 51%"]
const lachie_mb = ["INTJ-A", "Extraversion: 43%<br>Intuitive: 66%<br>Thinking: 54%<br>Judging: 58%<br>Assertive: 51%"]
const ida_mb = ["ENFJ-A", "Extraversion: 71%<br>Intuitive: 59%<br>Thinking: 34%<br>Judging: 78%<br>Assertive: 51%"]







// Events:
openModalButton.forEach(img => {
    img.addEventListener('click', () =>{
        const modal=document.querySelector(img.dataset.modalTarget)
        const content=img.getAttribute('id')

        openModal(modal, getContent(content))
    })
})

closeModalButton.forEach(button => {
    button.addEventListener('click', () =>{
        const modal=button.closest('.modal')
        closeModal(modal)
    })
})

overlay.addEventListener('click', () =>{
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal =>{
        closeModal(modal)
    })
})

// actions
function openModal(modal, content){
    if(modal==null){
        return
    }
    else{
        modal.querySelector('.modal-body').innerHTML=content[1]
        modal.querySelector('.modal-head').innerHTML=content[0]
        modal.classList.add('active')
        overlay.classList.add('active')
    }
}

function closeModal(modal){

    if(modal==null){
        return
    }
    else{
        modal.classList.remove('active')
        overlay.classList.remove('active')
    }
}


// data handling
function getContent(content){
    switch(content){

        case("alex-icon"):
            return alex_info
        case("chris-icon"):
            return chris_info
        case("ash-icon"):
            return ash_info
        case("lachie-icon"):
            return lachie_info
        case("ida-icon"):
            return ida_info
        case("alex-mb"):
            return alex_mb
        case("chris-mb"):
            return chris_mb
        case("ash-mb"):
            return ash_mb
        case("lachie-mb"):
            return lachie_mb
        case("ida-mb"):
            return ida_mb
           }
}