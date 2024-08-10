import { Toolbar } from "primereact/toolbar";

export const Header = () => {
  return (
    <div className="bg-primary h-9rem flex justify-content-center align-items-center	gap-4	">
      <i
        className="pi pi-angle-double-left
"
        style={{ fontSize: "3rem" }}
      ></i>
      <h1 className="text-6xl font-normal	">Pack Perfect </h1>
      <i
        className="pi pi-angle-double-right
"
        style={{ fontSize: "3rem" }}
      ></i>
    </div>
  );
};
