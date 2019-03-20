import * as React from 'react';
import { IListObject, listSort } from './ListModel';

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