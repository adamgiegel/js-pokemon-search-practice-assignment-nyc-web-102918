document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)

  const container = document.getElementById('pokemon-container')

  POKEMON.forEach(function(pokemon){
    container.innerHTML += `<div class="pokemon-container">
      <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">c${pokemon.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img data-id="7" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
          </div>
        </div>
      </div>
    </div>`
  })
})
