class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */

  alphaNum(c) {
    return (c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || (c >= "0" && c <= "9");
  }
  isPalindrome(s) {
    let str = ""

    for (let c of s) {
      if (this.alphaNum(c)) {
        str += c.toLowerCase();
      }
    }

    return str === str.split("").reverse().join("")
  }
}
