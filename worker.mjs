export default ({ a, b }) => {
  console.log("worker pid: ", process.pid);
  return a + b
}