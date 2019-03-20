type ListObjectValue =  IListObject;

export interface IListObject {  
  text: string,
  children?: IListObjectArray
}

export interface IListObjectArray extends Array<ListObjectValue> { }