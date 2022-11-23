# Class 3

## Reac docs lists and keys

1. .map returns an array.

2. use a for each loop

3. key

4. a key is used to identify a prop easily for react.

## The Spread Operator

1. It is an operator that expands iterable objects into the list of arguments.

2. it can copy an array, concatenate or combine arrays, use math functions, add a state in react.

3. const hello = {hello: "😋😛😜🤪😝"}
  const world = {world: "🙂🙃😉😊😇🥰😍🤩!"}

  const helloWorld = {...hello,...world}
  console.log(helloWorld) // Object { hello: "😋😛😜🤪😝", world: "🙂🙃😉😊😇🥰😍🤩!" }
  By using the Spread operator here it combines the two arrays.

4. const fewFruit = ['🍏','🍊','🍌']
  const fewMoreFruit = ['🍉', '🍍', ...fewFruit]
  console.log(fewMoreFruit) //  Array(5) [ "🍉", "🍍", "🍏", "🍊", "🍌" ]

by adding th e name of the array in the second array and using the spread operator it adds items to the array lsit.

5. const objectOne = {hello: "🤪"}
  const objectTwo = {world: "🐻"}
  const objectThree = {...objectOne, ...objectTwo, laugh: "😂"}

by adding the spread operator it combines the first and second objects.

### video

1. sets states to creates props.

2. the incremement function maps through data and checks to see if a name equals name

3. by setting states in the parent componenet and using those states as props in the child componenet.

4. this.props.method