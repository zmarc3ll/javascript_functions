    function fvNeve() {}
    let masikFv = function(param1, param2) {
        console.log(param1);
    };
/*     document.addEventListener('DOMContentLoaded',function () {
        console.log('page loaded');

        document.getElementById('gomb').addEventListener('click',function(){
            document.body.style.backgroundColor='lightblue';
        })
    });
 
 function osszehasonlit(a,b) {
    if (a < b) {
        return -1;
    } else if  (a > b){
        return 1;
    } else {
        return 0;
    }
} */

    let t = [4,5,87,23,12,-88];
    /* t.sort((a,b) => {
        if (a<b){
        return -1;
    } else if  (a > b){
        return 1;
    } else {
        return 0;
    }
    }); */
    t.sort((a, b) => {return a - b});
    //t = t.filter((e) => {return e > 0; });
    t = t.filter((e) => Math.abs(e) > 50);
    t = t.map(e => e.toFixed(2));
    t.forEach((e, index) => {
        console.log(index,e);
    });
    console.log(t);
    let szam=56;
    class Kutya {
        nev= 'Bodri';
        kor= 10;
        constructor(){
            Math.random();
        }
    }

    //! mellékhatás - side effect !
    //nincs mellékhatás: 
    1+1;
    Math.sqrt(1*2/4);
    [1,2,3].filter(e => e > 2);
    szam > 2;
    [56, 33].includes(szam);
    new Kutya();
    new Date();

    //van mellékhatása: 
    console.log('hello');
    let a = szam++;
    let b = ++szam;
    console.log(a, b);
    t.push(45);
    t.sort();
    Math.random();

    //tiszta függvény - pure functions
    function kettonelnagyobb(t) {
        return t.filter(e => e > 2);
    }

    //nem tiszta - a document nem paraméter v. lokális változó
    function tombKiir(t) {
        t.forEach(e => console.log(e));
    }

    function getButtonColor(){
        document.getElementById('gomb').style.backgroundColor;
    }

    //nem tiszta
    function getDateAsString() {
        return (new Date()).toISOString();
    }

    document.addEventListener('DOMContentLoaded', () => {
        console.log('page loaded');
        let idozito;
        //closure
        document.getElementById('gomb').addEventListener('click', () =>{
        document.body.style.backgroundColor='lightblue';
        clearTimeout();
        setTimeout(() => {
            document.body.style.backgroundColor = 'white';
        }, 2000)
        if (idozito !== undefined) {
            console.log('clearing timer', idozito)
            clearInterval(idozito);
        }
        idozito = setInterval(() => {
            console.log(document.body.style.backgroundColor)
        }, 1000)
    });
});