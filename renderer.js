// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const {app, BrowserWindow} = require('electron');
 
require('electron-context-menu')({
    prepend: (params, browserWindow) => [{
        label: 'Rainbow',
        // Only show it when right-clicking images 
        visible: params.mediaType === 'image'
    }]
});
 
let win;
