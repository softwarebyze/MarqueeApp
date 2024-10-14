export function encode(text: string): string {
  return encodeURIComponent(text).replace(/[!'()*]/g, (c) => {
    return '%' + c.charCodeAt(0).toString(16)
  })
}

export function decode(text: string): string {
  return decodeURIComponent(text)
}
