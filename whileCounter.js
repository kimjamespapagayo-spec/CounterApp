// Simple counter using while loop
console.log("=== WHILE LOOP COUNTER EXAMPLE ===\n");

// Example 1: Count from 0 to 10
console.log("1. Counting from 0 to 10:");
let i = 0;
while (i <= 10) {
    console.log(`Count: ${i}`);
    i++;
}

console.log("\n" + "=".repeat(40) + "\n");

// Example 2: Interactive counter
console.log("2. Interactive Counter with While Loop:");

let counter = 0;
let maxIterations = 5; // Safety limit
let iterations = 0;

console.log(`Starting counter at: ${counter}`);

// Simple while loop that increments 5 times
while (iterations < maxIterations) {
    counter++;
    console.log(`Iteration ${iterations + 1}: Counter = ${counter}`);
    iterations++;
}

console.log(`\nFinal counter value: ${counter}`);

console.log("\n" + "=".repeat(40) + "\n");

// Example 3: Countdown
console.log("3. Countdown from 10 to 0:");
let countdown = 10;

while (countdown >= 0) {
    console.log(`Countdown: ${countdown}`);
    countdown--;
}
console.log("Liftoff! 🚀");

console.log("\n" + "=".repeat(40) + "\n");

// Example 4: Conditional while loop
console.log("4. Counter that stops at specific value:");
let value = 0;
const target = 7;

while (value < target) {
    value += 2; // Increase by 2 each time
    console.log(`Value: ${value}`);
}
console.log(`Reached target value: ${target}`);