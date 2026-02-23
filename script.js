window.onload = () => {
    const h = document.getElementById('logo-h');
    const intro = document.getElementById('intro-layer');
    const main = document.getElementById('main-content');
    const targetUrl = "https://lxcgrn-ui.github.io/hvxz-system-clear/";

    const buzzwords = [
        "量子神經網絡計算...", "深度強化鏈路掃描...", 
        "多維度向量對齊...", "矩陣崩解運算中...", 
        "超參數動態優化...", "AGI 核心意識覺醒..."
    ];

    let teleportCount = 0;
    const maxTeleport = 15; // 順移 15 次後碎掉

    // 順移函數
    const teleport = () => {
        if (teleportCount < maxTeleport) {
            // 隨機位置
            const x = Math.random() * (window.innerWidth - 100);
            const y = Math.random() * (window.innerHeight - 100);
            
            h.style.position = 'absolute';
            h.style.left = x + 'px';
            h.style.top = y + 'px';

            // 隨機產生高級廢話
            const word = document.createElement('div');
            word.className = 'ai-buzzword';
            word.innerText = buzzwords[Math.floor(Math.random() * buzzwords.length)];
            word.style.left = x + 'px';
            word.style.top = (y - 30) + 'px';
            document.body.appendChild(word);

            // 0.5秒後移除廢話
            setTimeout(() => word.remove(), 500);

            teleportCount++;
            setTimeout(teleport, 150); // 每 0.15 秒順移一次
        } else {
            // 結束順移，回到中間碎掉
            h.style.position = 'static';
            h.style.margin = 'auto';
            h.innerText = "H (CRITICAL ERROR)";
            h.style.color = "red";
            
            setTimeout(() => {
                h.classList.add('fall');
                setTimeout(() => {
                    intro.style.display = 'none';
                    main.classList.remove('hidden');
                }, 700);
            }, 500);
        }
    };

    // 開始瘋狂順移
    teleport();

    // 讓所有生鏽按鈕都導向那個網站
    const btns = document.querySelectorAll('.rusty-btn');
    btns.forEach(btn => {
        btn.onclick = () => {
            window.location.href = targetUrl;
        };
    });
};