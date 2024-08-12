import React, { useState ,useRef } from 'react';
import { SandpackConsole } from '@codesandbox/sandpack-react';

const Console = () => {
  const [filter, setFilter] = useState('all');
  const consoleRef = useRef(null);

  const clearConsole = () => {
    if (consoleRef.current) {
      consoleRef.current.clear();
    }
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div style={{ padding:'10px', margin: '10px', display:'flex', alignItems:'center', gap:'5px' }}>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('log')}>Logs</button>
        <button onClick={() => setFilter('warn')}>Warnings</button>
        <button onClick={() => setFilter('error')}>Errors</button>
        <button onClick={clearConsole}>Clear Console</button>
      </div>
      <SandpackConsole
        style={{ height: '100%', width: '100%' }}
        options={{ filter }}
        ref={consoleRef}
       
      />
    </div>
  );
};

export default Console;