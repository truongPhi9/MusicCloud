const progress = document.querySelector('.in-audio');
const progressBar = document.querySelector('.progress-bar');

let isReadyMove = false;

progress.addEventListener('mousedown', () => {
    console.log("MouseDown");
    isReadyMove = true;
});

document.addEventListener('mousemove', (e) => {
    let clientX = e.clientX;
    let left = progress.getBoundingClientRect().left;
    
    const widthProgress = progress.getBoundingClientRect().width;
    const min = left;
    const max = progress.getBoundingClientRect().width + left;
    
    if(isReadyMove && clientX >= min && clientX <= max) {
        let percent = (clientX - left) / widthProgress * 100;
        console.log("Mousemove", percent);
        progressBar.style.width = percent + "%";
    }
});

document.addEventListener('mouseup', (e) => {
    console.log("Mouseup");
    isReadyMove = false;
});