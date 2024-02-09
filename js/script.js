let toogleTheme = document.getElementById('toogleTheme')
toogleTheme.onclick = () =>{
  if(document.documentElement.hasAttribute("theme")){
    document.documentElement.removeAttribute('theme')
    toogleTheme.value = "dark theme"
  }
  else{
    document.documentElement.setAttribute('theme', 'dark')
    toogleTheme.value = "light theme"
  }
}