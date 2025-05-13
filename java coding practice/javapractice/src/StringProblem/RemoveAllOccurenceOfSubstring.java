package StringProblem;

public class RemoveAllOccurenceOfSubstring {
    public static void main(String[] args) {
       String s = "daabcbaabcbc", part = "abc";
        System.out.println(reomvePart(s,part));
    }
    public static String reomvePart(String s,String part){
        while(s.contains(part)){
            int index = s.indexOf(part);
            s= s.substring(0,index)+ s.substring(index+part.length());
        }
        return s;
    }
}
