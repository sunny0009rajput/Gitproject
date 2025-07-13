package BitManipulation;

public class SettheRightMostUnsetbit {
    public static void main(String[] args) {
        int n=10;
        int result = setRightMostUnsetBit(n);
        System.out.println(result);
    }
    public static int setRightMostUnsetBit(int n){
        return n | (n +1);
    }
}
