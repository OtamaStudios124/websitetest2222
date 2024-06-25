export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `cheese ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 75
  ))
  setCounter(0)
}
