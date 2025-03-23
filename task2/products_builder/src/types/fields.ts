export interface Field<T extends object> {
  label: string;
  type: string;
  name: keyof T; // Ensures `name` is a key from `T`
  placeholder?: string;
  required?: boolean;
  min?: number;
  value?: T[keyof T]; // Ensures `value` matches the type of the corresponding key in `T`
}
