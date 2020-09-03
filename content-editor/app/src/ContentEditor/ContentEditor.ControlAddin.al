controladdin ContentEditor
{
    RequestedHeight = 300;
    RequestedWidth = 700;
    VerticalStretch = true;
    VerticalShrink = true;
    HorizontalStretch = true;
    HorizontalShrink = true;
    Scripts = './src/ContentEditor/js/content-editor.js';
    StyleSheets = './src/ContentEditor/css/content-editor.css';

    StartupScript = './src/ContentEditor/js/startupScript.js';

    event OnContentChange(content: Text)

    procedure LoadContent(content: Text)
}