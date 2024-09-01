package recursion;

import java.util.Arrays;

public class reverseArray {
    public static void main(String[] args) {
        int[] arr={1,2,3,4,5,6};
//        reverseArray(arr);
//        reverseArray1(arr);
        int start = 0;
        int end = arr.length-1;
        reverseArrayRecursion(start,end,arr);

    }
//    public static void reverseArray(int[] arr){
//        int[] arr1 =new int[arr.length];
//        int count =0;
//        for(int i =arr.length-1;i>=0;i--){
//            arr1[count]=arr[i];
//            count++;
//
//        }
//        System.out.println(Arrays.toString(arr1));
//    }

//    public static void reverseArray1(int[] arr){
//
//        for(int i =0; i < (arr.length)/2;i++){
//            int temp =0;
//            temp = arr[i];
//            arr[i]=arr[arr.length-i-1];
//            arr[arr.length-i-1]=temp;
//        }
//        System.out.println(Arrays.toString(arr));
//    }
    public static void reverseArrayRecursion(int start,int end ,int[] arr){
       int temp =0;
        if(start >=end){
            System.out.println(Arrays.toString(arr));
            return;
        }
        temp=arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
        reverseArrayRecursion(start+1,end-1,arr);

    }
}
