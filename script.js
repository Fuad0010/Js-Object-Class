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


class CustomArray{
    constructor(arr){
    this.arr=arr;
    }
    Push1(num){
        this.arr.push(num);
        return this;
    }


    Find(num){
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i]==num) {
                return num;
            }
            else{
                console.log("Haven't number in this array.");
            }   
        }   
    }
}

var PushAndFind = new CustomArray([2,4,6]).Push1(8).Find(2);


console.log(PushAndFind);

//#endregion
