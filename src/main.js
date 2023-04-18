if(!localStorage.getItem('cl')) {
  localStorage.setItem('cl', '0')
}

document.body.onkeydown = function()
{
  c=localStorage.getItem('cl') // automatic unloaded
  t=[]
  c.split("").forEach(function(l){t.push(l)})
  document.body.innerHTML += t[Math.floor(Math.random()*t.length)] + '\n'
}
