const setItem = (payload) => {
  try {
    localStorage.setItem("location", JSON.stringify(payload));
  } catch (error) {
    console.log(error);
  }
};

const getItem = () => {
  try {
    return JSON.parse(localStorage.getItem("location"));
  } catch (error) {
    console.log(error);
  }
};

export { setItem, getItem };
