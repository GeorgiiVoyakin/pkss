using System.Net;
using System.Net.Sockets;

namespace Server
{
    class Program
    {
        static void Main()
        {
            int Port = 1002;
            TcpListener listener = new TcpListener(new IPEndPoint(IPAddress.Parse("127.0.0.1"), Port));
            listener.Start();
            Console.WriteLine("Server> Сервер запущен на порту: " + Port);

            while (true)
            {
                TcpClient client = listener.AcceptTcpClient();
                Console.WriteLine("Server> Установлено соединение с клиентом: " + client.Client.RemoteEndPoint);

                Thread t = new Thread(new ParameterizedThreadStart(ClientHandler));
                t.Start(client);
            }
        }

        static void ClientHandler(object? tcpClient)
        {
            StreamReader reader = new StreamReader((tcpClient as TcpClient)!.GetStream());
            StreamWriter writer = new StreamWriter((tcpClient as TcpClient)!.GetStream());
            writer.AutoFlush = true;

            while (true)
            {
                String? message = reader.ReadLine();
                if (message is null)
                {
                    continue;
                }
                int choice = Int32.Parse(message);
                Console.WriteLine("Server> Получено сообщение от клиента, выбрана операция: " + choice);
                switch (choice)
                {
                    case 5:
                        int N = Int32.Parse(reader.ReadLine()!);
                        writer.WriteLine(Solution.task5(N));
                        break;
                    case 8:
                        double A = Double.Parse(reader.ReadLine()!);
                        writer.WriteLine(String.Join(", ", Solution.task8(A).ToArray()));
                        break;
                    case 11:
                        A = Double.Parse(reader.ReadLine()!);
                        writer.WriteLine(String.Join(", ", Solution.task11(A).ToArray()));
                        break;
                    case 14:
                        writer.WriteLine(String.Join(", ", Solution.task14().ToArray()));
                        break;
                    case 17:
                        N = Int32.Parse(reader.ReadLine()!);
                        while (!(N == 0 || N % 2 == 0))
                        {
                            writer.WriteLine(true);
                            N = Int32.Parse(reader.ReadLine()!);
                        }
                        writer.WriteLine(false);
                        writer.WriteLine("");
                        break;
                    default:
                        writer.WriteLine("Выбранная не доступная операция. Доступные операции: [5, 8, 11, 14, 17]");
                        break;
                }
            }
        }
    }

    class Solution
    {
        public static bool task5(int N)
        {
            while (N % 5 == 0)
            {
                N /= 5;
            }
            return N == 1;
        }

        public static List<double> task8(double A)
        {
            List<double> result = new List<double>();
            for (double x = -2; x < 8; x += 0.75)
            {
                result.Add((4 * x - 3 * x + Math.Tan(x)) / A);
            }
            return result;
        }

        public static List<double> task11(double A)
        {
            List<double> result = new List<double>();
            for (double x = 2; x < 8; x += 0.75)
            {
                result.Add((4 * x - 3 * x + Math.Cos(x)) / A);
            }
            return result;
        }

        public static List<double> task14()
        {
            List<double> result = new List<double>();
            for (double x = -3; x <= 11; x += 0.9)
            {
                result.Add(Math.Cos(x) - 5 * Math.Sin(x - 2));
            }
            return result;
        }
    }
}
