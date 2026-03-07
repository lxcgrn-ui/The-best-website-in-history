window.onload = () => {
    const board = document.getElementById('download-board');
    const knife = document.getElementById('knife');
    const targetUrl = "https://lxcgrn-ui.github.io/hvxz-system-clear/";
    let clicked = false;

    // 5秒生存倒數
    const timer = setTimeout(() => {
        if (!clicked) {
            triggerSplit();
        }
    }, 5000);

    const triggerSplit = () => {
        knife.style.top = "40vh"; // 刀掉下來
        setTimeout(() => {
            board.style.display = 'none';
            // 這裡可以加上劈開兩半的動畫邏輯
            document.getElementById('blue-screen').classList.remove('hidden');
        }, 300);
    };

    board.onclick = () => {
        clicked = true;
        clearTimeout(timer);
        window.location.href = targetUrl;
    };

    document.getElementById('temp-link-btn').onclick = () => {
        window.location.href = targetUrl;
    };
};