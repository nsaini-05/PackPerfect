import { ListBox } from "primereact/listbox";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
export const ItemsList = ({
  packingList,
  deleteFromList,
  updatePackingStatus,
}) => {
  const [sortType, setSortType] = useState("Input Order");
  let sortedItems;

  if (sortType === "Input Order") {
    sortedItems = packingList.slice().sort((a, b) => a.id - b.id);
  }
  if (sortType === "Quantity") {
    sortedItems = packingList.slice().sort((a, b) => b.quantity - a.quantity);
  }

  if (sortType === "Alphabetically") {
    sortedItems = packingList
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  const sortTypes = [
    { name: "Alphabetically" },
    { name: "Quantity" },
    { name: "Input Order" },
  ];
  const itemsAlreadyPacked = sortedItems.filter((item) => item.packed);
  const itemsToPack = sortedItems.filter((item) => !item.packed);

  const itemTemplate = (item) => {
    return (
      <div className="flex align-items-center justify-content-between">
        <div className="flex gap-2 text-2xl">
          <span>{item.quantity}</span>
          <span>{item.description}</span>
        </div>
        <i
          className="pi pi-trash"
          style={{ fontSize: "1.75rem" }}
          onClick={() => deleteFromList(item)}
        ></i>
      </div>
    );
  };

  return (
    <div className="mb-8">
      <div className=" card flex justify-content-right">
        <Dropdown
          value={sortType}
          options={sortTypes}
          optionLabel="name"
          optionValue="name"
          placeholder="Sort Lists By"
          className=" text-4xl w-full md:w-14rem mb-4 "
          onChange={(e) => {
            setSortType(e.target.value);
          }}
        />
      </div>
      <div className="grid">
        <div className="col-6">
          <div className="text-lg p-3 border-round-sm surface-50">
            <ListBox
              onChange={(e) => {
                updatePackingStatus(true, e.value);
              }}
              options={itemsToPack}
              optionLabel="description"
              className="h-30rem overflow-scroll w-12 text-2xl overflow-x-hidden"
              itemTemplate={itemTemplate}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="p-3 border-round-sm surface-50">
            <ListBox
              onChange={(e) => {
                updatePackingStatus(false, e.value);
              }}
              options={itemsAlreadyPacked}
              optionLabel="description"
              className="h-30rem overflow-scroll w-12 text-2xl overflow-x-hidden"
              itemTemplate={itemTemplate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
