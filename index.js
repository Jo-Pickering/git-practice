const quotes = [
  "The only way to do great work is to love what you do. - Helder Balbino",
  "It’s not whether you get knocked down, it’s whether you get up. - Chloe Page",
  "Your time is limited, don't waste it living someone else's life. - Elyas Faiq",
  "You miss 100% of the shots you don’t take. - Joanna Pickering",
  "Whether you think you can or you think you can’t, you’re right. - Henry Ford",
  "I have learned over the years that when one's mind is made up, this diminishes fear. - Rosa Parks",
  "I would rather die of passion than of boredom. - Vincent van Gogh",
  "Life is what happens when you’re busy making other plans. - John Lennon",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "You only live once, but if you do it right, once is enough. - Mae West",
  "The best way to predict your future is to create it. - Abraham Lincoln",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean",
  "Believe you can and you’re halfway there. - Theodore Roosevelt",
  "To handle yourself, use your head; to handle others, use your heart. - Eleanor Roosevelt",
  "Too many of us are not living our dreams because we are living our fears. - Les Brown",
  "Do what you can with all you have, wherever you are. - Theodore Roosevelt",
  "What we think, we become. - Buddha",
  "All our dreams can come true, if we have the courage to pursue them. - Walt Disney",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Everything you’ve ever wanted is on the other side of fear. - George Addair",
];

// Selects the button and para element (if it was .button, it would be a class, if it was #button, it would be an ID)
const button = document.querySelector("button");
const para = document.querySelector("p");

button.addEventListener("click", () => {
  // Gets random index
  let random = Math.floor(Math.random() * quotes.length - 1);
  // Adds quote using random index to paragraph
  para.textContent = quotes[random];
});
