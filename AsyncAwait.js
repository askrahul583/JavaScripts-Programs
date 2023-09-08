function getMessage() {
  return new Promise((resolve, reject) => {
    resolve("Promise Returned Successfully");
  });
}

async function handlePromise() {
  console.log("Promise Started");
  const output = await getMessage();
  console.log(output);
  console.log("Promise Ended");
}

handlePromise();
