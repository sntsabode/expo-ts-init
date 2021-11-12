const { createInterface } = require('readline')

/**
 * @returns {Promise<String>}
 */
function askAndWait() {
  const interface = createInterface(
    process.stdin,
    process.stdout
  )

  return new Promise((resolve) => {
    interface.question('', (answer) => resolve(answer))
  })
}

module.exports = {
  askAndWait
}
