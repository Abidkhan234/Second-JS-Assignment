// For POP 

var Number =[1,2,3,4,5];
console.log("Before remove =",Number.toString());

var removeLastvalue = Number.splice(4,1);

console.log("After remove =",Number.toString());
console.log("Remove value =",removeLastvalue.toString());

console.log("\n");

// For PUSH

var Names =["Ahmed","Ali","Sheroz","Nadeem","Fahad"];
console.log("Before addition =",Names.toString());

var addLastvalue = Names.splice(5,1,"Khalid");

console.log("After addition =",Names.toString());
console.log("Added value = Khalid");

console.log("\n");

// For SHIFT 

var Fruit =["Apple","Mango","Cocunut","Grape"];
console.log("Before remove =",Fruit.toString());

var removeFirstvalue = Fruit.splice(0,1);

console.log("After remove =",Fruit.toString());
console.log("Remove value =",removeFirstvalue.toString());

console.log("\n");

// For UN-SHIFT

var heroName=["Iron-Man","Thor","Spider-Man","Hulk"];
console.log("Before remove =",heroName.toString());

var addFirstvalue = heroName.splice(0,0,"DeadPool");

console.log("After addition =",heroName.toString());
console.log("Added value = DeadPool");

console.log("\n");