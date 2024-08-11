import { PrimeReactProvider } from "primereact/api";
import { Header } from "./Components/Header";
import { InputForm } from "./Components/InputForm";
import { ItemsList } from "./Components/ItemsList";
import { Stats } from "./Components/Stats";
function App() {
  return (
    <PrimeReactProvider>
      <Header />
      <section className="pt-7	pb-9 " style={{ minWidth: "130rem" }}>
        <main className="m-0 m-auto" style={{ maxWidth: "130rem" }}>
          <InputForm></InputForm>
          <ItemsList></ItemsList>
          <Stats></Stats>
        </main>
      </section>
    </PrimeReactProvider>
  );
}

export default App;
