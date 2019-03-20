import * as React from 'react';
import { IListObject } from './ListModel';


interface IHiddenState {
    isHidden: boolean;
}

class Collapsable extends React.Component<IListObject, IHiddenState> {
    constructor (props: Readonly<IListObject>) {
        super(props);
        this.state = {
          isHidden: true
        }
      }

      toggleHidden () {
        this.setState({
          isHidden: !this.state.isHidden
        })
      }

  public render() {
    let subList = null

    if(this.props.children && !this.state.isHidden) {
        subList = this.props.children.map((item, i) => <Collapsable key={i} text={item.text} children={item.children}></Collapsable>)
    }
      return (
      <ul>
        <li onClick={this.toggleHidden.bind(this)}>{this.props.text}</li>
        {subList}
      </ul>
      );
   
  }
}

export default Collapsable;