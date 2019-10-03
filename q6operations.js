function sum(val1,val2)
{
    return val1+val2;
}

function diff(val1,val2)
{
    return val1-val2;
}
function mult(val1,val2)
{
    return val1*val2;
}

function number(val1,val2,prop)
{
    var ans= prop(val1,val2);
    console.log(ans);
    return ans;
}

number(3,4,sum);
number(3,4,mult);
number(3,4,diff);
