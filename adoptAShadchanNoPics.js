// ==UserScript==
// @name         Hide Elements and Show Spinner on Adopt a Shadchan
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Hide images on Adopt a Shadchan
// @author       Tyler Adams
// @match        https://database.adoptashadchan.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create spinner element
    const spinner = document.createElement('div');
    spinner.setAttribute('style', `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `);
    spinner.innerHTML = '<div class="spinner">Loading...</div>'; // You can replace this with an actual spinner image or CSS animation
    document.body.appendChild(spinner);

    window.addEventListener('load', function() {
        // Hide all images except those with 'Resume' in the ID
        const images = document.querySelectorAll('img');
        images.forEach(function(img) {
            if (!img.id.includes('Resume')) {
                img.style.display = 'none';
            }
        });

        // Hide divs with specific classes
        const classList = ['mbrfilePic', 'img'];
        classList.forEach(function(className) {
            const divs = document.querySelectorAll(`.${className}`);
            divs.forEach(function(div) {
                div.style.display = 'none';
            });
        });

        // Hide the spinner after hiding elements
        spinner.style.display = 'none';
    });
})();
