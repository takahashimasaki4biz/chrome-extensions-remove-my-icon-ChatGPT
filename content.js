function domChanged() {
    const images = document.querySelectorAll('img[alt="User"]');
    images.forEach(img => img.remove());
}

const target = document.querySelector('body');
const options = {
    childList: true,
    // characterData: true,
    // characterDataOldValue: true,
    // attributes: true,
    subtree: true,
}
const observer = new MutationObserver(domChanged);
observer.observe(target, options);