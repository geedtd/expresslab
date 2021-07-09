export {
    meals 
}

const foodInfo = [
    {text: 'fast-food', healthy: false, id: 34523},
    {text: 'home cooked meal', healthy: true, id: 34527},
    {text: 'frozen tv dinner', healthy: false, id: 34528},
]

const meals = ( conditions, callback) => {
    try {
        if(!(conditions instanceof Object)){
            throw new TypeError('Please pass in a (food) object')
    }
    let conditionKeys = Object.keys(conditions)
    if (conditionKeys.length === 0) return callback(null, foodInfo)
    if (!conditionKeys.every((i) => Object.keys(foodInfo[0]).includes(i))) {
        throw new Error('Must find props that exist on the array')
    } else {
        return callback(null. foodInfo.filter((foods) => conditionKeys.every((propKey) => foods[propKey] === conditions[propKey])))
    }
} catch (error) {
    console.log(error)
    callback(error, [])
}
}