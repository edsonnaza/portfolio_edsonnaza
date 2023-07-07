import React, { useState } from 'react';
import { BadgeCheckIcon, ChipIcon,DocumentTextIcon } from "@heroicons/react/solid";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another
 
import { phpCode } from '../data';


 
const AbstractInterfaces = () => {
  const [code, setCode] = useState(phpCode);

  return (

   
<section id="AbstractInterfaces">
  
<div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <DocumentTextIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-10">
          Abstract Class <br /> VS Interface
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          In object-oriented programming (OOP), abstract classes and interfaces are used to define common behavior and structure for classes. 
          Here's a definition and the main differences between abstract classes and interfaces:
          </p>
        </div>
        <div className="flex space-x-8 flex-col justify-center items-center space-y-4 lg:flex-row lg:space-y-0">
          <img
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
            alt="Business analysis & Development Process"
            src="./abstract-factory.png"
          />
           <img
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 "
            alt="Business analysis & Development Process"
            src="./interface.png"
          />
        </div>
        <br />
        <p className="mb-6 text-lg leading-relaxed text-justify  ">
        <h1 className="sm:text-2xl text-1xl font-medium title-font text-white mb-4">Abstract Class:</h1> 
         - An abstract class is a class that cannot be instantiated directly. It serves as a blueprint for derived classes. <br /> 
         - It can contain a mixture of both regular (concrete) and abstract methods.   <br /> 
         - Abstract methods are declared without implementation, leaving the derived classes responsible for providing the implementation.<br />
         - Derived classes must extend the abstract class and provide implementations for all its abstract methods. <br />
         - Abstract classes can also contain regular methods with implementation, which can be inherited and overridden by derived classes. <br />
         - Abstract classes can have member variables and can define constructors. <br />
         - A class can only inherit from one abstract class. <br />

        
         <br />
           
        <h1 className="sm:text-2xl text-1xl font-medium title-font text-white mb-4" >Interface:</h1>
           
        - An interface defines a contract that a class must adhere to. It specifies a set of methods (and possibly constants) that a class implementing the interface must implement.  <br /> 
        - It cannot contain any member variables or constructors.  <br />  
        - All methods in an interface are implicitly abstract and public, and they do not have any implementation. <br />
        - A class can implement multiple interfaces, providing implementations for all the methods defined in each interface. <br />
        - Interfaces are used to achieve multiple inheritance of behavior, as a class can implement multiple interfaces but can only inherit from a single class. <br />
        - Interfaces are useful for creating common behavior across unrelated classes or for defining a common API for a group of classes. <br />
         
         
         <br />

        <br />
        In summary, abstract classes are used when you want to provide a common base implementation along with some unimplemented methods, while interfaces are used to define a contract that classes must adhere to by implementing all the methods specified in the interface. 
        Abstract classes can have state (member variables) and constructors, while interfaces cannot. 
        Additionally, a class can inherit from only one abstract class but can implement multiple interfaces.
          </p>

          <div className="rounded mb-4">
          
    <div>
      <h2 className="sm:text-2xl text-1xl font-medium title-font text-white mb-4">PHP Example of Abstract Class and Interface:</h2>
      <div className="overflow-x-auto">
      <div className="inline-block   whitespace-nowrap scrollbar-thumb-white-500 scrollbar-track-white-500">
    <div>
    <Editor
  value={code}
  onValueChange={setCode}
  highlight={code => highlight(code, languages.js)}
  padding={10}
  style={{
    fontFamily: '"Fira code", "Fira Mono", monospace',
    fontSize: 14,
  }}
/>
  
    </div>
        </div>
      </div>
    </div>
    </div>
    </div>
 </section>
    
  );
}
export default AbstractInterfaces;