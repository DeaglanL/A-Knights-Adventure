//Will find the fasted route but can currently get stuck in infinite loop when moving to certain cords.

function func (param) {
    let targX = (param.charAt(0) *1);
    let targY = (param.charAt(1) *1);

    let counter = 0;

    let x1 = 0;
    let y1 = 0;

    let  remDistance = distFunc(x1, targX, y1, targY);

    let distArray = []; 
    
    while (x1 !== targX && y1 !== targY ) {
        distArray.push(distFunc (x1-1, targX, y1-2, targY));
        distArray.push(distFunc (x1+1, targX, y1-2, targY));
        distArray.push(distFunc (x1-1, targX, y1+2, targY));
        distArray.push(distFunc (x1+1, targX, y1+2, targY));
        distArray.push(distFunc (x1-2, targX, y1-1, targY));
        distArray.push(distFunc (x1+2, targX, y1-1, targY));
        distArray.push(distFunc (x1-2, targX, y1+1, targY));
        distArray.push(distFunc (x1+2, targX, y1+1, targY));
    
    let routeNo =0;
    let currBest= 50000;
    for (var index = 0; index < distArray.length; index++) {
        if(distArray[index] < currBest ){
            routeNo = index;
            currBest = distArray[index];
        }
    }
        //console.log(remDistance);
        switch(routeNo) {
            case 0:
                x1 = x1-1;
                y1 = y1-2;
                remDistance = distArray[0]
                counter++;
            break; 

            case 1:
            x1 = x1+1;
            y1 = y1-2;
            remDistance = distArray[1]
            counter++;
            break;

            case 2:
            x1 = x1-1;
            y1 = y1+2;
            remDistance = distArray[2]
            counter++;
            break;

            case 3:
            x1 = x1+1;
            y1 = y1+2;
            remDistance = distArray[3]
            counter++;
            break;

            case 4:
            x1 = x1-2;
            y1 = y1-1;
            remDistance = distArray[4]
            counter++;
            break;

            case 5:
            x1 = x1+2;
            y1 = y1-1;
            remDistance = distArray[5]
            counter++;
            break;

            case 6:
            x1 = x1-2;
            y1 = y1+1;
            remDistance = distArray[6]
            counter++;
            break;

            case 7:
            x1 = x1+2;
            y1 = y1+1;
            remDistance = distArray[7]
            counter++;
            break;
        }
        console.log(counter);
    }
    



function distFunc (x1, x2, y1, y2) {
   
    return Math.sqrt(((x2-x1)*(x2-x1)) + ((y2-y1)*(y2-y1)));
}
}