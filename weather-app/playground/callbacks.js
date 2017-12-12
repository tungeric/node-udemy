const getUser = (id, callback) => {
  let user = {
    id: id,
    name: "Brett"
  };
  setTimeout(() => {
    callback(user);
  }, 3000);
  // callback(user);
};

getUser(76, (user) => {
  console.log(user);
});