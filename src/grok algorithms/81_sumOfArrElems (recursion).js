/* 4.1 Напишите код для функции sum(),
Необходимо просуммировать все элементы и вернуть сумму. */

/* cicle way */
const sum1 = (nums) => {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
};

/* recursive way */
const sum2 = (nums, index = nums.length - 1) => {
  if (index === 0) {
    return nums[index];
  }
  return nums[index] + sum2(nums, index - 1);
};

/* using higher order function - reduce */
const sum3 = (nums) => nums
  .reduce((acc, curr) => acc + curr, 0);

/* testing */
const nums = [1, 2, 3, 4, 5];
console.log(sum1(nums));
console.log(sum2(nums));
console.log(sum3(nums));
