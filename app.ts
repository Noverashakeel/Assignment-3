// Q: Name Cases: Store a person’s name in a variable,
//  and then print that person’s name in lowercase, uppercase, and titlecase.


//lowercase
let personName: string = "Novera"
console.log("lowercase:", personName.toLowerCase());

//uppercase
console.log("uppercase:", personName.toLocaleUpperCase());

//titlecase
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));

