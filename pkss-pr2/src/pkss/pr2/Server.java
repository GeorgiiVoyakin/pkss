package pkss.pr2;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintStream;
import java.net.ServerSocket;
import java.net.Socket;

public class Server extends Thread {
    private ServerSocket serverSocket;
    private final int port = 1001;
    private BufferedReader fromClient;
    private PrintStream toClient;

    public Server() {
        try {
            serverSocket = new ServerSocket(port);
        } catch (IOException e) {
            System.err.println("Не удалось создать серверный сокет с портом " + port + " : " + e.getMessage());
        }
    }

    @Override
    public void run() {
        try {
            while (true) {
                Socket client = serverSocket.accept();
            }
        } catch (IOException e) {
            System.err.println(e.getMessage());
        }
    }
}
