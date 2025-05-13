//Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
//
//        In other words, return true if one of s1's permutations is the substring of s2.
//
//
//
//        Example 1:
//
//        Input: s1 = "ab", s2 = "eidbaooo"
//        Output: true
//        Explanation: s2 contains one permutation of s1 ("ba").
//        Example 2:
//
//        Input: s1 = "ab", s2 = "eidboaoo"
//        Output: false
//
//
//        Constraints:
//
//        1 <= s1.length, s2.length <= 104
//        s1 and s2 consist of lowercase English letters.
package StringProblem;
import java.util.Arrays;
import org.xml.sax.ext.DeclHandler;

public class PermutationInString {



        public static boolean checkInclusion(String s1, String s2) {
            if (s1.length() > s2.length()) return false;  // If s1 is longer than s2, it's impossible to find a permutation.

            int[] s1Freq = new int[26];  // Array to store character frequency of s1 (26 letters for 'a' to 'z').
            int[] windowFreq = new int[26];  // Array to store character frequency of current window in s2.

            // Populate s1 frequency array
            for (char c : s1.toCharArray()) {
                s1Freq[c - 'a']++;  // Convert character to index and increment count.
            }

            // Populate initial window in s2 (first s1.length() characters)
            for (int i = 0; i < s1.length(); i++) {
                windowFreq[s2.charAt(i) - 'a']++;  // Count frequency of first window in s2.
            }

            // Compare first window
            if (Arrays.equals(s1Freq, windowFreq)) return true;  // If first window matches, return true.

            // Slide the window across s2
            for (int i = s1.length(); i < s2.length(); i++) {
                windowFreq[s2.charAt(i) - 'a']++;  // Add new character (rightmost character of new window)
                System.out.println(Arrays.toString(windowFreq));
                windowFreq[s2.charAt(i - s1.length()) - 'a']--;  // Remove leftmost character (moving window)
                System.out.println(Arrays.toString(windowFreq));

                if (Arrays.equals(s1Freq, windowFreq)) return true;  // If frequencies match, return true.
            }

            return false;  // If no match found after checking all windows, return false.
        }

        public static void main(String[] args) {
            System.out.println(checkInclusion("ab", "eidbaooo")); // Output: true
            System.out.println(checkInclusion("ab", "eidboaoo")); // Output: false
        }
    }

