import React, {PureComponent} from 'react';
import './Header.css';

export default class extends PureComponent {
  render() {
    return (
      <header className='component-header'>
        <img src='//cdn.jsdelivr.net/emojione/assets/png/1f638.png'
        width= '32'
        height= '32'
      </header>
    )
  }
}