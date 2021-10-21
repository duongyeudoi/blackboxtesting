function calculatePrice(thu, gio, tuoi) {
  if (thu < 2 || thu > 8 || tuoi < 6 || tuoi > 100 || gio < 7 || gio > 23) {
    return -1;
  }
  let giave = 40000;
  if (thu >= 7 && thu <= 8) {
    giave += 20000;
  }
  if (gio >= 20 && gio <= 23) {
    giave += 20000;
  }
  if (15 <= tuoi && tuoi <= 100) {
    giave += 20000;
  }
  return giave;
}

module.exports = calculatePrice;
