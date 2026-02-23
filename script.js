window.onload = () => {
    const h = document.getElementById('logo-h');
    const intro = document.getElementById('intro-layer');
    const main = document.getElementById('main-content');

    // 1. 一進去就開始抖動
    h.classList.add('shake');

    // 2. 1.2秒後執行「喀嚓」碎掉掉落
    setTimeout(() => {
        h.classList.remove('shake');
        h.classList.add('fall');

        // 3. 掉下去後，顯示那個很廢的內容
        setTimeout(() => {
            intro.style.display = 'none';
            main.classList.remove('hidden');
            document.body.style.overflow = 'auto';
        }, 700);
    }, 1200);
};