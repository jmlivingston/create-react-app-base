import dayjs from 'dayjs'

import DATE from '../config/DATE'

const msToMinutesAndSeconds = ms => {
  var minutes = Math.floor(ms / 60000)
  var seconds = ((ms % 60000) / 1000).toFixed(0)
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}

const date = {
  format: (date, dateFormat = DATE.DATE) => {
    if (date) {
      return dayjs(date).format(dateFormat)
    } else {
      return ''
    }
  },
  getTimeDifference: (startDate, endDate) => {
    if (startDate && endDate) {
      const dateDifference = dayjs(startDate).diff(dayjs(endDate), 'milliseconds')
      return msToMinutesAndSeconds(Math.abs(dateDifference))
    } else {
      return ''
    }
  }
}

export default date
