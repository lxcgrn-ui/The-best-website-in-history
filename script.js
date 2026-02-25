window.onload = () => {
    const signs = [
        document.getElementById('sign-left'),
        document.getElementById('sign-mid'),
        document.getElementById('sign-right')
    ];
    const downloadBtn = document.getElementById('download-btn');
    const blueScreen = document.getElementById('blue-screen');
    const mainStage = document.getElementById('main-stage');
    const tempBtn = document.getElementById('temp-link-btn');
    const particleContainer = document.getElementById('particle-container');

    const spawnSplinters = () => {
        for (let i = 0; i < 15; i++) {
            const chip = document.createElement('div');
            chip.className = 'wood-chip';
            chip.style.left = (Math.random() * 100) + 'vw';
            chip.style.top = '100vh';
            particleContainer.appendChild(chip);
            let px = 0, py = 0, vx = (Math.random() - 0.5) * 15, vy = -Math.random() * 20;
            const move = () => {
                px += vx; py += vy; vy += 0.8;
                chip.style.transform = `translate(${px}px, ${py}px) rotate(${px}deg)`;
                if (py < 300) requestAnimationFrame(move); else chip.remove();
            };
            move();
        }
    };

    // 啟動連鎖崩塌：5秒開始
    setTimeout(() => {
        // 1. 三個招牌輪流掉落
        signs.forEach((s, i) => {
            setTimeout(() => {
                s.style.transform = "rotate(30deg)"; // 變歪
                setTimeout(() => {
                    s.classList.add('fall');
                    setTimeout(spawnSplinters, 700);
                }, 1000);
            }, i * 1200);
        });

        // 2. 招牌掉完後，輪到 Download 按鈕掉下去 (約在 9 秒左右)
        setTimeout(() => {
            downloadBtn.style.transform = "rotate(-20deg) scale(1.1)"; // 抖動一下
            setTimeout(() => {
                downloadBtn.classList.add('fall');
                setTimeout(spawnSplinters, 700);
                
                // 3. 按鈕掉完，全黑一瞬間，然後進入藍屏 (約在 11 秒)
                setTimeout(() => {
                    mainStage.style.display = 'none';
                    blueScreen.classList.remove('hidden');
                }, 1200);
            }, 800);
        }, 4500); 

    }, 5000);

    // 臨時連結導向
    tempBtn.onclick = () => {
        window.location.href = "https://lxcgrn-ui.github.io/hvxz-system-clear/";
    };
};