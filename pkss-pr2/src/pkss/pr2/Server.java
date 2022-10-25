package pkss.pr2;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.net.ServerSocket;
import java.net.Socket;

public class Server extends Thread {
    private final ServerSocket serverSocket;
    private final int port = 1001;

    public Server() throws IOException {
        serverSocket = new ServerSocket(port);
    }

    @Override
    @SuppressWarnings("InfiniteLoopStatement")
    public void run() {
        System.out.println("Server> Сервер запущен на порту: " + port);
        try {
            while (true) {
                new ClientHandler(serverSocket.accept()).start();
            }
        } catch (IOException e) {
            System.err.println("Server> Ошибка во время ожидания соединения с клиентом: " + e.getMessage());
        }
    }

    private static class ClientHandler extends Thread {
        private BufferedReader fromClient;
        private PrintStream toClient;

        ClientHandler(Socket socket) {
            try {
                fromClient = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            } catch (IOException e) {
                System.err.println("Server> Не удалось создать поток чтения от клиента" + e.getMessage());
            }
            try {
                toClient = new PrintStream(socket.getOutputStream());
            } catch (IOException e) {
                System.err.println("Server> Не удалось создать поток записи к клиенту: " + e.getMessage());
            }
            System.out.println("Server> Установлено соединение с клиентом: " + socket);
        }

        @Override
        @SuppressWarnings("InfiniteLoopStatement")
        public void run() {
            try {
                while (true) {
                    String message = fromClient.readLine();
                    if (message != null) {
                        System.out.println("Server> Получено сообщение от клиента: " + message);
                        toClient.println("Сообщение успешно получено");
                    }
                }
            } catch (IOException e) {
                System.err.println("Server> Не удалось получить сообщение от клиента: " + e.getMessage());
            }
        }
    }
}
