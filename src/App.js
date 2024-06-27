import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import Invoice from './components/Invoice';

const data = {
  seller_name: "Varasiddhi Silk Exports",
  seller_address: "75, 3rd Cross, Lalbagh Road",
  seller_city: "Bengaluru",
  seller_state: "Karnataka",
  seller_pincode: "560027",
  seller_pan: "AACFV3325K",
  seller_gst: "29AACFV3325K1ZY",
  place_of_supply: "Karnataka",
  place_of_delivery: "Karnataka",
  billing_name: "Madhu B",
  billing_address: "Eurofins IT Solutions India Pvt Ltd., 1st Floor, Maruti Platinum, Lakshminarayana Pura, AECS Layout",
  billing_city: "Bengaluru",
  billing_state: "Karnataka",
  billing_pincode: "560037",
  billing_state_code: "29",
  shipping_name: "Madhu B",
  shipping_address: "Eurofins IT Solutions India Pvt Ltd., 1st Floor, Maruti Platinum, Lakshminarayana Pura, AECS Layout",
  shipping_city: "Bengaluru",
  shipping_state: "Karnataka",
  shipping_pincode: "560037",
  shipping_state_code: "29",
  order_no: "403-3225714-7676307",
  order_date: "28.10.2019",
  invoice_no: "IN-761",
  invoice_details: "KA-310565025- 1920",
  invoice_date: "28.10.2019",
  reverse_charge: "No",
  items: [
    { description: "Varasiddhi Silks Men's Formal Shirt (SH-05-42, Navy Blue, 42)", unit_price: 338.10, quantity: 1, discount: 0, tax_rate: 0.025 },
    { description: "Shipping Charges", unit_price: 30.96, quantity: 1, discount: 0, tax_rate: 0.025 },
    { description: "Varasiddhi Silks Men's Formal Shirt (SH-05-40, Navy Blue, 40)", unit_price: 338.10, quantity: 1, discount: 0, tax_rate: 0.025 },
    { description: "Shipping Charges", unit_price: 30.96, quantity: 1, discount: 0, tax_rate: 0.025 },
  ],
  logo_path: "company_logo.jpg", /* Replace with the actual path to your logo */
  signature_path: "sign.jpg" /* Replace with the actual path to your signature image */
};

function App() {
  return (
    <div className="App">
      <PDFViewer width="100%" height="800">
        <Invoice data={data} />
      </PDFViewer>
    </div>
  );
}

export default App;
