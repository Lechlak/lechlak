"use client";
import React from "react";
import NewComponent from "../components/new-component";


function CreateInvoice() {
  const [formData, setFormData] = React.useState({
    clientName: "",
    email: "",
    address: "",
    items: [{ description: "", quantity: 0, price: 0 }],
    notes: "",
  });

  const [showInvoice, setShowInvoice] = React.useState(false);

  const updateItem = (index, field, value) => {
    const newItems = formData.items.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setFormData({ ...formData, items: newItems });
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { description: "", quantity: 0, price: 0 }],
    });
  };

  const calculateTotal = () => {
    return formData.items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  const handleGenerateInvoice = (e) => {
    e.preventDefault();
    setShowInvoice(true);
  };

  const handleEmail = () => {
    const subject = `Invoice for ${formData.clientName}`;
    const body = `Please find your invoice attached.\n\nTotal Amount: $${calculateTotal()}\n\nThank you for your business!`;
    window.location.href = `mailto:${
      formData.email
    }?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  if (showInvoice) {
    return (
      <NewComponent
        onBackClick={() => setShowInvoice(false)}
        onPrintClick={() => window.print()}
        logoSrc="/logo.png"
        companyInfo={{
          street: "8655 Stone Post Road",
          cityState: "Sylvania, Ohio 43560",
          phone: "419.367.8212",
        }}
        clientDetails={{
          name: formData.clientName,
          email: formData.email,
          /*address: formData.address,*/
        }}
        items={formData.items}
        notes={formData.notes}
        onSendEmailClick={handleEmail}
      />
    );
  }

  return (
    <form
      onSubmit={handleGenerateInvoice}
      className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 space-y-6"
    >
      <div className="text-2xl font-bold text-center font-roboto mb-6">
        Create Invoice
      </div>

      <div className="space-y-4">
        <input
          type="text"
          name="clientName"
          placeholder="Client Name"
          value={formData.clientName}
          onChange={(e) =>
            setFormData({ ...formData, clientName: e.target.value })
          }
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Client Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        {/* Temporarily removed the address input field */}
{/*
<textarea
  name="address"
  placeholder="Client Address"
  value={formData.address}
  onChange={(e) =>
    setFormData({ ...formData, address: e.target.value })
  }
  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
  rows="3"
  required
/>
*/}
      </div>

      <div className="space-y-4">
        <div className="font-semibold">Items</div>
        {formData.items.map((item, index) => (
          <div key={index} className="space-y-2">
            <input
              type="text"
              name={`item-description-${index}`}
              placeholder="Item Description"
              value={item.description}
              onChange={(e) => updateItem(index, "description", e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <div className="flex gap-2">
              <div className="w-1/3">
                <input
                  type="number"
                  name={`item-quantity-${index}`}
                  placeholder="Qty"
                  value={item.quantity}
                  onChange={(e) =>
                    updateItem(index, "quantity", parseInt(e.target.value) || 0)
                  }
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="1"
                  required
                />
                <div className="text-xs text-gray-500 mt-1">Enter quantity</div>
              </div>
              <div className="w-2/3">
                <input
                  type="number"
                  name={`item-price-${index}`}
                  placeholder="Price"
                  value={item.price}
                  onChange={(e) =>
                    updateItem(index, "price", parseFloat(e.target.value) || 0)
                  }
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="0"
                  step="0.01"
                  required
                />
                <div className="text-xs text-gray-500 mt-1">
                  Price per item ($)
                </div>
              </div>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addItem}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded"
        >
          <i className="fas fa-plus mr-2"></i>Add Item
        </button>
      </div>

      <textarea
        name="notes"
        placeholder="Additional Notes"
        value={formData.notes}
        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows="3"
      />

      <div className="text-xl font-semibold text-right">
        Total: ${calculateTotal().toFixed(2)}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Generate Invoice
      </button>
    </form>
  );
}

function NewComponent2() {
  return <CreateInvoice />;
}

function NewComponent2Story() {
  return (
    <div>
      <NewComponent2 />
    </div>
  );
}

export default NewComponent2;