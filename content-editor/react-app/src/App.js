import React from 'react';
import ReactDOM from 'react-dom';
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

import {
  convertFromRaw,
  convertToRaw,
} from 'wix-rich-content-editor-common';

const PLUGINS = [createLinkPlugin, createCodeBlockPlugin, createHashtagPlugin, createHtmlPlugin];
const ON_LOAD_CONTENT_EVENT = 'onLoadContent';
const ON_CONTENT_CHANGE_EVENT = 'onContentChange';

window.addEventListener(ON_LOAD_CONTENT_EVENT, (e) => {
  ReactDOM.render(
    <React.StrictMode>
      <ContentEditor content={e.detail} />
    </React.StrictMode>,
    document.getElementById('controlAddIn')
  );
})

class ContentEditor extends React.Component {
  constructor(props) {
    super(props);

    this.refsEditor = React.createRef();
    if (this.props.content) {
      const contentState = convertFromRaw(this.props.content);
      this.state = {
        editorState: EditorState.createWithContent(contentState),
      }
    } else {
      this.state = { editorState: EditorState.createEmpty(), };
    }

    this.onLoadContentFunc = this.onLoadContent.bind(this);
    window.addEventListener(ON_LOAD_CONTENT_EVENT, this.onLoadContentFunc)
  }

  onLoadContent(e) {
    if (!e.detail)
      return;

    const contentState = convertFromRaw(e.detail);
    this.setState({
      editorState: EditorState.createWithContent(contentState),
    });
  }

  onChange = editorState => {
    this.setState({
      editorState,
    });

    const rawContent = convertToRaw(editorState.getCurrentContent());
    let event = new CustomEvent(ON_CONTENT_CHANGE_EVENT, { detail: rawContent });
    window.dispatchEvent(event);
  };

  componentDidMount() {
    this.refsEditor.current.focus();
  }

  componentWillUnmount() {
    window.removeEventListener(ON_LOAD_CONTENT_EVENT, this.onLoadContentFunc);
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
