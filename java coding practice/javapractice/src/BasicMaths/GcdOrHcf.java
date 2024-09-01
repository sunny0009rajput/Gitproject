package BasicMaths;

public class GcdOrHcf {
    public static void main(String[] args) {
        int n1 = 35;
        int n2 = 15;
        Hcf(n1, n2);
    }

    public static void Hcf(int n1, int n2) {
        while (n1 > 0 && n2 > 0) {
            if (n1 < n2) {
                n2 = n2 % n1;
            } else {
                n1 = n1 % n2;
            }
        }

        if (n1 == 0) {
            System.out.println("hcf is equal to " + n2);
        } else {
            System.out.println("hcf is egal to " + n1);
        }
    }
}