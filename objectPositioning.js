//rectangle class with dimension length and height
//A weightless object at position of initial position in side the rectangle
class Rectangle{
    constructor(x,y, width, length, direction = 'north'){
        this.initialPosition = {x: x, y: y, dir: direction};
        this.length = length;
        this.width = width;
    }
    //new position of the object given parameter where to move
    getNewPosition(num){
        let newPosition = this.initialPosition;
        if(newPosition.dir==="north" ){
            if(num===1){
                newPosition.y = newPosition.y -1;
                if(newPosition.y<0){
                    newPosition.x=-1;
                    newPosition.y=-1;
                }
            }
            else if(num===2){
                newPosition.y= newPosition.y +1;
            }
            else if(num===3){
                    newPosition.dir = 'east';                  
                            
            }
            else{
                    newPosition.dir = 'west';                    
                
            }           
        }
        else if(newPosition.dir==="south" ){
            if(num===1){
                newPosition.y = newPosition.y +1;
                if(newPosition.y>height){
                    newPosition.x=-1;
                    newPosition.y=-1;
                }
            }
            else if(num===2){
                newPosition.y= newPosition.y -1;
                if(newPosition.y<0){
                    newPosition.x=-1;
                    newPosition.y=-1;
                }
            }
            else if(num===3){
                    newPosition.dir = 'west';                  
                }          
            else{
                    newPosition.dir = 'east';                    
            }           
        }              
        else if(newPosition.dir==="east"){
            if(num===1){
                newPosition.x = newPosition.x+1;
                if(newPosition.y>width){
                    newPosition.x=-1;
                    newPosition.y=-1;
                }
            }
            else if(num===2){
                newPosition.x= newPosition.x -1;
                if(newPosition.x<0){
                    newPosition.x=-1;
                    newPosition.y=-1;
                }
            }
            else if(num===3){               
                newPosition.dir = 'south';                    
            }                
            else{
                newPosition.dir = 'north';                    
            }        
        }
        else {
            if(num===1){
                newPosition.x = newPosition.x-1;
                if(newPosition.x<0){
                    newPosition.x=-1;
                    newPosition.y=-1;
                }
            }
            else if(num===2){
                newPosition.x= newPosition.x +1;
            }
            else if(num===3){               
                newPosition.dir = 'north';                    
            }                
            else{
                newPosition.dir = 'south';                    
            }        
        }
        return newPosition;
    }
}
//Array of statements to request the user
const questions =[
    "Enter X-Position and press Enter",
    "Enter Y-Position and press Enter",
    "Enter Height and press Enter",
    "Enter Width and press Enter",
    "Enter 0-4 to move to new position and press Enter"
]
//to get dimensions of the container and the initial position of object
function getDimensions(num) {
    process.stdout.write(`\n\n\n ${questions[num]}` );
    process.stdout.write(" > ");
}
let arr=[],positionX, positionY, height, width, newDirection;
let rectangle,num;
//move the object inside the container
function moveObjectInsideContainer() {        
    getDimensions(0);
    process.stdin.on('data', function(data){
        arr.push(parseInt(data.toString().trim()));
        if(arr.length>0 && arr.length<=4){
            if(arr[0]<0 || arr[1]<0 || arr[2]<arr[1] || arr[3]< arr[0]){
                process.stdout.write(`\n\n\n The object is out off the table! ` );
                process.exit();
            }             
        }        
        if(arr.length< questions.length-1){
            getDimensions(arr.length);
        }
        else{
            if(arr.length===4){
                getDimensions(questions.length-1);
            }
            else{
                console.log(arr);
                if(arr[arr.length-1]=== 0 || positionX=== -1 || positionY=== -1){
                    if(positionX=== -1 || positionY=== -1){
                        process.stdout.write(`\n\n\n The object is out off the table! \n\n\n` ); 
                    }
                    process.exit();
                }
                else if(arr[arr.length-1]<=4 ||arr[arr.length-1]>0){
                    if(arr.length===5){
                        positionX=parseInt(arr[0]);
                        positionY=parseInt(arr[1]);
                        height=parseInt(arr[2]);
                        width=parseInt(arr[3]);
                        console.log(positionX);
                        console.log(positionY);
                        rectangle = new Rectangle(positionX,positionY,width,height);
                    }
                    else if(arr.length>5)             
                    rectangle = new Rectangle(positionX,positionY,width,height, newDirection); 
                    console.log(arr[arr.length-1])
                    let newPosition = rectangle.getNewPosition(parseInt(arr[arr.length-1]));
                    positionX= newPosition.x;
                    positionY=newPosition.y;
                    newDirection= newPosition.dir;
                    console.log(newDirection);
                    console.log(newPosition.x,newPosition.y);  
                    getDimensions(questions.length-1);      
                }
            }                
        }
        
    });        
}
moveObjectInsideContainer();

