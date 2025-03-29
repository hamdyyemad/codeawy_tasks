import { Field } from "./types/fields";

interface ProductFormData {
  title: string;
  description: string;
  category: string;
  price: number;
}

export const productFields: Field<ProductFormData>[] = [
  {
    label: "Title",
    type: "text",
    name: "title",
    placeholder: "Enter title",
    required: true,
    validate: (value: string) =>
      value.trim().length < 3
        ? "Title must be at least 3 characters"
        : undefined,
  },
  {
    label: "Description",
    type: "textarea",
    name: "description",
    placeholder: "Enter description",
    required: true,
    validate: (value) =>
      value.trim().length < 10
        ? "Description must be at least 10 characters"
        : undefined,
  },
  {
    label: "Category",
    type: "text",
    name: "category",
    placeholder: "Enter category",
    required: true,
    validate: (value: string) =>
      value.trim().length < 10
        ? "Category must be at least 10 characters"
        : undefined,
  },
  {
    label: "Price",
    type: "number",
    name: "price",
    placeholder: "Enter price",
    required: true,
    min: 0,
    max: 100000,
    validate: (value: number) =>
      value > 100000 ? "Price seems too high" : undefined,
  },
];
