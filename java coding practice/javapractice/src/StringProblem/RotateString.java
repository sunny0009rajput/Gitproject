package StringProblem;

public class RotateString {
    public static void main(String[] args) {
        String s = "abcde";
        String goal = "cdeab";
        System.out.println(rotateString(s,goal));
    }

    public static boolean rotateString(String s, String goal){
        StringBuilder sb = new StringBuilder(s);
        for(int i =1;i<s.length();i++){
            sb.append(sb.substring(0,1));
            sb.delete(0,1);
            if(sb.toString().equals(goal)){
                return true;

            }
        }
        return false;
    }


}
