type DateProps = {
  startDate: string
  endDate?: string
}

// Ex: 28. mai 2023
export const fullDate = (date: string) => {
  // Get weekday
  const dateObject = new Date(date)
  return dateObject.toLocaleDateString("no", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Europe/Oslo",
  })
}

// Show local time
// Ex: Lørdag kl. 14:30 - 15:00
export const weekDayAndStartEndTime = ({ startDate, endDate }: DateProps) => {
  // Get weekday
  const startDateObject = new Date(startDate)
  const weekday = startDateObject.toLocaleDateString("no", {
    weekday: "long",
    timeZone: "Europe/Oslo",
  })

  // Get start time
  const startTime = startDateObject.toLocaleTimeString("no", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Oslo",
  })

  // Get end time
  if (endDate) {
    const endDateObject = new Date(endDate)
    const endTime = endDateObject.toLocaleTimeString("no", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Oslo",
    })
    return `${weekday} kl. ${startTime} - ${endTime} `
  }

  return `${weekday} kl. ${startTime}`
}

// Ex: kl. 14:30 - 15:00
export const startAndEndTime = ({ startDate, endDate }: DateProps) => {
  // Get weekday
  const startDateObject = new Date(startDate)

  // Get start time
  const startTime = startDateObject.toLocaleTimeString("no", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Oslo",
  })

  // Get end time
  if (endDate) {
    const endDateObject = new Date(endDate)
    const endTime = endDateObject.toLocaleTimeString("no", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Oslo",
    })
    return `kl. ${startTime} - ${endTime} `
  }

  return `kl. ${startTime}`
}

// Ex: Lørdag 27. mai
export const weekDayAndDate = (date: string) => {
  if (!date) return ""

  // Get weekday
  const startDateObject = new Date(date)
  return startDateObject.toLocaleDateString("no", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "Europe/Oslo",
  })
}

// Ex: Lørdag
export const weekDay = (date: string) => {
  if (!date) return ""

  // Get weekday
  const startDateObject = new Date(date)
  const weekDay = startDateObject.toLocaleDateString("no", {
    weekday: "long",
    timeZone: "Europe/Oslo",
  })

  return weekDay.charAt(0).toUpperCase() + weekDay.slice(1);
}
