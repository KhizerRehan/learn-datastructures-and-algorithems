function flattenObject(obj, previousKey = '') {
  let output = {};
  const separator = '.';

  for (const [key, value] of Object.entries(obj)) {
    const currentKey = previousKey ? `${previousKey}${separator}${key}` : key;

    if (typeof value === 'object' && value !== null) {
      output = { ...output, ...flattenObject(value, currentKey) };
    } else {
      output[currentKey] = value;
    }
  }

  return output;
}

// Input:

```js
{
  '3': 'three',
  '2': {
    '4': 'four',
    '5': {
      '6': 'six'
    }
  },
  '7': {
    '8': 'eight'
  }
}
```

// Output:

```js
{
  '3': 'three',
  '2.4': 'four',
  '2.5.6': 'six',
  '7.8': 'eight'
}
```

Iteration:
// First level:
- Key: '3', Value: 'three' → Output: { '3': 'three' }
- Key: '2', Value: { '4': 'four', '5': { '6': 'six' } } → Recurse
  // Second level:
  - Key: '4', Value: 'four' → Output: { '2.4': 'four' }
  - Key: '5', Value: { '6': 'six' } → Recurse
    // Third level:
    - Key: '6', Value: 'six' → Output: { '2.5.6': 'six' }
- Key: '7', Value: { '8': 'eight' } → Recurse
  // Second level:
  - Key: '8', Value: 'eight' → Output: { '7.8': 'eight' }

// Final Output:
{
  '3': 'three',
  '2.4': 'four',
  '2.5.6': 'six',
  '7.8': 'eight'
}