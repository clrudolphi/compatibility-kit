import { Before, When } from '@cucumber/fake-cucumber'
import fs from 'fs'

When('the string {string} is attached as {string}', function (text: string, mediaType: string) {
  this.attach(text, mediaType)
})

When('the string {string} is logged', function (text: string) {
  this.log(text)
})

When('text with ANSI escapes is logged', function () {
  this.log(
    'This displays a \x1b[31mr\x1b[0m\x1b[91ma\x1b[0m\x1b[33mi\x1b[0m\x1b[32mn\x1b[0m\x1b[34mb\x1b[0m\x1b[95mo\x1b[0m\x1b[35mw\x1b[0m'
  )
})

When('the following string is attached as {string}:', function (mediaType: string, text: string) {
  this.attach(text, mediaType)
})

When(
  'an array with {int} bytes is attached as {string}',
  function (size: number, mediaType: string) {
    const data = [...Array(size).keys()]
    const buffer = Buffer.from(data)
    this.attach(buffer, mediaType)
  }
)

When('a PDF document is attached and renamed', async function () {
  await this.attach(fs.createReadStream(__dirname + '/document.pdf'), 'application/pdf', 'renamed.pdf')
})

When('a link to {string} is attached', async function (uri: string) {
    await this.link(uri)
})
