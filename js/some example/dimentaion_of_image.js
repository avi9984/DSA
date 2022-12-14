// Example: Get Dimensions of an Image

let img=new Image();

img.src='D:\youtube_Video/IMG20220318093404.jpg'
img.onload=function(){
    console.log('width '+this.width);
    console.log('height '+ this.height);
}