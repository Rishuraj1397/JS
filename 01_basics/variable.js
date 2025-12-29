const accountId = 123456// this value can't be changed further in the code
let accountEmail = "Rishu@hotmail"// this value can be changed further because we used let keyword which are used for declaring variable
var accountPassword = "Rishu@123"// this value can be changed further because we used var keyword which are used for declaring variable 
                                //but this method is outdated and not recommended to use in modern JS becasue of its function scope
accountCity = "Bangalore"//this value is also a variable but we didn't use any keyword to declare it it is also acceptable in JS but not recommended
let accountState;// in this we declared variable but didn't assigned any value so by default it will be undefined

// accountId = 334455; // not allowed
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity]);