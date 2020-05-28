// 基础dp

// 一个人走台阶，一次走1步或者2步，如果有n级台阶，一共有几种走法？

// 1、递归
function up(num) {
    if (num == 0) {
       return 0;
    } else if (num == 1) {
        return 1;
    } else if (num == 2) {
        return 2;
    } else {
        return up(num - 1) + up(num - 2);
    }
}

// 当数据很大的时候 调用次数爆炸不可取,

2、dp
function dpCode(num) {
    let dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i < num + 1; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[num];
}

// 将每次计算的结果存在数组里，减少递归调用次数



// 3、 背包问题 假设一个容量为capacity的背包，有n件物品， 计算在不超出容量的前提下，背包内的商品价值最高
function dp(capacity, weight, value) {
    let packageValue = []
    for (let i = 0; i < weight.length + 1; i++) {
        let arr = new Array(capacity + 1).fill(0)
        packageValue.push(arr)
    }
    for (let i = 1; i <= weight.length; i++) {
        for (let j = 1; j <= capacity; j++) {
            if (weight[i - 1] <= j) {
                packageValue[i][j] = Math.max(packageValue[i - 1][j], value[i - 1] + packageValue[i - 1][j - weight[i - 1]]);
            } else {
                packageValue[i][j] = packageValue[i - 1][j]
            }
        }
    }
    console.log(packageValue)
}
let weight = [1, 3, 10, 20, 40];
let value = [10, 11, 60, 100, 120];
let capacity = 50;
dp(capacity, weight, value);


