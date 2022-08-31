const times = process.argv.slice(2);

for (let time of times) {
  time = Number(time);
  if (Number.isInteger(time) && time > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  }
}