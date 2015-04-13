import React from 'react';
// import React from 'react/addons';
import _ from 'underscore';
import ColorInput from './ColorInput.react';

import SidebarActionCreators from '../actions/SidebarActionCreators';

export default class Sidebar extends React.Component {
  render () {
    return (
      <div style={_.defaults(styles.container, this.props.style)}>
        <ColorInput
          title = "Background"
          onChange = {this._handleBackgroundColorChange.bind(this)}
        />
      </div>
    );
  }

  _handleBackgroundColorChange (color) {
    SidebarActionCreators.changeBackgroundColor(color);
  }

 }

 var styles = {
   container: {
     width: 200,
     backgroundColor: '#444',
     color: '#eee',
     padding: 20
   }
 };
