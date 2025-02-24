
import { useRef } from "react";
import PropTypes from "prop-types";
import { Editor } from "@monaco-editor/react";

const CodeEditor = ({ code, setCode, language }) => {
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleEditorChange = (value) => {
    setCode(value);
  };

  return (
    <div style={{ height: "400px" }}>
      <Editor
        height="100%"
        theme="vs-dark"
        language={language}
        value={code}
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          wordWrap: "on",
          automaticLayout: true,
        }}
      />
    </div>
  );
};

CodeEditor.propTypes = {
  code: PropTypes.string.isRequired,
  setCode: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

export default CodeEditor;
