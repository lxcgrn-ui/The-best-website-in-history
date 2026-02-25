window.onload = () => {
    const signboard = document.getElementById('signboard');
    const btn = document.getElementById('download-btn');
    const targetUrl = "https://lxcgrn-ui.github.io/hvxz-system-clear/";

    // 1. 5秒後：招牌變歪 (模擬一邊鍊子斷了)
    setTimeout(() => {
        signboard.style.transform = "rotate(35deg)";
        
        // 2. 再過3秒 (總共8秒)：招牌徹底掉下去
        setTimeout(() => {
            signboard.classList.add('fall');
        }, 3000);

    }, 5000);

    // 3. 點擊按鈕跳轉
    btn.onclick = () => {
        window.location.href = targetUrl;
    };
};