//Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.
//
//
//
//        Example 1:
//
//        Input: s = "cbaebabacd", p = "abc"
//        Output: [0,6]
//        Explanation:
//        The substring with start index = 0 is "cba", which is an anagram of "abc".
//        The substring with start index = 6 is "bac", which is an anagram of "abc".
//        Example 2:
//
//        Input: s = "abab", p = "ab"
//        Output: [0,1,2]
//        Explanation:
//        The substring with start index = 0 is "ab", which is an anagram of "ab".
//        The substring with start index = 1 is "ba", which is an anagram of "ab".
//        The substring with start index = 2 is "ab", which is an anagram of "ab".


        package StringProblem;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class AllAnagramString {
    public static void main(String[] args) {
        String s = "cbaebabacd", p = "abc";
        System.out.println(findAnagrams(s,p));
    }


        public static List<Integer> findAnagrams(String s, String p) {
            List<Integer> result = new ArrayList();
            if(p.length() > s.length()){
                return result;
            }

            int[] sfreq = new int[26];
            int[] slidefrew = new int[26];

            for(char c : p.toCharArray()){
                sfreq[c-'a']++;
            }
            for(int i =0;i < p.length();i++){
                slidefrew[p.charAt(i)-'a']++;
            }
            if(Arrays.equals(sfreq,slidefrew)){
                result.add(0);
            }
            for(int i =p.length();i < s.length();i++){
                slidefrew[s.charAt(i)-'a']++;
                slidefrew[s.charAt(i-p.length())-'a']--;

                if(Arrays.equals(sfreq,slidefrew)){
                    result.add(i-p.length()+1);
                }
            }
            return result;


        }

}
