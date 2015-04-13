import React from 'react';
// import React from 'react/addons';
import _ from 'underscore';

import StyleStore from '../stores/StyleStore';


function getStateFromStores () {
  return {
    backgroundStyle: StyleStore.getBackgroundStyle()
  };
}

export default class Editor extends React.Component {

    constructor (props) {
      super(props);
      this.state = getStateFromStores();
    }

    componentDidMount () {
      StyleStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount () {
      StyleStore.removeChangeListener(this._onChange);
    }

    render () {
      return (
        <div style={_.extend(styles.container, this.state.backgroundStyle)}>
          Editor
        </div>
      );
    }

    _onChange () {
      this.setState(getStateFromStores());
    }
 }

 var styles = {
   container: {
     flex: 1,
     padding: 20,
   }
 };
