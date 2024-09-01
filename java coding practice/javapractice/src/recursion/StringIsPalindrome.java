package recursion;

public class StringIsPalindrome {
    public static void main(String[] args) {
        String s = "madam";
        int start =0;
        int end = s.length();
        System.out.println( Palindrome(start,end,s));;
    }
    public static boolean Palindrome(int start,int end,String s){
        if(start >= end/2){
            return true;
        }
        if(s.charAt(start)!=s.charAt(end-start-1)){
            return false;
        }
        return Palindrome(start+1,end,s);
    }
}
