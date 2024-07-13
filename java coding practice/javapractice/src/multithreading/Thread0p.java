package multithreading;

class UserThread extends Thread{

        public void run() {

// task for thread..
            System.out.println("this is user define thread");
        }
}

public class Thread0p {

    public static void main(String[] args) {

        System.out.println("thread started");

        int x = 54 + 64;

        System.out.println("sun is " + x);

        Thread t = Thread.currentThread();


        String tname = t.getName();


        System.out.println("current thread name is: " + tname);

        t.setName("myMain");

        System.out.println(t.getName());

        try {

            Thread.sleep(2000);
        } catch (Exception e) {

            System.out.println("exception message");

        }

        System.out.println(t.getId());

        UserThread userThread = new UserThread();
        userThread.start();


        System.out.println("thread ended");
    }
}


