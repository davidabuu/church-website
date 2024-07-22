import React, { useState } from "react";



const transactions = [
  {
    amount: "250.00 CAD",
    status: "Succeeded",
    paymentMethod: "DISCOVER",
    transactionId: "TXN1234567890",
    customer: "John Doe",
    date: "2024-06-24",
  },
  {
    amount: "2,234.00 USD",
    status: "Pending",
    paymentMethod: "VISA",
    transactionId: "TXN0987654321",
    customer: "Jane Smith",
    date: "2024-06-23",
  },
  {
    amount: "75.00 CAD",
    status: "Failed",
    paymentMethod: "AMERICAN EXPRESS",
    transactionId: "TXN1122334455",
    customer: "Alice Johnson",
    date: "2024-06-22",
  },
  // Add more transactions as needed
];

const TransactionLedgerTable: React.FC = () => {
  const [selectedTransactions, setSelectedTransactions] = useState<Set<number>>(
    new Set()
  );
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState<string>("All");
  const [filterAmount, setFilterAmount] = useState<string>("");
  const [filterPaymentMethod, setFilterPaymentMethod] = useState<string>("All");
  const [filterCustomer, setFilterCustomer] = useState<string>("");
  const [filterDateRange, setFilterDateRange] = useState<{
    start: string;
    end: string;
  }>({ start: "", end: "" });

  const transactionsPerPage = 5;

  const handleSelectAll = () => {
    if (selectedTransactions.size === transactions.length) {
      setSelectedTransactions(new Set());
    } else {
      setSelectedTransactions(new Set(transactions.map((_, index) => index)));
    }
  };

  const handleSelect = (index: number) => {
    const newSelectedTransactions = new Set(selectedTransactions);
    if (newSelectedTransactions.has(index)) {
      newSelectedTransactions.delete(index);
    } else {
      newSelectedTransactions.add(index);
    }
    setSelectedTransactions(newSelectedTransactions);
  };

  const toggleDropdown = (index: number) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const applyFilters = (transaction: {
    status: string;
    amount: string | string[];
    paymentMethod: string;
    customer: string;
    date: string | number | Date;
  }) => {
    if (filterStatus !== "All" && transaction.status !== filterStatus)
      return false;
    if (filterAmount && !transaction.amount.includes(filterAmount))
      return false;
    if (
      filterPaymentMethod !== "All" &&
      transaction.paymentMethod !== filterPaymentMethod
    )
      return false;
    if (
      filterCustomer &&
      !transaction.customer.toLowerCase().includes(filterCustomer.toLowerCase())
    )
      return false;
    if (
      filterDateRange.start &&
      new Date(transaction.date) < new Date(filterDateRange.start)
    )
      return false;
    if (
      filterDateRange.end &&
      new Date(transaction.date) > new Date(filterDateRange.end)
    )
      return false;
    return true;
  };

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;

  const filteredTransactions = transactions.filter(applyFilters);
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );
  const totalPages = Math.ceil(
    filteredTransactions.length / transactionsPerPage
  );

  return (
    <div className="p-6 min-h-screen">
      <div className="container mx-auto">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4">
          <input
            type="text"
            placeholder="Amount"
            value={filterAmount}
            onChange={(e) => setFilterAmount(e.target.value)}
            className="border rounded px-2 py-2 w-full"
          />
          <select
            value={filterPaymentMethod}
            onChange={(e) => setFilterPaymentMethod(e.target.value)}
            className="border rounded px-2 py-2 w-full"
          >
            <option value="All">Payment Method</option>
            <option value="DISCOVER">DISCOVER</option>
            <option value="VISA">VISA</option>
            <option value="AMERICAN EXPRESS">AMERICAN EXPRESS</option>
          </select>
          <input
            type="text"
            placeholder="Customer"
            value={filterCustomer}
            onChange={(e) => setFilterCustomer(e.target.value)}
            className="border rounded px-2 py-2 w-full"
          />
          <input
            type="date"
            value={filterDateRange.start}
            onChange={(e) =>
              setFilterDateRange({ ...filterDateRange, start: e.target.value })
            }
            className="border rounded px-2 py-2 w-full"
          />
          <input
            type="date"
            value={filterDateRange.end}
            onChange={(e) =>
              setFilterDateRange({ ...filterDateRange, end: e.target.value })
            }
            className="border rounded px-2 py-2 w-full"
          />
        </div>
        <h1 className="text-2xl font-bold mb-4">Transactions</h1>
        <div className="overflow-x-auto">
          <table className="w-full whitespace-nowrap bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">
                  <input
                    type="checkbox"
                    checked={selectedTransactions.size === transactions.length}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="py-3 text-left px-4 border-b">Amount</th>
                <th className="py-3 text-left px-4 border-b">Status</th>
                <th className="py-3 text-left px-4 border-b">Payment Method</th>
                <th className="py-3 text-left px-4 border-b">Transaction ID</th>
                <th className="py-3 text-left px-4 border-b">Customer</th>
                <th className="py-3 text-left px-4 border-b">Date</th>
                <th className="py-3 text-left px-4 border-b"></th>
              </tr>
            </thead>
            <tbody>
              {currentTransactions.map((transaction, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 relative"
                >
                  <td className="py-2 px-4 border-b">
                    <input
                      type="checkbox"
                      checked={selectedTransactions.has(index)}
                      onChange={() => handleSelect(index)}
                    />
                  </td>
                  <td className="py-2 px-4 border-b whitespace-nowrap">
                    {transaction.amount}
                  </td>
                  <td className="py-2 px-4 border-b whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                        transaction.status === "Succeeded"
                          ? "bg-green-100 text-green-700"
                          : transaction.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      
                      {transaction.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 border-b whitespace-nowrap">
                    {transaction.paymentMethod}
                  </td>
                  <td className="py-4 px-4 border-b whitespace-nowrap">
                    {transaction.transactionId}
                  </td>
                  <td className="py-4 px-4 border-b whitespace-nowrap">
                    {transaction.customer}
                  </td>
                  <td className="py-4 px-4 border-b whitespace-nowrap">
                    {transaction.date}
                  </td>
                  <td className="py-4 px-4 border-b text-right relative whitespace-nowrap">
                  
                 
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                        <div className="py-2">
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            View Details
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Edit
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Delete
                          </a>
                        </div>
                      </div>
                  
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
       
      </div>
    </div>
  );
};

export default TransactionLedgerTable;
