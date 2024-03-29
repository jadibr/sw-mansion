import { task } from "./task"

async function run() {
  console.log(
    task(
      [2,3,9,2,5,1,3,7,10],
      [2,1,3,4,3,10,6,6,1,7,10,10,10]
    )
  )
}

(async () => {
  await run()
})()