import { Knob } from "primereact/knob";
import { Button } from "primereact/button";
export const Stats = ({ packingList, deleteAll }) => {
  const totalItems = packingList.length;
  if (!totalItems) {
    return (
      <div className="text-center	">
        <h2 className="text-2xl font-normal">Add some items to pack.</h2>
      </div>
    );
  }
  const packedItems = packingList.filter((listItem) => listItem.packed).length;
  return (
    <div className="text-center	">
      <Knob value={packedItems} min={0} max={totalItems} disabled />
      <h2 className="text-2xl font-normal">
        {totalItems === packedItems
          ? "You are all set to go"
          : `${packedItems} out of ${totalItems} are packed.`}
      </h2>
      <Button
        label="Clear List"
        className="text-2xl"
        severity="danger"
        onClick={deleteAll}
      />
    </div>
  );
};
