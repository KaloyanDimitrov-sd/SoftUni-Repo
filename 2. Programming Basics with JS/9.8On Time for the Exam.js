function onTimeForTheExam(hourExam, minExam, hourArrive, minArrive) {
    hourExam = Number(hourExam);
    minExam = Number(minExam);
    hourArrive = Number(hourArrive);
    minArrive = Number(minArrive);
    let exam = hourExam * 60 + minExam;
    let arrive = hourArrive * 60 + minArrive;
    let isLate = exam < arrive;
    let isOnTime = arrive <= exam && arrive >= exam - 30;
    let isEarly = arrive < exam - 30;
    if (isOnTime) {
        console.log("On Time") 
    } else if (isEarly) {
        
    }
}