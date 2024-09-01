package BasicMaths;

public class Divisors {
    public static void main(String[] args) {
        int n = 36;
        divisors0fNumber(n);
    }

    public static void divisors0fNumber(int n) {
        for (int i = 1; i <= n; i++) {
            if (n % i == 0) {
                System.out.print(i + " ");

            }
        }
    }
}