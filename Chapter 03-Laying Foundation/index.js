/***
+ * Parcel Usages 
+ * Created A Server
+ * HMR - Hot Module Replacement
+ * File Watcher algorithm - C++
+ * BUNDLING
+ * MINIFY
+ * Cleaning our Code
+ * Dev abd Production Build
+ * Super Fast build algorithm
+ * Image Optimization
+ * Caching while development
+ * Compression
+ * Compatble with older version of browser
+ * HTTPS on dev
+ * port Number
+ * Consistent Hashing Algorithm
+ * Zero Config
+ *
+ *
+ *
+ * Transitive Dependencies
+ */


import React from "react";
import  ReactDOM  from "react-dom/client";


// const heading = React.createElement(
//     "h1",
//     {
//       id: "title",
//       key: "title"
//     },
//     "Namaste React"
//   );

 /// JSX Syntax of above 

 const Heading = () => {

  return (
    <h1 id="title" key ="title">
      Namaste React
    </h1>
  )
 }


  // const br = React.createElement("br",
  // {
  //   id: "br",
  //   key: "br"
  // },
  //   );

  // JSX of above 
  const Br = () => {
    return (
      <br id="br" key="br">
      </br>
    )
  }
  // const codeTitle = React.createElement("h3",{
  //   id: "codeTitleid",
  //   key: "codeTitle"
  // },
  // "Code title- Namaste");

  /// JSX 

  const CodeTitle = () => {
    return (
      <h3 id="codeTitle" key="codeTitle">
          Code title- Namaste
      </h3>
    )
  }

// const container = React.createElement()
//     "div",{
//         id: "container",
//         key: "container"
//     },
//     [heading,br,codeTitle]
//   ;


const moreText = (
  <h5>
    further details about this page
  </h5>
)
const Container = () => {
  return (
    <div id="container" key="container">
      <h2>Main Container</h2>
      <Heading />
      <Br />
      <CodeTitle />
      {moreText} 
    </div>
  )
}

  console.log(<Container />);
  const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(<Container />);

    console.log(root);
    
