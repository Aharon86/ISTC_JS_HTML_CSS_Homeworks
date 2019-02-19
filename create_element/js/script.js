var tag = document.getElementById('tag');
var color = document.getElementById('color');
var text = document.getElementById('text');
var background = document.getElementById('background');
var section = document.getElementsByTagName('section')[0];

document.getElementsByTagName('button')[0].addEventListener('click', callConstructor);

function callConstructor() {
    if (tag.value != '' || color.value != ''|| text.value != '' || background.value != '') {
        var element = new CreateElement(tag.value, color.value, text.value, background.value);
        section.appendChild( element.create() );
    }else{
        section.innerHTML = 'Please enter information';
    }
    
}

function CreateElement(t, c, te, b) {
    this.tag = t;
    this.color = c;
    this.text = te;
    this.background = b;
    this.create = function () {
        var el = document.createElement( this.tag );
        var tx = document.createTextNode( this.text );
        el.appendChild( tx );
        el.style.color = this.color;
        el.style.backgroundColor = this.background;
        return el;
    }
}