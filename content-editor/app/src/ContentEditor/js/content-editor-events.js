function onLoadContent(content) {
    const event = new CustomEvent('onLoadContent', { detail: content });
    window.dispatchEvent(event);
}

window.addEventListener('onContentChange', function (e) {
    const content = e.detail;
    Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('OnContentChange', [content])
});

window.LoadContent = function (content) {
    if (JSON.stringify(content) == '{}')
        onLoadContent(null);
    else
        onLoadContent(content);
}
