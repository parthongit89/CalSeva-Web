# Product Requirement Document (PRD.md) - CalSeva Web

## 1. Executive Summary & Vision
**CalSeva** provides specialized on-site calibration services and technical support for industrial measurement tools. The objective of **CalSeva Web** is to establish a high-trust, responsive, high-performance web presence that allows businesses to explore calibration services, understand technical offerings, find answers to key questions, and submit service requests seamlessly.

The application requires **no external database** and is designed for static edge hosting on **Vercel** with maximum performance and responsiveness.

---

## 2. Target Audience & Core Use Cases
- **Industrial Quality Managers & Engineers**: Looking for certified on-site calibration services (Temperature Controllers, Sensors, RTD, Thermocouples, Signal Loops).
- **Facility Operations Teams**: Needing Annual Maintenance Contracts (AMC) for routine equipment compliance and audit readiness.
- **Service Requestors**: Seeking direct quote requests via phone, email, or digital inquiry forms.

---

## 3. Key Feature & UI Section Specifications

### 3.1 Header / Navbar
- **Brand Logo & Title**: CalSeva logo mark (`icon-512.png`) paired with clean Google Sans Flex typography.
- **Navigation Links**:
  - `Home` (`#hero`)
  - `Services` (`#services`)
  - `FAQ's` (`#faqs`)
  - `Contact Us` (`#contact`)
- **Sticky / Header Behavior**: Clean translucent blur header on scroll.

### 3.2 Hero Section
- **Headline**: *"Precision Calibration. On-Site Support. Reliable Service."* (`#607b7d`, 35px SemiBold).
- **Sub-headline**: Describes on-site calibration advantages, working with precise calibration tools at customer facilities.
- **Quote Tag**: *“Professional calibration support for businesses that depend on accurate measurement.”*
- **Primary CTA Button**: *"Request a Service"* (`#3b4f51` background, pill-rounded `rounded-full`, with arrow icon trigger).
- **Visual Equipment Collage**: High-resolution imagery of industrial multimeters and calibration standard tools.

### 3.3 Our Calibration Services
- **Section Heading**: *"Our Calibration Services"* (`#607b7d`, 40px SemiBold).
- **6 Key Service Offerings**:
  1. **Temperature Controller Calibration**: Verification and tuning of control outputs (PID, relay, analog) to ensure precise thermal regulation and process stability.
  2. **Temperature Indicator with Sensor Calibration**: System-level calibration pairing indicators with their dedicated probes to eliminate combined display and sensing errors.
  3. **RTD Sensor Calibration**: Resistance-versus-temperature testing (Pt100, Pt1000) using high-precision baths and dry blocks to verify curve compliance and linearity.
  4. **Thermocouple Sensor Testing**: Millivolt output verification and junction integrity testing across operating ranges to detect signal drift, degradation, or wiring faults.
  5. **Loop Calibration**: End-to-end testing of the complete signal chain—from sensor input through transmitters to the PLC/DCS—ensuring seamless overall loop accuracy.
  6. **AMC Services (Annual Maintenance Contracts)**: Scheduled preventive calibration cycles, priority on-site callouts, and ongoing certificate management to maintain continuous audit compliance.
- **Visual Asset**: Featured industrial temperature probe (`Gemini_Generated_Image_xe1zpgxe1zpgxe1z 2.png`).

### 3.4 Frequently Asked Questions (FAQs)
- **Section Heading**: *"Frequently Asked Questions"* (`#607b7d`, 40px SemiBold).
- **Interactive Accordions**:
  - *Q1*: What is on-site calibration?
    *A*: On-site calibration is a calibration service performed at the customer's facility, allowing applicable measurement equipment to be calibrated without being transported to another location.
  - *Q2*: Why choose on-site calibration?
    *A*: On-site calibration can help reduce equipment transportation, minimize downtime, and make the calibration process more convenient for businesses.
  - *Q3*: What types of equipment can CalSEVA support?
    *A*: The equipment and measurement parameters supported depend on the specific calibration requirement. Contact our team with your equipment details so we can assess the requirement.
  - *Q4*: How can I request calibration service?
    *A*: You can contact CalSEVA through our enquiry form, phone, or email. Share your equipment and calibration requirements, and our team will assist you with the next steps.

### 3.5 Mission Quote & Multimeter Section
- **Mission Tag**: *“To become a trusted calibration support partner for businesses that depend on accurate measurement and reliable equipment.”*
- **Visual Equipment Display**: High-detail digital multimeter visual asset (`Gemini_Generated_Image_rynkgkrynkgkrynk 1.png`).

### 3.6 Footer & Contact Section
- **Background Color**: `#3b4f51` (CalSeva Deep Teal).
- **Brand Info**: CalSeva overview statement.
- **Contact Details**: Phone | Email | Location info.
- **Legal Links**: Privacy Policy | Terms & Conditions.
- **Copyright**: `© CalSEVA. All Rights Reserved.`

---

## 4. Architecture Data Flow

```mermaid
graph TD
    User[End User / Browser] -->|1. Request Page| Vercel[Vercel Edge Network CDN]
    Vercel -->|2. Deliver HTML/JS/CSS| User
    User -->|3. Click Request Service CTA| Modal[Service Request Modal / Form]
    User -->|4. Smooth Scroll Nav| Anchor[Section Anchors (#services, #faqs, #contact)]
```

---

## 5. Non-Functional Requirements
- **Performance**: Lighthouse Performance score > 95; First Contentful Paint < 0.8s.
- **Responsiveness**: 100% responsive across Mobile (<640px), Tablet (640px-1024px), Desktop (>1024px).
- **Font & Styling**: Strict compliance with Google Sans Flex typography and Figma design specifications.
