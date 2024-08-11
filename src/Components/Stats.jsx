import { Knob } from "primereact/knob";

export const Stats = ({ packingList }) => {
  const totalItems = packingList.length;
  if (!totalItems) {
    return (
      <div className="text-center	">
        <h2 className="text-3xl font-normal">Add some items to pack.</h2>
      </div>
    );
  }
  const packedItems = packingList.filter((listItem) => listItem.packed).length;
  return (
    <div className="text-center	">
      <Knob value={packedItems} min={0} max={totalItems} disabled />
      <h2 className="text-3xl font-normal">
        {totalItems === packedItems
          ? "You are all set to go"
          : `${packedItems} out of ${totalItems} are packed.`}
      </h2>
    </div>
  );
};
