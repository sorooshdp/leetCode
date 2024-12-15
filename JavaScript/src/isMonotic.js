/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isMonotonic = function (nums) {
   let increase = false;
   let decrease = false;

   for (let i = 0; i < nums.length; i++) {
        if(nums[i] > nums[i + 1] ){
            decrease = true;
            if(increase) break;
        } else if(nums[i] < nums[i + 1]){
            increase = true
            if(decrease) break;
        }
   }

   return increase && decrease ? false : true
};

console.log(isMonotonic([1,3,2]));