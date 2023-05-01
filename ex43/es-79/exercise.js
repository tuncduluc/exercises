const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUserToLocalStorage(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

saveUserToLocalStorage(user);