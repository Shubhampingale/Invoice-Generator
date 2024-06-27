import React from 'react';
import { Page, Text, View, Document, Image } from '@react-pdf/renderer';
import styles from './InvoiceStyles';

const Invoice = ({ data }) => {
  const calculateTotalAmount = () => {
    let total = 0;
    data.items.forEach(item => {
      const netAmount = item.unit_price * item.quantity - item.discount;
      const taxRate = item.tax_rate;
      const taxAmount = netAmount * taxRate;
      const totalAmount = netAmount + taxAmount;
      total += totalAmount;
    });
    return total.toFixed(2);
  };

  // Function to determine tax type based on place of supply and delivery
  const getTaxType = (placeOfSupply, placeOfDelivery, taxRate) => {
    if (placeOfSupply === placeOfDelivery) {
      return {
        CGST: taxRate / 2,
        SGST: taxRate / 2
      };
    } else {
      return {
        IGST: taxRate
      };
    }
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.logo} src={data.logo_path} />
          <View>
            <Text>Tax Invoice/Bill of Supply/Cash Memo</Text>
            <Text>(Original for Recipient)</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionLeft}>
            <Text>Sold By:</Text>
            <Text style={styles.address}>{data.seller_name}</Text>
            <Text>PAN No: <Text>{data.seller_pan}</Text></Text>
            <Text>GST Registration No: <Text>{data.seller_gst}</Text></Text>
          </View>
          <View style={styles.sectionRight}>
            <Text style={styles.address}>Billing Address:</Text>
            <Text>{data.billing_name}</Text>
            <Text>{data.billing_address}</Text>
            <Text>{data.billing_city}, {data.billing_state}, {data.billing_pincode}</Text>
            <Text>State/UT Code: {data.billing_state_code}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionLeft}>
            <Text style={styles.address}>Order Number:<Text>{data.order_no}</Text></Text>
            <Text style={styles.address}>Order Date:<Text>{data.order_date}</Text></Text>
          </View>
          <View style={styles.sectionRight}>
            <Text style={styles.address}>Shipping Address:</Text>
            <Text>{data.shipping_name}</Text>
            <Text>{data.shipping_address}</Text>
            <Text>{data.shipping_city}, {data.shipping_state}, {data.shipping_pincode}</Text>
            <Text>State/UT Code: {data.shipping_state_code}</Text>
            <Text>Place of Supply:<Text>{data.place_of_supply}</Text></Text>      
            <Text>Place of Delivery:<Text>{data.place_of_delivery}</Text></Text>
            <Text>Invoice Number:<Text>{data.invoice_no}</Text></Text>
            <Text>Invoice Details:<Text>{data.invoice_details}</Text></Text>
            <Text>Invoice Date:<Text>{data.invoice_date}</Text></Text>
          </View>
        </View>

        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableColHeaderFirst}>Sl. No</Text>
            <Text style={styles.tableColHeaderSecond}>Description</Text>
            <Text style={styles.tableColHeaderOther}>Unit Price</Text>
            <Text style={styles.tableColHeaderOther}>Qty</Text>
            <Text style={styles.tableColHeaderOther}>Net Amount</Text>
            <Text style={styles.tableColHeaderOther}>Tax Rate</Text>
            <Text style={styles.tableColHeaderOther}>Tax Type</Text>
            <Text style={styles.tableColHeaderOther}>Tax Amount</Text>
            <Text style={styles.tableColHeaderOther}>Total Amount</Text>
          </View>
          {data.items.map((item, index) => {
            const netAmount = item.unit_price * item.quantity - item.discount;
            const taxRate = item.tax_rate;
            const taxAmount = netAmount * taxRate;
            const totalAmount = netAmount + taxAmount;
            const taxType = getTaxType(data.place_of_supply, data.place_of_delivery, taxRate);

            return (
              <View style={styles.tableRow} key={index}>
                <Text style={styles.tableColFirst}>{index + 1}</Text>
                <Text style={styles.tableColSecond}>{item.description}</Text>
                <Text style={styles.tableColOther}>{item.unit_price.toFixed(2)}</Text>
                <Text style={styles.tableColOther}>{item.quantity}</Text>
                <Text style={styles.tableColOther}>{netAmount.toFixed(2)}</Text>
                <Text style={styles.tableColOther}>{(taxRate * 100).toFixed(2)}%</Text>
                <Text style={styles.tableColOther}>{Object.keys(taxType).join(' / ')}</Text>
                <Text style={styles.tableColOther}>{taxAmount.toFixed(2)}</Text>
                <Text style={styles.tableColOther}>{totalAmount.toFixed(2)}</Text>
              </View>
            );
          })}
        </View>

        <View style={styles.totalRow}>
          <Text style={styles.totalText}>TOTAL:</Text>
          <Text style={styles.totalText}>
            {calculateTotalAmount()}
          </Text>
        </View>

        <View style={styles.amountWords}>
          <Text>Amount in Words:</Text>
          <Text>One Thousand One Hundred And Ninety-Five Only</Text> {/* Replace with actual amount in words if needed */}
        </View>

        <View style={styles.signature}>
          <Text>For {data.seller_name}:</Text>
          <Image style={styles.signatureImage} src={data.signature_path} />
          <Text>Authorised Signatory</Text>
        </View>

        <View>
          <Text>Whether tax is payable under reverse charge - {data.reverse_charge}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default Invoice;
