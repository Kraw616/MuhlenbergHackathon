// M-R, 7-8
// F, 7 - 7
// S, 10 - 7
// Su, 10-8


export default function checkDHall(dayOfWeek, hourMin)
{
    if(dayOfWeek != 0  && dayOfWeek != 6 && dayOfWeek != 5) // M - R
    {
        if(hourMin > 7.00 && hourMin < 20.00)
        {
            var returnArray = ['green','OPEN'];
            return returnArray;
        }
        else
        {
            var returnArray = ['red','CLOSED'];
            return returnArray;
        }
    }
    else if(dayOfWeek == 5)
    {
        if(hourMin > 7.00 && hourMin < 19.00)
        {
            var returnArray = ['green','OPEN'];
            return returnArray;
        }
        else
        {
            var returnArray = ['red','CLOSED'];
            return returnArray;
        }
    }
    else if(dayOfWeek == 6)
    {
        if(hourMin > 10.00 && hourMin < 19.00)
        {
            var returnArray = ['green','OPEN'];
            return returnArray;
        }
        else
        {
            var returnArray = ['red','CLOSED'];
            return returnArray;
        }
    }
    else if(dayOfWeek == 0)
    {
        if(hourMin > 10.00 && hourMin < 20.00)
        {
            var returnArray = ['green','OPEN'];
            return returnArray;
        }
        else
        {
            var returnArray = ['red','CLOSED'];
            return returnArray;
        }
    }
    else
    {
        var returnArray = ['red','CLOSED'];
        return returnArray;
    }
}