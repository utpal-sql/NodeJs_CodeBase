let buff1 = Buffer.from("123456789");

let buff2 = Buffer.from("HELLO");

buff2.copy(buff1,2,2);

console.log(buff1.toString());

console.log(buff2.toString());

console.log(Buffer.compare(buff1,buff2));

console.log(buff1.equals(buff2));

console.log(Buffer.concat([buff1,buff2]).toString());