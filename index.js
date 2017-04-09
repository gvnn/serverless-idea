(async function () {
  var sleep = function (sleepTimeout) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log(`para: ${sleepTimeout}`)
        resolve(sleepTimeout * sleepTimeout)
      }, 1000)
    })
  }
  var result = await sleep(2)
  console.log('result: ', result)
}())
