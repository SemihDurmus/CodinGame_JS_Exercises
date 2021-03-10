console.log("-------REGEX-------------");

//Turn a string to URL

function urlify(title) {
  const punctuation = /[.,/#!$^&%*+@;:{}=\-_`´~'"|]/g;
  let titleWithoutPunctuation = title.replace(punctuation, "");
  return titleWithoutPunctuation.toLowerCase().trim().replaceAll(" ", "-");
}

console.log(
  "URL : ",
  urlify("I'm the %20 owner & co-founder of 22*23 Business + Creative")
);

//Check password strength = t/f?
//min 8 char long, min 1 uppercase, 1 lowercase, 1 nr, 1 special character

function checkValidity(pass) {
  let oneLowerCase = /(?=.+[a-z])/;
  let oneUpperCase = /(?=.+[A-Z])/;
  let oneDigit = /(?=.+[0-9])/;
  let oneSpecialChar = /(?=.+[!@#$%^&*(),.?":{}|<>])/;
  let minEightChars = /(?=.{8,})/;
  let isValid =
    oneLowerCase.test(pass) &&
    oneUpperCase.test(pass) &&
    oneDigit.test(pass) &&
    oneSpecialChar.test(pass) &&
    minEightChars.test(pass);
  return isValid ? "Is valid" : "Not valid";
}

console.log("123456 : ", checkValidity("123456"));
console.log("As1234.6 : ", checkValidity("As1234.6"));
console.log("As1234./6 : ", checkValidity("As1234.6"));
console.log("qW3@qWpt : ", checkValidity("qW3@qWpt"));
console.log("9Ab!4567 : ", checkValidity("9Ab!4567"));
