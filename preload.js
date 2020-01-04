const {remote} = require('electron');

const currWindow = remote.BrowserWindow.getFocusedWindow();

window.closeCurrentWindow = function() {
  currWindow.close();
};
