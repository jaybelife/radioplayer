function redirectToWebsite(url) {
    window.location.href = url;
}

document.addEventListener('DOMContentLoaded', () => {
    const urls = [
        'ilm/',
        'bfm',
        'lfm/',
        'pr/',
        'wao/',
    ];
    const imageUrls = [
        'https://jaybelife.de/player/ilm/logo.png',
        'https://jaybelife.de/player/bfm/logo.png',
        'https://jaybelife.de/player/lfm/logo.png',
        'https://jaybelife.de/player/pr/logo.png',
        'https://jaybelife.de/player/wao/logo.png',
    ];
    const texts = [
        'I Love Music',
        'BigFM',
        'LionFM',
        'Planet Radio',
        'We Are One',
    ];

    const radioContainer = document.getElementById('radio-container');

    for (let i = 0; i < urls.length; i++) {
        const channelBtn = document.createElement('button');
        channelBtn.className = 'channel-button';
        channelBtn.onclick = function () {
            redirectToWebsite(urls[i]);
        };

        const image = document.createElement('img');
        image.src = imageUrls[i];
        image.alt = 'Image ' + i;
        image.draggable = false;
        channelBtn.appendChild(image);

        const text = document.createElement('span');
        text.textContent = texts[i];
        channelBtn.appendChild(text);

        radioContainer.appendChild(channelBtn);
    }
});