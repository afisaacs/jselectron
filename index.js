'use strict'

const { app, BrowserWindow } = require('electron')

//Imprimiendo un mensaje en consola antes de salir
app.on('before-quit', () => {
  console.log('Saliendo...')
})

//Ejecutando ordenes cuando la aplicación está lista
app.on('ready', () => {
  //Creando una ueva ventana
  let win = new BrowserWindow({
    width: 800, 
    height: 600,
    title: 'Hello world',
    center: true,
    maximizable: true,
    show: false,
  })

  //
  win.once('ready-to-show', () => {
    win.show();
  })

  //Detectando el movimiento de la ventana
  win.on('move', () => {
    const position = win.getPosition()
    console.log(`La posisión de la ventana es ${position}`);
  })

  //Detectando el cierre de la ventana para cerrar el aplicativo
  win.on('close', () => {
    win = null
    app.quit()
  })

  // win.loadURL('https://app.giitic.com/m/app')
  // win.loadURL('https://app.giitic.com')
  win.loadURL('https://devdocs.io/')

})