//console.log(1);
//sentTimeout(() => {
//    console.log(2);
//}, 3000);
//sentTimeout(() => {
//    console.log(3);
//}, 3000);
//sentTimeout(() => {
//    console.log(4);
//}, 3000);
//sentTimeout(() => {
//    console.log(5);
//}, 3000);

//Cuello de botella
console.log(1);
sentTimeout(() => {
    console.log(2);
}, 5000);
sentTimeout(() => {
    console.log(3);
}, 3000);
for(let i = 0; i <= 9999999999; i++);
    console.log(4);