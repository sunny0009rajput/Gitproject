package BinarySearch;

public class TimesArrayRotated {
    public static void main(String[] args) {
        int[] arr={4,5,6,7,0,1,2,3};
        int start =0;
        int end =arr.length-1;
        int result=findMinimum(arr,start,end);
        System.out.println(result);
    }
    public static int findMinimum(int[] arr,int start,int end){
        int ans=-1;
        if(arr[start] <= arr[end]){
            ans=start;
            return ans;
        }
        while(start<end){
            int mid =start+(end-start)/2;

            if(arr[mid] > arr[end]){
                start=mid+1;
            }else {
                end=mid;
            }
        }
        return start;
    }
}
