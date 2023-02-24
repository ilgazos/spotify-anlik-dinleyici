const button = document.querySelector('[data-testid="listeners-play-pause-button"]');
button.click();

setTimeout(() => {
    const pathElement = document.querySelector('button[data-testid="listeners-play-pause-button"] path:nth-child(2)');
    pathElement.setAttribute('d', 'M8 7.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-9zm5 0a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-9z');

    const spans = document.querySelectorAll('div[data-testid="bar-animation"] span');
    spans.forEach(span => {
        span.classList.remove('gNTOnu');
        span.classList.add('lcwBDv');
    });

    const h1 = document.querySelector('h1[data-testid="live-listeners"]');
    let count = parseInt(h1.textContent);
    setInterval(() => {
        const randomIncrement = Math.floor(Math.random() * 8) - 2;
        count += randomIncrement;
        h1.textContent = count;
    }, 2000);
}, 100);
