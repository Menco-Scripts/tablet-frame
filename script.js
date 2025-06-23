    window.addEventListener('DOMContentLoaded', () => {
    const topbarTextEl = document.getElementById('topbar-text');
    const footerEl = document.getElementById('footer');
    fetch('config.json')
        .then(res => res.json())
        .then(config => {
        topbarTextEl.textContent = config.topbarText || '';
        footerEl.textContent = config.footerText || '';
    });
    const settingsBtn = document.getElementById('settings-btn');
    const settingsMenu = document.getElementById('settings-menu');
    const closeMenuBtn = settingsMenu.querySelector('.close-menu');
    const themeToggle = document.getElementById('darkModeToggle');
    const tablet = document.getElementById('tablet');
    const spinner = tablet.querySelector('.dot-spinner');
    settingsBtn.addEventListener('click', e => {
        e.stopPropagation();
        settingsMenu.classList.toggle('visible');
    });
    closeMenuBtn.addEventListener('click', () => {
        settingsMenu.classList.remove('visible');
    });
    document.addEventListener('click', () => {
        settingsMenu.classList.remove('visible');
    });
    settingsMenu.addEventListener('click', e => {
        e.stopPropagation();
    });
    function updateSwitch() {
        themeToggle.checked = document.body.classList.contains('dark-mode');
    }
    updateSwitch();
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
        document.body.classList.add('dark-mode');
        } else {
        document.body.classList.remove('dark-mode');
        }
    });
    setTimeout(() => {
        if (spinner) {
        spinner.remove();
        }
        tablet.classList.add('show-content');
    }, 1500);
    });