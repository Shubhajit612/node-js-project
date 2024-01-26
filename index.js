
let selectedTimeSlot;

    function showLoginForm(time) {
        selectedTimeSlot = time;
        document.getElementById('loginForm').style.display = 'block';
    }


  
    function bookSlot() {
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;

        if (username && email) {
            const slotsElement = document.getElementById(`slots${selectedTimeSlot}`);
            let currentSlots = parseInt(slotsElement.textContent);

            if (currentSlots > 0) {
                currentSlots = currentSlots - 1;
                slotsElement.textContent = currentSlots;

                const bookedSlotElement = document.getElementById('bookedSlot');
                const pElement = document.createElement('p');
                const pButton = document.createElement('input');
                pButton.type = 'button'
                pButton.value = 'cancel'
                pElement.innerHTML = `
                <h4>Hi ${username}</h4>
                please join the meeting at ${selectedTimeSlot}
                <p>Click the link below to join the meeting:</p>
                <a href="https://meet.google.com/your-meet-id" target="_blank">Join Google Meet</a> <br><br>`;
                pElement.appendChild(pButton);
                bookedSlotElement.appendChild(pElement);

                // Clear the form
                document.getElementById('username').value = '';
                document.getElementById('email').value = '';
                document.getElementById('loginForm').style.display = 'none';

                pButton.onclick = ()=>{
                    
                    pElement.style.display = 'none';

                    currentSlots = currentSlots + 1;
                    slotsElement.textContent = currentSlots;

                   
                }


                
                
            } else {
                alert('No available slots for the selected time.');
            }
        } else {
            alert('Please fill in both username and email.');
        }
    }