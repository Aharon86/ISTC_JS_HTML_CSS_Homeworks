/* create container */
var con = document.createElement('DIV');
con.id = 'container';
document.body.insertBefore(con, document.getElementsByTagName('script')[0]);

/* create header */
var header = document.createElement('HEADER');
con.appendChild(header);

/* create social block and add fonts*/
var social = document.createElement('DIV');
var nav = document.createElement('NAV');
social.classList.add('social');
header.appendChild(social);


var classFonts = [
        "fab fa-facebook-f",
        "fab fa-twitter",
        "fab fa-google-plus-g",
        "fab fa-linkedin-in"
    ];

for (let i = 0; i < classFonts.length; i++) {
    let span = document.createElement('SPAN');
    let iT = document.createElement('I');
    iT.className = classFonts[i];
    span.appendChild(iT);
    social.appendChild(span);
    
}

/* create navigation block*/
header.appendChild(nav);
var logo = document.createElement('DIV');
logo.classList.add('logo');
nav.appendChild(logo);
var h3 = document.createElement('h3');
h3.appendChild(document.createTextNode('FLEX'));
nav.appendChild(h3);

var ul = document.createElement("ul");
ul.classList.add('menu');
var menu = [
        'HOME',
        'SERVICES',
        'PORTFOLIO',
        'TEAM',
        'CONTACT'
    ];

for (let key in menu) {
   let li = document.createElement('li');
   let a = document.createElement('a');
   a.href = '#';
   a.appendChild(document.createTextNode(menu[key]));
   li.appendChild(a);
   ul.appendChild(li);
}
nav.appendChild(ul);

// ----
var h2 = document.createElement('h2');
h2.appendChild(document.createTextNode('DIGITAL STUDIO'));
header.appendChild(h2);

var p = document.createElement('p');
p.appendChild(document.createTextNode('LET US DESIGN YOUR WEBSITE'));
header.appendChild(p);

var but = document.createElement('button');
but.appendChild(document.createTextNode('RESPONSIVE TEMPLATE'));
header.appendChild(but);

// ---------------SECTION----------
var section = document.createElement('section');
con.appendChild(section);

var h3 = document.createElement('h3');
h3.appendChild(document.createTextNode('OUR SERVICES'));
section.appendChild(h3);

var p = document.createElement('p');
p.appendChild(document.createTextNode('LET US HELP YOU TO CREATE PROFESSIONAL WEBSITES'));
section.appendChild(p);

var items = document.createElement('div');
items.className = 'items';
var arrItems = [
        'far fa-file-code',
        'far fa-paper-plane',
        'fas fa-landmark',
        'fas fa-flask'
    ];
for (let key in arrItems) {
    let div = document.createElement('div');
    let iT = document.createElement('i');
    iT.className = arrItems[key];
    div.appendChild(iT);
    items.appendChild(div);
}
section.appendChild(items);

// -------------------article------------
var article = document.createElement('article');
con.appendChild(article);

var h3 = document.createElement('h3');
h3.appendChild(document.createTextNode('OUR PORTFOLIO'));
article.appendChild(h3);

var p = document.createElement('p');
p.appendChild(document.createTextNode('WHAT WE HAVE DONE SO FAR'));
article.appendChild(p);

var div = document.createElement('div');
div.classList.add('portfolio');
article.appendChild(div);
var arrImg = [
        'image/p1.jpg',
        'image/p2.jpg',
        'image/p3.jpg',
        'image/p4.jpg',
        'image/p5.jpg',
        'image/p6.jpg',
        'image/p7.jpg',
        'image/p8.jpg'
    ];
for (let i = 0; i < arrImg.length; i++) {
    let img = document.createElement('div');
    img.style.backgroundImage = "url(" + arrImg[i] + ")";
    document.getElementsByClassName('portfolio')[0].appendChild(img);
}