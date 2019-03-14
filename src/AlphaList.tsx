import * as React from 'react';
import { IListObject, listSort } from './ListModel';
import ListItem from './ListItem';

class AlphaListItem extends React.Component<IListObject, {}> {
  public render() {
    let subList = null

    if(this.props.children) {
        const children = listSort(this.props.children);
        subList = this.props.children.map((item, i) => <ListItem key={i} text={item.text} children={children}></ListItem>)
    }

    return (
      <ul>
          <li>{this.props.text}</li>
          {subList}
      </ul>
    );
  }
}

export default AlphaListItem;