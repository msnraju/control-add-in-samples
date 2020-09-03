import React from 'react';
import { EditorState, RichContentEditor } from 'wix-rich-content-editor';
import { createLinkPlugin } from 'wix-rich-content-plugin-link';
import { createCodeBlockPlugin } from 'wix-rich-content-plugin-code-block';
import { createHashtagPlugin } from 'wix-rich-content-plugin-hashtag';
import { createHtmlPlugin } from 'wix-rich-content-plugin-html';
import 'wix-rich-content-editor-common/dist/styles.min.css';
import 'wix-rich-content-editor/dist/styles.min.css';
import 'wix-rich-content-plugin-link/dist/styles.min.css';
import 'wix-rich-content-plugin-code-block/dist/styles.min.css';
import 'wix-rich-content-plugin-hashtag/dist/styles.min.css';
import 'wix-rich-content-plugin-html/dist/styles.min.css';
import './App.css';

const PLUGINS = [createLinkPlugin, createCodeBlockPlugin, createHashtagPlugin, createHtmlPlugin];

class ContentEditor extends React.Component {
  constructor(props) {
    super(props);

    this.refsEditor = React.createRef();

    this.onLoadContentFunc = this.onLoadContent.bind(this);
    window.addEventListener('onLoadContent', this.onLoadContentFunc)
  }

  state = { editorState: EditorState.createEmpty(), }

  onLoadContent(e) {
    this.setState({
      editorState: e.detail,
    });
  }

  onChange = editorState => {
    this.setState({
      editorState,
    });

    this.contentChangeEvent = new CustomEvent('onContentChange', { detail: editorState.currentContent });
    window.dispatchEvent(event);
    console.log(editorState.currentContent);
  };

  componentDidMount() {
    this.refsEditor.current.focus();
  }

  componentWillUnmount() {
    window.removeEventListener('onLoadContent', this.onLoadContentFunc);
  }

  render() {
    return (
      <div className='content-editor-container'>
        <RichContentEditor
          ref={this.refsEditor}
          plugins={PLUGINS}
          onChange={this.onChange} editorState={this.state.editorState} />
      </div>
    );
  }
}

export default ContentEditor;
