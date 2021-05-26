(() => {
  // CHALLENGE 1. Insert Copyright Text in Footer
  // --------------------------------------------------------------

  const today = new Date()
  const thisYear = today.getFullYear()

  // DOM selection
  const footer = document.querySelector('footer')

  // DOM manipulation (create)
  const paragraph = document.createElement('p')
  paragraph.innerHTML = `&copy; Elliot Thompson ${thisYear}`

  // DOM manipulation (insert)
  footer.appendChild(paragraph)
})()
