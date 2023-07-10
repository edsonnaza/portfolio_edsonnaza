import React, { useEffect, useRef, useState } from 'react';
import { BadgeCheckIcon, ChipIcon,DocumentTextIcon } from "@heroicons/react/solid";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another
import Prism from 'prismjs';
import CodeHighlight from './CodeHighlight';

 
import { phpAccesModifier } from '../data';


 
const AccessModifiers = () => {
  const [code, setCode] = useState(phpAccesModifier);

  return (

   
<section id="AccessModifiers">
  
<div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <DocumentTextIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-10">
          PHP  <br /> Access Modifiers
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Access modifiers are keywords in object-oriented programming languages that define the visibility and accessibility of class members (properties and methods). 
          They specify the level of access that other parts of the program have to these members.   
            </p>
        </div>
        <div className="flex space-x-8 flex-col justify-center items-center space-y-4 lg:flex-row lg:space-y-0">
          <img
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
            alt="Business analysis & Development Process"
            src="./Access-Modifiers-in-PHP.png"
          />
           <img
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 "
            alt="Business analysis & Development Process"
            src="./accesModifiers.jpeg"
          />
        </div>
        <br />
        <p className="list-disc ml-4 list-inside mb-6 text-lg leading-relaxed text-justify">
        <h1 className="sm:text-2xl text-1xl font-medium title-font text-white mb-4">There are three access modifiers:</h1> 
       
         - <span className="text-red-400 text-medium text-strong">Public:</span> A public member is accessible from anywhere within the program. It can be accessed and modified by any other class or code that has access to the instance of the class. <br /> 
         - <span className="text-red-400 text-medium">Protected: </span>A protected member is accessible within the class where it is declared and its subclasses (derived classes). It cannot be accessed or modified by code outside of the class hierarchy. Protected members allow for controlled access and inheritance between related classes.  <br /> 
         - <span className="text-red-400 text-medium">Private:</span>A private member is only accessible within the class where it is declared. It cannot be accessed or modified directly by other classes or code outside of the class. Private members are typically used to encapsulate the internal state and implementation details of a class. <br />
         - <span className="text-red-400 text-medium">Default (also known as package-private or package-level access):</span> This access modifier is used when no access modifier keyword is specified. In some programming languages, it allows members to be accessible within the same package or module. 
                    Members with default access are not accessible outside of the package or module. <br />
        
         <br />    
        <br />
        The choice of access modifier depends on the desired level of encapsulation, security, and reusability of class members. 
        By controlling the access to class members, access modifiers help enforce encapsulation and prevent unauthorized access or modification of sensitive data or behavior.    </p>

   <div className="rounded mb-4">
          
    <div>
      <h2 className="sm:text-2xl text-1xl font-medium title-font text-white mb-4">PHP Example Access Modifiers:</h2>
      <div className="overflow-x-auto">
      <div className="inline-block   whitespace-nowrap scrollbar-thumb-white-500 scrollbar-track-white-500">
   
  <div>
  <CodeHighlight code={phpAccesModifier} language="php" />

  </div>
   </div>
    </div>
    </div>
    </div>
    </div>
 </section>
    
  );
}
export default AccessModifiers;