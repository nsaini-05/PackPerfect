import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export const InputForm = () => {
  return (
    <div className="flex 	justify-content-center	gap-2 mb-8">
      <InputText type="text" className="p-inputtext-lg" placeholder="Large" />
      <Button label="Submit" />
    </div>
  );
};
