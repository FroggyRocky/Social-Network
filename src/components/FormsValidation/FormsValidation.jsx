
const fieldRequired = (value) => {
return value ? undefined : 'Field is required'
}

const emailVal = (value) => {

    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Invalid email address' : undefined

}

const maxLengthVal = (fieldType, charNum) => {
 return (value) => {
    return value && value.length > charNum ? `${fieldType} must be less than ${charNum} symbols`
     : undefined
}
}

const minLengthVal = (fieldType,charNum) => {
  return (value) => {
   return value && value.length < charNum ? `${fieldType} must be at least ${charNum} symbols`
    : undefined
    }
} 

export {fieldRequired, emailVal, maxLengthVal, minLengthVal}