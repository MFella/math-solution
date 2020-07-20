const objs = module.require('./exp');

test('isEnabled should return false, if there is no coefficients or exponents', () => 
{
    let sol1 = objs.sol1;
    let sol2 = objs.sol2;
    expect(sol1.isEnabled()).toBe(false);
    expect(sol2.isEnabled()).toBe(false);
})

test('isEnabled should return false, if length of coefficients(or exponents) array doesnt match', () => 
{
    let sol3 = objs.sol3;
    let sol4 = objs.sol4;
    expect(sol3.isEnabled()).toBe(false);
    expect(sol4.isEnabled()).toBe(false);
})

test('isEnabled should return false, if some there is some letter', () => 
{
    let sol5 = objs.sol5;
    let sol6 = objs.sol6;
    expect(sol5.isEnabled()).toBe(false);
    expect(sol6.isEnabled()).toBe(false);
})

test('isEnabled should return true, if every input is filled appropriate', () => 
{
    let sol7 = objs.sol7;
    expect(sol7.isEnabled()).toBe(true);
})

test('calculate should throw an error, if isEnabled was false', () => 
{
    let sol3 = objs.sol3;   
    try{
        sol3.calculate();
    }catch(e)
    {
        expect(e).toBe('Check the usage');
    }
})

test('calculate should return should push something in finalArr, if every input is filled appropriate',
() => {

    let sol7 = objs.sol7;
    const beforeArr = sol7.finalArr.slice();
    sol7.calculate();
    expect(sol7.finalArr).not.toBe(beforeArr);
})

test('showEquation should return empty array if data is not appropriate', () => 
{
    let sol5 = objs.sol5;
    expect(sol5.showEquation().length).toBe(0);
})

test('showEquation should return string which is final solution', () => 
{
    const fin = "2x^1";
    let sol7 = objs.sol7;
    expect(sol7.showEquation()).toBe(fin);
})