//Will find its way to goal but does not take the quickest route as does not compare possible distances. 

function func (param) {
    let targX = (param.charAt(0) *1);
    let targY = (param.charAt(1) *1);

    let counter = 0;

    let x1 = 0;
    let y1 = 0;

    let  remDistance = distFunc(x1, targX, y1, targY);

    while (x1 !== targX && y1 !== targY ) {
        if (distFunc(x1-1, targX, y1-2, targY)<remDistance) {
            counter++;
            remDistance = distFunc(x1-1, targX, y1-2, targY)
            x1 = x1-1;
            y1 = y1-2;
        }

        else if (distFunc(x1+1, targX, y1-2, targY)<remDistance) {
            counter++;
            remDistance = distFunc(x1+2, targX, y1-2, targY)
            x1 = x1+2;
            y1 = y1-2;
        }

        else if (distFunc(x1-1, targX, y1+2, targY)<remDistance) {
            counter++;
            remDistance = distFunc(x1-1, targX, y1+2, targY)
            x1 = x1-1;
            y1 = y1+2;
        }

        else if (distFunc(x1+1, targX, y1+2, targY)<remDistance) {
            counter++;
            remDistance = distFunc(x1+1, targX, y1+2, targY)
            x1 = x1+1;
            y1 = y1+2;
        }

        else if (distFunc(x1-2, targX, y1-1, targY)<remDistance) {
            counter++;
            remDistance = distFunc(x1-2, targX, y1-1, targY)
            x1 = x1-2;
            y1 = y1-1;
        }

        else if (distFunc(x1+2, targX, y1-1, targY)<remDistance) {
            counter++;
            remDistance = distFunc(x1+2, targX, y1-1, targY)
            x1 = x1+2;
            y1 = y1-1;
        }

        else if (distFunc(x1-2, targX, y1+1, targY)<remDistance) {
            counter++;
            remDistance = distFunc(x1-2, targX, y1+1, targY)
            x1 = x1-2;
            y1 = y1+1;
        }

        else if (distFunc(x1+2, targX, y1+1, targY)<remDistance) {
            counter++;
            remDistance = distFunc(x1+2, targX, y1+1, targY)
            x1 = x1+2;
            y1 = y1+1;
        }
    }
    console.log(counter);
}

function distFunc (x1, x2, y1, y2) {
   
    return Math.sqrt(((x2-x1)*(x2-x1)) + ((y2-y1)*(y2-y1)));
}
 