export { 
	find
}

const todos = [
  {text: 'Feed llama', done: true, _id: 125223},
  {text: 'Sleep under the stars', done: false, _id: 127904},
  {text: 'Buy milk', done: false, _id: 139608},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    let conditionKeys = Object.keys(conditions)
    // If the object is empty, return all the todos
    if (conditionKeys.length === 0) return callback(null, todos)
    // make sure that all the properties on the conditions exists on the object
    if (!conditionKeys.every((i) => Object.keys(todos[0]).includes(i))) {
      throw new Error('Must find by properties that exist on the array items')
    } else {
			// Finally actually find what we're looking for
      return callback(null, todos.filter((todo) =>
        conditionKeys.every((propKey) => todo[propKey] === conditions[propKey])
      ))
    }
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}