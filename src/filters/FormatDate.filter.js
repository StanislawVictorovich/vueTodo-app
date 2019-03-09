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
      'December'], date = new Date();
    return `Today is ${date.getDay()}'s of ${months[date.getMonth()]}, ${date.getHours()} hours and ${date.getMinutes()} minutes.`
  }
}