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
    [heading,br, codeTitle]
  );

  const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(container);

    console.log(root);
    
