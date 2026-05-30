// Run with: node generate-icons.js
// Generates pwa-192.png, pwa-512.png, apple-touch-icon.png in public/
// Requires: npm install canvas

import { createCanvas } from 'canvas'
import { writeFileSync } from 'fs'

function drawIcon(size) {
  const canvas = createCanvas(size, size)
  const ctx = canvas.getContext('2d')

  // Gradient background
  const grad = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2)
  grad.addColorStop(0, '#ede9fe')
  grad.addColorStop(1, '#c4b5fd')
  ctx.fillStyle = grad
  ctx.beginPath()
  ctx.roundRect(0, 0, size, size, size * 0.22)
  ctx.fill()

  // Emoji
  ctx.font = `${size * 0.55}px serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('🌸', size / 2, size / 2 + size * 0.04)

  return canvas.toBuffer('image/png')
}

writeFileSync('public/pwa-192.png', drawIcon(192))
writeFileSync('public/pwa-512.png', drawIcon(512))
writeFileSync('public/apple-touch-icon.png', drawIcon(180))
console.log('Icons generated ✓')
