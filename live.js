// listeners-play-pause-button adlı veri test kimliği olan butonu seç
const button = document.querySelector('[data-testid="listeners-play-pause-button"]');
// butona tıkla
button.click();

setTimeout(() => {
    // listeners-play-pause-button adlı veri test kimliği olan butonun ikinci yolunu seç
    const pathElement = document.querySelector('button[data-testid="listeners-play-pause-button"] path:nth-child(2)');
    // yolu değiştir
    pathElement.setAttribute('d', 'M8 7.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-9zm5 0a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-9z');

    // div adında veri test kimliği olan tüm spanları seç
    const spans = document.querySelectorAll('div[data-testid="bar-animation"] span');
    // tüm spanlara ait gNTOnu sınıfını kaldır ve lcwBDv sınıfını ekle
    spans.forEach(span => {
        span.classList.remove('knryRN');
        span.classList.add('hlyiTU');
    });

    // live-listeners adlı veri test kimliği olan h1'i seç
    const h1 = document.querySelector('h1[data-testid="live-listeners"]');
    let count = parseInt(h1.textContent);
    setInterval(() => {
        const randomIncrement = Math.floor(Math.random() * 8) - 2;
        count += randomIncrement;
        // sayacın sıfırın altına düşmesini engelle
        if (count < 0) {
            count = 0;
        }
        h1.textContent = count;
    }, 2000);
}, 100);
