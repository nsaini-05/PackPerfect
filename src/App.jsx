import { PrimeReactProvider } from "primereact/api";
import { Header } from "./Components/Header";
function App() {
  return (
    <PrimeReactProvider>
      <Header />
    </PrimeReactProvider>
  );
}

export default App;
