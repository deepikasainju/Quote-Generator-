const quotesByCategory = {
  "science": [
    "Science is the poetry of reality. - Richard Dawkins",
		"Imagination will often carry us to worlds that never were. But without it, we go nowhere. - Carl Sagan",
		"The science of today is the technology of tomorrow. - Edward Teller",
    "Science and everyday life cannot and should not be separated. - Rosalind Franklin",
    "We are made of star-stuff. We are a way for the universe to know itself. - Carl Sagan",
    "Equipped with his five senses, man explores the universe around him and calls the adventure Science. - Edwin Hubble"
  ],
  "memes": [
    "I don’t always drink beer, but when I do, I prefer Dos Equis.",
    "Why you always lying?",
    "This is fine.",
    "I’m once again asking for your financial support.",
    "Look at me. I am the captain now.",
    "Brace yourselves, winter is coming."
  ],
  "inspirational": [
    "The only way to do great work is to love what you do. - Steve Jobs",
		"Believe you can and you're halfway there. - Theodore Roosevelt",
		"In the middle of difficulty lies opportunity. - Albert Einstein",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The mind is everything. What you think you become. - Buddha"
  ],
  "anime": [
    "In this world, wherever there is light, there are also shadows.- Naruto (Itachi Uchiha)",
		"A person grows up when he’s able to overcome hardships. - One Piece (Roronoa Zoro)",
		"You should enjoy the little detours. To the fullest. Because that’s where you’ll find the things more important than what you want. - Hunter x Hunter (Ging Freecss)",
    "Power comes in response to a need, not a desire. - Dragon Ball Z (Goku)",
    "The world isn’t perfect. But it’s there for us, doing the best it can…that’s what makes it so damn beautiful. - Fullmetal Alchemist: Brotherhood (Roy Mustang)",
    "I refuse to let my fear control me anymore. - Attack on Titan (Eren Yeager)"
  ]
};
let index = 0;

function displayText() {
  const categoryElements = document.getElementsByName("category");
  let selectedCategory = "";
  for (let i = 0; i < categoryElements.length; i++) {
    if (categoryElements[i].checked) {
      selectedCategory = categoryElements[i].id;
      break;
    }
  }
  const quotes = quotesByCategory[selectedCategory];
  var text = document.getElementById("quote");
  text.textContent = quotes[index];
}

function nextQuote() {
  const categoryElements = document.getElementsByName("category");
  let selectedCategory = "";
  for (let i = 0; i < categoryElements.length; i++) {
    if (categoryElements[i].checked) {
      selectedCategory = categoryElements[i].id;
      break;
    }
  }
  const quotes = quotesByCategory[selectedCategory];
  index = (index + 1) % quotes.length;
  displayText();
}

function prevQuote() {
  const categoryElements = document.getElementsByName("category");
  let selectedCategory = "";
  for (let i = 0; i < categoryElements.length; i++) {
    if (categoryElements[i].checked) {
      selectedCategory = categoryElements[i].id;
      break;
    }
  }
  const quotes = quotesByCategory[selectedCategory];
  index = (index - 1 + quotes.length) % quotes.length;
  displayText();
}

function ranQuote() {
  const categoryElements = document.getElementsByName("category");
  let selectedCategory = "";
  for (let i = 0; i < categoryElements.length; i++) {
    if (categoryElements[i].checked) {
      selectedCategory = categoryElements[i].id;
      break;
    }
  }
  const quotes = quotesByCategory[selectedCategory];
  index = Math.floor(Math.random() * quotes.length);
  displayText();
}

function switchTheme() {
  var element = document.body;
  element.classList.toggle("light-mode");
}

function increase() {
  var quote = document.getElementById("quote");
  var currentSize = parseFloat(
    window.getComputedStyle(quote).getPropertyValue("font-size")
  );
  var newSize = currentSize + 2;
  quote.style.fontSize = newSize + "px";
}

function decrease() {
  var quote = document.getElementById("quote");
  var currentSize = parseFloat(
    window.getComputedStyle(quote).getPropertyValue("font-size")
  );
  var newSize = currentSize - 2;
  quote.style.fontSize = newSize + "px";
}
