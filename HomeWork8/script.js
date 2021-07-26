function switchOn (root) {
    const btn = root.querySelector('.btn');
    const lamp = root.querySelector('.lamp');
    let isActive = true;
    const toggleOn = () => {
        if (isActive === true) {
            lamp.style.backgroundColor = getRandomColor()
            isActive = false;
        } else {
            lamp.style.backgroundColor = "transparent";
            isActive = true;
        }
    };
    btn.addEventListener('click', toggleOn);
}

switchOn (document.querySelector('#lamp1'));
switchOn (document.querySelector('#lamp2'));






