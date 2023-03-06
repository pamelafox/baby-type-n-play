const {app, BrowserWindow, globalShortcut} = require('electron');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  globalShortcut.register('Control+Shift+Q', () => app.quit());

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    minimizable: false,
    closable: true,
    alwaysOnTop: true,
    kiosk: true,
    fullscreen: true,
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// escape to exit
/*
Menu.setApplicationMenu(Menu.buildFromTemplate([{
  label: "Exit full screen",
  visible: true,
  accelerator: "Esc",
  click(item, focusedWindow) {
      if (focusedWindow.isFullScreen()) {
          focusedWindow.setFullScreen(false);
      }
  },
}]));
*/
