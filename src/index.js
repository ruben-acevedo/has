const childProcess = require('child_process')
const process = require('process')
const argv = process.argv

const has = () => {
  if (!argv[2]) throw new Error('error: missing arguments')
  for (let i = 2; i < argv.length; i++) {
    childProcess.exec(`${argv[i]} --version`, (err, stdout) => {
      if (err) console.log(`✕ ${argv[i]}`)
      else console.log(`✓ ${argv[i]}`)
    })
  }
}
has()
module.exports = has
