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

  // CHALLENGE 3. Register Message Form
  // --------------------------------------------------------------
  const BUTTON = {
    edit: 'edit',
    save: 'save',
    remove: 'remove',
  }

  const renderMessageForm = () => {
    const messageForm = document.querySelector('form[name=leave_message]')

    messageForm.addEventListener('submit', (event) => {
      event.preventDefault()

      const { name, email, message } = event.target

      // check for missing fields
      if (!name || !email || !message) {
        return
      }

      const messageSection = document.querySelector('#messages')
      const messageList = messageSection.querySelector('ul')

      // if hidden, show the "messages" section
      if (messageSection.style.display === 'none') {
        messageSection.style.display = 'block'
      }

      // create new message
      const newMessage = document.createElement('li')
      newMessage.innerHTML = `<a href="mailto:${email.value}">${name.value}</a> wrote: <span>${message.value}</span> &nbsp;`

      // create edit button
      const editButton = document.createElement('button')
      editButton.innerText = BUTTON.edit
      editButton.type = 'button'
      editButton.style.marginRight = '5px'

      editButton.addEventListener('click', (event) => {
        const button = event.target
        const entry = button.parentNode

        if (button.innerText === BUTTON.edit) {
          const message = entry.querySelector('span')
          const input = document.createElement('input')
          input.type = 'text'
          input.value = message.innerText

          entry.insertBefore(input, message)
          entry.removeChild(message)

          button.innerText = BUTTON.save
        } else {
          const input = entry.querySelector('input')
          const message = document.createElement('span')
          message.innerText = input.value

          entry.insertBefore(message, input)
          entry.removeChild(input)

          button.innerText = BUTTON.edit
        }
      })

      newMessage.appendChild(editButton)

      // create remove button
      const removeButton = document.createElement('button')
      removeButton.innerText = BUTTON.remove
      removeButton.type = 'button'

      removeButton.addEventListener('click', (event) => {
        const entry = event.target.parentNode
        const list = message.parentNode

        // if there are no other messages, hide the section
        if (list.childNodes.length <= 1) {
          messageSection.style.display = 'none'
        }

        // remove entry from the list
        entry.remove()
      })

      newMessage.appendChild(removeButton)

      // add new message to the list
      messageList.appendChild(newMessage)

      // reset form
      event.target.reset()
    })
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderCopyright()
    renderSkillsList()
    renderMessageForm()
  })
})()
