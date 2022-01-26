let mainImage = document.querySelector('img');

mainImage.onclick = function() {
    let mySrc = mainImage.getAttribute('src');
    if (mySrc === 'images/bird.png') {
        mainImage.setAttribute('src', 'images/bird2.png');
    } else {
        mainImage.setAttribute('src', 'images/bird.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome to Sparrow License Manager, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to Sparrow License Manager, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}