let score = 0;

function changeAnimalChen() {
    let who = document.getElementById("animal").title;
    who = (who === "cat") ? "dog" : "cat";
    let whoJpg = "Img/" + who + ".jpg";
    document.getElementById("animal").src = whoJpg;
    document.getElementById("animal").title = who;
    changeMusic(); 
}

function changeAnimalRandomChen() {
    const animals = ["cat", "dog", "horse", "cow"];
    const randomIndex = Math.floor(Math.random() * animals.length);
    const who = animals[randomIndex];
    const whoJpg = "Img/" + who + ".jpg";
    document.getElementById("animal").src = whoJpg;
    document.getElementById("animal").title = who;
    changeMusic();
    document.getElementById("test1").innerHTML = who;
    document.getElementById("test2").innerHTML = whoJpg;
}

function changeMusicChen() {
    const who = document.getElementById("animal").title;
    let music = "";
    switch (who) {
        case "cat":
            music = "Audio/cat.wav";
            break;
        case "dog":
            music = "Audio/dog.wav";
            break;
        case "horse":
            music = "Audio/horse.wav";
            break;
        case "cow":
            music = "Audio/cow.wav";
            break;
    }
    document.getElementById("myMusicChen").src = music;
    document.getElementById("musicsChen").load();
    document.getElementById("test3").innerHTML = music;
}

function changeImageRandom() {
    const images = ["cat", "dog", "horse", "cow"];
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];
    const imagePath = "Img/" + selectedImage + ".jpg";
    
    
    const currentAudio = document.getElementById("animal").title;
    if (selectedImage === currentAudio) {
        score++;
    } else {
        score--;
    }
    
    document.getElementById("animal").src = imagePath;
    document.getElementById("animal").title = selectedImage;
    document.getElementById("score").innerHTML = "Score: " + score;
}

function changeAudioRandom() {
    const animals = ["cat", "dog", "horse", "cow"];
    const randomIndex = Math.floor(Math.random() * animals.length);
    const selectedAudio = animals[randomIndex];
    let music = "";
    
    switch (selectedAudio) {
        case "cat":
            music = "Audio/cat.wav";
            break;
        case "dog":
            music = "Audio/dog.wav";
            break;
        case "horse":
            music = "Audio/horse.wav";
            break;
        case "cow":
            music = "Audio/cow.wav";
            break;
    }
    
    
    const currentImage = document.getElementById("animal").title;
    if (selectedAudio === currentImage) {
        score++;
    } else {
        score--;
    }
    
    document.getElementById("myMusicChen").src = music;
    document.getElementById("musicsChen").load();
    document.getElementById("score").innerHTML = "Score: " + score;
}
