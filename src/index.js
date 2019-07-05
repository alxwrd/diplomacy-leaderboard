
window.onload = function() {
    let tagline = document.getElementById("tagline");

    let taglines = [
        "I hope we can still be friends",
        "All's fair in work and war",
        "It's nothing personal",
    ];

    tagline.innerText = taglines[Math.floor(Math.random() * taglines.length)]

}

import App from './App.svelte';
import './utils.css';

const app = new App({
  target: document.body,
});

export default app;