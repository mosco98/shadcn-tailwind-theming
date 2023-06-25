export const hexToHSL = (hex: string): string => {
  // Remove '#' symbol if present
  hex = hex.replace("#", "")

  // Convert hexadecimal to RGB
  const r = parseInt(hex.substring(0, 2), 16) / 255
  const g = parseInt(hex.substring(2, 4), 16) / 255
  const b = parseInt(hex.substring(4, 6), 16) / 255

  // Find the maximum and minimum channel values
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)

  // Calculate the hue
  let h = 0
  if (max !== min) {
    if (max === r) {
      h = (g - b) / (max - min)
      if (g < b) {
        h += 6
      }
    } else if (max === g) {
      h = 2 + (b - r) / (max - min)
    } else {
      h = 4 + (r - g) / (max - min)
    }
  }
  h *= 60

  // Calculate the lightness
  let l = (max + min) / 2

  // Calculate the saturation
  let s = 0
  if (max !== min) {
    if (l <= 0.5) {
      s = (max - min) / (2 * l)
    } else {
      s = (max - min) / (2 - 2 * l)
    }
  }

  // Round the values and return HSL string
  h = Math.round(h)
  s = Math.round(s * 100)
  l = Math.round(l * 100)

  return `hsl(${h}, ${s}%, ${l}%)`
}
