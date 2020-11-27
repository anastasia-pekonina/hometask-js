const friend = {
    name: "Юлия",
    lastname: "Бахтова",
    born:{
        day :11,
        month: '09',
        year:2000 
        }
    };
    console.log("Мою подругу зовут" + ' ' + friend.lastname + ' ' + friend.name);
    console.log("Она родилась"+' '+friend.born.day + '.'+friend.born.month + '.' + friend.born.year);
    

    function sum(a) {
        return function(b){
           return a+b;
        };
      }
      console.log(sum(3)(4));