function onStartup() {
    const event = new CustomEvent('onControlAddInStartup', { detail: '' });
    window.dispatchEvent(event);
}

function onLoadContent(content) {
    const event = new CustomEvent('onLoadContent', { detail: content });
    window.dispatchEvent(event);
}

window.LoadContent = function (content) {
    onLoadContent(content);
}

window.addEventListener('onContentChange', function (e) {
    console.log(e.detail);
});

onStartup();
