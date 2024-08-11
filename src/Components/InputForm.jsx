import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Divider } from "primereact/divider";
import { FloatLabel } from "primereact/floatlabel";
export const InputForm = ({ addToList }) => {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      description: itemName,
      quantity: itemQuantity,
      packed: false,
    };
    addToList(newItem);
    setItemName("");
    setItemQuantity(1);
  };
  return (
    <div className="mb-8">
      <form
        className="flex justify-content-center	gap-2"
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <InputText
          type="text"
          className="text-2xl"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <Dropdown
          value={itemQuantity}
          options={Array.from({ length: 20 }, (_, i) => 1 + i)}
          placeholder="Select a Quantity"
          styleClass="text-2xl"
          onChange={(e) => Number(setItemQuantity(e.target.value))}
        />
        <Button label="Submit" className="text-2xl" disabled={!itemName} />
      </form>
      <Divider />
    </div>
  );
};
