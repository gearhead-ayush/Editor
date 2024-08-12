import React from 'react'
import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import {
    
    SandpackCodeEditor
  } from '@codesandbox/sandpack-react';

const Editor = () => {
  return (
    <div style={{ height: '100%', overflowY: 'auto' }}>
                        <SandpackCodeEditor
                          showTabs
                          showLineNumbers
                          wrapContent={false}
                          extensions={[autocompletion()]}
                          extensionsKeymap={[completionKeymap]}
                          closableTabs
                          showInlineErrors
                        />
                      </div>
  )
}

export default Editor
