const setCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  const year = document.getElementById("year");
  year.innerText = currentYear;
};

export default setCurrentYear;