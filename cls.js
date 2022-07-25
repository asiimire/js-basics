class Car{
  constructor(brand,weight){
    this.carname = brand;
  
    this.carweight = weight;
  }
  }
  present(){
    return "I have a "+ this.carname;
  }
  
mycar= new Car("840");
console.log(mycar.present());
