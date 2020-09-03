function setEditorContent(content) {
    const event = new CustomEvent('onControlAddInStartup', { detail: content });
    window.dispatchEvent(event);    
}

window.LoadContent = function(content) {
    setEditorContent(content);
}

setEditorContent('');
alert('startup');