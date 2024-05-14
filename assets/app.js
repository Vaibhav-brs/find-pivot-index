function findPivotIndex() {
    const input = document.getElementById("input").value.trim();
    const nums = input.split(",").map(num => parseInt(num.trim()));
  
    const pivotIndex = pivotIndex(nums);
  
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<strong>Pivot Index:</strong> " + pivotIndex;
  }
  
  function pivotIndex(nums) {
    let totalSum = 0;
    let leftSum = 0;
  
    for (const num of nums) {
      totalSum += num;
    }
  
    for (let i = 0; i < nums.length; i++) {
      if (leftSum === totalSum - leftSum - nums[i]) {
        return i;
      }
      leftSum += nums[i];
    }
  
    return -1;
  }
  
  