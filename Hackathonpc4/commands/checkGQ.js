// M-R, 7-8
// F, 7 - 7
// S, 10 - 7
// Su, 10-8


export default function checkGQ(dayOfWeek, hourMin)
{
    if(dayOfWeek != 0  && dayOfWeek != 6 && dayOfWeek != 5) // M - R
    {
        if(hourMin > 8.00 && hourMin < 24.00)
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
        if(!(hourMin > 3.00 && hourMin < 8.00))
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
        if(!(hourMin > 3.00 && hourMin < 10.00))
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
        if(hourMin > 10.00 && hourMin < 24.00)
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