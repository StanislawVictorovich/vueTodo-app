export default {
  FormatDate(value) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'June',
      'July',
      'August',
      'Septemtember',
      'October',
      'November',
      'December'
    ];
    return `Today is ${value.getDay()}'s of ${months[value.getMonth()]}, ${value.getHours()} hours and ${value.getMinutes()} minutes.`
  }
}