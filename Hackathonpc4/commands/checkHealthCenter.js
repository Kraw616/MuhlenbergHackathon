
export default function checkHealthCenter(dayOfWeek, hourMin)
{
    if(dayOfWeek != 0 && dayOfWeek != 6)
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