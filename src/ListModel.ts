type ListObjectValue =  IListObject;

export interface IListObject {  
  text: string,
  children?: IListObjectArray
}

export interface IListObjectArray extends Array<ListObjectValue> { }

export function listSort (list: IListObjectArray) : IListObjectArray {
  return list.sort(function(a: IListObject, b: IListObject) {
    if(!a || !b)
      return 0;
    if (a.text > b.text) {
      return 1;
    }
    if (a.text < b.text) {
      return -1;
    }
    return 0;
  
  });
}