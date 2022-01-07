function createColors () {
    let clrGenComplete = false;

    let colors = new Uint8ClampedArray(256*128*4)
    let clrsIndex = 0
    let color = [8, 8, 8]

    
    while(!clrGenComplete){
        colors[clrsIndex+0] = color[2]
        colors[clrsIndex+1] = color[1]
        colors[clrsIndex+2] = color[0]
        colors[clrsIndex+3] = 255
        clrsIndex+=4

        color[0]+=8;

        if(color[0] === 264){
            color[1]+=8;
            color[0] = 8;
        }

        if (color[1] === 264) {
            color[2]+=8;
            color[1] = 8;
         }
        
        if (color[2] === 264) {
        clrGenComplete = true;
        }

    }
    return colors
}


export default createColors;