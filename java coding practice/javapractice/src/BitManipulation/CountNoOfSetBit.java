package BitManipulation;

public class CountNoOfSetBit {
    public static void main(String[] args) {
        int n =7;
        System.out.println("Number of set bits in "+n+" ="+ countSetBits(n));
    }
    public static int countSetBits(int n){
        int count =0;
        while(n > 0){
            if((n & 1)== 1){
                count++;
            }
            n= n >> 1;
        }
        return count;
    }
}
