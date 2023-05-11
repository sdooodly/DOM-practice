const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');

// red.onclick = () => {
//     // red.innerText = 0;
//     // red.style.backgroundColor = 'pink';
//     console.log('red');
// }

// green.onclick = () => {
//     green.innerText = 0;
//     green.style.backgroundColor = 'yellow';
//     console.log('green');
// }
// blue.onclick = () => {
//     blue.innerText = 0;
//     blue.style.backgroundColor = 'violet';
//     console.log('blue');
// }

const circles = document.querySelectorAll('.square');
const timesClicked = {'red': 0, 'green': 0, 'blue': 0};
circles.forEach(circle => {
    circle.onclick = () => {
        timesClicked[circle.value] += 1;
        circle.innerText = timesClicked[circle.value];

    }
});