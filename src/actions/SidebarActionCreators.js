import AppDispatcher from '../dispatcher/AppDispatcher';
import StyleConstants from '../constants/StyleConstants';

var ActionTypes = StyleConstants.ActionTypes;

export default {
  changeBackgroundColor (color) {
    AppDispatcher.dispatch({
      type: ActionTypes.BACKGROUND_COLOR,
      color: color
    });
  }
}
