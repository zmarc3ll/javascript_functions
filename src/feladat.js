
function oszthatoOttel(value) {
    return value % 5 === 0;
  }

  class Szazlabu {
    #labakSzama;
    
    constructor(labakSzama){
        this.#labakSzama = labakSzama; 
    }
    toString () {
        return this.#labakSzama+' lábú százlábú';
    }
  }
  console.log(new Szazlabu(0).toString());

  function labakbolSzazlabuk(labakTomb) {
    return labakTomb.map(szam => new Szazlabu(szam)); 
  }

  console.log(labakbolSzazlabuk([1,45,989]));

  function szazlabumegjelenit(id, szazlabuk) {
    let elem =document.getElementById(id);
    szazlabuk.array.forEach(element => {
        let li = document.createElement('li');
        li.textContent=element.toString();
        
    });
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
});
