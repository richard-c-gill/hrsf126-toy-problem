/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 *
 * Be sure to handle hashing collisions correctly.
 *
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 *
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  result.insert = function(key, value, hashTable) {
    // create size for the hashing algorithm
    let hashSize = 5
    // call hashing algorithim on key
    let hash = getIndexBelowMaxForKey(key, hashSize)

    helper function (redo) {
      // check for collision
      if(this.hashTable.includes(redo)) {
        hashSize + 1
        hash = helper(key);
      }
      // store hash in array
      let hashValue = `${hash}${hashSize}`
    this.hashTable.push(hashValue);
    // store key value in result
    this.result[hashValue] = value;
    }
    helper(hash)
  };

  result.retrieve = function(hashTable, key) {
    // create hashSize
    let hashSize = 5;
    // get hash from the key
    let hash = getIndexBelowMaxForKey(key, hashSize);
    // check result with hashTable key
    if(this.result[hash]){
      // return result
      return this.result[hash]
    }
    return false;
  };

  result.remove = function(hashTable, key) {
    // create hash size
    let hashSize = 5;
    // get hash from hashingFunction
    let hash = getIndexBelowMaxForKey(key, hashSize);
    // Check array for hash

    // Check table for entry
    // if entry exist
    if(this.result[hash]) {
      // delete entry
      delete this.result
    } else {
      // else return true
      return false
    }
  };

  return result;
};
