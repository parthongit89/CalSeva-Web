# System Architecture & Tech Stack (Architecture.md) - CalSeva Web

## 1. Technology Stack Overview

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Markup Engine** | HTML5 | Multi-page static architecture (`index.html` & `contact.html`) |
| **Styling & Layout** | CSS3 & Custom Variables | Google Sans Flex typography & generous section spacing |
| **Interactivity** | Vanilla JavaScript (ES6+) | FAQ accordion toggles & mobile navbar navigation |
| **Typography** | Google Sans Flex | Primary brand variable font via Google Fonts |
| **Icons** | SVG / Google Icons | Vector indicators & contact channel triggers |
| **Hosting Platform** | Vercel Edge CDN | Static CDN deployment (zero Node.js build requirement) |
| **Version Control** | Git & GitHub | Main repo: `https://github.com/parthongit89/CalSeva-Web.git` |

---

## 2. Directory Structure Specification

```
calseva-web/
├── index.html                                       # Main landing page (Hero, Services, FAQs, Mission)
├── contact.html                                     # Dedicated page (Raise a service request & Contact Us)
├── styles.css                                       # Google Sans Flex typography, colors, layout rules
├── script.js                                        # Vanilla JS interactivity (Accordions, Mobile Nav)
├── vercel.json                                      # Vercel static routing & cache headers configuration
├── images/
│   ├── icon-512.png                                # CalSeva Brand Icon Logo
│   ├── e4494062-c07e-45af-b2ba-cf305ef83024 1.png     # Equipment Header Visual 1
│   ├── Gemini_Generated_Image_2l1qd32l1qd32l1q 1.png # Equipment Header Visual 2
│   ├── Gemini_Generated_Image_xe1zpgxe1zpgxe1z 2.png # Temperature Probe Visual
│   ├── Gemini_Generated_Image_rynkgkrynkgkrynk 1.png # Multimeter Visual
│   ├── Gemini_Generated_Image_96xcng96xcng96xc 1.png # Machine Calibration Illustration
│   ├── Frame 16.png                                # Decorative Equipment Asset
│   └── https_forms_gle_XVFxmsZ1DTTkCQow6.png       # Service Request Form QR Code
├── README.md
├── PRD.md
├── Architecture.md
├── Designs.md
├── Color_theory.md
├── Typography_icons.md
├── Deployment_vercel.md
├── Phases.md
├── Rules.md
└── Memory.md
```
