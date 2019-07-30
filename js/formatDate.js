function formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    var dayNames = [
      "Sunday", "Monday","Tuesday","Wednesday","Thursday",
      "Friday","Saturday"
    ];
    var dayIndex = date.getDay();
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
     return dayNames[dayIndex]+' '+monthNames[monthIndex] + ' ' + day + ', ' + year;
  }