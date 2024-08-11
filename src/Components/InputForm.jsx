import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
export const InputForm = () => {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setItemName("");
    setItemQuantity(1);
  };
  return (
    <div>
      <form
        className="flex 	justify-content-center	gap-2 mb-8"
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <InputText
          type="text"
          className="p-inputtext-lg"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <Dropdown
          value={itemQuantity}
          options={Array.from({ length: 20 }, (_, i) => 1 + i)}
          placeholder="Select a Quantity"
          className="p-inputtext-lg"
          onChange={(e) => Number(setItemQuantity(e.target.value))}
        />
        <Button label="Submit" disabled={!itemName} />
      </form>
    </div>
  );
};
