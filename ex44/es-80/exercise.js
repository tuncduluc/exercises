const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUserToLocalStorage(user) {
  localStorage.setItem('user', JSON.stringify(user));
}
saveUserToLocalStorage(user);

function getUserFromLocalStorage() {
  const userString = localStorage.getItem('user');
  const user = JSON.parse(userString);
  console.log(user);
}
getUserFromLocalStorage();
