// Promises - ES6 i se zamena za callbacks
// Promise state - fullfilled, pending, rejected
// Promise returns - then, catch, finally

const users = [
  { id: 1, username: "user1", password: "1234" },
  { id: 2, username: "user2", password: "abcd" },
];

function findUser(username) {
  return new Promise((resolve, reject) => {
    const user = users.find((u) => u.username === username);
    setTimeout(() => {
      // simulacija na povik na server so odlozeno povikuvanje
      if (user) {
        resolve(user);
      } else {
        reject("User not found!");
      }
    }, 1000); //posle 1 sekunda izvrsi go toa sto e vnatre vo callback funkcijata
  });
}

// Fullfilled - baranje
findUser("user1")
  .then((res) => console.log(res)) // baranjeto e fullfilled
  .catch((err) => console.log(err)) // baranjeto e rejected
  .finally(() => console.log("Sekogas se izvrsuva"));

// Rejected - baranje
findUser("user")
  .then((res) => console.log(res)) // baranjeto e fullfilled
  .catch((err) => console.log(err)) // baranjeto e rejected
  .finally(() => console.log("Sekogas se izvrsuva"));
