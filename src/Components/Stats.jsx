import { Knob } from "primereact/knob";

export const Stats = () => {
  return (
    <div className="text-center	">
      <Knob value={0} min={0} max={2} disabled />
    </div>
  );
};
