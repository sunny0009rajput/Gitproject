package BasicMaths;

public class CheckPrime {
    public static void main(String[] args) {
        int n = 7;
        Prime(n);
    }

    public static void Prime(int n) {
        int count = 0;
        for (int i = 1; i <= n; i++) {
            if (n % i == 0) {
                count++;

            }
        }

        if (count == 2) {

            System.out.println("it is prime number");
        } else {

            System.out.println("it is not prime number");

        }
    }
}