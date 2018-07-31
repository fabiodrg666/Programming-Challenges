var sumfunc = function (input) {
    var str = String(input);
    var halfLenght = str.length/2;
    var sum = 0;
    for(var i = 0; i < str.length; i++) {
        if(Number(str.charAt(i)) === Number(str.charAt((i + halfLenght) % str.length)))
            sum += Number(str.charAt(i));
    }

    return sum;
};