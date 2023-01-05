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
import  ReactDOM  from "react-dom";
const heading = React.createElement(
    "h1",
    {
      id: "title",
    },
    "Namaste React"
  );

  const br = React.createElement("br");

  const codeTitle = React.createElement("h3",{
    id: "codeTitleid"
  },
  "Code title- Namaste");

const container = React.createElement(
    "div",{
        id: "container"
    },
    [heading,br,codeTitle]
  );

  const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(container);

    console.log(root);
    
