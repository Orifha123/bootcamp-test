function isFromBellville(registrationNumber) {
return registrationNumber.startsWith('CY');
}

// Example usage:
console.log(isFromBellville('CY123456')); // true
console.log(isFromBellville('CA789012')); // false
