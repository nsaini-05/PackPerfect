import { ListBox } from "primereact/listbox";
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
export const ItemsList = () => {
  const [itemsToBePacked, setItemsToBePacked] = useState(initialItems);
  const [itemsAlreadyPacked, setItemsAlreadyPacked] = useState([]);

  const pushToItemsAlreadyPacked = (item) => {
    setItemsAlreadyPacked([...itemsAlreadyPacked, item]);
    removeFromItemsToBePacked(item);
  };

  const removeFromItemsToBePacked = (itemToPack) => {
    setItemsToBePacked((prevVal) =>
      prevVal.filter((item) => item.id !== itemToPack.id)
    );
  };

  const pushToItemsToBePacked = (item) => {
    console.log(itemsToBePacked);
    setItemsToBePacked([...itemsToBePacked, item]);
    removeFromItemsAlreadyPacked(item);
  };

  const removeFromItemsAlreadyPacked = (itemToPack) => {
    setItemsAlreadyPacked((prevVal) =>
      prevVal.filter((item) => item.id !== itemToPack.id)
    );
  };

  return (
    <div className="grid  mb-8">
      <div className="col-6">
        <div className="text-lg p-3 border-round-sm surface-50">
          <ListBox
            onChange={(e) => pushToItemsAlreadyPacked(e.value)}
            options={itemsToBePacked}
            optionLabel="description"
            className="h-30rem overflow-scroll w-12 text-3xl overflow-x-hidden"
          />
        </div>
      </div>
      <div className="col-6">
        <div className="p-3 border-round-sm surface-50">
          <ListBox
            onChange={(e) => pushToItemsToBePacked(e.value)}
            options={itemsAlreadyPacked}
            optionLabel="description"
            className="h-30rem overflow-scroll w-12 text-3xl overflow-x-hidden"
          />
        </div>
      </div>
    </div>
  );
};
