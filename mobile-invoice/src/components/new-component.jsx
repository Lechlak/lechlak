"use client";
import React from "react";

function NewComponent({
  onBackClick,
  onPrintClick,
  logoSrc,
  companyInfo,
  clientDetails,
  items,
  notes,
  onSendEmailClick,
}) {
  const calculateTotal = () =>
    items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white p-8 max-w-4xl mx-auto font-roboto">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={onBackClick}
          className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded"
        >
          <i className="fas fa-arrow-left mr-2"></i>Back to Edit
        </button>
        <button
          onClick={handlePrint}
          className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded"
        >
          <i className="fas fa-print mr-2"></i>Print
        </button>
      </div>

      <div className="flex justify-between mb-12">
        <div>
          <img src={logoSrc} alt="Company Logo" className="w-[150px] mb-4" />
          <div className="text-gray-600">
            <p>8655 Stone Post Road</p>
            <p>Sylvania, Ohio 43560</p>
            <p>419.367.8212</p>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-2xl font-bold mb-4">Client Details</h2>
          <div className="text-gray-600">
            <p>{clientDetails.name}</p>
            <p>{clientDetails.email}</p>
            {/* <p>{clientDetails.address}</p> */}
          </div>
        </div>
      </div>

      <div className="mb-12">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-4 text-left">Item</th>
              <th className="border p-4 text-left">Quantity</th>
              <th className="border p-4 text-left">Price</th>
              <th className="border p-4 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td className="border p-4">{item.description}</td>
                <td className="border p-4">{item.quantity}</td>
                <td className="border p-4">${item.price}</td>
                <td className="border p-4">${item.quantity * item.price}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3" className="border p-4 text-right font-bold">
                Total:
              </td>
              <td className="border p-4 font-bold">${calculateTotal()}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Additional Notes</h3>
        <div className="border p-4 min-h-[100px] bg-gray-50">
          {notes || "Thank you for your business."}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={handlePrint}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
        >
          <i className="fas fa-file-pdf mr-2"></i>Save as PDF
        </button>
        <button
          onClick={onSendEmailClick}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
        >
          <i className="fas fa-envelope mr-2"></i>Send Email
        </button>
      </div>
    </div>
  );
}

function NewComponentStory() {
  const formData = {
    clientName: "John Doe",
    email: "johndoe@example.com",
    address: "456 Client Blvd, Townsville",
    items: [
      { description: "Product 1", quantity: 2, price: 50 },
      { description: "Product 2", quantity: 1, price: 100 },
    ],
    notes: "",
  };

  return (
    <div>
      <NewComponent
        onBackClick={() => console.log("Back")}
        onPrintClick={() => console.log("Print")}
        logoSrc="https://ucarecdn.com/74b429f2-d6ad-4d3c-a284-1c35d3361d1a/-/format/auto/"
        companyInfo={{
          street: "8655 Stone Post Road",
          cityState: "Sylvania, Ohio 43560",
          phone: "419.367.8212",
        }}
        clientDetails={{
          name: formData.clientName,
          email: formData.email,
          address: formData.address,
        }}
        items={formData.items}
        notes={formData.notes}
        onSendEmailClick={() => console.log("Send Email")}
      />
    </div>
  );
}

export default NewComponent;