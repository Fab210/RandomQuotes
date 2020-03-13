//*-- quotes Array --*//

const quotes = [
    {
      quote:
        "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
      author: " Life"
    },
    {
      quote:
        "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
      author: "John Kenneth Galbraith"
    },
    {
      quote:
        "God save me from my friends. I can protect myself from my enemies.",
      author: "Claude Louis Hector de Villars "
    },
    {
      quote: "The price of anything is the amount of life you exchange for it.",
      author: "David Thoreau"
    },
    {
      quote:
        "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
      author: "Charles Lindbergh"
    },
    {
      quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author: " Tyne Daly"
    }
  ];

//*-- variable to save last generated quote --*//
var randomNumber = 0;


function buttonGenerate(){

    //*--Math.random create a random number beetween 0 and 1 (ex: 0.51610166618) --*//
    // create a random number with the help of length of quotes array//
    var randomquote = Math.floor(quotes.length * Math.random());

    //*-- if generated number = 0 restart the function too get a new one --*//
    if (randomquote == 0) {
        return buttonGenerate();
    } 

    //*-- if the generated number is the same as the last generated number restart the function too get a new one --*//
    if (randomquote == this.randomNumber) {
        return buttonGenerate();
    }
    this.randomNumber = randomquote;

    //*-- add text from generated quote in Html --*//
    var selectedQuote = quotes[randomquote];

    document.getElementById("quote").innerHTML = selectedQuote.quote + selectedQuote.author;
    document.getElementById("author").innerHTML = selectedQuote.author;

    console.log(randomquote , selectedQuote.quote , selectedQuote.author)
    
}