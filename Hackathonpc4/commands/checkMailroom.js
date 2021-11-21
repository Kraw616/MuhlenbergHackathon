// M-R, 7-8
// F, 7 - 7
// S, 10 - 7
// Su, 10-8


export default function checkMailroom(dayOfWeek, hourMin)
{
    if(dayOfWeek != 0  && dayOfWeek != 6 ) // M - R
    {
        if(hourMin > 8.30 && hourMin < 16.30)
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