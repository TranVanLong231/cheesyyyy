

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
var Base64 = {


  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  
  
  encode: function(input) {
      var output = "";
      var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
      var i = 0;
  
      input = Base64._utf8_encode(input);
  
      while (i < input.length) {
  
          chr1 = input.charCodeAt(i++);
          chr2 = input.charCodeAt(i++);
          chr3 = input.charCodeAt(i++);
  
          enc1 = chr1 >> 2;
          enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
          enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
          enc4 = chr3 & 63;
  
          if (isNaN(chr2)) {
              enc3 = enc4 = 64;
          } else if (isNaN(chr3)) {
              enc4 = 64;
          }
  
          output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
  
      }
  
      return output;
  },
  
  
  decode: function(input) {
      var output = "";
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;
  
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
  
      while (i < input.length) {
  
          enc1 = this._keyStr.indexOf(input.charAt(i++));
          enc2 = this._keyStr.indexOf(input.charAt(i++));
          enc3 = this._keyStr.indexOf(input.charAt(i++));
          enc4 = this._keyStr.indexOf(input.charAt(i++));
  
          chr1 = (enc1 << 2) | (enc2 >> 4);
          chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
          chr3 = ((enc3 & 3) << 6) | enc4;
  
          output = output + String.fromCharCode(chr1);
  
          if (enc3 != 64) {
              output = output + String.fromCharCode(chr2);
          }
          if (enc4 != 64) {
              output = output + String.fromCharCode(chr3);
          }
  
      }
  
      output = Base64._utf8_decode(output);
  
      return output;
  
  },
  
  _utf8_encode: function(string) {
      string = string.replace(/\r\n/g, "\n");
      var utftext = "";
  
      for (var n = 0; n < string.length; n++) {
  
          var c = string.charCodeAt(n);
  
          if (c < 128) {
              utftext += String.fromCharCode(c);
          }
          else if ((c > 127) && (c < 2048)) {
              utftext += String.fromCharCode((c >> 6) | 192);
              utftext += String.fromCharCode((c & 63) | 128);
          }
          else {
              utftext += String.fromCharCode((c >> 12) | 224);
              utftext += String.fromCharCode(((c >> 6) & 63) | 128);
              utftext += String.fromCharCode((c & 63) | 128);
          }
  
      }
  
      return utftext;
  },
  
  _utf8_decode: function(utftext) {
      var string = "";
      var i = 0;
      var c = c1 = c2 = 0;
  
      while (i < utftext.length) {
  
          c = utftext.charCodeAt(i);
  
          if (c < 128) {
              string += String.fromCharCode(c);
              i++;
          }
          else if ((c > 191) && (c < 224)) {
              c2 = utftext.charCodeAt(i + 1);
              string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
              i += 2;
          }
          else {
              c2 = utftext.charCodeAt(i + 1);
              c3 = utftext.charCodeAt(i + 2);
              string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
              i += 3;
          }
  
      }
  
      return string;
  }
  
  }
            
const urlParams =window.location.search.split('?')[2].split('=')[1];
console.log(urlParams)
Base64.decode(urlParams).split('%0A').reverse().forEach(e=>{

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

