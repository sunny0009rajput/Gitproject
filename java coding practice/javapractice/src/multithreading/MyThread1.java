package multithreading;

import javax.swing.plaf.TableHeaderUI;

import java.beans.ExceptionListener;



public class MyThread1 extends Thread {

        public void run() {

            for (int i = 0; i < 10; i++) {

                System.out.println("value of another thread i is " + i);

                try {

                    Thread.sleep(2880);

                } catch (Exception e) {

                    System.out.println("message exception");

                }
            }
        }


        public static void main(String[] args) {

            MyThread myThread = new MyThread();

            Thread thread = new Thread(myThread);

            thread.start();

            MyThread1 myThread1 = new MyThread1();
            myThread1.start();

        }

    }
