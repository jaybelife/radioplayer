const streamUrls = {
    "1": "https://stream.laut.fm/lionfm",
    "2": "https://stream.laut.fm/the17",
    "3": "https://stream.laut.fm/lionel",
    "4": "https://stream.laut.fm/hollyfm",
    "5": "https://stream.laut.fm/schlagerparadies",
    "6": "https://stream.laut.fm/xmasfm",
    "7": "https://stream.laut.fm/lifemusic",
    "8": "https://stream.laut.fm/remixfm",
    "10": "https://stream.laut.fm/malleparadies",
};

const radioNames = {
    "LionFM": "1",
    "THE 17": "2",
    "LIONEL": "3",
    "HOLLYFM": "4",
    "SCHLAGERPARADIES": "5",
    "XMASFM": "6",
    "LIFEMUSIC": "7",
    "REMIXFM": "8",
    "MALLEPARADIES": "10",
};

const imageUrls = [
    "https://cdn.lionfm.de/images/favicon.php?bg=212121",
    "https://cdn.lionfm.de/images/favicon.php?bg=FF0000",
    "https://cdn.lionfm.de/images/favicon.php?bg=2D51A3",
    "https://cdn.lionfm.de/images/favicon.php?bg=919136",
    "https://cdn.lionfm.de/images/favicon.php?bg=B34F4F",
    "https://cdn.lionfm.de/images/favicon.php?bg=880000",
    "https://cdn.lionfm.de/images/favicon.php?bg=D086D1",
    "https://cdn.lionfm.de/images/favicon.php?bg=782994",
    "https://cdn.lionfm.de/images/favicon.php?bg=32A852",
];

let currentAudio = null;
let isPlaying = false;

function showSpeakerIcon(button) {
    const speakerIcon = button.querySelector('.speaker');
    speakerIcon.style.display = 'inline-block';
}

function hideSpeakerIcon(button) {
    const speakerIcon = button.querySelector('.speaker');
    speakerIcon.style.display = 'none';
}

function playChannel(streamUrl, button) {
    stopCurrentAudio();
    currentAudio = new Audio(streamUrl);
    currentAudio.play();
    showSpeakerIcon(button);

    const headerImage = document.querySelector('.header-image');
    const channelName = document.querySelector('.channel-name');

    const imageUrl = button.querySelector('img').getAttribute('src');
    const channel = button.querySelector('span').textContent;

    headerImage.setAttribute('src', imageUrl);
    channelName.textContent = 'current station: ' + channel;
}

function stopCurrentAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}

function togglePlayPause(streamUrl, button) {
    if (!isPlaying) {
        playChannel(streamUrl, button);
        isPlaying = true;
    } else {
        pauseChannel();
        isPlaying = false;
    }
}

function pauseChannel() {
    stopCurrentAudio();
    const headerImage = document.querySelector('.header-image');
    const channelName = document.querySelector('.channel-name');
    headerImage.setAttribute('src', 'logo.png');
    channelName.textContent = 'select a station';
}

function createChannelButtons() {
    const radioContainer = document.getElementById('radio-container');

    for (let i = 0; i < imageUrls.length; i++) {
        const imageUrl = imageUrls[i];
        const channelBtn = document.createElement('button');
        const channelName = Object.keys(radioNames)[i];
        channelBtn.innerHTML = `<img src="${imageUrl}" alt="${channelName}" draggable="false"><span>${channelName}</span><i class="fa-solid fa-volume-high speaker" style="display: none;"></i>`;
        channelBtn.className = 'channel-button';
        channelBtn.value = Object.values(radioNames)[i];
        radioContainer.appendChild(channelBtn);

        channelBtn.addEventListener('click', () => {
            const buttons = document.querySelectorAll('.channel-button');
            buttons.forEach((btn) => hideSpeakerIcon(btn));
            togglePlayPause(streamUrls[channelBtn.value], channelBtn);
        });
    }
}

function adjustVolume(volume) {
    if (currentAudio) {
        currentAudio.volume = volume / 100;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const volumeSlider = document.getElementById('volumeSlider');

    adjustVolume(volumeSlider.value);

    volumeSlider.addEventListener('input', () => {
        adjustVolume(volumeSlider.value);
    });

    createChannelButtons();
});

function changeBackgroundImage(imageUrl) {
    const background = document.querySelector('.background');
    background.style.backgroundImage = `url(${imageUrl})`;
}

function togglePlayPause(streamUrl, button) {
    if (!isPlaying) {
        playChannel(streamUrl, button);
        isPlaying = true;
        const imageUrl = button.querySelector('img').getAttribute('src');
        changeBackgroundImage(imageUrl);
    } else {
        pauseChannel();
        isPlaying = false;
        changeBackgroundImage('https://imodd.sierra-dev.de/');
    }
}

