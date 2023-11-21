const navbarBtn = document.querySelector("#navbar")
const navbar = document.querySelector("#navbar-aberta")

navbarBtn.addEventListener("mouseover", () => {
  navbar.classList.toggle("fechada")
  navbar.classList.toggle("aberta")
})

navbar.addEventListener("mouseout", () => {
  navbar.classList.toggle("fechada")
  navbar.classList.toggle("aberta")
})

const btnNavbarMobile = document.querySelector(".btn-navbar-mobile")
const sidebarMobile = document.querySelector("#sidebar-aberta-container")
const btnCloseSidebar = document.querySelector("#btn-close-sidebar")

btnNavbarMobile.addEventListener("click", () => {
  sidebarMobile.classList.toggle("fechada")
})

btnCloseSidebar.addEventListener("click", () => {
  sidebarMobile.classList.toggle("fechada")
})