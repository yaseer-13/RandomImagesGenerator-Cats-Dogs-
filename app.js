const catResult = document.getElementById('cat_result');
const dogResult = document.getElementById('dog_result');
const catBtn = document.getElementById('cat_btn');
const dogBtn = document.getElementById('dog_btn');

catBtn.addEventListener('click', getRandomCat);
dogBtn.addEventListener('click', getRandomDog);

function getRandomCat() {
    fetch('https://aws.random.cat/meow')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            catResult.innerHTML = `<img src=${data.file} alt="cat" download=${data.file} />`;
        });
}


function getRandomDog() {
    fetch('https://random.dog/woof.json')
        .then(response => response.json())
        .then(data => {
            // console.log(data.url);
            if (data.url.includes('.mp4')) {
                getRandomDog();
            } else {
                dogResult.innerHTML = `<img class="w-full" src=${data.url} alt="dog" download/>`;
            }
        });
}