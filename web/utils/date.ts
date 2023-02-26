type DateProps = {
  startDate: string
  endDate?: string
}

// Show local time
// Ex: Lørdag kl. 14:30 - 15:00
export const weekDayAndStartEndTime = ({ startDate, endDate }: DateProps) => {
  // Get weekday
  const startDateObject = new Date(startDate)
  const weekday = startDateObject.toLocaleDateString("no", { weekday: "long" })

  // Get start time
  const startTime = startDateObject.toLocaleTimeString("no", {
    hour: "2-digit",
    minute: "2-digit",
  })

  // Get end time
  if (endDate) {
    const endDateObject = new Date(endDate)
    const endTime = endDateObject.toLocaleTimeString("no", {
      hour: "2-digit",
      minute: "2-digit",
    })
    return `${weekday} kl. ${startTime} - ${endTime} `
  }

  return `${weekday} kl. ${startTime}`
}
