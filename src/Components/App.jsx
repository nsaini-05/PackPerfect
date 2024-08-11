import { PrimeReactProvider } from "primereact/api";
import { Header } from "./Header";
import { InputForm } from "./InputForm";
import { ItemsList } from "./ItemsList";
import { Stats } from "./Stats";
import { useState } from "react";
function App() {
  const [packingList, setPackingList] = useState([]);

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

  const deleteAllItemsFromList = () => {
    const confirmed = window.confirm(
      "Are you sure, you want to delete all items ?"
    );
    if (confirmed) setPackingList([]);
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
          <Stats
            packingList={packingList}
            deleteAll={deleteAllItemsFromList}
          ></Stats>
        </main>
      </section>
    </PrimeReactProvider>
  );
}

export default App;
