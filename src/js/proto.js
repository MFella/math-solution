let x = `-3x^(-2)-x^(-5)+2x^2`;
let signArr = [];
const splitted = x.split('+');
console.log(x.split(/[\-,]+/));


export class Solution
{
    constructor(coefs1, exps1, coefs2, exps2)
    {
        this.coefs1 = coefs1.split(',');
        this.exps1 = exps1.split(',');
        this.coefs2 = coefs2.split(',');
        this.exps2 = exps2.split(',');
        this.finalArr = [];
    }

    isEnabled()
    {
        if(this.coefs1[0] === "" || this.coefs2[0] === ""
        || this.exps1[0] === "" || this.exps2[0] === "") return false;
        if(this.coefs1.length !== this.exps1.length) return false;
        if(this.coefs2.length !== this.exps2.length) return false;

        let flag = true;
        this.coefs1.forEach(el => {
            let verify = parseFloat(el);
            if(isNaN(verify)) 
            {
                flag = false;
            }
        })
        this.coefs2.forEach(el => {
            if(isNaN(el)) {
                flag = false;
            }
        })
        this.exps1.forEach(el => {
            if(isNaN(el)){
                flag = false;
            } 
        })
        this.exps2.forEach(el => {
            if(isNaN(el)){
                flag = false;
            } 
        })

        return flag;
    }

    calculate()
    {
        if(this.isEnabled()){
            for(let i = 0 ; i < this.exps1.length; i++)
            {
                for(let j = 0 ; j < this.exps2.length; j++)
                {
                    if(this.exps1[i] === this.exps2[j])
                    {
                        this.finalArr.push([parseFloat(this.coefs1[i])+parseFloat(this.coefs2[j])
                        ,parseFloat(this.exps1[i])]);
                    }
                }
            }

            for(let x = 0; x < this.exps1.length; x++)
            {
                if(!this.exps2.includes(this.exps1[x]))
                {
                    this.finalArr.push([parseFloat(this.coefs1[x]), parseFloat(this.exps1[x])]);
                }
            }

            for(let y = 0; y < this.exps2.length; y++)
            {
                if(!this.exps1.includes(this.exps2[y]))
                {
                    this.finalArr.push([parseFloat(this.coefs2[y]), parseFloat(this.exps2[y])]);
                }
            }
        }else 
        {
            window.alert('check the usage!');
            throw 'Check the usage';
        }
    }

    showEquation()
    {
        let tempArr = [];
        this.finalArr.forEach((el, index, arr) => 
        {
            if((el[0] < 0 || (el[0] > 0 && index === 0)) && el[1] > 0)
            {
                tempArr.push(el[0]+'x^'+el[1]);

            } else if((el[0] < 0 || (el[0] > 0 && index === 0)) && el[1] < 0)
            {
                tempArr.push(el[0]+'x^'+ '(' + el[1] + ')');

            } else if(el[0] > 0 && index !== 0 && el[1] > 0)
            {
                tempArr.push('+'+el[0]+'x^'+el[1]);
            }else if(el[0] > 0 && index !== 0 && el[1] < 0)
            {
                tempArr.push('+'+el[0]+'x^'+'('+el[1]+')');
            }

        })
        return tempArr.join('');
    }
}

