window.onload = () => {
    const h = document.getElementById('logo-h');
    const intro = document.getElementById('intro-layer');
    const main = document.getElementById('main-content');
    const targetUrl = "https://lxcgrn-ui.github.io/hvxz-system-clear/";

    const buzzwords = [
        "量子神經網絡計算...", "深度強化鏈路掃描...", 
        "多維度向量對齊...", "AGI 核心意識覺醒...", 
        "雲端垃圾回收中...", "高級 AI 自動擺爛..."
    ];

    let count = 0;

    const teleportH = () => {
        if (count < 15) {
            // 隨機跳躍
            const x = Math.random() * (window.innerWidth - 100);
            const y = Math.random() * (window.innerHeight - 100);
            h.style.position = 'absolute';
            h.style.left = x + 'px';
            h.style.top = y + 'px';

            // 噴出廢話
            const tag = document.createElement('div');
            tag.className = 'ai-buzzword';
            tag.innerText = buzzwords[Math.floor(Math.random() * buzzwords.length)];
            tag.style.left = (x + 50) + 'px';
            tag.style.top = (y - 20) + 'px';
            document.body.appendChild(tag);
            setTimeout(() => tag.remove(), 400);

            count++;
            setTimeout(teleportH, 150);
        } else {
            // 回到中間碎掉
            h.style.position = 'static';
            h.style.color = "red";
            h.innerText = "H (FATAL ERROR)";
            setTimeout(() => {
                h.classList.add('fall');
                setTimeout(() => {
                    intro.style.display = 'none';
                    main.classList.remove('hidden');
                }, 600);
            }, 500);
        }
    };

    teleportH();

    // 導向陷阱
    document.querySelectorAll('.rusty-btn').forEach(btn => {
        btn.onclick = () => window.location.href = targetUrl;
    });
};