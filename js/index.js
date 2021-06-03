(() => {
  // CHALLENGE 1. Insert Copyright Text in Footer
  // --------------------------------------------------------------
  const renderCopyright = () => {
    const today = new Date()
    const thisYear = today.getFullYear()

    // DOM selection
    const footer = document.querySelector('footer')

    // DOM manipulation (create)
    const paragraph = document.createElement('p')
    paragraph.innerHTML = `&copy; Elliot Thompson ${thisYear}`

    // DOM manipulation (insert)
    footer.appendChild(paragraph)
  }

  // CHALLENGE 2. Create List of Skills
  // --------------------------------------------------------------
  const renderSkillsList = () => {
    const skills = [
      'HTML',
      'JavaScript',
      'CSS',
    ]

    // DOM selection
    const skillsSection = document.querySelector('#skills')
    const skillsList = skillsSection.querySelector('ul')

    for (let i = 0; i < skills.length; i++) {
      // DOM manipulation (create)
      const skill = document.createElement('li')
      skill.innerText = skills[i]

      // DOM manipulation (modify)
      skillsList.appendChild(skill)
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderCopyright()
    renderSkillsList()
  })
})()
