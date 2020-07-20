import {Solution} from './proto';

const newbie = new Solution('10.1,1,-2.3', '1,2,-0.1', '1,2,3,2.3', '1,2,3,-0.1');

let xd = newbie.isEnabled();
console.log(`xd is: ${xd}`);

let button = document.querySelector('#solve');

button.addEventListener('click', () => 
{
    let exp1 = document.querySelector('#exp1').value;
    let exp2 = document.querySelector('#exp2').value;
    let coef1 = document.querySelector('#coef1').value;
    let coef2 = document.querySelector('#coef2').value;

    const sol = new Solution(coef1, exp1, coef2, exp2);

    try{

    sol.calculate();
    document.querySelector(".solution").value = sol.showEquation();
    }
    catch (e)
    {
        console.log(`Something went wrong: ${e}`);
    }
})

