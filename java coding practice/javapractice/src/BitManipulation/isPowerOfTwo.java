package BitManipulation;

public class isPowerOfTwo {
    public static void main(String[] args) {
        int n = 8;
        if(isPowerOfTwo(n)){
            System.out.println(n+" is power of 2");
        }else{
            System.out.println(n+"is not power of 2");
        }
    }

    public static boolean isPowerOfTwo(int n){
        if(n <= 0){
            return false;
        }
        return (n &(n-1))==0;
    }
}
