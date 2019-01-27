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