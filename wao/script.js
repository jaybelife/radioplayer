const streamUrls = {
    "1": "https://listen.technobase.fm/tunein-mp3",
    "2": "https://listen.housetime.fm/tunein-mp3",
    "3": "https://listen.hardbase.fm/tunein-mp3",
    "4": "https://listen.trancebase.fm/tunein-mp3",
    "5": "https://listen.coretime.fm/tunein-mp3",
    "6": "https://listen.clubtime.fm/tunein-mp3",
    "7": "https://listen.teatime.fm/tunein-mp3",
    "8": "https://listen.replay.fm/tunein-mp3",
};

const radioNames = {
    "TECHNOBASE.FM": "1",
    "HOUSETIME.FM": "2",
    "HARDBASE.FM": "3",
    "TRANCEBASE.FM": "4",
    "CORETIME.FM": "5",
    "CLUBTIME.FM": "6",
    "TEATIME.FM": "7",
    "REPLAY.FM": "8",
};

const imageUrls = [
    "https://www.technobase.fm/media/icons/tb/apple-touch-icon.png",
    "https://www.housetime.fm/media/icons/ht/apple-touch-icon.png",
    "https://www.hardbase.fm/media/icons/hb/apple-touch-icon.png",
    "https://www.trancebase.fm/media/icons/trb/apple-touch-icon.png",
    "https://www.coretime.fm/media/icons/ct/apple-touch-icon.png",
    "https://www.clubtime.fm/media/icons/clt/apple-touch-icon.png",
    "https://www.teatime.fm/media/icons/tt/apple-touch-icon.png",
    "https://www.teatime.fm/media/icons/rp/apple-touch-icon.png",
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
        changeBackgroundImage('r');
    }
}
