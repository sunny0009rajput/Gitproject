package BasicMaths;

public class ReverseNumber {
    public static void main(String[] args) {
        int number = 12345;
        reverseNumber(number);
        System.out.println(reverseNumber(number));

    }
    public static int reverseNumber(int n ){
        int reversenumber = 0;
        while(n > 0){
            int remainder  = n %10;

            reversenumber = reversenumber * 10 + remainder;
            n= n / 10;
        }
        return reversenumber;
    }
}
