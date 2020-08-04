import React, {PureComponent} from 'react';
import propTypes from 'prop-types';

import './searchInput.css';

export default class searchInput extends PureComponent {
  static propTypes = {
    textChange: PropTypes.func
  };

  handleChange() {
    this.props.textChange(event)
  }

  render() {
    return (
      <div className='component-search-input'>
        <div>
          <input onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}