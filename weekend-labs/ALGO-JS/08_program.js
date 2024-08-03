let to12 = (time) =>{
    time = time.split(':');
    if (time[0] > 12){
        time[0] = time[0] - 12;
        time [1] = time[1] + ' PM';
    } else {
        time [1] = time[1] + ' AM';

    }
   
    console.log(time.join(':'));
}

to12('10:40');