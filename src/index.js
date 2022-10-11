

    function fvNeve() {
        
    }

    let masikFv = function(param1, param2) {
        console.log(param1);
    };

/*     document.addEventListener('DOMContentLoaded',function () {
        console.log('page loaded');

        document.getElementById('gomb').addEventListener('click',function(){
            document.body.style.backgroundColor='lightblue';
        })
    });
 */
/* function osszehasonlit(a,b) {
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