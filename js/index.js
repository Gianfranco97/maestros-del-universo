var reproduciendo = false

function reproducirMusica() {
  const musica = document.getElementById('musica')
  const musica_btn = document.getElementById('musica-btn')

  if (!reproduciendo) {
    musica.play()
      .then(function () {
        musica_btn.src = './imagenes/volumen-alto.png'
        reproduciendo = true
      })
      .catch(function () {
        musica_btn.src = './imagenes/mudo.png'
        reproduciendo = false
      })
  } else {
    musica.pause()
    musica_btn.src = './imagenes/mudo.png'
    reproduciendo = false
  }
}