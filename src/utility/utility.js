
//TODO add commas every 3 digits.
export function numberToDollars(amount,decimals = 2){
  let output = "$"
  output += amount.toFixed(decimals)
  output = output.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return output
  debugger
}
