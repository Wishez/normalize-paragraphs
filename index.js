const paragraphStyleNormalized = `
  line-height: 1.5;
  max-width: 60ch;
  margin: 1em auto;
`

const bodyStyleNormalized = `
  line-height: 1.5;
  max-width: 75ch;
  margin-left: auto;
  margin-right: auto;
`

let isEnabled = false
window.addEventListener('keydown', (event) => {
  const { ctrlKey, keyCode } = event
  if (ctrlKey && keyCode === 77) {
    const paragraphStyle = isEnabled ? '' : paragraphStyleNormalized
    document.body.setAttribute('style', isEnabled ? '' : bodyStyleNormalized)
    for (const paragraph of document.getElementsByTagName('p')) {
      paragraph.setAttribute('style', paragraphStyle)
    }
    
    isEnabled = !isEnabled
  }
})