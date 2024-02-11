// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// iife -> To remove pollution of global scope and to immediately run this func

// syntax 
// ({})() 

// Named IIFE
(function chai() {
    console.log(`DB 1 Connected`)
})(); // -> ';' is used to end it IMP

// Un Named IIFE
((name) => {
    console.log(`DB 2 Connected ${name}`);
})('Butola');
