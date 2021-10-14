function cart(sum, itemsCart, promo = null) {
    let totalAmount = sum;
  
    if (promo == 'ДАРИМ300' && sum < 300) {

      totalAmount = 0;

      console.log('ДАРИМ300 ' + totalAmount);

    } else if (promo == 'ДАРИМ300') {

      totalAmount -= 300;

      console.log('ДАРИМ300 ' + totalAmount);
    }
    
    if (itemsCart >= 10) {
      let countFiveProcent = sum / 100 * 5;

      totalAmount -= countFiveProcent;

      console.log('больше 10 товаров ' + totalAmount);
    }
    
    if (sum > 50000) {
      let countTwentyProcent = totalAmount / 100 * 20;
      let countDifference = totalAmount - 50000;

      totalAmount = countDifference - countTwentyProcent;

      console.log('больше 50 000 ₽ ' + totalAmount);
    }
    
    if (promo == 'СКИДКА15' && sum >= 20000) {
      let countFifteenProcent = totalAmount / 100 * 15;

      totalAmount -= countFifteenProcent;

      console.log('СКИДКА 15% ' + totalAmount); 
    }
    console.log('Стоимость равна ' + totalAmount);
  }
  
  cart(1000, 3, 'ДАРИМ300');