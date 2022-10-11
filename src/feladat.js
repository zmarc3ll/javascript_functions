
function oszthatoOttel(value) {
    return value % 5 == 0;
  }

  class Szazlabu {
    labakSzama;
    
    constructor(labakSzama){
        this.labakSzama = labakSzama; 
    }
  }

  Szazlabu.prototype.toString = function szazlabuToString() {
    let ans = this.labakSzama+' lábú százlábú';
    return ans;
}

function myfunction(){
    let obj=new Szazlabu(0);
    console.log(Szazlabu.toString());
}

document.addEventListener('DOMContentLoaded',() => {
    console.log('page loaded');
    let t=[];
    for (let index = 0; index < 20; index++) {
        let a=Math.floor((Math.random()*30)+1)
           t.push(a);
    }
    document.getElementById('gomb').addEventListener('click',() => {
        let t2 = t.filter(oszthatoOttel);
        console.log(t2);
    })
    document.getElementById('hozzaad').addEventListener('click',() => {
        t.push(document.getElementById('numberInput').value);
    });
    myfunction();
});
