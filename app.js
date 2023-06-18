
//create a div tag with parent and 2 childs and each child has 2 childs
//in the createElement api there are three inputs
//1.tag name 2.properties(it is an object) 3.content to put inside the element(a child tag or something)
//to put more childs in the element give them as an array [element1,element2] 
const parent=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{},"h1 tag"),React.createElement("h2",{},"h2 tag")]
),React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"h1 tag"),React.createElement("h2",{},"h2 tag")]
)]
 
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);






// const heading=React.createElement("h1",{},"Hello world from React"); //The heading here is an object
// const root=ReactDOM.createRoot(document.getElementById("root")); //creates a root
// root.render(heading);//replaces root's content with heading




//hello world by javascript
// const root=document.getElementById("root");

// const heading=document.createElement("h1");
// heading.innerHTML="hello world from javascript";
// root.appendChild(heading);
