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
  }

  state = {
    editorState: EditorState.createEmpty(),
  };

  onChange = editorState => {
    this.setState({
      editorState,
    });

    console.log(editorState);
  };

  componentDidMount() {
    this.refsEditor.current.focus();
  }

  render() {
    return (
      <div className='margins'>
        <RichContentEditor
          ref={this.refsEditor}
          plugins={PLUGINS}
          onChange={this.onChange} editorState={this.state.editorState} />
      </div>
    );
  }
}

export default ContentEditor;
