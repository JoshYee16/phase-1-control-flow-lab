function scuberGreetingForFeet(rideLengthInt) {
  let returnSentence = ""
  if (rideLengthInt < 400) {
    returnSentence = "This one is on me!"
  } else if (rideLengthInt >= 400 && rideLengthInt <= 2000) {
    returnSentence = "That will be twenty bucks."
  } else if (rideLengthInt > 2000 && rideLengthInt <= 2500) {
    returnSentence = "I will gladly take your thirty bucks."
  } else (
    returnSentence = "No can do."
  )
  return returnSentence
}

function ternaryCheckCity(city) {
  const response  = city === "NYC" ? "Ok, sounds good." : "No go."
  return response
}

function switchOnCharmFromTip(tipString){
  let result = ""
  switch (tipString) {
    case "generous":
      result = "Thank you so much."
      break;
    case "not as generous":
      result = "Thank you."
      break;
    default:
      result = "Bye."
  }
  return result
}