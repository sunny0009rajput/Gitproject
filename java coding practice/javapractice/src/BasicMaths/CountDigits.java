package BasicMaths;

public class CountDigits {
    public static void main(String[] args) {
        int n = 12345;
        count(n);
        System.out.println(" number of digit count = "+count(n));
    }

    public static int count(int n){
        int count =0;
        while(n>0){
            count++;
            n = n/ 10;
        }
        return count;
    }
}
