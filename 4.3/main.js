let arr = [true, true, true, false, true, false, false, false, false, false];
let lives = 2;
 
 for (let i = 0; i < arr.length; i++) { 
    if (arr[i] == true) {
      lives -= 1; 
          if (lives == 1) {
            console.log(`танк переместился на позицию ${i+1} танк поврежден`);
          }else if (lives == 0){
            console.log(`танк переместился на позицию ${i+1} танк уничтожен`);

            break;
            
          }else{
            console.log(`танк переместился на позицию ${i+1}`);
            } 
    }else{
        console.log(`танк переместился на позицию ${i+1}`);
    }
}