<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<style>
* {
margin: 0;
padding: 0;
}
li {
list-style: none;
}
#ul {
height: auto;
overflow: hidden;
margin: 20px auto;
border: 1px #000 solid;
border-bottom: none;
border-right: none;
}
#ul li {
border: 1px #000 solid;
border-top: none;
border-left: none;
float: left;
}
#ul li.sty1 {
background-color: red;
}
#ul li.sty2 {
background-color: green;
}
#ul li.sty3 {
background-color: blue;
}
#input {
width: 100px;
position: absolute;
left: 50%;
margin-left: -50px;
}
</style>
<body>
<ul id="ul"></ul>
<input type="button" value="开始寻路" id="input">
</body>
<script >
let oUl = document.getElementById('ul')
let aLi = oUl.getElementsByTagName('li')
let oInput = document.getElementById('input')
let beginLi = oUl.getElementsByClassName('sty1')
let endLi = oUl.getElementsByClassName('sty2')

let map  = [
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,0,0,0,0,0,
    0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,
    0,0,0,1,0,0,0,0,3,3,3,3,3,3,3,0,0,0,0,0,
    0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,3,0,3,3,3,3,3,0,0,0,0,0,
    0,0,0,0,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,2,0,0,
    0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
]

let cols = Math.sqrt(map.length)
let sizeGird = 20
let openArr = []
let closeArr = []

init ()
function init() {
  createMap()
  oInput.onclick = function() {
    openFn()
  }
}

function createMap() {
    oUl.style.width = cols * ( sizeGird + 1 ) + 1 + 'px'
  for (let i = 0; i < map.length; i++) {
      let oLi = document.createElement('li')
      oLi.style.width = sizeGird + 'px'
      oLi.style.height = sizeGird + 'px'
      oUl.appendChild(oLi)
      if (map[i] === 1) {
          oLi.className = 'sty1'
          openArr.push(oLi)
      } else if (map[i] ===2) {
          oLi.className = 'sty2'
      } else if (map[i] ===3) {
          oLi.className = 'sty3'
          closeArr.push(oLi)
      }
 }
}

function f(nodeLi) {
    return g(nodeLi) + h(nodeLi)
}
function g(nodeLi) {
    let a = beginLi[0].offsetLeft - nodeLi.offsetLeft
    let b = beginLi[0].offsetTop - nodeLi.offsetTop
    return Math.sqrt(a*a + b*b)
}
function h(nodeLi) {
    let a = endLi[0].offsetLeft - nodeLi.offsetLeft
    let b = endLi[0].offsetTop - nodeLi.offsetTop
    return Math.sqrt(a*a + b*b)
}

function openFn() {
    let nowLi = openArr.shift()
    if (nowLi == endLi[0]) {
        showLine()
        return ;
    }
    closeFn(nowLi)
    findLi(nowLi)
    openArr.sort(function(li1, li2) {
      return li1.num - li2.num
    })
    openFn()
}
function closeFn(nowLi) {
  closeArr.push(nowLi)
}
function findLi(nowLi) {
    let result = []
    for (let i = 0; i < aLi.length; i++) {
        if (filter(aLi[i])) {
            result.push(aLi[i])
        }
    }
          function filter(li) {
              for (let i = 0; i < closeArr.length; i++) {
                  if (closeArr[i] == li) {
                      return false
                  }
      }
      for (let i = 0; i < openArr.length; i++) {
          if (openArr[i] == li) {
              return false
          }
      }
      return true
    }
    for (let i = 0; i < result.length; i++) {
        if ((Math.abs(nowLi.offsetLeft - result[i].offsetLeft) <= (sizeGird + 1)) && (Math.abs(nowLi.offsetTop - result[i].offsetTop) <= sizeGird + 1)) {
            result[i].num = f(result[i])
            result[i].parent = nowLi
            openArr.push(result[i])
        }
    }
}

function showLine() {
    let result =  []
    let lastLi = closeArr.pop()
    console.log(lastLi)
    let isNow = 0
    findParent(lastLi)
    function findParent(li) {
        result.unshift(li)
        if (li.parent == beginLi[0]) {
            return ;
        }
        findParent(li.parent)
    }
    let timer = setInterval(function() {
      result[isNow].style.background = 'red'
      isNow++
      if(isNow == result.length) {
          clearInterval(timer)
      }
    }, 500)
}
</script>
</html>
