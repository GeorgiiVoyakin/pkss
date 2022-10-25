package pkss.pr2;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.net.ServerSocket;
import java.net.Socket;

public class Server extends Thread {
    private ServerSocket serverSocket;
    private final int port = 1001;

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
                new ClientHandler(serverSocket.accept()).start();
            }
        } catch (IOException e) {
            System.err.println(e.getMessage());
        }
    }

    class ClientHandler extends Thread {
        private final Socket socket;

        private BufferedReader fromClient;
        private PrintStream toClient;

        ClientHandler(Socket socket) {
            this.socket = socket;
            try {
                fromClient = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            } catch (IOException e) {
                System.err.println(e.getMessage());
            } finally {
                try {
                    if (fromClient != null) {
                        fromClient.close();
                    }
                } catch (IOException e) {
                    System.err.println(e.getMessage());
                }
            }
            try {
                toClient = new PrintStream(socket.getOutputStream());
            } catch (IOException e) {
                System.err.println(e.getMessage());
            } finally {
                if (toClient != null) {
                    toClient.close();
                }
            }
        }

        @Override
        public void run() {
            try {
                String message = fromClient.readLine();
                System.out.println(message);
                toClient.println("Сообщение успешно получено");
            } catch (IOException e) {
                System.err.println(e.getMessage());
            }
        }
    }
}
