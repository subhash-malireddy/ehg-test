function colorSteps32() {
    /* 
    This function creates a new color range from (0, 256) which has a step value of 8.
    i.e the new color range will be from (8, 256) which contains 32 values
    */
    const newColorRange = []

    for (let i = 0; i < 256;){
        i+=8;
        newColorRange.push(i)
    }

    console.log(newColorRange.length)
    console.log(newColorRange)
    return newColorRange
}

export default colorSteps32;