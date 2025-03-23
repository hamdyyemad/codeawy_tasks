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
  },
  {
    label: "Description",
    type: "textarea",
    name: "description",
    placeholder: "Enter description",
  },
  {
    label: "Category",
    type: "text",
    name: "category",
    placeholder: "Enter category",
    required: true,
  },
  {
    label: "Price",
    type: "number",
    name: "price",
    placeholder: "Enter price",
    required: true,
    min: 0,
  },
];
