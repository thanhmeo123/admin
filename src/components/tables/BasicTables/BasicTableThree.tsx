interface Transaction {
  name: string;
  date: string;
  price: string;
  category: string;
  status: "Success" | "Failed" | "Pending";
}

const transactions: Transaction[] = [
  {
    name: "PYPL",
    date: "Nov 23, 01:00 PM",
    price: "$2,567.88",
    category: "Finance",
    status: "Success",
  },
  // Bạn có thể thêm nhiều giao dịch khác tại đây
];

export default function StockTransactionCard() {
  return (
    <div className="p-4 space-y-4 md:px-8 lg:px-12">
      {transactions.map((item, index) => (
        <div
          key={index}
          className="rounded-lg border shadow-sm bg-white p-4 space-y-2"
        >
          <div className="text-lg font-semibold text-gray-800">
            Bought {item.name}
          </div>
          <div className="text-sm text-gray-500">🕒 {item.date}</div>
          <div className="text-sm text-gray-600">💰 {item.price}</div>
          <div className="text-sm text-gray-600">
            📂 Category: {item.category}
          </div>
          <div>
            <span
              className={`inline-block px-2 py-1 text-xs rounded ${
                item.status === "Success"
                  ? "bg-green-500 text-white"
                  : item.status === "Pending"
                  ? "bg-yellow-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {item.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
