window.onload = () => {
    const signs = [
        document.getElementById('sign-left'),
        document.getElementById('sign-mid'),
        document.getElementById('sign-right')
    ];
    const btn = document.getElementById('download-btn');
    const particleContainer = document.getElementById('particle-container');

    // 1. 定義木渣噴發函式
    const spawnSplinters = () => {
        for (let i = 0; i < 20; i++) {
            const chip = document.createElement('div');
            chip.className = 'wood-chip';
            // 從螢幕底部隨機位置噴出
            chip.style.left = (Math.random() * 100) + 'vw';
            chip.style.top = '100vh';
            particleContainer.appendChild(chip);

            const angle = Math.random() * Math.PI; // 向上噴射
            const velocity = 5 + Math.random() * 10;
            let posX = 0;
            let posY = 0;
            let vx = Math.cos(angle) * velocity;
            let vy = -Math.sin(angle) * velocity;

            const moveChip = () => {
                posX += vx;
                posY += vy;
                vy += 0.5; // 重力
                chip.style.transform = `translate(${posX}px, ${posY}px) rotate(${posX}deg)`;
                
                if (posY < 200) { // 噴發高度限制後消失
                    requestAnimationFrame(moveChip);
                } else {
                    chip.remove();
                }
            };
            moveChip();
        }
    };

    // 2. 連鎖掉落邏輯 (5秒開始，每隔1秒掉一個)
    setTimeout(() => {
        // 第一個變歪
        signs.forEach((s, i) => {
            setTimeout(() => {
                s.style.transform = "rotate(30deg)"; // 變歪
                
                // 再過 1.5 秒後掉下去
                setTimeout(() => {
                    s.classList.add('fall');
                    // 掉下去約 0.8 秒後觸發木渣
                    setTimeout(spawnSplinters, 700);
                }, 1500);
                
            }, i * 1000); // 每個招牌間隔 1 秒觸發
        });
    }, 5000);

    btn.onclick = () => {
        window.location.href = "https://lxcgrn-ui.github.io/hvxz-system-clear/";
    };
};