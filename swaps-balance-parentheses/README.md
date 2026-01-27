Swaps Balance Parentheses

Given a sequence of parentheses, determine the minimum number of swaps needed to make the sequence balanced. Each opening bracket must have a corresponding closing bracket. Swapping adjacent characters is not required. If it is impossible to balance the string, return -1.

Example 1

Suppose brackets = ")()()("

Output: 1

Swap the characters at the first and last index to get "(()())" which is balanced.

Example 2

Suppose brackets = "())"

Output: -1

Constraints

1 ≤ length of the string brackets ≤ 10^5

brackets consists of '(' and ')' only.