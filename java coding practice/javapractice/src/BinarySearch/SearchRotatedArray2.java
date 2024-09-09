package BinarySearch;

public class SearchRotatedArray2 {
    public static void main(String[] args) {
        int[] arr= {7, 8, 1, 2, 3, 3, 3, 4, 5, 6};
        int target =3;
        int start=0;
        int end =arr.length-1;
        boolean result = SearchRotatedAray(arr,start,end,target);
        System.out.println(result);
    }
    public static boolean SearchRotatedAray(int[] arr,int start,int end,int target){
        Boolean ans= false;

        while(start <=end){
            int mid = start+(end-start)/2;
            if(arr[mid]==target){
                ans=true;
            }
            if(start <= arr[mid]){
                if(target>= arr[start] && target <=arr[mid]){
                    end=mid-1;
                }else {
                    start=mid+1;
                }
            }else {
                if(target>=arr[mid] && target<= arr[end]){
                    start=mid+1;
                }else {
                    end=mid-1;
                }
            }
        }
        return ans;
    }
}
