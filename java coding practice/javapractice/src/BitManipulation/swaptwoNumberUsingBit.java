package BitManipulation;

public class swaptwoNumberUsingBit {
    public static void main(String[] args) {
        int a = 5;
        int b =10;

        System.out.println("before swap value of a" + a+"value of b "+b);

        // by using xor operator
        a = a^ b;
        b=a^b;
        a=a^b;
        System.out.println("after swap value of a"+a+"value of b "+b);
    }
}
