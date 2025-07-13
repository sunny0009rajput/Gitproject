package StringProblem;

import java.util.HashSet;
import java.util.Set;

public class longestsubarraywithoutrepeating {
    public static void main(String[] args) {
        String s = "abcabcab";
        System.out.println(longestsubstring(s));
    }
    public static int longestsubstring(String s){
        Set<Character> characters = new HashSet<>();
        int left =0;
        int maxlength =0;
        for(int right =0; right < s.length();right++){
            while(characters.contains(s.charAt(right))){
                characters.remove(s.charAt(left));
                left++;
            }
            characters.add(s.charAt(right));
            maxlength = Math.max(maxlength,right-left+1);
        }
        return maxlength;
    }
}
