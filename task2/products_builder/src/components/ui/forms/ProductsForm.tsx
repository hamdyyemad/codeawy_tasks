import Button from "../buttons/Button";
import TextArea from "../inputs/TextArea";
import Input from "../inputs/Input";

import { useState } from "react";
import { Field } from "../../../types/fields";

interface ProductsFormProps<T extends object> {
  fields: Field<T>[];
  closeDrawer?: () => void;
}

export default function ProductsForm<T extends object>({
  fields,
  closeDrawer,
}: ProductsFormProps<T>) {
  const createInitialState = (): T => {
    const initialData = {} as T;
    fields.forEach((field) => {
      initialData[field.name] = "" as T[keyof T];
    });
    return initialData;
  };

  const [formData, setFormData] = useState<T>(createInitialState);

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
    closeDrawer?.();
  }
  function onCancel() {
    // console.log();
    setFormData(createInitialState);
    closeDrawer?.();
  }

  return (
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
      <div className="flex flex-col items-center">
        <Button
          type="submit"
          extraClasses="flex flex-1 justify-center items-center"
          width="w-full"
        >
          Submit
        </Button>
        <Button
          type="button"
          extraClasses="flex flex-1 justify-center items-center bg-transparent"
          width="w-full"
          onClick={onCancel}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
