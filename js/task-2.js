const getUsersWithFriend = (users, friendName) => {
   return users.filter(user => user.friends.includes(friendName));
 };
 
 const allUsers = [
   {
     name: "Moore Hensley",
     friends: ["Sharron Pace"]
   },
   {
     name: "Sharlene Bush",
     friends: ["Briana Decker", "Sharron Pace"]
   },
   {
     name: "Ross Vazquez",
     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
   },
   {
     name: "Elma Head",
     friends: ["Goldie Gentry", "Aisha Tran"]
   },
   {
     name: "Carey Barr",
     friends: ["Jordan Sampson", "Eddie Strong"]
   },
   {
     name: "Blackburn Dotson",
     friends: ["Jacklyn Lucas", "Linda Chapman"]
   },
   {
     name: "Sheree Anthony",
     friends: ["Goldie Gentry", "Briana Decker"]
       ];

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
