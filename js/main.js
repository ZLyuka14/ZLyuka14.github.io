import createSpoiler from "./createSpoiler.js";

let spoilers = document.querySelectorAll('.spoiler');

spoilers.forEach((el) => createSpoiler(el.children[0], el.children[1]));