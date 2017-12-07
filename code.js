let request = superagent

let TOTAL_PAGES = 10
// console.log(request)

let button = document.getElementById("go")
let result_el = document.getElementById("result")

button.onclick = function(){
  result_el.innerHTML = "LOADING"
  let val = document.getElementById('search').value
  let page_num = Math.floor(Math.random()*TOTAL_PAGES)
  let url = `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${page_num}`

  request.get(url).end(on_end) 
}



function on_end(err, res){
  if (err) {
    console.log("err!", err)
    return
  }

  let index = Math.floor( res.body.data.length*Math.random() )
  let show = res.body.data[index]
//   console.log('rando show', show)
//   result.innerHTML = JSON.stringify(show)
  result_el.innerHTML = create_show_markup(show)


}


function create_show_markup(show){
  let html = `<h1>${show.attributes.canonicalTitle}</h1
  <p>${show.attributes.synopsis}</p>
  `
  return html
}
