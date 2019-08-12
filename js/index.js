var reproduciendo = false

function reproducirMusica(isHome) {
  const musica = document.getElementById('musica')
  const musica_btn = document.getElementById('musica-btn')
  const urlBase = isHome ? './imagenes' : '../imagenes'

  if (!reproduciendo) {
    musica.play()
      .then(function () {
        musica_btn.src = urlBase + "/volumen-alto.png"
        reproduciendo = true
      })
      .catch(function () {
        musica_btn.src = urlBase + "/mudo.png"
        reproduciendo = false
      })
  } else {
    musica.pause()
    musica_btn.src = urlBase + '/mudo.png'
    reproduciendo = false
  }
}

function goToHome() {
  window.location.href = '../index.html'
}

function enviarCorreo(event) {
  console.log(event)
  event.preventDefault()

  const link = `mailto:maestrosdeluniverso.blog@gmail.com` +
    `?subject=${escape(document.getElementById('asunto').value || 'No disponible')}` +
    `&body=${escape(`
Nombre: ${document.getElementById('nombre').value || 'No disponible'}
Mensaje: ${document.getElementById('mensaje').value || 'No disponible'}
    `)}`

  window.location.href = link
}