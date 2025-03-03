/* document.querySelector('.stage1').classList.add('active');

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        nextStage(1, 1);
    }
});

function nextStage(currentStage, direction) {
    document.querySelector('.stage' + currentStage).classList.remove('active');

    var nextStage = currentStage + direction;

    if (document.querySelector('.stage' + nextStage)) {
        const currentStageElement = document.querySelector('.stage' + currentStage);
        const inputs = currentStageElement.querySelectorAll('input[required]');
        
        let isValid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        const emailInput = document.querySelector('#email');
        const email = emailInput.value.trim();
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if (email && !emailRegex.test(email)) {
            isValid = false;
            emailInput.classList.add('error');
        } else {
            emailInput.classList.remove('error');
        }

        if (isValid) {
            document.querySelector('.stage' + nextStage).classList.add('active');
        } else {
            document.querySelector('.stage' + currentStage).classList.add('active');
        }
    } else if (nextStage > 3) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const token = '6804544016:AAECGISla263Q4XtTu913Km-lQ0bR_jVzGg';
        const chatId = '5491711090';
        const text = `New Contact Form Submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

        fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: text
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                const stageContainer = document.querySelector('.contact');
                const messageElement = document.createElement('h3');
                messageElement.innerHTML = "<i class='bx bx-cloud-upload'></i> form submitted!";
                stageContainer.appendChild(messageElement);
            } else {
                console.log("error while sending message.");
            }
        })
        .catch(error => {
            console.log("An error occurred: " + error.message);
        });
    }
}
 */



var nextGreeting = 0;
var greetings = [
    "Hola", "Salut", "Ciao", "Hej", "Oi", "Hallo", "Ahoj", "Namaste", "Nihao", "Konnichiwa", "Aloha", "Bonjour", "Hallo", "Howdy", "Yo", "Hiya", "Ahoy", "Yello", "Whassup", "Yoohoo", "G'day", "Yo", "Howdy"
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(greetings);

function getNextGreeting() {
    var greeting = greetings[nextGreeting];
    nextGreeting = (nextGreeting + 1) % greetings.length;
    return greeting;
}

$(document).ready(function() {
    $('.heytext').each(function() {
        $(this).wrap('<span class="heytextsizer" style="width: ' + $(this).outerWidth() + 'px;"></span>');
    });

    $('button, a').on('mouseenter', function() {
        var hey = $(this).find('.heytext');
        if (hey.length) {
            $(hey).text(getNextGreeting() + '!');
            $(hey).closest('.heytextsizer').css('width', $(hey).outerWidth() + 'px');
        }
    });

    $('button, a').on('mouseleave', function() {
        var hey = $(this).find('.heytext');
        if (hey.length) {
            $(hey).text('HI');
            $(hey).closest('.heytextsizer').css('width', $(hey).outerWidth() + 'px');
        }
    });
});