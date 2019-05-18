import * as React from 'react';

require('monaco-editor-core');
require('./Application.scss');

class Editor extends React.Component {
    node = React.createRef<HTMLDivElement>();
    editor: monaco.editor.IStandaloneCodeEditor | null = null;

    componentDidMount() {
        this.editor = monaco.editor.create(this.node.current as HTMLDivElement, {
            language: 'typescript'
        });
    }

    componentWillUnmount() {
        this.editor && this.editor.dispose();
    }

    render() {
        return <div ref={this.node} style={{ height: '100vh' }} />;
    }
}

const Application = () => (
    <div>
        <Editor />
    </div>
);

export default Application;
