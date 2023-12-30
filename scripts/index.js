const quotes = [
  {
    "quote": "The will of man is his happiness.",
    "author": "Friedrich Schiller",
  },
  {
    "quote": "Happiness is a very small desk and a very big wastebasket.",
    "author": "Robert Orben",
  },
  {
    "quote": "How can you tell somebody whose is pursuing happiness that they're somehow not American when that was the very first promise that America made?",
    "author": "Dan Savage",
  },
  {
    "quote": "Many persons have a wrong idea of what constitutes true happiness. It is not attained through self-gratification but through fidelity to a worthy purpose.",
    "author": "Helen Keller",
  },
  {
    "quote": "Happiness is mental harmony unhappiness is mental inharmony.",
    "author": "James Allen",
  },
  {
    "quote": "George Tenet has been the director of central intelligence since 1997, time enough to have changed the Agency's culture. He has failed. He should go.",
    "author": "Richard Perle",
  },
  {
    "quote": "They say military have the so-called 'secret intelligence' - this amount of intelligence must be very secret, since I've never seen any intelligent military person, nor I have seen any sense in the bloody stupid wars.",
    "author": "Ozzy Osbourne",
  },
  {
    "quote": "Wisdom and deep intelligence require an honest appreciation of mystery.",
    "author": "Thomas Moore",
  },
  {
    "quote": "I think the sexiest thing on anybody is intelligence. I respect somebody who has a brain and wants to use it more than a pretty face and status.",
    "author": "Sophia Bush",
  },
  {
    "quote": "Well look, CIA is an agency that has to collect intelligence, do operations. We have to take risks and it's important that we take risks and that we know that we have the support of the government and we have the support of the American people in what we're doing.",
    "author": "Leon Panetta",
  },
  {
    "quote": "Learning can take place in the backyard if there is a human being there who cares about the child. Before learning computers, children should learn to read first. They should sit around the dinner table and hear what their parents have to say and think.",
    "author": "Dixie Carter",
  },
  {
    "quote": "In fact, technology has been the story of human progress from as long back as we know. In 100 years people will look back on now and say, 'That was the Internet Age.' And computers will be seen as a mere ingredient to the Internet Age.",
    "author": "Reed Hastings",
  },
  {
    "quote": "When I write software, I know that it will fail, either due to my own mistake, or due to some other cause.",
    "author": "Wietse Venema",
  },
  {
    "quote": "If I was designing a web site for elementary school children, I might have a much higher percentage of older computers with outdated browsers since keeping up with browser and hardware technology has not traditionally been a strong point of most elementary schools.",
    "author": "Mike Davidson",
  },
  {
    "quote": "I think computer viruses should count as life. I think it says something about human nature that the only form of life we have created so far is purely destructive. We've created life in our own image.",
    "author": "Stephen Hawking",
  },
];

function getRandomFromRange(min, max) {
  // Exclusive to maximum in range
  return Math.floor(Math.random() * (max - min)) + min;
}

function yield(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

const textContainer = document.querySelector('div.text-container')
const quoteText = document.querySelector('div.text');
const authorText = document.querySelector('div.author');
const nextButton = document.querySelector('div.next');
let lastQuoteIndex = 0;
let inAnimation = false;

nextButton.addEventListener('click', function() {
  if (!inAnimation) {
    inAnimation = true;
    let quoteIndex = lastQuoteIndex;
    while (quoteIndex == lastQuoteIndex) {
      quoteIndex = getRandomFromRange(0, quotes.length);
    }
    lastQuoteIndex = quoteIndex;
    textContainer.classList.toggle('fade');
    yield(1000).then(() => {
      quoteText.textContent = quotes[quoteIndex].quote;
      authorText.textContent = `- ${quotes[quoteIndex].author}`;
      textContainer.classList.toggle('fade');
      yield(1000).then(() => {
        inAnimation = false;
      });
    });
  }
});
