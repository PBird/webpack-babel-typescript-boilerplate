import testConfig from "./test";

console.log("Test code", testConfig.ts);

const el = document.getElementById("test") as HTMLParagraphElement;

el.innerText = "deneme 12121 ";

async function test() {
  console.log("test 1234");
}

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

test();
