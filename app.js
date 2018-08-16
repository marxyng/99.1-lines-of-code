var friends = ['Larry', 'Fred', 'Tommy', 'Kimberly', 'Phoenix'];


const button = document.getElementsByClassName('btn')[0];

button.addEventListener('click', function(){
    
for (var g = 0; g < friends.length; g++) {
    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode(`${friends[g]}`);
    h3.appendChild(h3Text);
    document.body.appendChild(h3);
   


  for (var i = 99; i >= 1; i--) {
        if (i == 1) {
            let paragraph = document.createElement('p');
            document.body.appendChild(paragraph);
            let pText = document.createTextNode(`${(i)} line of code in the file, ${(i)} line of code; ${friends[g]} strikes one out, clears it all out, no more lines of code in the file`);
            paragraph.appendChild(pText);
         
   } else {
            let paragraph2 = document.createElement('p');
            document.body.appendChild(paragraph2);
            let pText2 = document.createTextNode(`${(i)} lines of code in the file, ${(i)} lines of code; ${friends[g]} strikes one out, clears it all out, ${(i - 1)} lines of code in the file`);
            paragraph2.appendChild(pText2);
      
   } 
    } 
};
});
