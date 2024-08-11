import { PrimeReactProvider } from "primereact/api";
import { Header } from "./Components/Header";
import { InputForm } from "./Components/InputForm";
import { ItemsList } from "./Components/ItemsList";
import { Stats } from "./Components/Stats";
import { useState } from "react";
function App() {
  const [packingList, setPackingList] = useState([
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
  ]);

  const addToPackingList = (item) => {
    setPackingList((currentState) => [...currentState, item]);
  };

  const deleteFromList = (item) => {
    setPackingList((currentState) =>
      currentState.filter((listItem) => listItem.id !== item.id)
    );
  };

  const updatePackingStatus = (isItemPacked, item) => {
    setPackingList((currentState) =>
      currentState.map((listItem) =>
        listItem.id !== item.id
          ? listItem
          : { ...listItem, packed: isItemPacked }
      )
    );
  };
  return (
    <PrimeReactProvider>
      <Header />
      <section className="pt-7	pb-9 " style={{ minWidth: "130rem" }}>
        <main className="m-0 m-auto" style={{ maxWidth: "130rem" }}>
          <InputForm addToList={addToPackingList}></InputForm>
          <ItemsList
            packingList={packingList}
            deleteFromList={deleteFromList}
            updatePackingStatus={updatePackingStatus}
          ></ItemsList>
          <Stats packingList={packingList}></Stats>
        </main>
      </section>
    </PrimeReactProvider>
  );
}

export default App;
