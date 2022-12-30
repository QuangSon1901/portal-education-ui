const body = document.body;

// call this to Disable
function disableScroll() {
    body.style.overflowY = 'hidden';
}

// call this to Enable
function enableScroll() {
    body.style.overflowY = 'overlay';
}

const handleScoll = (top, behavior = true) => {
    var rootElement = document.documentElement;
    rootElement.scrollTo({
        top,
        behavior: behavior ? 'smooth' : 'auto',
    });
};

export { disableScroll, enableScroll, handleScoll };
