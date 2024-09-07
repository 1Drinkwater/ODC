let chickensContainer = document.querySelector(".chickencontainer")
let rocket =document.querySelector('.rocket')
let container =document.querySelector('.container')
let containerSize =container.getBoundingClientRect()
for (let i = 0; i < 50; i++) {
    var chicken =document.createElement('img')
    chicken.setAttribute('class','chicken')
    chicken.src = './images/Chicken.png'
    chickensContainer.append(chicken)
    
}

//rocket
let positionY =0;
let positionX =0;
window.addEventListener('keydown',function(e){
    if(e.code==='ArrowUp'){
        positionY+=10
        rocket.style.bottom = `${positionY}px`
        if(positionY >= (containerSize.height-220)){
            positionY = containerSize.height-220;
        }
    }else if(e.code==='ArrowDown'){
        positionY-=10
        rocket.style.bottom = `${positionY}px`
        if(positionY<=10){
            positionY=10
        }
    }else if(e.code ==='ArrowLeft'){
        positionX-=10
        rocket.style.left = `${positionX}px`
        if(positionX<=0){
            positionX=0
        }
    }else if(e.code==='ArrowRight'){
        positionX+=10
        rocket.style.left = `${positionX}px`   
        if(positionX>=(containerSize.width-200)){
            positionY = containerSize.width-200;
        }
    }

    if(e.code ==='Space'){
        let bullet =document.createElement('img')
        bullet.classList.add('bullet')
        bullet.src ='./images/Bullet.png'
        rocket.append(bullet)
        bulltPosition=0
        let bulletInterval= setInterval(function(){
            bulltPosition+=100
            bullet.style.bottom = `${bulltPosition}px`
            if(bulltPosition>1000){
                clearInterval(bulletInterval)
                rocket.removeChild(bullet)
            }
        },100)
    }
})