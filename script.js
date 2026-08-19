/* =========================================
   YOUR 7 MEMORIES
=========================================

   Change the title and text below.

   IMPORTANT:
   Keep the image names exactly:

   photos/1.jpg
   photos/2.jpg
   ...
   photos/7.jpg

========================================= */


const memories = [

    {
        title: "Seven Months Ago",

        image: "photos/1.jpg",

        text:
            "Seven months ago, I was so full of negative thoughts, and I thought I would be lonely for the rest of my life. But suddenly, my life changed because of a certain person."
    },


    {
        title: "The Person I Needed",

        image: "photos/2.jpg",

        text:
            "That person is now my girlfriend and soon-to-be wife, YOU! I am so thankful because you are the reason I’m still here right now and currently happy."
    },


    {
        title: "My Promise",

        image: "photos/3.jpg",

        text:
            "Since the day I came back to her, I promised myself to love her with everything I have and protect her at all times."
    },


    {
        title: "For Your Happiness",

        image: "photos/4.jpg",

        text:
            "Make her smile, give everything I can to her, always be there for her, and make her feel loved and happy every day."
    },


    {
        title: "Thank You, My Love",

        image: "photos/5.jpg",

        text:
            "Thank you for always being by my side and for cheering me up whenever I’m not in the mood for anything."
    },


    {
        title: "I’m Sorry",

        image: "photos/6.jpg",

        text:
            "And I’m sorry if there are times when I’m so hard to handle, but thank you for always being patient with me and understanding me even when I’m not at my best."
    },


    {
        title: "To More Months and Years",

        image: "photos/7.jpg",

        text:
            "Happy 7th monthsary to us, my lovey! Here’s to more months and years together! I love you so much! MWAMWAAAA! "
    }

];


/* =========================================
   VARIABLES
========================================= */

let currentMemory = 0;


/* =========================================
   START
========================================= */

function startExperience() {

    document
        .getElementById("intro")
        .classList.remove("active");


    document
        .getElementById("memory")
        .classList.add("active");


    currentMemory = 0;

    showMemory();

    createFloatingHearts(8);

}


/* =========================================
   SHOW MEMORY
========================================= */

function showMemory() {

    const memory =
        memories[currentMemory];


    const number =
        String(currentMemory + 1)
        .padStart(2, "0");


    document
        .getElementById("memoryNumber")
        .textContent =
        `${number} / 07`;


    const image =
        document.getElementById(
            "memoryImage"
        );


    /* Restart photo animation */

    image.style.animation = "none";

    void image.offsetWidth;

    image.style.animation =
        "photoIn 0.5s ease";


    image.src =
        memory.image;


    image.alt =
        memory.title;


    document
        .getElementById("memoryTitle")
        .textContent =
        memory.title;


    document
        .getElementById("memoryText")
        .textContent =
        memory.text;

}


/* =========================================
   NEXT MEMORY
========================================= */

function nextMemory() {

    currentMemory++;


    if (
        currentMemory >=
        memories.length
    ) {

        document
            .getElementById("memory")
            .classList.remove("active");


        document
            .getElementById("final")
            .classList.add("active");


        createFloatingHearts(12);

        return;

    }


    showMemory();

    createFloatingHearts(5);

}


/* =========================================
   FINAL SURPRISE
========================================= */

function celebrate() {

    document
        .getElementById("celebration")
        .classList.add("show");


    createFloatingHearts(40);

}


/* =========================================
   FLOATING HEARTS
========================================= */

function createFloatingHearts(amount) {

    const container =
        document.getElementById(
            "hearts"
        );


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const heart =
            document.createElement(
                "div"
            );


        heart.className =
            "floating-heart";


        heart.textContent =
            Math.random() > 0.5
                ? "❤️"
                : "💕";


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.fontSize =
            (
                15 +
                Math.random() * 25
            ) + "px";


        heart.style.animationDuration =
            (
                3 +
                Math.random() * 3
            ) + "s";


        heart.style.animationDelay =
            (
                Math.random() * 0.5
            ) + "s";


        container.appendChild(
            heart
        );


        setTimeout(
            () => {
                heart.remove();
            },
            7000
        );

    }

}
