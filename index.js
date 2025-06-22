// Code your solution here
function findMatching(array, theName) {
  return array.filter(driver => driver.toLowerCase() === theName.toLowerCase());
}
function fuzzyMatch(array, theLetter) {
    return array.filter(driver=> driver.startsWith(theLetter));
}
function matchName(array, theName) {
    return array.filter(driver=> driver.name === theName);
}