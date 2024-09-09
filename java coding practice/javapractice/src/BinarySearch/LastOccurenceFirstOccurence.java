package BinarySearch;

import org.w3c.dom.css.CSSStyleDeclaration;

public class LastOccurenceFirstOccurence {
    public static void main(String[] args) {
        int[] arr= {3,4,13,13,13,20,40};
        int target = 13;
        int start=0;
        int end =arr.length-1;
        int result=BinarySearchLastOccurence(arr,start,end,target);
        System.out.println(result);
        int firstOccurence=BinarySearchFirstOccurence(arr,start,end,target);
        System.out.println(firstOccurence);
    }
    public static int BinarySearchLastOccurence(int[] arr,int start,int end ,int target){
        int ans=-1;
        while(start<= end){
            int mid=start+(end-start)/2;
            if(arr[mid]==target){
                ans=mid;
                start=mid+1;

            }else if(target < arr[mid]){
                end=mid-1;
            }else {
                start=mid+1;
            }
        }
        return ans;
    }
    public static int BinarySearchFirstOccurence(int[] arr,int start,int end,int target){
        int ans =-1;
        while(start <= end){
            int mid = start+(end-start)/2;
            if(arr[mid]== target){
                ans=mid;
                end=mid-1;
            }else if(target < arr[mid]){
                end=mid-1;
            }else {
                start=mid+1;
            }
        }
        return ans;
    }
}
