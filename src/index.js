document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)

  const container = document.getElementById('pokemon-container')

  POKEMON.forEach(function(pokemon){
    container.innerHTML += `<div class="pokemon-container">
      <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${pokemon.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img data-id="7" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
          </div>
        </div>
      </div>
    </div>`
  })

  container.addEventListener("click", function(event){
    console.log(event.target.dataset.action)
    console.log(event.target)
    if(event.target.dataset.action === "flip"){
      event.target.dataset.action = "flipped"
    }
    const parentDiv = event.target.parentNode
    if(event.target.dataset.action === "flip"){
     parentDiv.innerHTML =
     `<img data-id="7" data-action="flip" class="toggle-sprite" src="${event.target.sprites.front}">`
    }
    else {
      parentDiv.innerHTML = `<img data-id="7" data-action="flip" class="toggle-sprite" src="${event.target.sprites.back}">`
    }
  })

  const form = document.getElementById('pokemon-search-form')

  form.addEventListener('input', (event) => {
    const searchTerm = event.target.value
    console.log(searchTerm)
    const filteredPokes = POKEMON.filter(function(pokemon) {
      return pokemon.name.includes(searchTerm)

    })
    container.innerHTML = ''

    filteredPokes.forEach(function(pokemon){
      container.innerHTML += `<div class="pokemon-container">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
          <h1 class="center-text">${pokemon.name}</h1>
          <div style="width:239px;margin:auto">
            <div style="width:96px;margin:auto">
              <img data-id="7" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
            </div>
          </div>
        </div>
      </div>`
    })
  })
})
