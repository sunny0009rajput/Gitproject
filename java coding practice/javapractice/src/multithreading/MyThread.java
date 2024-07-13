package multithreading;

// by using runnnable interface



public class MyThread implements Runnable{


    public void run() {

        for (int i = 0; i < 10; i++) {

            System.out.println("value of i is " + i);
            try {

                Thread.sleep(1000);

            } catch (Exception e) {

                System.out.println("exception");

            }
        }
    }


//

//                public static void main(String[] args) {
//                    MyThread myThread = new MyThread();
//                    Thread thread = new Thread(myThread);
//
//                    thread.start();
//
//                }
        }

