document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let hasError = false;

    
    document.querySelectorAll('.error-message').forEach(function(el) {
        el.style.display = 'none';
    });
    document.querySelectorAll('.form-group').forEach(function(el) {
        el.classList.remove('error');
    });

    
    if (!document.getElementById('firstName').value) {
        document.getElementById('firstNameError').style.display = 'block';
        document.getElementById('firstName').parentElement.classList.add('error');
        hasError = true;
    }
    if (!document.getElementById('lastName').value) {
        document.getElementById('lastNameError').style.display = 'block';
        document.getElementById('lastName').parentElement.classList.add('error');
        hasError = true;
    }
    if (!document.getElementById('email').value || !document.getElementById('email').checkValidity()) {
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('email').parentElement.classList.add('error');
        hasError = true;
    }
    if (!document.querySelector('input[name="queryType"]:checked')) {
        document.getElementById('queryTypeError').style.display = 'block';
        document.querySelector('.query-type-container').classList.add('error');
        hasError = true;
    }
    if (!document.getElementById('message').value) {
        document.getElementById('messageError').style.display = 'block';
        document.getElementById('message').parentElement.classList.add('error');
        hasError = true;
    }
    if (!document.getElementById('consent').checked) {
        document.getElementById('consentError').style.display = 'block';
        document.getElementById('consent').parentElement.classList.add('error');
        hasError = true;
    }

    if (!hasError) {
        
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <div class="icon">✔</div>
            <div>
                <strong>Message Sent!</strong><br>
                Thanks for completing the form. We’ll be in touch soon!
            </div>
        `;
        document.body.appendChild(successMessage);
        setTimeout(() => {
            successMessage.classList.add('show');
        }, 100); 
        setTimeout(() => {
            successMessage.classList.remove('show');
            setTimeout(() => {
                successMessage.remove();
            }, 300); 
        }, 3000); 

    
        document.getElementById('contactForm').reset();
    }
});


document.querySelectorAll('.query input[type="radio"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        document.querySelectorAll('.query').forEach(function(el) {
            el.style.backgroundColor = '';
            el.style.borderColor = '';
        });
        if (this.checked) {
            this.parentElement.style.backgroundColor = 'hsl(148, 38%, 91%)';
            this.parentElement.style.borderColor = 'hsl(169, 82%, 27%)';
        }
    });
});
