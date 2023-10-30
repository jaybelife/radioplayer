const streamUrls = {
    "1": "https://streams.ilovemusic.de/iloveradio1.mp3",
    "2": "https://streams.ilovemusic.de/iloveradio2.mp3",
    "3": "https://streams.ilovemusic.de/iloveradio37.mp3",
    "4": "https://streams.ilovemusic.de/iloveradio38.mp3",
    "5": "https://streams.ilovemusic.de/iloveradio29.mp3",
    "6": "https://streams.ilovemusic.de/iloveradio17.mp3",
    "7": "https://streams.ilovemusic.de/iloveradio36.mp3",
    "8": "https://streams.ilovemusic.de/iloveradio103.mp3",
    "9": "https://streams.ilovemusic.de/iloveradio26.mp3",
    "10": "https://streams.ilovemusic.de/iloveradio6.mp3",
    "11": "https://streams.ilovemusic.de/iloveradio104.mp3",
    "12": "https://streams.ilovemusic.de/iloveradio16.mp3",
    "13": "https://streams.ilovemusic.de/iloveradio21.mp3",
    "14": "https://streams.ilovemusic.de/iloveradio3.mp3",
    "15": "https://streams.ilovemusic.de/iloveradio35.mp3",
    "16": "https://streams.ilovemusic.de/iloveradio27.mp3",
    "17": "https://streams.ilovemusic.de/iloveradio109.mp3",
    "18": "https://streams.ilovemusic.de/iloveradio12.mp3",
    "19": "https://streams.ilovemusic.de/iloveradio22.mp3",
    "20": "https://streams.ilovemusic.de/iloveradio25.mp3",
    "21": "https://streams.ilovemusic.de/iloveradio5.mp3",
    "22": "https://streams.ilovemusic.de/iloveradio11.mp3",
    "23": "https://streams.ilovemusic.de/iloveradio14.mp3",
    "24": "https://streams.ilovemusic.de/iloveradio28.mp3",
    "25": "https://streams.ilovemusic.de/iloveradio4.mp3",
    "26": "https://streams.ilovemusic.de/iloveradio10.mp3",
    "27": "https://streams.ilovemusic.de/iloveradio18.mp3",
    "25": "https://streams.ilovemusic.de/iloveradio24.mp3",
    "29": "https://streams.ilovemusic.de/iloveradio7.mp3",
    "30": "https://streams.ilovemusic.de/iloveradio20.mp3",
    "31": "https://streams.ilovemusic.de/iloveradio15.mp3",
    "32": "https://streams.ilovemusic.de/iloveradio9.mp3",
    "33": "https://streams.ilovemusic.de/iloveradio19.mp3",
    "34": "https://streams.ilovemusic.de/iloveradio13.mp3",
    "35": "https://streams.ilovemusic.de/iloveradio23.mp3",
    "36": "https://streams.ilovemusic.de/iloveradio8.mp3",
};

const radioNames = {
    "I LOVE RADIO": "1",
    "I LOVE 2 DANCE": "2",
    "I LOVE 2000+ THROWBACKS":"3",
    "I LOVE 2010+ THROWBACKS":"4",
    "I LOVE BASS": "5",
    "I LOVE CHILLHOP": "6",
    "I LOVE DANCE 2023": "7",
    "I LOVE DANCE FIRST": "8",
    "I LOVE DANCE HISTORY": "9",
    "I LOVE DEUTSCHRAP BESTE": "10",
    "I LOVE DEUTSCHRAP FIRST": "11",
    "I LOVE GREATEST HITS": "12",
    "I LOVE HARDSTYLE": "13",
    "I LOVE HIP HOP": "14",
    "I LOVE HIP HOP 2023": "15",
    "I LOVE HIP HOP HISTORY": "16",
    "I LOVE HITS 2023": "17",
    "I LOVE HITS HISTORY": "18",
    "I LOVE MAINSTAGE": "19",
    "I LOVE MALLE": "20",
    "I LOVE MASHUP": "21",
    "I LOVE MUSIC&CHILL": "22",
    "I LOVE NEW POP": "23",
    "I LOVE PARTY HARD": "24",
    "I LOVE RADIO FROM MARS": "25",
    "I LOVE ROCK": "26",
    "I LOVE SUGAR RADIO": "27",
    "I LOVE THE 90S": "28",
    "I LOVE THE BEACH": "29",
    "I LOVE THE CLUB": "30",
    "I LOVE THE SUN": "31",
    "I LOVE TOP 100 CHARTS": "32",
    "I LOVE TRASHPOP": "33",
    "I LOVE US ONLY RAP RADIO": "34",
    "I LOVE WORKOUT": "35",
    "I LOVE X-MAS": "36",
};

const imageUrls = [
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=ffffff&fg=000000", /* 1 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=00d5ff&fg=ffffff", /* 2 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=b34f4f&fg=ffffff", /* 3 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=db377e&fg=ffffff", /* 4 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=ff0000&fg=ffffff", /* 5 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=00d5ff&fg=ffffff", /* 6 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=00aaff&fg=ffffff", /* 7 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=6f9e00&fg=ffffff", /* 8 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=6f9e00&fg=ffffff", /* 9 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=db377e&fg=ffffff", /* 10 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=2d2d38&fg=ffffff", /* 11 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=4a5746&fg=ffffff", /* 12 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=ff0000&fg=ffffff", /* 13 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=d1b200&fg=ffffff", /* 14 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=ff0000&fg=ffffff", /* 15 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=b34f4f&fg=ffffff", /* 16 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=85edc0&fg=ffffff", /* 17 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=33ff33&fg=ffffff", /* 18 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=9900ff&fg=ffffff", /* 19 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=33ff33&fg=ffffff", /* 20 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=9900ff&fg=ffffff", /* 21 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=d086d1&fg=ffffff", /* 22 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=d0d691&fg=ffffff", /* 23 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=ff00cc&fg=ffffff", /* 24 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=9900ff&fg=ffffff", /* 25 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=adadad&fg=ffffff", /* 26 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=00f291&fg=ffffff", /* 27 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=ff00cc&fg=ffffff", /* 28 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=ffc400&fg=ffffff", /* 29 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=7a4687&fg=ffffff", /* 30 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=edd839&fg=ffffff", /* 31 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=ff0000&fg=ffffff", /* 32 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=ff00cc&fg=ffffff", /* 33 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=343857&fg=ffffff", /* 34 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=aceb00&fg=ffffff", /* 35 */
    "https://ilovemusic.de/typo3conf/ext/ep_channel/Resources/Public/img/favicon.php?bg=800000&fg=ffffff", /* 36 */
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
