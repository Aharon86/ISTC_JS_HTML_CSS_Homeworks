var inp = document.getElementById('inp');
var d1 = document.getElementById('d1');

document.getElementsByTagName('button')[0].addEventListener('click', () => {
    try {
            if (!parseFloat(inp.value)) {
                throw 'Please insert a number';
            }
            if (!inp.value) {
                throw 'Input empty';
            }
            if (inp.value > 10) {
                throw 'Number more than 10';
            }
            if (inp.value <= 10) {
                throw 'Number less than or equal to 10';
            }
            
            d1.innerHTML = inp.value;
        } catch (error) {
            d1.innerHTML = error;
        } finally {
            inp.value = '';
        }
});

function factorial(num) {
    if (num == 0) {
        return 1;
    }
    return num * factorial(num-1);
}
d1.innerHTML = factorial(4);


