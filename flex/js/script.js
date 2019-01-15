var toggle = document.getElementById('toggle');
var nav = document.getElementsByTagName('nav')[0];

toggle.addEventListener('click', menu);
// window.addEventListener('resize', windowResize);
// window.addEventListener('click', menu);


function menu() {
    if (nav.className === 'navigation') {
        toggle.style.transform = 'rotateZ(0deg)';
        // nav.style.display = 'none';
        nav.className = '';
    } else {
        toggle.style.transform = 'rotateZ(180deg)';
        // nav.style.display = 'block';
        nav.className = 'navigation';
    }
    
}

// function windowResize(e) {
//     console.log(e.target.innerWidth);
//     if (e.target.innerWidth > 476) {
//         nav.style.display = 'block';
//         // alert();
//     }
// }
// function myEndFunction() {
//     console.log(marker);
//     if (marker) {
//         marker = false;
//     } else {
//         marker = true;
//     }
// }
