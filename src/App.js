import React from 'react';
//jsx
function App() {
  return (
    <div
     className="App"
     style={
      {color: "purple",
      fontSize: "30px",
      backgroundColor: "pink"}
    }>Проба React</div>
  );
}
/*js
function App() {
  return (
    React.createElement("div", {
      className: "App"
    }, "ffff")
  );
} 
*/
export default App;
