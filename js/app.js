$(document).foundation()


// ===== ==== 
//"Traduzione scritta","Traduzione scritta",false,false), 0); > quantita
//	  prestazioni.options.add(new Option("Interpretariato verbale","Interpretariato verbale",false,false), 1); > Durata in minuti 
//	  prestazioni.options.add(new Option("Correzione di bozze","Correzione di bozze",false,false), 2);> quantita
//	  prestazioni.options.add(new Option("Correzione sintattica","Correzione sintattica",false,false), 3);> quantita
//	  prestazioni.options.add(new Option("Localizzazione","Localizzazione",false,false), 4);> quantita
//  prestazioni.options.add(new Option("Trascrizione e traduzione","Trascrizione e traduzione",false,false), 5); > Durata in minuti 
//	  Sintesi"> quantita



// ===== Scroll to Top ==== 
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function () {      // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0                       // Scroll to top of body
    }, 500);
});

var prestazioni = document.getElementById('prestazione');
var combinazione = document.getElementById('combinazione');

if (prestazioni != null) {
    prestazioni.onchange = function () { cambiaLingue(); }
}
if (combinazione != null) {
    combinazione.onchange = function () { cambiaPrestazioni(); }
}

var services = document.getElementById('service');
var languages = document.getElementById('combination');

if (services != null) {
    services.onchange = function () { changeLanguages(); }
}
if (languages != null) {
    languages.onchange = function () { changeServices(); }
}

var services_ru = document.getElementById('service-ru');
var languages_ru = document.getElementById('combination-ru');

if (services_ru != null) {
    services_ru.onchange = function () { changeLanguagesRu(); }
}
if (languages_ru != null) {
    languages_ru.onchange = function () { changeServicesRu(); }
}

function cambiaLingue() {
    if (prestazioni != null) {
        var nomePrestazione = prestazioni.value;

        var lingue = combinazione.value;

        while (combinazione.options.length) {
            combinazione.options.remove(0);
        }

        if (nomePrestazione === "Traduzione scritta") {
            var option = new Option("Seleziona qui", "Seleziona qui", false, false);
            combinazione.options.add(option, 0);
            combinazione.options[0].disabled = true;
            combinazione.options.add(new Option("Inglese > Italiano", "Inglese > Italiano", false, false), 1);
            combinazione.options.add(new Option("Italiano > Inglese", "Italiano > Inglese", false, false), 2);
            combinazione.options.add(new Option("Russo > Italiano", "Russo > Italiano", false, false), 3);
            combinazione.options.add(new Option("Italiano > Russo", "Italiano > Russo", false, false), 4);
            combinazione.options.add(new Option("Inglese > Russo", "Inglese > Russo", false, false), 5);
            combinazione.options.add(new Option("Russo > Inglese", "Russo > Inglese", false, false), 6);
            combinazione.options.add(new Option("Italiano > Tedesco", "Italiano > Tedesco", false, false), 7);
			combinazione.options.add(new Option("Tedesco > Italiano", "Tedesco > Italiano", false, false), 8);
			combinazione.options.add(new Option("Italiano > Spagnolo", "Italiano > Spagnolo", false, false), 9);
            combinazione.options.add(new Option("Spagnolo > Italiano", "Spagnolo > Italiano", false, false), 10);
            document.getElementById("labelquantita").innerHTML = "Quantità parole testo partenza (incl. spazi e punteggiatura)";
        }
        else if (nomePrestazione === "Interpretariato verbale") {
            var option = new Option("Seleziona qui", "Seleziona qui", false, false);
            combinazione.options.add(option, 0);
            combinazione.options[0].disabled = true;
            combinazione.options.add(new Option("Inglese > Italiano", "Inglese > Italiano", false, false), 1);
            combinazione.options.add(new Option("Italiano > Inglese", "Italiano > Inglese", false, false), 2);
            combinazione.options.add(new Option("Russo > Italiano", "Russo > Italiano", false, false), 3);
            combinazione.options.add(new Option("Italiano > Russo", "Italiano > Russo", false, false), 4);
            document.getElementById("labelquantita").innerHTML = "Durata in minuti";
        }
        else if (nomePrestazione === "Altro servizio") {
            var option = new Option("Seleziona qui", "Seleziona qui", false, false);
            combinazione.options.add(option, 0);
            combinazione.options[0].disabled = true;
            combinazione.options.add(new Option("Inglese > Italiano", "Inglese > Italiano", false, false), 1);
            combinazione.options.add(new Option("Russo > Italiano", "Russo > Italiano", false, false), 2);
            combinazione.options.add(new Option("Tedesco > Italiano", "Tedesco > Italiano", false, false), 3);
            combinazione.options.add(new Option("Spagnolo > Italiano", "Spagnolo > Italiano", false, false), 4);
            document.getElementById("labelquantita").innerHTML = "Quantità parole testo partenza (incl. spazi e punteggiatura)";
        }
        
        combinazione.value = lingue;
    }
}

function cambiaPrestazioni() {
    if (combinazione != null) {

        var lingua = combinazione.value;
        var servizio = prestazioni.value;

        while (prestazioni.options.length) {
            prestazioni.options.remove(0);
        }

        if (lingua === "Inglese > Italiano") {
            var option = new Option("Seleziona qui", "Seleziona qui", false, false);
            prestazioni.options.add(option, 0);
            prestazioni.options[0].disabled = true;
            prestazioni.options.add(new Option("Traduzione scritta", "Traduzione scritta", false, false), 1);
            prestazioni.options.add(new Option("Interpretariato verbale", "Interpretariato verbale", false, false), 2);
            prestazioni.options.add(new Option("Altro servizio", "Altro servizio", false, false), 3);
        } else if (lingua === "Italiano > Inglese") {
            var option = new Option("Seleziona qui", "Seleziona qui", false, false);
            prestazioni.options.add(option, 0);
            prestazioni.options[0].disabled = true;
            prestazioni.options.add(new Option("Traduzione scritta", "Traduzione scritta", false, false), 1);
            prestazioni.options.add(new Option("Interpretariato verbale", "Interpretariato verbale", false, false), 2);
        } else if (lingua === "Russo > Italiano") {
            var option = new Option("Seleziona qui", "Seleziona qui", false, false);
            prestazioni.options.add(option, 0);
            prestazioni.options[0].disabled = true;
            prestazioni.options.add(new Option("Traduzione scritta", "Traduzione scritta", false, false), 1);
            prestazioni.options.add(new Option("Interpretariato verbale", "Interpretariato verbale", false, false), 2);
            prestazioni.options.add(new Option("Altro servizio", "Altro servizio", false, false), 3);
        } else if (lingua === "Italiano > Russo") {
            var option = new Option("Seleziona qui", "Seleziona qui", false, false);
            prestazioni.options.add(option, 0);
            prestazioni.options[0].disabled = true;
            prestazioni.options.add(new Option("Traduzione scritta", "Traduzione scritta", false, false), 1);
            prestazioni.options.add(new Option("Interpretariato verbale", "Interpretariato verbale", false, false), 2);
        } else if (lingua === "Inglese > Russo") {
            var option = new Option("Seleziona qui", "Seleziona qui", false, false);
            prestazioni.options.add(option, 0);
            prestazioni.options[0].disabled = true;
            prestazioni.options.add(new Option("Traduzione scritta", "Traduzione scritta", false, false), 1);
        }
        else if (lingua === "Russo > Inglese") {
            var option = new Option("Seleziona qui", "Seleziona qui", false, false);
            prestazioni.options.add(option, 0);
            prestazioni.options[0].disabled = true;
            prestazioni.options.add(new Option("Traduzione scritta", "Traduzione scritta", false, false), 1);
        }
        else if (lingua === "Tedesco > Italiano") {
            var option = new Option("Seleziona qui", "Seleziona qui", false, false);
            prestazioni.options.add(option, 0);
            prestazioni.options[0].disabled = true;
            prestazioni.options.add(new Option("Traduzione scritta", "Traduzione scritta", false, false), 1);
            prestazioni.options.add(new Option("Altro servizio", "Altro servizio", false, false), 3);
        }
        else if (lingua === "Spagnolo > Italiano") {
            var option = new Option("Seleziona qui", "Seleziona qui", false, false);
            prestazioni.options.add(option, 0);
            prestazioni.options[0].disabled = true;
            prestazioni.options.add(new Option("Traduzione scritta", "Traduzione scritta", false, false), 1);
            prestazioni.options.add(new Option("Altro servizio", "Altro servizio", false, false), 3);
        }
		else if (lingua === "Italiano > Tedesco") {
            var option = new Option("Seleziona qui", "Seleziona qui", false, false);
            prestazioni.options.add(option, 0);
            prestazioni.options[0].disabled = true;
            prestazioni.options.add(new Option("Traduzione scritta", "Traduzione scritta", false, false), 1);
        }
        else if (lingua === "Italiano > Spagnolo") {
            var option = new Option("Seleziona qui", "Seleziona qui", false, false);
            prestazioni.options.add(option, 0);
            prestazioni.options[0].disabled = true;
            prestazioni.options.add(new Option("Traduzione scritta", "Traduzione scritta", false, false), 1);
        }
        prestazioni.value = servizio;
    }

}

function changeLanguages() {
    if (services != null) {
        var serviceName = services.value;

        var language = languages.value;

        while (languages.options.length) {
            languages.options.remove(0);
        }

        if (serviceName === "Written translation") {
            var option = new Option("Select here", "Select here", false, false);
            languages.options.add(option, 0);
            languages.options[0].disabled = true;
            languages.options.add(new Option("English > Italian", "English > Italian", false, false), 1);
            languages.options.add(new Option("Italian > English", "Italian > English", false, false), 2);
            languages.options.add(new Option("Russian > Italian", "Russian > Italian", false, false), 3);
            languages.options.add(new Option("Italian > Russian", "Italian > Russian", false, false), 4);
            languages.options.add(new Option("English > Russian", "English > Russian", false, false), 5);
            languages.options.add(new Option("Russian > English", "Russian > English", false, false), 6);
            languages.options.add(new Option("Italian > German", "Italian > German", false, false), 7);
			languages.options.add(new Option("German > Italian", "German > Italian", false, false), 8);
            languages.options.add(new Option("Italian > Spanish", "Italian > Spanish", false, false), 9);
            languages.options.add(new Option("Spanish > Italian", "Spanish > Italian", false, false), 10);
            document.getElementById("labelquantity").innerHTML = "Quantity of source words (incl. blanks & punctuation)";
        }
        else if (serviceName === "Verbal interpretation") {
            var option = new Option("Select here", "Select here", false, false);
            languages.options.add(option, 0);
            languages.options[0].disabled = true;
            languages.options.add(new Option("English > Italian", "English > Italian", false, false), 1);
            languages.options.add(new Option("Italian > English", "Italian > English", false, false), 2);
            languages.options.add(new Option("Russian > Italian", "Russian > Italian", false, false), 3);
            languages.options.add(new Option("Italian > Russian", "Italian > Russian", false, false), 4);
            document.getElementById("labelquantity").innerHTML = "Duration in minutes";
        }
        else if (serviceName === "Other service") {
            var option = new Option("Select here", "Select here", false, false);
            languages.options.add(option, 0);
            languages.options[0].disabled = true;
            languages.options.add(new Option("English > Italian", "English > Italian", false, false), 1);
            languages.options.add(new Option("Russian > Italian", "Russian > Italian", false, false), 2);
            languages.options.add(new Option("German > Italian", "German > Italian", false, false), 3);
            languages.options.add(new Option("Spanish > Italian", "Spanish > Italian", false, false), 4);
            document.getElementById("labelquantity").innerHTML = "Quantity of source words (incl. blanks & punctuation)";
        }
        
        languages.value = language;
    }
}


function changeServices() {
    if (languages != null) {

        var language = languages.value;
        var service = services.value;

        while (services.options.length) {
            services.options.remove(0);
        }

        if (language === "English > Italian") {
            var option = new Option("Select here", "Select here", false, false);
            services.options.add(option, 0);
            services.options[0].disabled = true;
            services.options.add(new Option("Written translation", "Written translation", false, false), 1);
            services.options.add(new Option("Verbal interpretation", "Verbal interpretation", false, false), 2);
            services.options.add(new Option("Other service", "Other service", false, false), 3);
        } else if (language === "Italian > English") {
            var option = new Option("Select here", "Select here", false, false);
            services.options.add(option, 0);
            services.options[0].disabled = true;
            services.options.add(new Option("Written translation", "Written translation", false, false), 2);
            services.options.add(new Option("Verbal interpretation", "Verbal interpretation", false, false), 2);
        } else if (language === "Russian > Italian") {
            var option = new Option("Select here", "Select here", false, false);
            services.options.add(option, 0);
            services.options[0].disabled = true;
            services.options.add(new Option("Written translation", "Written translation", false, false), 1);
            services.options.add(new Option("Verbal interpretation", "Verbal interpretation", false, false), 2);
            services.options.add(new Option("Other service", "Other service", false, false), 3);
		} else if (language === "Italian > Russian") {
            var option = new Option("Select here", "Select here", false, false);
            services.options.add(option, 0);
            services.options[0].disabled = true;
            services.options.add(new Option("Written translation", "Written translation", false, false), 1);
            services.options.add(new Option("Verbal interpretation", "Verbal interpretation", false, false), 2);
        } else if (language === "English > Russian") {
            var option = new Option("Select here", "Select here", false, false);
            services.options.add(option, 0);
            services.options[0].disabled = true;
            services.options.add(new Option("Written translation", "Written translation", false, false), 1);
        }
        else if (language === "Russian > English") {
            var option = new Option("Select here", "Select here", false, false);
            services.options.add(option, 0);
            services.options[0].disabled = true;
            services.options.add(new Option("Written translation", "Written translation", false, false), 1);
        }
        else if (language === "German > Italian") {
            var option = new Option("Select here", "Select here", false, false);
            services.options.add(option, 0);
            services.options[0].disabled = true;
            services.options.add(new Option("Written translation", "Written translation", false, false), 1);
            services.options.add(new Option("Other service", "Other service", false, false), 2);
        }
        else if (language === "Spanish > Italian") {
            var option = new Option("Select here", "Select here", false, false);
            services.options.add(option, 0);
            services.options[0].disabled = true;
            services.options.add(new Option("Written translation", "Written translation", false, false), 1);
            services.options.add(new Option("Other service", "Other service", false, false), 2);
        }
		else if (language === "Italian > German") {
            var option = new Option("Select here", "Select here", false, false);
            services.options.add(option, 0);
            services.options[0].disabled = true;
            services.options.add(new Option("Written translation", "Written translation", false, false), 1);
        }
        else if (language === "Italian > Spanish") {
            var option = new Option("Select here", "Select here", false, false);
            services.options.add(option, 0);
            services.options[0].disabled = true;
            services.options.add(new Option("Written translation", "Written translation", false, false), 1);
        }
        services.value = service;
    }

}

function changeLanguagesRu() {
    if (services_ru != null) {
        var serviceName = services_ru.value;

        var language = languages_ru.value;

        while (languages_ru.options.length) {
            languages_ru.options.remove(0);
        }

        if (serviceName === "Письменный перевод") {
            var option = new Option("Выбери здесь", "Выбери здесь", false, false);
            languages_ru.options.add(option, 0);
            languages_ru.options[0].disabled = true;
            languages_ru.options.add(new Option("Англйский > Итальянский", "Англйский > Итальянский", false, false), 1);
            languages_ru.options.add(new Option("Итальянский > Англйский", "Итальянский > Англйский", false, false), 2);
            languages_ru.options.add(new Option("Русский > Итальянский", "Русский > Итальянский", false, false), 3);
            languages_ru.options.add(new Option("Итальянский > Русский", "Итальянский > Русский", false, false), 4);
            languages_ru.options.add(new Option("Англйский > Русский", "Англйский > Русский", false, false), 5);
            languages_ru.options.add(new Option("Русский > Англйский", "Русский > Англйский", false, false), 6);
            languages_ru.options.add(new Option("Итальянский > Немецкий", "Итальянский > Немецкий", false, false), 7);
			languages_ru.options.add(new Option("Немецкий > Итальянский", "Немецкий > Итальянский", false, false), 8);
            languages_ru.options.add(new Option("Итальянский > Испанский", "Итальянский > Испанский", false, false), 9);
            languages_ru.options.add(new Option("Испанский > Итальянский", "Испанский > Итальянский", false, false), 10);
            document.getElementById("labelquantity").innerHTML = "Количество исходных слов (включая пробелы и пунктуацию)";
        }
        else if (serviceName === "Устный перевод") {
            var option = new Option("Выбери здесь", "Выбери здесь", false, false);
            languages_ru.options.add(option, 0);
            languages_ru.options[0].disabled = true;
            languages_ru.options.add(new Option("Англйский > Итальянский", "Англйский > Итальянский", false, false), 1);
            languages_ru.options.add(new Option("Итальянский > Англйский", "Итальянский > Англйский", false, false), 2);
            languages_ru.options.add(new Option("Русский > Итальянский", "Русский > Итальянский", false, false), 3);
            languages_ru.options.add(new Option("Итальянский > Русский", "Итальянский > Русский", false, false), 4);
            document.getElementById("labelquantity").innerHTML = "Продолжительность в минутах";
        }
        else if (serviceName === "Другая услуга") {
            var option = new Option("Выбери здесь", "Выбери здесь", false, false);
            languages_ru.options.add(option, 0);
            languages_ru.options[0].disabled = true;
            languages_ru.options.add(new Option("Англйский > Итальянский", "Англйский > Итальянский", false, false), 1);
            languages_ru.options.add(new Option("Русский > Итальянский", "Русский > Итальянский", false, false), 2);
            languages_ru.options.add(new Option("Немецкий > Итальянский", "Немецкий > Итальянский", false, false), 3);
            languages_ru.options.add(new Option("Испанский > Итальянский", "Испанский > Итальянский", false, false), 4);
            document.getElementById("labelquantity").innerHTML = "Количество исходных слов (включая пробелы и пунктуацию)";
        }
        
        languages_ru.value = language;
    }
}


function changeServicesRu() {
    if (languages_ru != null) {

        var language = languages_ru.value;
        var service = services_ru.value;

        while (services_ru.options.length) {
            services_ru.options.remove(0);
        }

        if (language === "Англйский > Итальянский") {
            var option = new Option("Выбери здесь", "Выбери здесь", false, false);
            services_ru.options.add(option, 0);
            services_ru.options[0].disabled = true;
            services_ru.options.add(new Option("Письменный перевод", "Письменный перевод", false, false), 1);
            services_ru.options.add(new Option("Устный перевод", "Устный перевод", false, false), 2);
            services_ru.options.add(new Option("Другая услуга", "Другая услуга", false, false), 3);
        } else if (language === "Итальянский > Англйский") {
            var option = new Option("Выбери здесь", "Выбери здесь", false, false);
            services_ru.options.add(option, 0);
            services_ru.options[0].disabled = true;
            services_ru.options.add(new Option("Письменный перевод", "Письменный перевод", false, false), 2);
            services_ru.options.add(new Option("Устный перевод", "Устный перевод", false, false), 2);
        } else if (language === "Русский > Итальянский") {
            var option = new Option("Выбери здесь", "Выбери здесь", false, false);
            services_ru.options.add(option, 0);
            services_ru.options[0].disabled = true;
            services_ru.options.add(new Option("Письменный перевод", "Письменный перевод", false, false), 1);
            services_ru.options.add(new Option("Устный перевод", "Устный перевод", false, false), 2);
            services_ru.options.add(new Option("Другая услуга", "Другая услуга", false, false), 3);
		} else if (language === "Итальянский > Русский") {
            var option = new Option("Выбери здесь", "Выбери здесь", false, false);
            services_ru.options.add(option, 0);
            services_ru.options[0].disabled = true;
            services_ru.options.add(new Option("Письменный перевод", "Письменный перевод", false, false), 1);
            services_ru.options.add(new Option("Устный перевод", "Устный перевод", false, false), 2);
        } else if (language === "Англйский > Русский") {
            var option = new Option("Выбери здесь", "Выбери здесь", false, false);
            services_ru.options.add(option, 0);
            services_ru.options[0].disabled = true;
            services_ru.options.add(new Option("Письменный перевод", "Письменный перевод", false, false), 1);
        }
        else if (language === "Русский > Англйский") {
            var option = new Option("Выбери здесь", "Выбери здесь", false, false);
            services_ru.options.add(option, 0);
            services_ru.options[0].disabled = true;
            services_ru.options.add(new Option("Письменный перевод", "Письменный перевод", false, false), 1);
        }
        else if (language === "Немецкий > Итальянский") {
            var option = new Option("Выбери здесь", "Выбери здесь", false, false);
            services_ru.options.add(option, 0);
            services_ru.options[0].disabled = true;
            services_ru.options.add(new Option("Письменный перевод", "Письменный перевод", false, false), 1);
            services_ru.options.add(new Option("Другая услуга", "Другая услуга", false, false), 2);
        }
        else if (language === "Испанский > Итальянский") {
            var option = new Option("Выбери здесь", "Выбери здесь", false, false);
            services_ru.options.add(option, 0);
            services_ru.options[0].disabled = true;
            services_ru.options.add(new Option("Письменный перевод", "Письменный перевод", false, false), 1);
            services_ru.options.add(new Option("Другая услуга", "Другая услуга", false, false), 2);
        }
		else if (language === "Итальянский > Немецкий") {
            var option = new Option("Выбери здесь", "Выбери здесь", false, false);
            services_ru.options.add(option, 0);
            services_ru.options[0].disabled = true;
            services_ru.options.add(new Option("Письменный перевод", "Письменный перевод", false, false), 1);
        }
        else if (language === "Итальянский > Испанский") {
            var option = new Option("Выбери здесь", "Выбери здесь", false, false);
            services_ru.options.add(option, 0);
            services_ru.options[0].disabled = true;
            services_ru.options.add(new Option("Письменный перевод", "Письменный перевод", false, false), 1);
        }
        services_ru.value = service;
    }
}