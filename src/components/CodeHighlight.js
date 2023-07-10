import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';

const CodeHighlight = ({ code, language }) => {
  const codeRef = useRef();

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre>
      <code ref={codeRef} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

export default CodeHighlight;
