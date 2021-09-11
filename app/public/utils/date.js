export function formatTimeToShowInScreen(duration) {
  const seconds = parseInt((duration / 1000) % 60)
  const minutes = parseInt((duration / (1000 * 60)) % 60)
  const hours = parseInt((duration / (1000 * 60 * 60)) % 24)

  if(hours > 0) {
    return `${hours} horas, ${minutes} minutos e ${seconds} segundos`
  }

  if(minutes > 0) {
    return `${minutes} minutos e ${seconds} segundos`
  }

  if(seconds > 0) {
    return `${seconds} segundos`
  }

  return '1 segundos'
}
  