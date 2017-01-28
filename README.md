## inl

Allows you to see the inlined contents of a JS function. 

Works with functions containing objects, arrays and function calls of any kind. Also works with functions containing loops and conditionals that don't depend on variables. Doesn't work with functions containing operators on variables (ex: `a => a + 3`). 

**Can be used to turn JavaScript into a pretty fast lambda-calculus evaluator.**

### Example

```javascript
const inl = require("inl");
assert(
  inl (a => b => a(b)(c => c))
  === "a => b => a(b)(c => c)");
```

*Note: this is basically [LJSON](https://github.com/MaiaVictor/LJSON) without the parser.*
