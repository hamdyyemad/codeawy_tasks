// types/fields.ts
interface BaseField<T, K extends keyof T> {
  label: string;
  name: K;
  placeholder?: string;
  required?: boolean;
}

export interface TextField<T, K extends keyof T> extends BaseField<T, K> {
  type: "text" | "textarea";
  pattern?: RegExp;
  minLength?: number;
  validate?: (value: string) => string | undefined;
}

export interface NumberField<T, K extends keyof T> extends BaseField<T, K> {
  type: "number";
  min?: number;
  max?: number;
  validate?: (value: number) => string | undefined;
}

export type Field<T> = TextField<T, keyof T> | NumberField<T, keyof T>;
