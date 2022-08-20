const nav = document.querySelector('.constantPageHeader')
fetch('./pages/constantPageHeader.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})

const foot = document.querySelector('.constantPageFooter')
fetch('./pages/constantPageFooter.html')
.then(res=>res.text())
.then(data=>{
    foot.innerHTML=data
})
