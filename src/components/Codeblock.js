import React, { useEffect, useRef } from 'react';
import hljs from 'highlight';
import 'highlight.js/styles/default.css';

const CodeBlock = ({ language, code }) => {
  const codeRef = useRef();
  useEffect(() => {
    if (codeRef && codeRef.current) {
      hljs.highlightBlock(codeRef.current);
    }
  }, [code]);

  return (
    <pre>
      <code className={`language-${language}`} ref={codeRef}>
        {code}
      </code>
    </pre>
  );
};

export const phpCode = `<?php
interface Printable {
    public function print();
}

abstract class Element implements Printable {
    protected $content;

    public function __construct($content) {
        $this->content = $content;
    }

    public function print() {
        echo $this->content;
    }

    abstract public function add();
}

class Paragraph extends Element {
    public function add() {
        return "<p>" . $this->content . "</p>";
    }
}

class Title extends Element {
    public function add() {
        return "<h1>" . $this->content . "</h1>";
    }
}

$paragraph = new Paragraph("This is an example of a paragraph.");
$paragraphHTML = $paragraph->add();
echo $paragraphHTML;

$title = new Title("Example of a Title");
$titleHTML = $title->add();
echo $titleHTML;
?>`;

// Componente donde se muestra el código PHP
function CodeBlock() {
  return (
    <div>
      <h2>Ejemplo de Clase Abstracta e Interfaz en PHP</h2>
      <CodeBlock language="php" code={phpCode} />
    </div>
  );
}

export default CodeBlock
