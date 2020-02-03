/* 4.3 Найдите наибольшее число в списке. */

/* array search */
const myMax1 = (nums, index = 0, maxNum = nums[index]) => {
  if (index === nums.length) {
    return maxNum;
  }
  if (maxNum < nums[index]) {
    maxNum = nums[index];
  }
  return myMax1(nums, index + 1, maxNum);
};

/* search among individual arguments,
the number of which is not predetermined in advance. */
const myMax2 = (...nums) => {
  const iter = (arr, index = 0, maxNum = arr[index]) => {
    if (index === arr.length) {
      return maxNum;
    }
    if (maxNum < arr[index]) {
      maxNum = arr[index];
    }
    return iter(arr, index + 1, maxNum);
  }
  return iter(nums);
};

/* testing */
const arr = [6, 7, 8, 9, 3, 2]
console.log(myMax1(arr)); // 9
console.log(myMax2(6, 7, 8, 9, 3, 2)); // 9
