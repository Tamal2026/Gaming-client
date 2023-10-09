####### 1 Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`
  
#### Answer: A

(Explaintion: Assign an empty object to the greeting variable, thats why this will show an empty arrary to the Console



 #### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}
sum(1, "2");
```
- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

#### Answer: C


This Answer Will be "12" because Javascript Type concern The number 1 and the string "2" use + operator ....(thats why ans is "12")



###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer : A</b></summary>
<p>

#### Answer: A

<i>In this I reassain the Favourite Food property of the Info obj to the last emoji but it does not affect the orginal food Array</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`




#### Answer:B

In the sayHi function, there is a parameter name which is used in the template literal to create the message. However, if  call the sayHi function without providing an argument for name, the name parameter will be undefined.


###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

#### Answer: C

forEach loop will run for 1, 2, and 3, and each time it increments the count
 by 1. Therefore, after the loop, the value of count will be 3
