const passwordInput = document.getElementById('password-input');
const verifyBtn = document.getElementById('verify-btn');
const loginScreen = document.getElementById('login-screen');
const horrorOverlay = document.getElementById('horror-overlay');
const errorMsg = document.getElementById('error-msg');

const curses = ["腐敗", "痛苦", "詛咒", "永眠", "虛無", "鮮血", "終焉"];

verifyBtn.onclick = () => {
    const val = passwordInput.value;

    if (val === "666") {
        startHorrorMode();
    } else if (val === "1818") {
        window.location.href = "https://lxcgrn-ui.github.io/hvxz-system-clear/";
    } else {
        errorMsg.classList.remove('hidden');
        setTimeout(() => errorMsg.classList.add('hidden'), 2000);
    }
};

function startHorrorMode() {
    loginScreen.style.opacity = '0';
    setTimeout(() => loginScreen.classList.add('hidden'), 500);
    
    document.body.classList.add('blood-mode');
    horrorOverlay.classList.remove('hidden');

    // 每 0.4 秒生成一個亂竄的咒罵按鈕
    setInterval(() => {
        createCurseButton();
    }, 400);
}

function createCurseButton() {
    const btn = document.createElement('button');
    btn.className = 'scary-btn';
    btn.innerText = curses[Math.floor(Math.random() * curses.length)];
    
    // 隨機初始位置
    btn.style.left = Math.random() * 90 + 'vw';
    btn.style.top = Math.random() * 90 + 'vh';
    
    // 隨機角度
    btn.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;

    horrorOverlay.appendChild(btn);

    // 讓按鈕開始亂竄
    let x = parseFloat(btn.style.left);
    let y = parseFloat(btn.style.top);
    let dx = (Math.random() - 0.5) * 5;
    let dy = (Math.random() - 0.5) * 5;

    function move() {
        x += dx;
        y += dy;
        
        // 碰壁反彈
        if (x < 0 || x > 90) dx *= -1;
        if (y < 0 || y > 90) dy *= -1;

        btn.style.left = x + 'vw';
        btn.style.top = y + 'vh';
        
        requestAnimationFrame(move);
    }
    move();

    // 如果點到咒罵按鈕，螢幕閃爍紅光
    btn.onclick = () => {
        document.body.style.backgroundColor = 'red';
        setTimeout(() => document.body.style.backgroundColor = '#2e0000', 100);
    };
}