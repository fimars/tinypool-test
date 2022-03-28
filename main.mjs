import Tinypool from 'tinypool'

const pool = new Tinypool({
  filename: new URL('./worker.mjs', import.meta.url).href,
})

;(async function () {
  const result = await pool.run({ a: 4, b: 6 })
  console.log(result) // Prints 10
})()