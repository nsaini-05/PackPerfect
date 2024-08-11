import { ListBox } from "primereact/listbox";

export const ItemsList = ({
  packingList,
  deleteFromList,
  updatePackingStatus,
}) => {
  const itemTemplate = (item) => {
    return (
      <div className="flex align-items-center justify-content-between">
        <div className="flex gap-2">
          <span>{item.quantity}</span>
          <span>{item.description}</span>
        </div>
        <i
          className="pi pi-trash"
          style={{ fontSize: "1.5rem" }}
          onClick={() => deleteFromList(item)}
        ></i>
      </div>
    );
  };
  const itemsAlreadyPacked = packingList.filter((item) => item.packed);
  const itemsToPack = packingList.filter((item) => !item.packed);

  return (
    <div className="grid  mb-8">
      <div className="col-6">
        <div className="text-lg p-3 border-round-sm surface-50">
          <ListBox
            onChange={(e) => {
              updatePackingStatus(true, e.value);
            }}
            options={itemsToPack}
            optionLabel="description"
            className="h-30rem overflow-scroll w-12 text-3xl overflow-x-hidden"
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
            className="h-30rem overflow-scroll w-12 text-3xl overflow-x-hidden"
            itemTemplate={itemTemplate}
          />
        </div>
      </div>
    </div>
  );
};
