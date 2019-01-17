

document.getElementsByClassName('but')[0].addEventListener('click', getValue);

function getValue() {
    var form1 = document.getElementById('form1').getElementsByTagName('input');
    var x = '';

    for (let i = 0; i < form1.length; i++) {
        if ( form1[i].attributes[0].value == 'radio' ) {
            if (form1[i].checked) {
                x += form1[i].attributes[1].value + ':' + form1[i].value + '<br>';
            } 
            continue;
        } 
        
        x += form1[i].attributes[1].value + ':' + form1[i].value + '<br>';
    }

    document.getElementById('test').innerHTML = x;
}