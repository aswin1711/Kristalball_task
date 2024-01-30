var input = {
  id: "SE1",
  data: 10,
  left: {
    id: "SE2",
    data: 12,
    left: {
      id: "SE4",
      data: 4,
      right: { id: "SE8", data: 9, left: { id: "SE15", data: 20 } },
    },
    right: {
      id: "SE5",
      data: 17,
      left: {
        id: "SE9",
        data: 10,
        left: { id: "SE16", data: 8, right: { id: "SE17", data: 18 } },
      },
      right: { id: "SE10", data: 11 },
    },
  },
  right: {
    id: "SE3",
    data: 7,
    left: {
      id: "SE6",
      data: 6,
      left: { id: "SE11", data: 18 },
      right: { id: "SE12", data: 2 },
    },
    right: {
      id: "SE7",
      data: 3,
      left: { id: "SE13", data: 13 },
      right: { id: "SE14", data: 15 },
    },
  },
};


function Calculate_Budget(node) {
    if (!node) return 0;
  
    let subordinatesCount = 0;
    if (node.left) subordinatesCount += 1 + Subordinates_Count(node.left);
    if (node.right) subordinatesCount += 1 + Subordinates_Count(node.right);
  
    return subordinatesCount;
  }
  function Subordinates_Count(node) {
    if (!node) return 0;
  
    let count = 0;
    if (node.left) count += 1 + Subordinates_Count(node.left);
    if (node.right) count += 1 + Subordinates_Count(node.right);
  
    return count;
  }
//   function Calculate_Sales(node) {
//     if (!node) return 0;
//     return node.data;
//   }
  
//   function distributeRewards(node, totalBudget, results) {
//     if (!node) return;
  
//     const Budget_Reward = Calculate_Budget(node);
//     const Sales_Reward = Calculate_Sales(node);
  
//     const totalReward = (0.25 * totalBudget * Budget_Reward) + (0.75 * Sales_Reward);
    
//     results.push({ id: node.id, bonus: totalReward });
  
//     distributeRewards(node.left, totalBudget, results);
//     distributeRewards(node.right, totalBudget, results);
//   }
  
  // Example usage
  const results = [];
  let bonus=3000000;
  distributeRewards(input, bonus, results);
  
  console.log(results);



