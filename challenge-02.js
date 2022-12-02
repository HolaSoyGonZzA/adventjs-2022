function countHours(year, holidays) {
  return holidays.reduce((acumulador, item) => {
    const day = new Date(`${item}/${year}`).getDay();
    return day >= 1 && day <= 5 ? acumulador + 2 : acumulador;
  }, 0);
}
