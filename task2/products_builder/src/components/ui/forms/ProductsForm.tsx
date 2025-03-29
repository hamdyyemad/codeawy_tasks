import Button from "../buttons/Button";
import TextArea from "../inputs/TextArea";
import Input from "../inputs/Input";

import { useState, useEffect } from "react";
import { Field, NumberField } from "../../../types/fields";
import ErrorMessage from "../../ErrorMessage";

interface ProductsFormProps<T extends object> {
  fields: Field<T>[];
  closeDrawer?: () => void;
  initialValues?: Partial<T>;
  isEditing?: boolean;
}

export default function ProductsForm<T extends object>({
  fields,
  closeDrawer,
  initialValues,
  isEditing = false,
}: ProductsFormProps<T>) {
  const createInitialState = (): T => {
    const initialData = {} as T;
    fields.forEach((field) => {
      // Use initial value if provided, otherwise use empty string or field.defaultValue if available
      const initialValue = initialValues?.[field.name] ?? "";
      initialData[field.name] = initialValue as T[keyof T];
    });
    return initialData;
  };

  const [formData, setFormData] = useState<T>(createInitialState);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  // Reset form when initialValues change (for edit mode)
  useEffect(() => {
    setFormData(createInitialState());
    if (isEditing && initialValues) {
      setErrors({});
    }
  }, [initialValues, isEditing]);

  // Rest of your existing code remains the same...
  const validateField = (
    field: Field<T>,
    value: T[keyof T]
  ): string | undefined => {
    if (field.required && !value) {
      return `${field.label} is required`;
    }

    if (field.type === "number") {
      const numValue = value as number;
      if (field.min !== undefined && numValue < field.min) {
        return `${field.label} must be at least ${field.min}`;
      }
      if (field.max !== undefined && numValue > field.max) {
        return `${field.label} must be at most ${field.max}`;
      }
      if (field.validate) {
        return field.validate(numValue);
      }
    } else {
      const strValue = value as string;
      if (field.pattern && !field.pattern.test(strValue)) {
        return `Invalid ${field.label.toLowerCase()} format`;
      }
      if (field.validate) {
        return field.validate(strValue);
      }
    }

    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof T, string>> = {};
    let isValid = true;

    fields.forEach((field) => {
      const error = validateField(field, formData[field.name]);
      if (error) {
        newErrors[field.name] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    const fieldName = name as keyof T;

    const field = fields.find((f) => f.name === fieldName);
    if (!field) return;

    let typedValue: T[keyof T];
    if (field.type === "number") {
      const numValue = Number(value);
      typedValue = (isNaN(numValue) ? value : numValue) as T[keyof T];
    } else {
      typedValue = value as T[keyof T];
    }

    setFormData((prev) => ({
      ...prev,
      [fieldName]: typedValue,
    }));

    const error = validateField(field, typedValue);
    setErrors((prev) => ({
      ...prev,
      [fieldName]: error,
    }));
  }

  function onCancel() {
    setFormData(createInitialState());
    setErrors({});
    closeDrawer?.();
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form is valid:", formData);
      // You might want to handle submission differently for edit vs create
      console.log(isEditing ? "Updating product" : "Creating new product");
      // closeDrawer?.();
    } else {
      console.log("Form has errors");
    }
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
            {field.required && <span className="text-red-500">*</span>}
          </label>
          {field.type === "textarea" ? (
            <TextArea
              id={field.name as string}
              name={field.name as string}
              placeholder={field.placeholder}
              required={field.required}
              onChange={handleChange}
              value={formData[field.name] as string}
              hasError={!!errors[field.name]}
            />
          ) : (
            <Input
              type={field.type}
              id={field.name as string}
              name={field.name as string}
              placeholder={field.placeholder}
              required={field?.required ?? false}
              min={
                field.type === "number"
                  ? (field as NumberField<T, keyof T>).min
                  : undefined
              }
              onChange={handleChange}
              value={formData[field.name] as string}
              hasError={!!errors[field.name]}
            />
          )}
          <ErrorMessage msg={errors[field.name]} />
        </div>
      ))}
      <div className="flex flex-col items-center">
        <Button
          type="submit"
          extraClasses="flex flex-1 justify-center items-center"
          width="w-full"
        >
          {isEditing ? "Update" : "Submit"}
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
