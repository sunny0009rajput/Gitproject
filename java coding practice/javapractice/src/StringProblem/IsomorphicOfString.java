package StringProblem;

import java.util.HashMap;

public class IsomorphicOfString {
    public static void main(String[] args) {
        String s = "egg";
        String t = "add";
        System.out.println(isomorpic(s,t));

    }

    public static boolean isomorpic(String s, String t){
        if(s.length() != t.length()){
            return false;
        }

        HashMap <Character, Character> hashmap1 = new HashMap<>();
        HashMap <Character, Character> hashmap2 = new HashMap<>();

        for(int i =0; i< s.length();i++){
            char char1 = s.charAt(i);
            char char2 = t.charAt(i);

            if(hashmap1.containsKey(char1)){
                if(hashmap1.get(char1) != char2){
                    return false;
                }
            }else{
                hashmap1.put(char1,char2);
            }

            if(hashmap2.containsKey(char2)){
                if(hashmap2.get(char2) != char1){
                    return false;
                }
            }else{
                hashmap2.put(char2,char1);
            }
        }
        return true;
    }
}
