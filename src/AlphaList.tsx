import * as React from 'react';
import { IListObject, IListObjectArray} from './ListModel';

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

class AlphaList extends React.Component<IListObject, {}> {
  public render() {
    let subList = null

    if(this.props.children) {
        const children = listSort(this.props.children);
        subList = children.map((item, i) => <AlphaList key={i} text={item.text} children={item.children}></AlphaList>)
    }

    return (
      <ul>
        <li>{this.props.text}</li>
        {subList}
      </ul>
    );
  }
}

export default AlphaList;