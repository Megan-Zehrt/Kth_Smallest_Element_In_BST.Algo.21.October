// 230. Kth Smallest Element in a BST



// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.









/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    
    let results = []

    function dfs(node){

        if(node == null) return null

        results.push(node.val)

        dfs(node.left)
        dfs(node.right)
    }

    dfs(root)

    results.sort((a,b) => a-b)

    return results[k-1]
};