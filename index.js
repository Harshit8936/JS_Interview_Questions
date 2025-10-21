console.log("Hello world");

const { encrypt } = require("node-qpdf2");

const pdf = {
  input: "./test/example.pdf",
  output: "/tmp/encrypted.pdf",
  password: "1234",
}

encrypt(pdf);