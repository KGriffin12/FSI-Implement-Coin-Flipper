let headsRolls = 0
let tailsRolls = 0

document.addEventListener('DOMContentLoaded', function () {
   
    document.getElementById('flip').addEventListener('click', () => {
       
        let flippedHeads = Math.random() < 0.5

        
        if (flippedHeads) {
           
            document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
            document.getElementById('message').textContent = 'You Flipped Heads!'

            
            headsRolls += 1
        }
        else {
            
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = 'You Flipped Tails!'

            
            tailsRolls += 1
        }

        
        let total = headsRolls + tailsRolls

        
        let percentHeads = 0
        let percentTails = 0

       
        if (total > 0) {
            
            percentHeads = Math.round((headsRolls / total) * 100)
            percentTails = Math.round((tailsRolls / total) * 100)
        }

        
        document.getElementById('heads').textContent = headsRolls
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsRolls
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })

    document.getElementById('clear').addEventListener('click', function () {
        
        headsRolls = 0
        tailsRolls = 0

       
        document.getElementById('message').textContent = 'Let\'s Get Rolling!'

       
        let total = headsRolls + tailsRolls

        
        let percentHeads = 0
        let percentTails = 0

        if (total > 0) {
          
            percentHeads = Math.round((headsRolls / total) * 100)
            percentTails = Math.round((tailsRolls / total) * 100)
        }

       
        document.getElementById('heads').textContent = headsRolls
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsRolls
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })
})



// Use the notes from the answer key and then work through as much as possible without the assistance of the answer 

// Track any global variables we need

// Listen for DOMContentLoaded to ensure that all HTML and resources
//  have been loaded before attempting to run code

 // Add event listeners and handlers for both buttons

  // Determine result using Math.random() which returns a value between 0 and 1
        // Therefore, it has a 50% chance to be below 0.5

 // Take different actions for heads vs tails flipped

 // Take different actions for heads vs tails flipped

 // Display image and message as heads

 // Add one to the count of number of heads flipped

 // Display image and message as tails

    // Add one to the count of number of tails flipped

    // Update the scoreboard

    // Calculate total number of rolls

    // Create variables to track percent heads and tails

     // Before trying to divide, make sure total is not zero

     // Calculate percentage of heads and tails

     // Update the values in the scoreboard table

// Reset the heads and tails values to zero

 // Update the message to the user

  // Update the scoreboard
        
    // Calculate total number of rolls

    // Create variables to track percent heads and tails

 // Before trying to divide, make sure total is not zero

   // Calculate percentage of heads and tails

   // Update the values in the scoreboard table

