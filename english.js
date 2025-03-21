const quotes = [
    { text: "You can't make a Joke, if you are a Joke.", author: "Triggered Insaan (Nischay Malhan)" },
    { text: "Hard work never brings fatigue. It brings satisfaction.", author: "Narendra Modi" },
    { text: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
    { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "Imagination is more important than knowledge.", author: "Albert Einstein" },
    { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "You have to dream before your dreams can come true.", author: "Dr. A.P.J. Abdul Kalam" },
    { text: "Self-belief and hard work will always earn you success.", author: "Virat Kohli" },
    { text: "You don’t play for the crowd. You play for the country.", author: "M.S. Dhoni" },
    { text: "Dreams are not what you see in your sleep, they are things which do not let you sleep.", author: "Sachin Tendulkar" },
    { text: "Take risks, if you win, you will be happy; if you lose, you will be wise.", author: "Rahul Dravid" },
    { text: "Leadership is about getting the team together to achieve a common goal.", author: "Sourav Ganguly" },
    { text: "Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine.", author: "AB de Villiers" },
    { text: "The people you choose to have around you make all the difference.", author: "Ricky Ponting" },
    { text: "Being the best is great, you're the number one. But being unique is greater, you're the only one.", author: "Muttiah Muralitharan" },
    { text: "You can't let success get to your head and failure to your heart.", author: "Brian Lara" },
    { text: "Optimism is the faith that leads to achievement.", author: "Helen Keller" },
    { text: "I never lose. I either win or learn.", author: "Nelson Mandela" },
    { text: "Do not compare yourself to others. If you do so, you are insulting yourself.", author: "Bill Gates" },
    { text: "We will either find a way, or make one.", author: "Hannibal" },
    { text: "An eye for an eye will only make the whole world blind.", author: "Mahatma Gandhi" },
    { text: "Don't be serious, enjoy life as it comes.", author: "Rajinikanth" },
    { text: "Dreams do come true, but you have to make them come true.", author: "Shah Rukh Khan" },
    { text: "Life is a game, play it to win.", author: "Salman Khan" },
    { text: "Don’t be afraid of failure. This is the way to succeed.", author: "Amitabh Bachchan" },
    { text: "Perfection is not just about control, it’s also about letting go.", author: "Deepika Padukone" },
    { text: "It's okay to be confused. Confusion is the route to all clarity in the world.", author: "Ranbir Kapoor" },
    { text: "Style is not about the brand. It’s about how you carry yourself.", author: "Ranveer Singh" },
    { text: "The struggles in your life shape you into the person you are today.", author: "Priyanka Chopra" },
    { text: "Acting is not about being famous, it’s about exploring the human soul.", author: "Nawazuddin Siddiqui" },
    { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
    { text: "There are two ways of spreading light: to be the candle or the mirror that reflects it.", author: "Edith Wharton" },
    { text: "Freedom is not worth having if it does not include the freedom to make mistakes.", author: "Mahatma Gandhi" },
    { text: "Democracy means simply the bludgeoning of the people by the people for the people.", author: "Oscar Wilde" },
    { text: "Power does not corrupt. Fear corrupts... perhaps the fear of a loss of power.", author: "John Steinbeck" },
    { text: "I have a dream that one day this nation will rise up and live out the true meaning of its creed.", author: "Martin Luther King Jr." },
    { text: "When something is important enough, you do it even if the odds are not in your favor.", author: "Elon Musk" },
    { text: "Let the beauty of what you love be what you do.", author: "Rumi" },
    { text: "Small aim is a crime; have great aim.", author: "Dr. A.P.J. Abdul Kalam" },
    { text: "Do what you love, and you’ll never work another day in your life.", author: "Confucius" },
    { text: "Great things in business are never done by one person. They're done by a team of people.", author: "Steve Jobs" },
    { text: "Dream big. Start small. Act now.", author: "Robin Sharma" },
    { text: "Courage is resistance to fear, mastery of fear, not absence of fear.", author: "Mark Twain" },
    { text: "I’m not saying I’m Batman. I’m just saying no one has ever seen me and Batman in a room together.", author: "PewDiePie" },
    { text: "Be yourself, unless you can be a unicorn. Then always be a unicorn.", author: "Lilly Singh (Superwoman)" },
    { text: "If you can’t laugh at yourself, then who can you laugh at? Everyone else. Obviously.", author: "Jenna Marbles" },
    { text: "Life is too short to be serious all the time, so if you can’t laugh at yourself… call me, I’ll do it for you.", author: "MrBeast" },
    { text: "Don’t take life too seriously, you’ll never get out of it alive.", author: "Casey Neistat" },
    { text: "Study hard, so that one day your driver can be a PUBG player.", author: "CarryMinati (Ajey Nagar)" },
    { text: "Chill a bit, have fun, if life is not long then at least it should be wide.", author: "Bhuvan Bam (BB Ki Vines)" },
    { text: "Everyone needs motivation, but if you are looking for motivation every day, then you are probably doing the wrong thing.", author: "Sandeep Maheshwari" },
    { text: "If someone is telling you something, it means you are doing something!", author: "Amit Bhadana" }
];

let currentIndex = 0;

function displayQuote() {
    document.getElementById("quote").innerText = quotes[currentIndex].text;
    document.getElementById("author").innerText = "- " + quotes[currentIndex].author;
}

function nextQuote() {
    currentIndex = (currentIndex + 1) % quotes.length;
    displayQuote();
}

function prevQuote() {
    currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
    displayQuote();
}

function copyQuote() {
    const quoteText = document.getElementById("quote").innerText + " " + document.getElementById("author").innerText;
    navigator.clipboard.writeText(quoteText);
    alert("Quote copied to clipboard!");
}

function goBack() {
    window.location.href = "QGM.html";
}

window.onload = displayQuote;