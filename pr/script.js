
const streamUrls = {
    "1": "http://mp3.planetradio.de/planetradio/hqlivestream.mp3",
    "2": "http://mp3.planetradio.de/plrplus/hqfun.mp3",
    "3": "http://mp3.planetradio.de/plrplus/hqpower.mp3",
    "4": "http://mp3.planetradio.de/plrplus/hqliebe.mp3",
    "5": "http://mp3.planetradio.de/plrplus/hqheartbreak.mp3",
    "6": "http://mp3.planetradio.de/plrchannels/hqitunes.mp3",
    "7": "http://mp3.planetradio.de/plrchannels/hqdeutschrap.mp3",
    "8": "http://mp3.planetradio.de/plrchannels/hqflashbackfriday.mp3",
    "9": "http://mp3.planetradio.de/plrchannels/hqtheclub.mp3",
    "10": "http://mp3.planetradio.de/plrchannels/hqearlymorningbreaks.mp3",
    "11": "http://mp3.planetradio.de/plrchannels/hqoldschool.mp3",
    "12": "http://mp3.planetradio.de/plrchannels/hqnightwax.mp3",
    "13": "http://mp3.planetradio.de/plrchannels/hqblackbeats.mp3",
};

const radioNames = {
    "planet original": "1",
    "planet plus fun": "2",
    "planet plus power": "3",
    "planet plus liebe": "4",
    "planet plus heartbreak": "5",
    "planet livecharts": "6",
    "deutschrap finest": "7",
    "planet flashback friday": "8",
    "planet the club": "9",
    "planet early morning breaks": "10",
    "planet oldschool": "11",
    "planet nightwax": "12",
    "planet black beats": "13",
};

const imageUrls = [
    "https://static.planetradio.de/fileadmin/_processed_/7/0/csm_planet_simulcast_1x1_a211eb3d36.jpg",
    "https://static.planetradio.de/fileadmin/_processed_/6/5/csm_planet__fun_1400x1400_57f942f8db.jpg",
    "https://static.planetradio.de/fileadmin/_processed_/4/7/csm_planet__power_1400x1400_1858c3f075.jpg",
    "https://static.planetradio.de/fileadmin/_processed_/8/f/csm_planet__liebe_1400x1400_317ab3bbf2.jpg",
    "https://static.planetradio.de/fileadmin/_processed_/d/4/csm_planet__heartbreak_1400x1400_6013e84cd7.jpg",
    "https://static.planetradio.de/fileadmin/fm-dam/planetradio.de/pages/musik/webradios/cover_2022/livecharts/planet_livecharts_600x600_nologo.jpg",
    "https://static.planetradio.de/fileadmin/fm-dam/planetradio.de/pages/musik/webradios/cover_2022/deutschrap/planet_deutschrap_600x600_nologo.jpg",
    "https://static.planetradio.de/fileadmin/fm-dam/planetradio.de/pages/musik/webradios/cover_2022/flashback_friday/planet_flashbackfriday_600x600_nologo.jpg",
    "https://static.planetradio.de/fileadmin/fm-dam/planetradio.de/pages/musik/webradios/cover_2022/the_club/planet_theclub_600x600_nologo.jpg",
    "https://static.planetradio.de/fileadmin/fm-dam/planetradio.de/pages/musik/webradios/cover_2022/early_morning_breaks/planet_emb_600x600_nologo.jpg",
    "https://static.planetradio.de/fileadmin/fm-dam/planetradio.de/pages/musik/webradios/cover_2022/oldschool/planet_oldschool_600x600_nologo.jpg",
    "https://static.planetradio.de/fileadmin/fm-dam/planetradio.de/pages/musik/webradios/cover_2022/nightwax/planet_nightwax_600x600_nologo.jpg",
    "https://static.planetradio.de/fileadmin/fm-dam/planetradio.de/pages/musik/webradios/cover_2022/black_beats/planet_blackbeats_600x600_nologo.jpg",    
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
