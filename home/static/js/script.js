window.addEventListener(
    "dragstart",
    (event) => {
        event.preventDefault();
    },
    false
);

window.addEventListener(
    "drop",
    (event) => {
        e.preventDefault();
    },
    false
);

window.addEventListener(
    "mousedown",
    (event) => {
        event.preventDefault();
    },
    false
);

window.addEventListener(
    "contextmenu",
    (event) => {
        event.preventDefault();
    },
    false
);

function ctrlShiftKey(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

window.onKeyup = (e) => {
    if (e.key == "PrintScreen") {
        navigator.clipboard.writeText("");
        return false;
    }
};

document.onkeydown = (e) => {
    // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U,A,P,F,S
    if (
        e.keyCode === 123 ||
        ctrlShiftKey(e, "I") ||
        ctrlShiftKey(e, "J") ||
        ctrlShiftKey(e, "C") ||
        ctrlShiftKey(e, "M") ||
        (e.ctrlKey && e.keyCode === "U".charCodeAt(0)) ||
        (e.ctrlKey && e.keyCode === "A".charCodeAt(0)) ||
        (e.ctrlKey && e.keyCode === "P".charCodeAt(0)) ||
        (e.ctrlKey && e.keyCode === "F".charCodeAt(0)) ||
        (e.ctrlKey && e.keyCode === "S".charCodeAt(0)) ||
        e.key == "PrintScreen"
    )
        navigator.clipboard.writeText("");
    return false;
};
