import StyleConstants from '../constants/StyleConstants';
import BaseStore from './BaseStore';

var ActionTypes = StyleConstants.ActionTypes;

class StyleStore extends BaseStore {

  colors = {};

  register (action) {
    switch(action.type) {
      case ActionTypes.BACKGROUND_COLOR:
        this.colors.background = action.color;
        this.emitChange();
        break;

      default:
        console.log(action.type);
    }
  }

  getBackgroundStyle () {
    let bgc = this.colors.background || '#eee';
    return {backgroundColor: bgc};
  }

}

export default new StyleStore();
