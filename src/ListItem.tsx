import * as React from 'react';
import { IListObject } from './ListModel';

class ListItem extends React.Component<IListObject, {}> {
  public render() {
    let subList = null

    if(this.props.children) {
        subList = this.props.children.map((item, i) => <ListItem key={i} text={item.text} children={item.children}></ListItem>)
    }

    return (
      <ul>
          <li>{this.props.text}</li>
          {subList}
      </ul>
    );
  }
}

export default ListItem;