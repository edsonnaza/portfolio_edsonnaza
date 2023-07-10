import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-php-extras';
import 'prismjs/themes/prism.css'; //Example style, you can use another

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
