import { XIcon } from "./svg_icons/SVGIcons";
import { ProductField } from "../types/fields";
import { useState } from "react";
interface DrawerProps {
  onClose: () => void;
  isOpen: boolean;
  fields: ProductField[];
}
export default function Drawer({ isOpen, onClose, fields }: DrawerProps) {
  const [formData, setFormData] = useState({});

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div
      id="drawer-left-example"
      className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-gradient-to-b from-black to-gray-950/60 w-80  ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      aria-labelledby="drawer-left-label"
    >
      <h5
        id="drawer-label"
        className="inline-flex items-center mb-6 text-base font-semibold text-gray-300 uppercase"
      >
        New Product
      </h5>
      <button
        type="button"
        onClick={onClose}
        className="text-gray-400 cursor-pointer bg-transparent hover:bg-gray-100/10 hover:text-gray-200 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 flex justify-center items-center "
      >
        <XIcon />
      </button>
      <form onSubmit={handleSubmit} className="mb-6">
        {fields.map((field, i) => (
          <div className="mb-6" key={`${field.name} ${i}`}>
            <label
              htmlFor={field.name}
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                className="block p-3.5 w-full text-sm text-gray-100 bg-black/20 rounded-lg border border-gray-900/40"
                placeholder={field.placeholder}
                required={field.required}
                onChange={handleChange}
              />
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                className="bg-black/20 border text-gray-100 text-sm rounded-lg w-full p-2.5 border-gray-900/40"
                placeholder={field.placeholder}
                required={field?.required ?? false}
                min={field?.min}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
        <div className="flex">
          <button
            type="submit"
            className="text-white bg-black hover:bg-[#000708]/90 transform transition-all duration-200 hover:scale-105 cursor-pointer focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-sm text-sm px-5 py-2.5 text-center flex flex-1 justify-center items-center  me-2 mb-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
