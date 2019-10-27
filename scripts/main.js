const openNav = () => {
  // Close side nav if open
  if (document.getElementById("sideNav").style.width && document.getElementById("sideNav").style.width !== "0px") {
    closeNav()
    return
  }

  // Close contacts dropdown if open before opening side nav
  if (document.getElementById("contactsButton").getAttribute("aria-expanded") === "true") {
    closeContacts()
  }
  
  document
    .getElementById("sideNav")
    .style
    .width = "12em";
  document
    .getElementById("main")
    .style
    .marginLeft = "12em";
  const sections = document.querySelectorAll('section')
  Array.from(sections).forEach((section) => {
    section.style.filter = "brightness(80%)"
  })
}

const closeNav = () => {
  document
    .getElementById("sideNav")
    .style
    .width = "0";
  document
    .getElementById("main")
    .style
    .marginLeft = "0";
  document.body.style.backgroundColor = "#cbf1f6"
  const sections = document.querySelectorAll('section')
  Array.from(sections).forEach((section) => {
    section.style.filter = "brightness(100%)"
  })
}

// Close contacts function to work like Bootstrap collapse
const closeContacts = () => {
  document
    .getElementById("contactsButton")
    .classList
    .add("collapsed")
  document
    .getElementById("contactsButton")
    .setAttribute("aria-expanded", "false")
  document
    .getElementById("contactsToggler")
    .classList
    .remove("show")
}

// Scroll smoothly to element
const scrollHandler = (elementId) => {
  const elmnt = document.getElementById(elementId)
  elmnt.scrollIntoView({ behavior: 'smooth', block: 'center' })
  closeNav()
}

// Change colour of nav elements according to window location
const colorChanger = () => {
  const sections = document.querySelectorAll('section')
  Array.from(sections).forEach((section) => {
    if (section.offsetTop <= window.scrollY) {
      Array
      .from(document.querySelectorAll('#topNav button, #topNav a, #topNav a, #sideNav button'))
      .forEach((element) => {
        element.style.color = section.getAttribute('data-color')
      })
      Array
      .from(document.querySelectorAll('#sideNav hr'))
      .forEach((element) => {
        element.style.backgroundColor = section.getAttribute('data-color')
      })
    }
  })
}

window.addEventListener('scroll', (event) => {
  colorChanger()
})

// Peek side nav element
window.onload = () => {
  document.querySelectorAll('#sideNav')[0].style.transition = "1s"
  document.querySelectorAll('#main')[0].style.transition = "margin-left 1s"
  openNav()
  setTimeout(() => {
    closeNav()
    document.querySelectorAll('#sideNav')[0].style.transition = "0.5s"
    document.querySelectorAll('#main')[0].style.transition = "margin-left 0.5s"
  }, 2000)

}

colorChanger()

