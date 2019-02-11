     

      var img = "C:/Users/Nathan/Documents/UM_Coding/Word_Guess_Game/assets/images/b0.png";
      var guess = [];
      var letter;
      var hold = [];
      var vowel = [];
      var wordChoices = ["apple", "banana", "watermelon", "canaloupe", "orange","grapefruit", "nectarines", "raspberry", "blueberry" ];
      
      var t = 0

      function showImage() {
      document.getElementById("img").src = img;
        }

        showImage();

      var imgArray = ["C:/Users/Nathan/Documents/UM_Coding/Word_Guess_Game/assets/images/b0.png",
            "C:/Users/Nathan/Documents/UM_Coding/Word_Guess_Game/assets/images/b1.png",
            "C:/Users/Nathan/Documents/UM_Coding/Word_Guess_Game/assets/images/b2.png",
            "C:/Users/Nathan/Documents/UM_Coding/Word_Guess_Game/assets/images/b3.png",
            "C:/Users/Nathan/Documents/UM_Coding/Word_Guess_Game/assets/images/b4.png",
            "C:/Users/Nathan/Documents/UM_Coding/Word_Guess_Game/assets/images/b5.png",
            "C:/Users/Nathan/Documents/UM_Coding/Word_Guess_Game/assets/images/b6.png",
            "C:/Users/Nathan/Documents/UM_Coding/Word_Guess_Game/assets/images/b7.png",
            "C:/Users/Nathan/Documents/UM_Coding/Word_Guess_Game/assets/images/b8.png",]
            
        var winner = "C:/Users/Nathan/Documents/UM_Coding/Word_Guess_Game/assets/images/b9.png" 

        alert("Make your guesses and when you think you have it type it into the guess box and see if you win")

        document.onkeyup = function(event) {
               
            var letter = event.key.toLowerCase();
            guess.push(letter);
            
            document.getElementById("demo").innerHTML = guess; 
            
   
            if ((str.charAt(0) === letter) || (str.charAt(1) === letter) || (str.charAt(2) === letter) || (str.charAt(3) === letter) || (str.charAt(4) === letter) || (str.charAt(5) === letter) || (str.charAt(6) === letter) ||(str.charAt(7) === letter) || (str.charAt(8) === letter) || (str.charAt(9) === letter) || (str.charAt(10) === letter))
            {
            document.getElementById("demo4").innerHTML = ("You have a Match  " + letter);
            hold.push(letter)
            document.getElementById("demo5").innerHTML = hold;                   
            }
            
                        
            else if (t < 8){
              document.getElementById("demo4").innerHTML = ("Not a match " + letter);           
                document.getElementById("img").src = imgArray[t+1];
                
                t = t + 1
            }


            else if (t == 8){
              alert("You have lost...your word was " + wordGuess)

              var quest2 = confirm("Do you want to play again?");

               if (quest2 === true){
                  location.reload();
                }
            }
            
                         
        } 
                
               

            function myFunction() {
              var x = document.getElementById("myText").value;
              
                if (x === wordGuess){
                    document.getElementById("img").src = winner;
                  
                   
               
                }
            
                                  
                


                else {
                    alert("Try Again");
              
                } 
           }

function newFunction() {
    location.reload();
}

            function myFunction1() {
              document.getElementById("demo6").innerHTML = "Its a fruit";
            }
              
     
  
            
       
            var wordGuess = wordChoices[Math.floor(Math.random() * wordChoices.length)];
            console.log(wordGuess)
            var q = wordGuess.length
      
                var w = "-"
       
                for (var i=1;i<=q; i++) {
                    w += "-";
                }   

                document.getElementById("demo3").innerHTML = (w);
                
                var str = wordGuess.toString()
   

    