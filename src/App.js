import './App.css';
import Routing from './RoutingPages/Routing';
import { CartProvider } from './AddProduct/AddtoCart'; // Ensure correct path to CartProvider
import Header from './HeaderPart/Header.jsx'

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <Routing />
      </CartProvider>
    </div>
  );
}

export default App;


