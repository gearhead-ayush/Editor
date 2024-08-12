import React, { useState, useCallback, useRef } from 'react';
import Test from './Test';
import Preview from './Preview';
import {
  SandpackProvider,
  SandpackLayout,
} from '@codesandbox/sandpack-react';
import {
  PanelGroup,
  Panel,
  PanelResizeHandle,
} from 'react-resizable-panels';
import { atomDark } from '@codesandbox/sandpack-themes';

import 'react-resizable/css/styles.css';
import './CodeRunner.css';
import Console from './Console';
import FileExplorer from './FileExplorer';
import Editor from './Editor';

const CodeRunner = () => {
  const [activeTab, setActiveTab] = useState('problem');
  const [activeComponent, setActiveComponent] = useState('preview');

  // Store the code in useRef to persist across re-renders
  const codeRef = useRef({
    "/CounterApp.js": `
import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default CounterApp;
`,
    "/CounterApp.test.js": `
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CounterApp from './CounterApp';

test('renders counter app with initial state', () => {
  render(<CounterApp />);
  const counterElement = screen.getByText(/Counter/i);
  expect(counterElement).toBeInTheDocument();
});`,
    "/App.js": `
import CounterApp from "./CounterApp"
export default function App() {
  return <CounterApp/>
}
`,
  });

  const handleTabClick = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  const handleComponentSwitch = useCallback((component) => {
    setActiveComponent(component);
  }, []);

  return (
    <SandpackProvider
      theme={atomDark}
      template="react"
      files={codeRef.current}
      customSetup={{
        dependencies: {
          "@testing-library/react": "^12.1.2",
          "@testing-library/jest-dom": "^5.14.1",
        },
      }}
    >
      <SandpackLayout style={{ height: '100vh', width: '100vw'}}>
        <PanelGroup direction="horizontal">
          <Panel defaultSize={30}>
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px 0' }}>
              <button onClick={() => handleTabClick('problem')}>Problem</button>
              <button onClick={() => handleTabClick('files')}>Files</button>
              <button onClick={() => handleTabClick('hint')}>Hint</button>
              <button onClick={() => handleTabClick('submission')}>Submission</button>
            </div>
            {activeTab === 'files' && <FileExplorer />}
          </Panel>
          <PanelResizeHandle style={{ backgroundColor: '#ccc', width: '1px' }} />
          <Panel defaultSize={70}>
            <PanelGroup direction="vertical">
              <Panel defaultSize={80}>
                <PanelGroup direction="horizontal">
                  <Panel defaultSize={60}>
                    <Editor />
                  </Panel>
                  <PanelResizeHandle style={{ backgroundColor: '#ccc', width: '1px' }} />
                  <Panel defaultSize={40}>
                    <div style={{ display: 'flex', margin: '10px' }}>
                      <button
                        onClick={() => handleComponentSwitch('preview')}
                        style={{ marginRight: '10px' }}
                      >
                        Output
                      </button>
                      <button
                        onClick={() => handleComponentSwitch('console')}
                      >
                        Console
                      </button>
                    </div>
                    {activeComponent === 'preview' && <Preview />}
                    {activeComponent === 'console' && <Console />}
                  </Panel>
                </PanelGroup>
              </Panel>
              <PanelResizeHandle style={{ backgroundColor: '#ccc', height: '1px', width: '100%' }} />
              <Panel defaultSize={20}>
                <Test />
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </SandpackLayout>
    </SandpackProvider>
  );
};

export default CodeRunner;
