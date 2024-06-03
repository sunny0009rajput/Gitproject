package StreamSimpleQuestion;

// in stream api operation are classified into two operation
//1. intermdiate operation and 2nd terminal operation
//1 . Intermediate operation
//transform a stram into another stream .
//eg filter , map , distinct, sorted limit etc .
//2 nd terminal operation
//it produce a result and terminate the stream
//eg . forEach , collect , reduce , count , etc.

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Stream;

//filter
//syntax : Stream filteredStream = originalStream.filter(element->/* predicate */ );
//-it is used to filter the data from stream
//- and create a new stream
//- filter takes predicate as an argument which return boolean types
//it is itermediate operation.

// map
//-map is used to transform each element of stream
//-and return a new stream
//- map takes function as an argument , the return typw based on the types of data
//- it is intermediate operation
//syntax : mappedStream = originalStream.map(element -> / transformation function / )

// count () : to count the number of element in the stream

// sorted() : to sort the ordeer of element in the stream .
//             - sorted according to natural order

public class Streamapi1 {

    // q find the even number from arraylist using stream.
    public static void main(String[] args) {
        ArrayList<Integer> list= new ArrayList<>();
        list.add(10);
        list.add(23);
        list.add(34);
        list.add(45);
        List<Integer> fileterdlist = list.stream().filter(i -> i %2==0).toList();
        System.out.println(fileterdlist);


        // q multiply the two for each element from the list

        List<Integer> list1 = Arrays.asList(5,10,15,35,40);
        List<Integer> mapList = list1.stream().map(i-> i*2).toList();
        System.out.println(mapList);

        // q select only the passed student and grace the 5 marks to all fialed students.
        System.out.println("select only the passed student and grace the 5 marks to all fialed students.");

        List<Integer> marks = Arrays.asList(12,34,23,45,56,44,67,34,23);
        System.out.println("list of passed student who got more than 30 marks ");
        List<Integer> passedStudent = marks.stream().filter(i-> i > 30).toList();
        System.out.println(passedStudent);

        System.out.println("failed student grace marks");
        List<Integer> graceMarks = marks.stream().filter(i-> i < 30 ).map(j-> j + 5).toList();
        System.out.println(graceMarks);

        // q get the total number of failed student.
        long noOfStudentFailed = marks.stream().filter(i-> i < 30).count();
        System.out.println("filed student count ="+noOfStudentFailed);

        // sort the element from the stream
        List<Integer> sortedMarks = marks.stream().sorted().toList();
        System.out.println("print the marks in sorted order ");
        System.out.println(sortedMarks);

        // if we want to sort in customize order or in descending order
        // comparator
        // method : compare(obj1, obj2);
        // return -ve if obj1 has come before obj2
        // return +ve if obj1 has come after obj2
        // return 0 if obj1 is equal to obj2.

        // sort the element in reverse order
        List<Integer> customizeSort1 = marks.stream().sorted((a,b)->(a<b) ? 1:(a>b) ? -1 :0).toList();
        List<Integer> customizeSort2 = marks.stream().sorted((a,b)->(b.compareTo(a))).toList();
        List<Integer> customizeSort3 = marks.stream().sorted(Comparator.reverseOrder()).toList();
        List<Integer> customizeSort4 = marks.stream().sorted((a,b)->(a.compareTo(b))).toList();// return in ascending order
        List<Integer> customizeSort5 = marks.stream().sorted((a,b)->(-a.compareTo(b))).toList();// return in desceding order



        System.out.println(customizeSort1);
        System.out.println(customizeSort2);
        System.out.println(customizeSort3);
        System.out.println(customizeSort4);
        System.out.println(customizeSort5);

        // sort the element based on the length of the arraylist

        List<String> listString = Arrays.asList("A","AAA","B","BBBB");
        Comparator<String> c = (a,b)->{
            int l1 = a.length();
            int l2 = b.length();
            return Integer.compare(l1,l2);// l1 ki jagah l2 kar de to reverse order me sort ho jayega


        };
        List<String> sortedString=listString.stream().sorted().toList();// sorted based on length
        List<String> sortedString1=listString.stream().sorted(c).toList();// sorted based on charlenght
        String MinimumString2=listString.stream().min(c).get();
        String MaximumString2=listString.stream().max(c).get();
        System.out.println(sortedString);
        System.out.println(sortedString1);
        System.out.println(MinimumString2);
        System.out.println(MaximumString2);

        // min() max ()
        // both method takes the comparator as an argument.
        // and based on the comparator result it will return the value .

        // min(comparator) will return 1st element from the comparator result.
        // max(comparator) will return last element from the comparator result.
        Integer maximumLength = marks.stream().max((a,b)->Integer.compare(a,b)).get();
        Integer minimumLength = marks.stream().min((a,b)->Integer.compare(a,b)).get();
        System.out.println(maximumLength);
        System.out.println(minimumLength);

        // foreach()
        // - to perform an action for each element of this stream
        // - it is terminal operation

        marks.stream().forEach(i-> System.out.println(i));

        // how to convert stream of object into arrays
        // to arrays(): Integer[] i = list.stream(_).toArrays(Integer[]:: new );
        // if returns an array containing elements of this stream.
        // it is a terminal operations.

        // how to convert array to stream?
        // arrays.stream(array) or Stream.of(arr)

        // stream.of(args):
        // Argument should be any types either arrays or any group of elements.

        Integer[] arr ={10,15,16,20};
        Arrays.stream(arr).filter(i->i%2==0).forEach(j-> System.out.println(j));

        Stream<?> item = Stream.of(9,88,777,"a","cc");
        item.forEach(System.out::println);

    }


}
