var Quotes = [
    {
        quote: "\"You miss 100% of the shots you don't take.\"",
        author: '--Wayne Gretzy',
    },
    {
        quote: "\"The best revenge is massive success.\"",
        author: '--Frank Sinatra',
    },
    {
        quote: "\"Resentment is like drinking poison and waiting for your enemies to die.\"",
        author: '--Nelson Mandela',
    },
    {
        quote: "\"Do not take life too seriously. You will not get out alive.\"",
        author: '--Elbert Hubbard',
    },
    {
        quote: "\"It's not what happens to you, but how you react to it that matters.\"",
        author: '--Epictetus',
    },
];

 var newIndex =0;
var lastIndex;

function getQuotes() {

  //================first============

//   newIndex++
//   if(newIndex=== Quotes.length){
//     newIndex=0;
//   }

//===================secound=========

    var newIndex = Math.floor(Math.random() * Quotes.length);
    if (newIndex === lastIndex) {
        newIndex = Math.floor(Math.random() * Quotes.length);
    }
    lastIndex = newIndex;

    console.log(newIndex);
    document.getElementById("quote").innerHTML = Quotes[newIndex].quote;
    document.getElementById("author").innerHTML = Quotes[newIndex].author;
}

