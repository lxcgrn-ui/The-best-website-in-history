window.onload = () => {
    const title = document.getElementById('title-text');
    const btn = document.getElementById('download-btn');
    const targetUrl = "https://lxcgrn-ui.github.io/hvxz-system-clear/";

    // 1. 5秒後：標題變歪
    setTimeout(() => {
        title.style.transform = "rotate(25deg)";
        
        // 2. 再過3秒 (總共8秒)：標題掉下去
        setTimeout(() => {
            title.classList.add('fall');
        }, 3000);

    }, 5000);

    // 3. 點擊那個歪歪的按鈕，直接導向你指定的網站
    btn.onclick = () => {
        window.location.href = targetUrl;
    };
};