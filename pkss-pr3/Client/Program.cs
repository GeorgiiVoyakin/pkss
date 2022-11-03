using System.Net.Sockets;

namespace Client
{
    class Program
    {
        static void Main()
        {
            int Port = 1002;
            TcpClient client = new TcpClient("localhost", Port);
            StreamReader reader = new StreamReader(client.GetStream());
            StreamWriter writer = new StreamWriter(client.GetStream());

            while (true)
            {
                try
                {
                    bool skip = false;
                    Console.WriteLine("Client> Выберите операцию: [5, 8, 11, 14, 17]:");
                    int choice = Int32.Parse(Console.ReadLine()!);
                    switch (choice)
                    {
                        case 5:
                            Console.WriteLine("Client> Введите N: ");
                            int N;
                            try
                            {
                                N = Int32.Parse(Console.ReadLine()!);
                            }
                            catch (FormatException)
                            {
                                Console.WriteLine("Client> Некорректный ввод!");
                                continue;
                            }

                            writer.WriteLine(choice);
                            writer.WriteLine(N);
                            writer.Flush();
                            break;
                        case 8:
                            Console.WriteLine("Client> Введите A: ");
                            double A;
                            try
                            {
                                A = Double.Parse(Console.ReadLine()!);
                            }
                            catch (FormatException)
                            {
                                Console.WriteLine("Client> Некорректный ввод!");
                                continue;
                            }
                            writer.WriteLine(choice);
                            writer.WriteLine(A);
                            writer.Flush();
                            break;
                        case 11:
                            Console.WriteLine("Client> Введите A: ");
                            try
                            {
                                A = Double.Parse(Console.ReadLine()!);
                            }
                            catch (FormatException)
                            {
                                Console.WriteLine("Client> Некорректный ввод!");
                                continue;
                            }
                            writer.WriteLine(choice);
                            writer.WriteLine(A);
                            writer.Flush();
                            break;
                        case 14:
                            writer.WriteLine(choice);
                            writer.Flush();
                            break;
                        case 17:
                            writer.WriteLine(choice);
                            writer.Flush();
                            String response;
                            do
                            {
                                Console.WriteLine("Client> Введите число: ");
                                try
                                {
                                    N = Int32.Parse(Console.ReadLine()!);
                                }
                                catch (FormatException)
                                {
                                    Console.WriteLine("Client> Некорректный ввод!");
                                    writer.WriteLine(0);
                                    writer.Flush();
                                    reader.ReadLine();
                                    break;
                                }
                                writer.WriteLine(N);
                                writer.Flush();
                                response = reader.ReadLine()!;
                            } while (Boolean.Parse(response));
                            skip = true;
                            break;
                        default:
                            writer.WriteLine(choice);
                            writer.Flush();
                            break;
                    }
                    String? message = reader.ReadLine();
                    if (message is not null && !skip)
                    {
                        Console.WriteLine("Client> Получено сообщение от сервера: " + message);
                    }
                }
                catch (FormatException)
                {
                    Console.WriteLine("Client> Выбрана не допустимая операция");
                }
            }
        }
    }
}
