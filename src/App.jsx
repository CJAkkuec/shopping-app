import { ShoppingList } from "./components/ShoppingList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="shoppingListDiv">
        <h1>Einkaufsliste 🛍</h1>
        <ShoppingList />
      </div>
    </div>
  );
}

export default App;
