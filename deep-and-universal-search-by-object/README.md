Lore (optional):

Once upon a time, in a forgotten forest, there lived a wise druid. He took care of his territory and watched over every tree, bush, and flower. But one day, a terrible disaster happened - an evil sorcerer named Karfax cursed the forest and all living creatures in it.

Trees began to speak in disjointed words, bushes and flowers stopped blooming. The druid was very upset, but he didn't give up and continued to fight for his land. He realized that in order to lift the curse, he needed to find specific items and potions.

He turned to his friends - the wise wizards - for help. They advised him to create a magical function that could find the necessary items in the depths of the forest.

Thus was born the wizard function, which could find everything necessary to lift the curse. It accepted a list of parameters - numbers, strings, boolean values, as well as functions to search for values based on certain conditions. And thanks to this function, the druid was able to find all the necessary items and lift the curse from the forest.

Task:
Your task is to implement a function called findItems that takes an object and a list of parameters to be found in that object. The function should return an object containing the found values and their corresponding paths in the format of key-value pairs (see example below). If any of the parameters is a predicate function (value => boolean), the function should be applied to the values in the object, and only the values that meet the condition in the function should be returned.

Rules:

The path should always start with the word "tree".
Don't apply predicates to objects or arrays.
We must be strict when it comes to the data we are searching - if it is null, then we are looking for null; if it is '2', then we are looking for '2' specifically as a string, and any values found with the number (like 2) type will be incorrect.
Arrays inside an object will not contain additional nested objects.
If we have found the required element in the array, we write its index in the path string in the following format: "[index]".
If no search arguments are passed, we should return {}
An example of a tree:

```
const tree = {
  a: 4,
  t: {
    c: 5,
    f: 1,
    r: {
      y: 90,
      e: {
        e: "eert",
      },
      u: [123, 34, 90],
    },
  },
};
```

An input example.

```
findItems(tree, "eert", (value) => value > 50 && value < 100)
```

An example of what your function should return:

```
{
  "tree.t.r.y": 90,
  "tree.t.r.e.e": "eert",
  "tree.t.r.u[2]": 90,
}

```