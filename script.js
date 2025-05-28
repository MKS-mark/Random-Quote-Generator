const quotes = [
  "Be yourself; everyone else is already taken. – Oscar Wilde",
  "I'm selfish, impatient and a little insecure... – Marilyn Monroe",
  "So many books, so little time. – Frank Zappa",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. – Albert Einstein",
  "A room without books is like a body without a soul. – Marcus Tullius Cicero",
  "Be who you are and say what you feel... – Bernard M. Baruch",
  "You've gotta dance like there's nobody watching... – William W. Purkey",
  "You know you're in love when you can't fall asleep... – Dr. Seuss",
  "You only live once, but if you do it right, once is enough. – Mae West",
  "Be the change that you wish to see in the world. – Mahatma Gandhi",
];

var lastIndex = -1;

function generateQuote() {
  var randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastIndex);

  lastIndex = randomIndex;
  document.getElementById("quote").innerHTML = quotes[randomIndex];
}
