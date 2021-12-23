const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    myPing() {
      ipcRenderer.send('ipc-example', 'ping');
    },
    minimize() {
      ipcRenderer.send("minimize", null);
    },
    closeWindow() {
      ipcRenderer.send("closeWindow", null);
    },
    maximize() {
      ipcRenderer.send("maximize", null);
    },
    unMaximize() {
      ipcRenderer.send("unmaximize", null);
    },
    isMaximized() {
      ipcRenderer.send("isMaximized", null);
    },
    on(channel, func) {
      const validChannels = ['ipc-example', 'isMaximized'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.on(channel, (event, ...args) => func(...args));
      }
    },
    once(channel, func) {
      const validChannels = ['ipc-example', 'isMaximized'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.once(channel, (event, ...args) => func(...args));
      }
    },
  },
});
