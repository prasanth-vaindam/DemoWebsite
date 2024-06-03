// const text = "I am Prasanth, Java Developer";
// let index = 0;

// function type() {
//   document.getElementById('typing-text').textContent += text[index++];
//   if (index < text.length) {
//     setTimeout(type, 100);
//   }
// }


// const text = "I am Prasanth Vaindam, Java Developer";
// let index = 0;

// function type() {
//   document.getElementById('typing-text').textContent += text[index++];
//   if (index === text.length) {
//     index = 0; // Reset index when it reaches the end of the text
//     setTimeout(1000);
//     document.getElementById('typing-text').textContent = ''; // Clear the text content
//   }
//   setTimeout(type, 100);
// }

const messages = [
  " Hi! I am Prasanth Vaindam",
  " I Craft Java Spring Boot APIs.",
  " I Create Cross-Platform Apps with Flutter.",
  " I Teach Python",
  " I Teach C",
  " I Teach Java",
  " I Teach Web Technologies"
];

let messageIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < messages[messageIndex].length) {
    document.getElementById('typing-text').textContent += messages[messageIndex].charAt(charIndex++);
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1000); // Wait for 1 second before erasing the message
  }
}

function erase() {
  if (charIndex > 0) {
    document.getElementById('typing-text').textContent = messages[messageIndex].substring(0, charIndex--);
    setTimeout(erase, 50);
  } else {
    charIndex = 0;
    messageIndex = (messageIndex + 1) % messages.length; // Move to the next message
    setTimeout(type, 1000); // Wait for 1 second before typing the next message
  }
}

type(); // Start typing the first message