window.onload = () => {
    const downloadBtn = document.getElementById('download-btn');
    const downloadBtnWrapper = document.getElementById('download-button-wrapper');
    const knife = document.getElementById('knife');
    const particleContainer = document.getElementById('particle-container');
    const targetUrl = "https://lxcgrn-ui.github.io/hvxz-system-clear/";
    let clicked = false; // 用來判斷用戶是否在時限內點擊

    // --- 粒子噴濺函式 ---
    const spawnSplinters = (x, y) => {
        for (let i = 0; i < 20; i++) {
            const chip = document.createElement('div');
            chip.className = 'wood-chip';
            chip.style.left = `${x}px`;
            chip.style.top = `${y}px`;
            
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 10 + 5;
            const targetX = Math.cos(angle) * velocity * 20 + x;
            const targetY = Math.sin(angle) * velocity * 20 + y;
            const rotation = Math.random() * 720;

            chip.style.setProperty('--x', `${targetX - x}px`);
            chip.style.setProperty('--y', `${targetY - y}px`);
            chip.style.setProperty('--r', `${rotation}deg`);

            particleContainer.appendChild(chip);
            chip.style.opacity = '1';
        }
    };

    // --- 劈開按鈕的函式 ---
    const splitButton = () => {
        const rect = downloadBtn.getBoundingClientRect();
        
        // 隱藏原始按鈕
        downloadBtn.style.display = 'none';

        // 創建左半邊
        const leftHalf = document.createElement('div');
        leftHalf.className = 'split-left';
        leftHalf.innerText = "DOWN"; // 顯示文字的一部分
        leftHalf.style.width = (rect.width / 2) + 'px';
        leftHalf.style.height = rect.height + 'px';
        leftHalf.style.left = (rect.left) + 'px';
        leftHalf.style.top = (rect.top) + 'px';
        downloadBtnWrapper.appendChild(leftHalf);

        // 創建右半邊
        const rightHalf = document.createElement('div');
        rightHalf.className = 'split-right';
        rightHalf.innerText = "LOAD"; // 顯示文字的另一部分
        rightHalf.style.width = (rect.width / 2) + 'px';
        rightHalf.style.height = rect.height + 'px';
        rightHalf.style.left = (rect.left + rect.width / 2) + 'px';
        rightHalf.style.top = (rect.top) + 'px';
        downloadBtnWrapper.appendChild(rightHalf);

        // 讓刀掉下來
        knife.classList.remove('hidden');
        knife.style.left = (rect.left + rect.width / 2 - knife.offsetWidth / 2) + 'px'; // 刀在按鈕中間
        knife.classList.add('knife-fall'); // 刀快速掉落

        // 劈中瞬間的震動和木渣噴濺
        setTimeout(() => {
            knife.classList.add('knife-impact'); // 刀劈中震動
            spawnSplinters(rect.left + rect.width / 2, rect.top + rect.height / 2); // 木渣噴濺

            // 兩半飛散掉落
            leftHalf.style.transform = `translate(-${rect.width / 4}px, ${window.innerHeight}px) rotate(-45deg)`;
            rightHalf.style.transform = `translate(${rect.width / 4}px, ${window.innerHeight}px) rotate(45deg)`;
            knife.style.transform = `translateY(${window.innerHeight}px) rotate(90deg)`; // 刀也掉下去
        }, 300); // 刀落下的時間

        // 最終清場
        setTimeout(() => {
            downloadBtnWrapper.remove();
            knife.remove();
            // 在這裡可以選擇什麼都不做，讓畫面保持黑暗
            // 或者導向到一個空的頁面
        }, 2000);
    };

    // --- 5秒計時開始 ---
    const failureTimer = setTimeout(() => {
        if (!clicked) {
            splitButton(); // 5秒內沒點就劈開
        }
    }, 5000);

    // --- 按鈕點擊事件 ---
    downloadBtn.onclick = () => {
        if (!clicked) {
            clicked = true;
            clearTimeout(failureTimer); // 取消失敗計時器
            window.location.href = targetUrl; // 導向目標網址
        }
    };
};