const parent = React.createElement(
    "div", 
    {id: "parent"},
    React.createElement(
        "div", 
        {id: "child"},
        [React.createElement("h1", {}, "Iam h1 tag!!"), React.createElement("h2", {}, "Iam h2 tag!!"),

        ]
        )

);
/**This is an React Element or an object which become html  */

   const root = ReactDOM.createRoot(document.getElementById("root"));

   root.render(parent);

   