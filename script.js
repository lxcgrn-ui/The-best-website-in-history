window.onload = () => {
    const downloadBtn = document.getElementById('download-btn');
    const wrapper = document.getElementById('download-button-wrapper');
    const knife = document.getElementById('knife');
    const targetUrl = "https://lxcgrn-ui.github.io/hvxz-system-clear/";
    let clicked = false;

    const splitButton = () => {
        const rect = downloadBtn.getBoundingClientRect();
        downloadBtn.style.display = 'none';

        const createHalf = (text, isLeft) => {
            const half = document.createElement('div');
            half.className = isLeft ? 'split-left' : 'split-right';
            half.innerText = text;
            half.style.width = (rect.width / 2) + 'px';
            half.style.height = rect.height + 'px';
            half.style.left = (rect.left + (isLeft ? 0 : rect.width / 2)) + 'px';
            half.style.top = rect.top + 'px';
            document.body.appendChild(half);
            return half;
        };

        const left = createHalf("DOWN", true);
        const right = createHalf("LOAD", false);

        knife.classList.remove('hidden');
        knife.style.left = (rect.left + rect.width / 2 - 10) + 'px';
        setTimeout(() => knife.classList.add('knife-fall'), 50);

        setTimeout(() => {
            left.classList.add('fall');
            right.classList.add('fall');
        }, 300);
    };

    const timer = setTimeout(splitButton, 5000);

    downloadBtn.onclick = () => {
        if (!clicked) {
            clicked = true;
            clearTimeout(timer);
            window.location.href = targetUrl;
        }
    };
};