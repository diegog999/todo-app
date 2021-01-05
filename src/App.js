import './App.css';

function App() {
  return (
    <div className="main">
      <h1><span>NOT</span><span>todo</span><span>LIST</span></h1>
      <ol id="instructions">
        <li>Write down things not to do.</li>
        <li>
          If someone asks you to do said thing, just reply with: "Sorry, but
          that's on my Not Todo List."
        </li>
        <li>
          If you successfully avoided doing said thing, cross it of your list.
        </li>
      </ol>
      {/* The form component goes here */}
      {/* <Form /> */}
      <i className="license">icons by fontawesome -  <a href="https://fontawesome.com/license">license</a></i>
    </div>
  );
}

export default App;
