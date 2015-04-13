import React from 'react';
// import React from 'react/addons';
import Sidebar from './Sidebar.react';
import Editor from './Editor.react';

export default class RestaurantContainter extends React.Component {

  render () {
    return (
      <div style={styles.container}>
        <Sidebar style={styles.sidebar} />
        <Editor />
      </div>
    );
  }
 }

 var styles = {
   container: {
     display: 'flex'
   },
   editor: {
   },
   sidebar: {
     height: '100vh'
   }
 };
