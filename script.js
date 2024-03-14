

let highestZ = 1;
class Paper {
  holdingPaper = false;
  mouseTouchX = 0;
  mouseTouchY = 0;
  mouseX = 0;
  mouseY = 0;
  prevMouseX = 0;
  prevMouseY = 0;
  velX = 0;
  velY = 0;
  rotation = Math.random() * 30 - 15;
  currentPaperX = 0;
  currentPaperY = 0;
  rotating = false;
  initPos=false;
  init(paper) {
    document.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if(this.holdingPaper) {
      //if(!this.rotating) {
        this.mouseX = e.changedTouches[0].clientX;
        this.mouseY = e.changedTouches[0].clientY;
        
        this.velX = this.mouseX - this.prevMouseX;
        this.velY = this.mouseY - this.prevMouseY;
        
     // }
      // const dirX = e.changedTouches[0].clientX - this.mouseTouchX;
      // const dirY = e.changedTouches[0].clientY - this.mouseTouchY;
      // const dirLength = Math.sqrt(dirX*dirX+dirY*dirY);
      // const dirNormalizedX = dirX / dirLength;
      // const dirNormalizedY = dirY / dirLength;
      // const angle = Math.atan2(dirNormalizedY, dirNormalizedX);
      // let degrees = 180 * angle / Math.PI;
      // degrees = (360 + Math.round(degrees)) % 360;
      // if(this.rotating) {
      //   this.rotation = degrees;
      // }
      console.log(this.holdingPaper)
      
        // if(!this.rotating) {
           this.currentPaperX += this.velX;
          this.currentPaperY += this.velY;
        // }
      
        paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px) `;
        this.prevMouseX = this.mouseX;
        this.prevMouseY = this.mouseY;
      }
    })
    paper.addEventListener('touchstart', (e) => {
      if(this.holdingPaper) return;
      console.log(this.holdingPaper)
      this.holdingPaper = true;
      paper.style.zIndex = highestZ;
      highestZ += 1;
     // if(e.button === 0) {
       // this.mouseTouchX = this.mouseX;
       // this.mouseTouchY = this.mouseY;
       //if(!this.initPos){
        this.prevMouseX = e.changedTouches[0].clientX
        this.prevMouseY = e.changedTouches[0].clientY
      //}
       this.initPos = true
     // }
     // if(e.button === 2) {
      //  this.rotating = true;
     // }
        setTimeout(() => {
          this.holdingPaper = false;
          this.rotating = false;
         
        },700)
    });
    window.addEventListener('touchcancel', () => {
      console.log(this.holdingPaper)
      this.holdingPaper = false;
    },false);
  }
}

const urlParams =window.location.search.split('?')[2].split('=')[1];
console.log(urlParams)
urlParams.split('%0A').reverse().forEach(e=>{
  document.body.innerHTML+=`
    <div class='paper'>
      <p class="p1">${decodeURIComponent(e)}</p>
    </div>
  `
})

const papers = Array.from(document.querySelectorAll('.paper'));
papers.forEach(paper => {
  const p = new Paper();
  p.init(paper);
});

