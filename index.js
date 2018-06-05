function takeANumber(katzDeliLine, newPerson) {
  var katzDeli = [];
  var count = 0
  while(count < katzDeliLine.length) {
    katzDeli.push("Welcome" + " " + katzDeliLine[count]);
    count++;
  }
  return katzDeli
}
  