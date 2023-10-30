const streamUrls = {
    "1": "http://streams.bigfm.de/bigfm-deutschland-128-mp3",
    "2": "https://streams.bigfm.de/bigfm-charts-128-mp3",
    "3": "https://streams.bigfm.de/bigfm-hiphop-128-mp3",
    "4": "http://streams.bigfm.de/bigfm-deutschrap-128-mp3",
    "5": "https://streams.bigfm.de/bigfm-usrap-128-mp3",
    "6": "http://streams.bigfm.de/bigfm-oldschool-128-mp3",
    "7": "https://streams.bigfm.de/bigfm-dance-128-mp3",
    "8": "https://streams.bigfm.de/bigfm-mashup-128-mp3",
    "9": "http://streams.bigfm.de/bigfm-sunsetlounge-128-mp3",
    "10": "http://streams.bigfm.de/bigfm-reggaevibes-128-mp3",
    "11": "http://streams.bigfm.de/bigfm-latinbeats-128-mp3",
    "12": "https://streams.bigfm.de/bigfm-groovenight-128-mp3",
    "13": "https://streams.bigfm.de/bigfm-urbanclubbeats-128-mp3",
    "14": "https://streams.bigfm.de/bigfm-nitroxedm-128-mp3",
    "15": "https://streams.bigfm.de/bigfm-nitroxdeep-128-mp3",
    "16": "http://streams.bigfm.de/bigfm-worldbeats-128-mp3",
};

const radioNames = {
    " Deutschland": "1",
    " Charts": "2",
    " HipHop": "3",
    " Deutsch Rap": "4",
    " US Rap & HipHop": "5",
    "Oldschool Rap & Hip-Hop": "6",
    " Dance": "7",
    " Mashup": "8",
    " Sunset Lounge": "9",
    " Reggae Vibez": "10",
    " Latin Beats": "11",
    " Groovenight (Hiphop DJ-Mix)": "12",
    " Urban Club Beats (DJ-Mix)": "13",
    " EDM & Progressive (NitroX DJ-Mix)": "14",
    " Deep & Tech House (Nitrox DJ-Mix)": "15",
    " Worldbeats": "16",

};

const imageUrls = [
    "logo.png",
    "logo.png",
    "logo.png",
    "logo.png",
    "logo.png",
    "logo.png",
    "logo.png",
    "logo.png",
    "logo.png",
    "logo.png",
    "logo.png",
    "logo.png",
    "logo.png",
    "logo.png",
    "logo.png",
    "logo.png",
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

