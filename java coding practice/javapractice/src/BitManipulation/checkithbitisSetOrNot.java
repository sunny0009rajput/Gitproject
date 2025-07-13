package BitManipulation;

public class checkithbitisSetOrNot {
    public static void main(String[] args) {
        int n =13;
        int i =2;

        if((n & (1 << i)) != 0){
            System.out.println("the "+i+"-th bi tis set ");
        }else{
            System.out.println("the "+i+"-th bit is not set ");
        }
    }
}
