/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote: string, magazine: string): boolean {
    const charCount: { [key: string]: number } = {};
    
    for (const char of magazine) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    for (const char of ransomNote) {
        if (!charCount[char]) {
            return false;  
        }
        charCount[char]--;  
    }
    
    return true;  
}
