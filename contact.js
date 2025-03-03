
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
