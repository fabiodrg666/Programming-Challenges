var sumfunc = function(input) {
    var str = String(input);
    var sum = 0;
    for(var i = 0; i < str.length; i++) {
        if(str.charAt(i) === str.charAt((i+1)%str.length))
            sum += Number(str.charAt(i));
    }
    return sum;
};