require('./style.css')



    let randomNumber = () => {
        let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        let indexNumber= Math.floor(Math.random()* 12);
        return numero[indexNumber];
    
    };
    let randomPalo = () => { 
        let palo = ["heart", "club", "diamond", "spades"];
        let indexPalo= Math.floor(Math.random()* 4);
        return palo[indexPalo];
    };





    onclick=function () {
    document.querySelector(".card").classList.add(randomPalo());
    document.querySelector(".card").innerHTML=(randomNumber());
    
};



