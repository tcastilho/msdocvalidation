const onlyNumbers = (num) => {
  return num.replace(/[\.-]+/g, '')
}

module.exports = {
  onlyNumbers
}
