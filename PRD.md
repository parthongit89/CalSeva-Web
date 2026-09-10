# Product Requirement Document (PRD.md) - CalSeva Web

## 1. Executive Summary & Vision
**CalSeva** provides specialized on-site calibration services and technical support for industrial measurement tools. The objective of **CalSeva Web** is to establish a high-trust, responsive, high-performance web presence that allows businesses to explore calibration services, understand technical offerings, find answers to key questions, submit service requests via QR code or form, and contact CalSeva easily.

The application requires **no external database** and is designed for static edge hosting on **Vercel** with maximum performance and responsiveness.

---

## 2. Target Audience & Core Use Cases
- **Industrial Quality Managers & Engineers**: Looking for certified on-site calibration services (Temperature Controllers, Sensors, RTD, Thermocouples, Signal Loops).
- **Facility Operations Teams**: Needing Annual Maintenance Contracts (AMC) for routine equipment compliance and audit readiness.
- **Service Requestors & Contacts**: Scanning QR codes or submitting digital inquiries via Gmail (`supportcalsevatec@gmail.com`) or WhatsApp.

---

## 3. Key Feature & UI Section Specifications

### 3.1 Header / Navbar
- **Brand Logo & Title**: CalSeva logo mark (`icon-512.png`) paired with clean Google Sans Flex typography.
- **Navigation Links**:
  - `Home` (`index.html#hero`)
  - `Services` (`index.html#services`)
  - `FAQ's` (`index.html#faqs`)
  - `Contact Us` (`contact.html`)

### 3.2 Hero Section
- **Headline**: *"Precision Calibration. On-Site Support. Reliable Service."* (`#607b7d`, 35px SemiBold).
- **Sub-headline**: Describes on-site calibration advantages at customer facilities.
- **Quote Tag**: *“Professional calibration support for businesses that depend on accurate measurement.”*
- **Primary CTA Button**: *"Request a Service"* (Redirects directly to `contact.html`).
- **Visual Equipment Collage**: High-resolution imagery of industrial multimeters and calibration tools.

### 3.3 Our Calibration Services
- **Section Heading**: *"Our Calibration Services"* (`#607b7d`, 40px SemiBold).
- **6 Key Service Offerings**:
  1. Temperature Controller Calibration
  2. Temperature Indicator with Sensor Calibration
  3. RTD Sensor Calibration
  4. Thermocouple Sensor Testing
  5. Loop Calibration
  6. AMC Services (Annual Maintenance Contracts)
- **Visual Asset**: Featured industrial temperature probe (`Gemini_Generated_Image_xe1zpgxe1zpgxe1z 2.png`).

### 3.4 Frequently Asked Questions (FAQs)
- **Section Heading**: *"Frequently Asked Questions"* (`#607b7d`, 40px SemiBold).
- **Interactive Accordions**: 4 expandable FAQ cards.

### 3.5 Mission Quote & Multimeter Section
- **Mission Tag**: *“To become a trusted calibration support partner for businesses that depend on accurate measurement and reliable equipment.”*
- **Visual Display**: Digital multimeter visual asset (`Gemini_Generated_Image_rynkgkrynkgkrynk 1.png`).

### 3.6 Raise a Service Request & Contact Us (Figma Node 650:248 - Standalone `contact.html`)
- **Headline 1**: *"Raise a service request."* (`#4f6668`, 45px Medium).
- **QR Code Container**:
  - Sub-label: `"Scan Qr code"`
  - QR Code Image: `https_forms_gle_XVFxmsZ1DTTkCQow6.png` inside dark teal `#3b4f51` container.
  - Sub-text: `"Fill in the appropriate information according to the form."`
- **Calibration Illustration**: `Gemini_Generated_Image_96xcng96xcng96xc 1.png` showing CalSEVA machine calibration area.
- **Headline 2**: *"Contact Us"* (`#4f6668`, 45px Medium).
- **Contact Channel Buttons**:
  - Gmail official email trigger (`mailto:supportcalsevatec@gmail.com`)
  - WhatsApp chat trigger (`https://wa.me/...`)

### 3.7 Footer Section
- **Background Color**: `#3b4f51` (CalSeva Deep Teal).
- **Brand Details**: CalSeva overview, contact email (`supportcalsevatec@gmail.com`), legal terms, and copyright.
