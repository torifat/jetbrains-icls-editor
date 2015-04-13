import React from 'react';
// import React from 'react/addons';
import _ from 'underscore';

export default class ColorInput extends React.Component {

  KEY_BACKSPACE = 8;
  KEY_ZERO = 48;
  KEY_NINE = 57;
  KEY_A = 65;
  KEY_F = 70;
  KEY_LEFT = 37;
  KEY_RIGHT = 39;

  static propTypes = {
    title: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired
  };

  static defaultProps = {
    title: 'Untitled'
  };

  constructor(props) {
    super(props);
    this._fireChangeAction = _.debounce(this._fireChangeAction, 500);
  }

  render () {
    return (
      <div>
        <label>{this.props.title}</label>
        <input
          onKeyUp={this._handleKeyUp.bind(this)}
          type="text"
        />
      </div>
    );
  }

  _handleKeyUp (event) {
    let value = event.target.value;
    this._fireChangeAction(value);
  }

  // _handleKeyDown (event) {
  //   let c = event.which,
  //       value = event.target.value;
  //   // Keycode Related
  //   if ((((c >= this.KEY_ZERO && c <= this.KEY_NINE && !event.shiftKey) ||
  //       c >= this.KEY_A && c <= this.KEY_F) && value.length < 6) ||
  //       c == this.KEY_BACKSPACE ||
  //       c == this.KEY_LEFT ||
  //       c == this.KEY_RIGHT) {
  //         // Noop
  //   }
  //   else {
  //     event.preventDefault();
  //   }
  // }

  _fireChangeAction (colorCode) {
    if (this._isValidColorCode(colorCode)) {
      this.props.onChange(colorCode);
    }
  }

  _isValidColorCode (colorCode) {
    // /^#(?:[0-9a-f]{3}){1,2}$/i
    return /^#([0-9a-f]{3}){1,2}$/i.test(colorCode);
  }

 }

 var styles = {
 };
