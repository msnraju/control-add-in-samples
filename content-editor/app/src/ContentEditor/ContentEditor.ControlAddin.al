controladdin ContentEditor
{
    RequestedHeight = 300;
    VerticalStretch = true;
    VerticalShrink = true;
    HorizontalStretch = true;
    HorizontalShrink = true;
    Scripts =
        './src/ContentEditor/js/content-editor-events.js',
        './src/ContentEditor/js/content-editor.js';
    StyleSheets = './src/ContentEditor/css/content-editor.css';

    event OnContentChange(content: JsonObject)
    procedure LoadContent(content: JsonObject)
}