import Button from "./ui/Buttons";
import TextArea from "./ui/TextAreas";
import Input from "./ui/Inputs";

import { useState } from "react";
import { XIcon } from "./ui/svg_icons/SVGIcons";
import { Field } from "../types/fields";

interface DrawerProps<T extends object> {
  onClose: () => void;
  isOpen: boolean;
  fields: Field<T>[];
  title?: string;
}

export default function Drawer<T extends object>({
  isOpen,
  onClose,
  fields,
  title,
}: DrawerProps<T>) {
  // Initialize formData state with keys from fields
  const [formData, setFormData] = useState<T>(() => {
    const initialData = {} as T;
    fields.forEach((field) => {
      initialData[field.name] = "" as T[keyof T]; // Initialize with empty strings
    });
    return initialData;
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(formData);
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
        {title}
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
          <div className="mb-6" key={`${field.name as string} ${i}`}>
            <label
              htmlFor={field.name as string}
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <TextArea
                id={field.name as string}
                name={field.name as string}
                placeholder={field.placeholder}
                required={field.required}
                onChange={handleChange}
                value={formData[field.name] as string}
              />
            ) : (
              <Input
                type={field.type}
                id={field.name as string}
                name={field.name as string}
                placeholder={field.placeholder}
                required={field?.required ?? false}
                min={field?.min}
                onChange={handleChange}
                value={formData[field.name] as string}
              />
            )}
          </div>
        ))}
        <div className="flex">
          <Button
            type="submit"
            extraClasses="flex flex-1 justify-center items-center"
            width="w-fit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
