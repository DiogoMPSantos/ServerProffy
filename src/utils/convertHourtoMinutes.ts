export default function convertHourtoMinutes(time: String){
    const [hour,minute] = time.split(":").map(Number);
    const timeInMinutes = (hour*60) + minute;
    return timeInMinutes;
}