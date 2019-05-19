/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let result = [];
  let hash = {};
  for (let i = 0, len = nums.length; i < len; i++) {
    let match = target - nums[i];
    if (hash[match] != undefined) {
      result.push(hash[match], i)
      break;
    }
    hash[nums[i]] = i;
  }
  return result;
};