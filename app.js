//users
const users = [
  { email: "danialeyvaziiii@gmail.com", password: "123456789" },
  { email: "danialeyz@gmail.com", password: "123456789" },
  { email: "eyvazidanial444@gmail.com", password: "123456789" },
];

function validate() {
  // email variables
  const emailValue = document.getElementById("email").value;
  const usersEmail = users.map((n) => {
    return n.email;
  });
  let emailValidate = emailValue.search(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  // password variables
  const password = document.getElementById("password").value;
  const usersPassword = users.map((n) => {
    return n.password;
  });

  try {
    if (emailValue == "") throw "please enter your email";
    if (emailValidate === -1) throw "your email is incorrect";
    if (usersEmail.includes(emailValue) === false) throw "please sign in first";
  } catch (err) {
    document.querySelector("#emailerror").innerHTML = err;
  }

  try {
    if (password.trim() == "") throw "please enter your password";
    if (typeof password.trim() == "number")
      throw "your password must be number";
    if (usersPassword.includes(password) === false) throw "incorrect password";
    if (password.length > 12 || password.length < 8)
      throw "your password must be between 8 an 12 charecters";
  } catch (er) {
    document.querySelector("#passworderror").innerHTML = er;
  }
}
