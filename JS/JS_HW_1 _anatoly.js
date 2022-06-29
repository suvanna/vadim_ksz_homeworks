
const check_age = function(age) {

    if ((typeof(age) === 'number' || typeof(age) === 'string') && !isNaN (Number(age)))

     {  
        age = Number (age);
        if (age < 18) 
            {
                msg = "You don’t have access cause your age is " + age + ". It’s less then 18";
            }
        else if (age >= 18 && age < 60) 
            {
                msg = "Welcome!";
            }
        else if (age > 60) 
            {
                msg = "Keep calm and look Culture channel.";
            }
        else {
                msg = "Technical work";
            } 
    }
    else 
    {
        msg = "Please, point you age as as a number"; 
    }
    return msg;
}
 