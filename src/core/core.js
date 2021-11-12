const { spawn } = require('child_process')
const { join } = require('path')
const { default: FileWriter } = require('./fileWriter')

class Core {
  cwd
  appName
  FileWriter

  /**
   * @param {String} cwd
   * @param {String} appName
   */
  constructor(cwd, appName) {
    cwd = join(cwd, appName)
    this.FileWriter = new FileWriter(cwd)
    this.cwd = cwd
    this.appName = appName
  }

  async main() {
    try {
      await this.runExpoInit()
      await this.installDependencies()
      this.writeFiles()
      return 0
    } catch (e) {
      console.error(
        !!e.message
          ? e.message
          : 'An unexpected error occurred'
      )

      return 1
    }
  }

  async runExpoInit() {
    const childProcess = spawn('expo', [
      'init',
      this.appName,
      '-t',
      'expo-template-blank-typescript'
    ], { stdio: 'inherit' })

    return new Promise((resolve, reject) => {
      childProcess.on('error', (err) => {
        console.error(err)
        reject()
      })

      childProcess.on('close', (code, signal) => resolve({ code, signal }))
    })
  }

  async installDependencies() {
    const childProcess = spawn('expo', [
      'install',
      '@reduxjs/toolkit',
      'react-redux',
      '@react-navigation/stack',
      '@react-navigation/native',
      'react-native-gesture-handler',
      'react-native-safe-area-context',
      'react-native-screens'
    ], { stdio: 'inherit', cwd: this.cwd })

    return new Promise((resolve, reject) => {
      childProcess.on('error', (err) => {
        console.error(err)
        reject()
      })

      childProcess.on('close', (code, signal) => resolve({ code, signal }))
    })
  }

  writeFiles() {
    this.FileWriter.writeApp()
    this.FileWriter.writeCommonStyles()
    this.FileWriter.writeComponents()
    this.FileWriter.writeReactNavigation()
    this.FileWriter.writeReduxFiles()
  }
}

exports.default = Core
