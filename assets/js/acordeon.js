const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');
acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement;
        const isOpen = acordeon.classList.contains('open');
        const content = acordeon.querySelector('.content');
        if (isOpen) {
            acordeon.classList.remove('open');
            content.style.height = '0px';
        } else {
            acordeon.classList.add('open');
            const contentHeight = content.scrollHeight;
            content.style.height = `${contentHeight}px`;
        }
    });
});
