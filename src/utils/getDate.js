export const getDate = () => {
  const arr = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const month = arr[new Date().getMonth()];
  const day = new Date().getDate();
  const year = new Date().getFullYear();

  const currentDate = `${day}.${month}.${year}`;
  return currentDate;
};
