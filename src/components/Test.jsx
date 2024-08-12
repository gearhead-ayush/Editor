import { useState } from 'react';
import React from 'react'
import {
    
    SandpackTests
  } from '@codesandbox/sandpack-react';


const Test = () => {
    const [showTests, setShowTests] = useState(false);
  return (
    <div style={{ height: '100%', overflowY: 'auto', padding: '10px' }}>
                    <button onClick={() => setShowTests(true)} style={{ marginBottom: '10px' }}>
                      Run Tests
                    </button>
                    {showTests && <SandpackTests />}
                  </div>
  )
}

export default Test
