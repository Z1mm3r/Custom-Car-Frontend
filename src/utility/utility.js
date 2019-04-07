
//TODO add commas every 3 digits.
export function numberToDollars(amount){
  let output = "$"
  output += amount.toFixed(2)
  output = output.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return output
  debugger
}
