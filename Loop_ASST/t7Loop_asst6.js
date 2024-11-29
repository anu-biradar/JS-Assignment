// Write a program that prints a pattern of stars using nested loops. Print a right-angled triangle pattern with 5 rows.
const rows = 5;

for (let i = 1; i <= rows; i++) {

  let pattern = '';
  for (let j = 1; j <= i; j++) {
    pattern += '*';
  }

  console.log(pattern);
}
