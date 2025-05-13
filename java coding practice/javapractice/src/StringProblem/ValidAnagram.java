package StringProblem;

import java.util.Arrays;

public class ValidAnagram {
    public static void main(String[] args) {
        String s = "anagram";
        String t = "nagaram";
        System.out.println(validanagram(s,t));

    }
    public static boolean validanagram(String s , String t){
        if(s.length() != t.length()){
            return false;
        }
        char[] ch1 = s.toCharArray();
        char[] ch2 = t.toCharArray();

        Arrays.sort(ch1);
        Arrays.sort(ch2);

        String s1 = String.valueOf(ch1);
        String s2 =String.valueOf(ch2);

        for(int i =0;i<s.length();i++){
            if(s1.charAt(i) != s2.charAt(i)){
                return false;
            }
        }
        return true;
    }
}
