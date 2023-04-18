if(!localStorage.getItem('cl')) {
  localStorage.setItem('cl', '0')
}

let l = {
  unset: '0',
  none: '',
  char: 'abcdefghijklmnopqrstuvwxyz125467890ABCDEFGHIJKLMNOPQRSTUVWXYZ.();',
  num: '124567890'
}

function switchTo(char) {
    localStorage.setItem('cl', l[char])
}

document.body.onkeydown = function()
{
  c=localStorage.getItem('cl') // automatic unloaded
  t=[]
  c.split("").forEach(function(l){t.push(l)})
  document.body.innerHTML += t[Math.floor(Math.random()*t.length)] + '\n'
}
