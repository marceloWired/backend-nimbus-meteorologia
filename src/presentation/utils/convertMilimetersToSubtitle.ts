export function convertMilimetersToSubtitle (milimeters: number): string {
  if (milimeters < 0.2) {
    return 'Sem Chuva'
  } else if (milimeters > 0.2 && milimeters <= 5) {
    return 'Chuva Fraca'
  } else if (milimeters > 5 && milimeters <= 25) {
    return 'Chuva Moderada'
  } else {
    return 'Chuva Forte'
  }
}
