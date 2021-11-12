const { writeFileSync, mkdirSync } = require('fs')
const { join } = require('path')
const commonStyles = require('../files/commonStyles')
const components = require('../files/components')
const reactnavigation = require('../files/reactnavigation')
const redux = require('../files/redux')

class FileWriter {
  cwd

  /**
   * @param {String} cwd
   */
  constructor(cwd) {
    this.cwd = cwd
  }

  writeApp() {
    writeFileSync(join(this.cwd, 'App.tsx'), components.app)
  }

  writeReduxFiles() {
    const hooksDir = join(this.cwd, 'src', 'app', 'hooks', 'redux')
    mkdirSync(hooksDir, { recursive: true })

    const storeDir = join(this.cwd, 'src', 'app', 'store')
    mkdirSync(storeDir, { recursive: true })

    const dummyReducerDir = join(this.cwd, 'src', 'app', 'reducers', 'dummy')
    mkdirSync(dummyReducerDir, { recursive: true })

    writeFileSync(join(hooksDir, 'index.ts'), redux.hooks)
    writeFileSync(join(storeDir, 'index.ts'), redux.store)
    writeFileSync(join(dummyReducerDir, 'index.ts'), redux.dummyReducer)
  }

  writeReactNavigation() {
    const navigationStackDir = join(this.cwd, 'src', 'navigationStack')
    mkdirSync(navigationStackDir, { recursive: true })

    const screensDir = join(this.cwd, 'src', 'screens')

    const homeDir = join(screensDir, 'Home')
    mkdirSync(homeDir, { recursive: true })

    writeFileSync(join(navigationStackDir, 'index.tsx'), reactnavigation.navigationStack)
    writeFileSync(join(homeDir, 'index.tsx'), reactnavigation.homeScreen)
  }

  writeComponents() {
    const componentsDir = join(this.cwd, 'src', 'components')

    const goodluckDir = join(componentsDir, 'Goodluck')
    mkdirSync(goodluckDir, { recursive: true })

    writeFileSync(join(goodluckDir, 'index.tsx'), components.goodluck)
  }

  writeCommonStyles() {
    const stylesDir = join(this.cwd, 'src', 'styles')
    mkdirSync(stylesDir, { recursive: true })

    writeFileSync(join(stylesDir, 'index.ts'), commonStyles.commonStyles)
  }
}

exports.default = FileWriter
