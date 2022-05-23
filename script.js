//#region Task1
// Bir class yaradirsiz ve o classin icerisinde plus, 
// minus, multiply, divide functionlari olur.
// var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2)
// resultin neticesi bu yazilisa gore 50+6-30*3/2 mentiqi ile 
// (riyazi prinsibi unudun,vurma bolme onceliyine ehtiyac yoxdu) 39 olmalidi

class CustomMatch {

constructor(number){

    this.number=number;
}

    plus(num1){
        this.number+=num1;
        return  this;
    }
    minus(num1){
        this.number-=num1;
        return  this;
    }
    multiply(num1){
        this.number*=num1;
        return  this;
    }
    divide(num1){
        this.number/=num1;
        return  this;
    }
}

var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2);
console.log(result);

//#endregion

//#region Task2
// Custom bir array classi yaradin. 
// Hemin arrayin find ve push metodu olsun. 
// Taski ishleyib turn in edin.



//#endregion
