const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu1 = dropdown.querySelector('.menu1');
    const options = dropdown.querySelectorAll('.menu1 li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu1.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu1.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            options.classList.add('active');
        });
    });
})

function togglepopup() {
    document.getElementById("popup-1").classList.toggle("active");
}

function show() {
    document.getElementById('edit-popup').classList.toggle('active');
}

function showreason() {
    document.getElementById('reason-popup').classList.toggle('active');
}

function erasetext() {
    document.getElementById("alasan").value = "";
}

 const countchar = () => {
    let noc = document.getElementById('alasan').value.length;

    document.getElementById('showdata').innerHTML = noc + "/100";
} 
