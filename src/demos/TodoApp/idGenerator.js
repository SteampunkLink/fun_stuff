const rando = (project) => {
  let newId = "";

  if (project) {
    let randomNum = Math.floor(Math.random() * 999);
    if (randomNum < 10) {
      newId = `${project}-00${randomNum}`;
    } else if (randomNum < 100) {
      newId = `${project}-0${randomNum}`;
    } else {
      newId = `${project}-${randomNum}`;
    }
  } else {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < 4; i++) {
      newId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  }

  return newId;
};

export default rando;
