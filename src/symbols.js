document.body.onkeydown = function()
{
  c='abcdefghijklmnopqrstuvwxyz125467890ABCDEFGHIJKLMNOPQRSTUVWXYZ.();'
  t=[]
  c.split("").forEach(function(l){t.push(l)})
  document.body.innerHTML += t[Math.floor(Math.random()*t.length)] + '\n'
}
