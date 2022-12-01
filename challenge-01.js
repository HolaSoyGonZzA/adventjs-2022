function wrapping(gifts) {
  const wrap = gift => {
    const len = gift.length
    const pad = "*".repeat(len + 2)
    return `${pad}\n*${gift}*\n${pad}`
  }
  return gifts.map(wrap)
}
