export type BaseType = string | number | boolean;
export interface ResponseData {
  code: number;
  url: string;
  data: BaseType | Record<string, BaseType | BaseType[]> | BaseType[];
}
