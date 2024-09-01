package BasicMaths;

public class Armstrong {
    public static void main(String[] args) {
        int n = 153;
        armstrongNumber(n);

    }

    public static void armstrongNumber(int n) {
        int duplicatenumber = n;
        double sum = 0;
            while (n > 0) {
                int remainder = n % 10;
                sum = sum + Math.pow(remainder, 3);
                n = n / 10;

            }
            if (duplicatenumber == sum) {
                System.out.println("given number is armstron number ");
            }else{
                System.out.println("given number is not armstrong");
            }
        }
    }

