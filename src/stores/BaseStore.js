import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';

var CHANGE_EVENT = 'change';

export default class BaseStore extends EventEmitter {

  constructor () {
    super();
    this.register = this.register.bind(this);
    AppDispatcher.register(this.register);
  }

  register (action) {
    console.error('Please implement the register function in your store');
  }

  emitChange () {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener (callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

}
