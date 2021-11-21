
export default function checkLSCCafe(dayOfWeek, hourMin)
{
    if(dayOfWeek != 0 && dayOfWeek != 6)
    {
        if(hourMin > 8.00 && hourMin < 19.00)
        {
            return "green";
        }
        else
        {
            return "red";
        }
    }
    else
    {
        return "red";
    }

}