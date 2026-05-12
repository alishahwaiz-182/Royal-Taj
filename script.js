        const hamburger = document.querySelector(".hamburger");
        const menu = document.querySelector(".second");

        hamburger.addEventListener("click", () => {
            menu.classList.toggle("active");
        });



         const form = document.getElementById("contactform");

        form.addEventListener("submit", function (e) {
            e.preventDefault(); 

            
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const address = document.getElementById("address").value.trim();

           
            if (name === "" || email === "" || address === "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please fill all the fields!'
                });
                return; 
            } else {

                
                Swal.fire({
                    icon: 'success',
                    title: 'Congratulations!',
                    text: 'Thankyou for Order'
                });

                
                form.reset()
            };
        });