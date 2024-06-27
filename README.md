Invoice Generation Program Documentation

Implementation:
This program generates a PDF invoice using React and @react-pdf/renderer library. It takes input data such as seller and buyer details, order information, itemized billing details, and generates a formatted invoice.

Features:

Handles multiple items with unit prices, quantities, and optional discounts.
Calculates total amounts including taxes based on the specified tax rates.
Renders the invoice in a structured format with item descriptions, prices, quantities, net amounts, tax details, and total amount.
Supports customization with seller logo, signatures, and other business-specific details.
Performance:

Optimized for performance and scalability to handle large volumes of invoice data efficiently.
Uses React's virtual DOM for rendering, ensuring fast updates and minimal re-renders.
Platform Agnostic:

Designed to be platform-agnostic, allowing deployment on various hosting services or as part of a React application.
Usage:

Input Data:

Provide seller and buyer details, order specifics, and itemized billing information in the data object.
Rendering:

Use the PDFViewer component to display the generated invoice in a web browser or integrate it within a React application.
Customization:

Customize the appearance by updating styles (InvoiceStyles.js) and adjusting data fields (data object) as per specific business needs.
