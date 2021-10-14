$(document).ready(function () {

    let rub = $('.rate-rub'),
        usd = $('.rate-usd');

    $.get('http://data.fixer.io/api/latest?access_key=0743a0061de068b7f7105d68ef1e7d4a',
        function (responce) {
            let Usd = (responce.rates.USD),
                Rub = (responce.rates.RUB),
                RubF = '1€ = ' + Rub.toFixed(2) + '₽',
                Ru = (Rub / Usd),
                RuF = '1$ = ' + Ru.toFixed(2) + '₽';

            $(usd).text(RuF);
            $(rub).text(RubF);
            //console.log(Ru);
        }
    );
});
