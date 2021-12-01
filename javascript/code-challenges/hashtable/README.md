# Hashtables
<!-- Short summary or background information -->

## Challenge

Implement a Hashtable Class with the following methods:

- add
  - Arguments:
    - key
    - value
  - Returns: nothing
  - This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
- get
  - Arguments:
    - key
  - Returns: Value associated with that key in the table
- contains
  - Arguments:
    - key
  - Returns: Boolean, indicating if the key exists in the table already.
- hash
  - Arguments:
    - key
  - Returns: Index in the collection for that key

Write tests to prove the following functionality:

1. Adding a key/value to your hashtable results in the value being in the data structure
2. Retrieving based on a key returns the value stored
3. Successfully returns null for a key that does not exist in the hashtable
4. Successfully handle a collision within the hashtable
5. Successfully retrieve a value from a bucket within the hashtable that has a collision
6. Successfully hash a key to an in-range value

## Approach & Efficiency

- add: O(1) time complexity, it checks for a bucket, adds a bucket if needed, then adds the key:value pair.
- get: O(1) to O(n) time complexity, it hashes the key, checks the bucket, and iterates through the key:value pairs to get the value.
- contains: O(1) to O(n) time complexity, it hashes the key, checks the bucket, and iterates through the key:value to check for the key.
- hash: O(1) time complexity, hashes the key.

## API

- add: hash the key, and add the key and value pair to the table, handling collisions as needed.
- get: returns the value associated with that key in the table.
- contains: returns the boolean, indicating if the key exists in the table already.
- hash: returns the index in the collection for that key.
