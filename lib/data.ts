export const projectData = {
  title: "Secure Motorcycle Companion",
  shortDescription: "Revolutionizing Rider Safety In Uganda",
  description:
    "The Secure Motorcycle Companion (SMC) is an innovative safety system designed to enhance motorcycle rider (boda-boda) safety in Uganda through integrated hardware and software solutions. Developed by the BSSE-25-29 group at Makerere University's School of Computing and Informatics Technology, this final-year project addresses critical road safety challenges in Uganda, where motorcyclists face a disproportionately high risk of accidents, contributing to 0.03% of annual fatalities (Uganda Police Force, 2023).",
  features: [
    {
      title: "Helmet Detection and Ignition Control",
      description:
        "A capacitive touch sensor in the helmet verifies proper helmet usage. The motorcycle's ignition remains disabled unless the helmet is correctly worn, ensuring compliance with Uganda's Traffic and Road Safety Regulations.",
    },
    {
      title: "Crash Detection and Verification",
      description:
        "Using an MPU6050 accelerometer and a tilt switch, the system detects sudden decelerations and abnormal tilts indicative of a crash. Multi-sensor verification minimizes false positives, triggering emergency protocols only when a crash is confirmed.",
    },
    {
      title: "Real-Time Location Tracking",
      description:
        "A NEO-6M GPS module provides accurate latitude and longitude data. In the event of a crash, the system timestamps the incident and shares precise location details for rapid response.",
    },
    {
      title: "Emergency Messaging",
      description:
        "Upon crash detection, the SIM800L GSM module sends an SMS to the rider's registered next of kin, including a Google Maps link with the crash location, enabling quick navigation to the site.",
    },
    {
      title: "Cloud Data Integration",
      description:
        "Crash data, including GPS coordinates and incident timestamps, is uploaded to a ThingSpeak cloud platform for storage and analytics. This supports remote monitoring and historical record-keeping.",
    },
    {
      title: "Administrative Dashboard",
      description:
        "A web-based dashboard allows authorized personnel to monitor rider profiles, recent accidents, and system health. It also enables updates to emergency contact information and provides analytics on accident-prone areas.",
    },
  ],
  conclusion:
    "The Secure Motorcycle Companion is a testament to the power of technology in addressing real-world challenges. By combining embedded systems, cloud integration, and user-centric design, our team has created a solution that not only saves lives but also sets the stage for future innovations in road safety. We invite you to explore our project and join us in making motorcycle riding safer for everyone.",
};

export const timelineData = [
  {
    period: "20th Feb 2025 - 1st March 2025",
    title: "Project Conceptualization",
    completion: 100,
    tasks: [
      "Conducted background research on motorcycle accident statistics and existing safety solutions.",
      "Defined project scope, focusing on helmet compliance, crash detection, and emergency response.",
      "Drafted initial System Requirements Specification (SRS v1.0).",
    ],
  },
  {
    period: "2nd March 2025 - 15th March 2025",
    title: "Requirements Refinement",
    completion: 100,
    tasks: [
      "Revised SRS (v1.1 and v1.2) based on stakeholder feedback, replacing infrared sensors with touch sensors and removing intoxication checks.",
      "Established version control using GitHub and GitFlow.",
    ],
  },
  {
    period: "16th March 2025 - 30th March 2025",
    title: "System Design and Prototyping",
    completion: 100,
    tasks: [
      "Designed hardware schematics for helmet and motorcycle modules.",
      "Developed firmware for ESP32 and Arduino Nano, integrating sensor data and BLE communication.",
      "Built initial web dashboard prototype using Next.js and PostgreSQL.",
    ],
  },
  {
    period: "1st April 2025 - 15th April 2025",
    title: "Implementation and Integration",
    completion: 100,
    tasks: [
      "Coded and compiled firmware using Arduino IDE and avr-gcc.",
      "Integrated hardware components (GPS, GSM, accelerometer, tilt switch) and tested BLE connectivity.",
      "Addressed anomalies like intermittent BLE disconnections and GPS fix issues through firmware updates and hardware rerouting.",
    ],
  },
  {
    period: "16th April 2025 - 30th April 2025",
    title: "Testing and Validation",
    completion: 85,
    tasks: [
      "Conducted unit, integration, and system acceptance tests, achieving 100% coverage of safety-critical paths.",
      "Performed 72-hour stress tests and 50 staged crash simulations to verify crash detection and SMS delivery.",
      "Finalized dashboard functionality, ensuring responsive design for desktop and mobile.",
    ],
  },
  {
    period: "1st May 2025 - 15th May 2025",
    title: "Documentation and Finalization",
    completion: 80,
    tasks: [
      "Compiled comprehensive documentation, including system architecture, hardware design, and user manuals.",
      "Prepared the project report for submission, detailing implementation, testing, and maintenance plans.",
      "Conducted final system acceptance tests in early August 2025.",
    ],
  },
  {
    period: "17th May 2025 - 24th May 2025",
    title: "Project Submission and Presentation",
    completion: 0,
    tasks: [
      "Submitted the final project report to the School of Computing and Informatics Technology.",
      "Presented the Secure Motorcycle Companion to faculty and stakeholders, showcasing its impact on rider safety.",
    ],
  },
];

export const teamMembers = [
  {
    id: "mary-nsabagwa",
    name: "Dr. Mary Nsabagwa",
    role: "Supervisor",
    image: "/default-avatar.png",
    bio: "Dr. Mary Nsabagwa is an experienced academic with expertise in embedded systems and IoT applications. She provided academic guidance, technical oversight, and feedback throughout the project lifecycle.",
    email: "mary.nsabagwa@example.com",
    github: "https://github.com/marynsabagwa",
    linkedin: "https://linkedin.com/in/marynsabagwa",
    contributions: [
      "Provided academic guidance and technical oversight",
      "Facilitated stakeholder engagement and requirements validation",
      "Reviewed project milestones and provided critical feedback",
      "Mentored team members on research methodologies and documentation",
    ],
  },
  {
    id: "amale-frank",
    name: "Amale Frank",
    role: "Hardware Lead",
    image: "/default-avatar.png",
    bio: "Amale Frank is a skilled hardware engineer with a passion for embedded systems. He designed and integrated hardware components, including ESP32 and Arduino Nano modules, and managed sensor calibration.",
    email: "frank.amale@example.com",
    github: "https://github.com/frankamale",
    linkedin: "https://linkedin.com/in/frankamale",
    contributions: [
      "Designed and integrated hardware components",
      "Managed sensor calibration and testing",
      "Developed circuit schematics and PCB layouts",
      "Conducted hardware troubleshooting and optimization",
    ],
  },
  {
    id: "nakamyuka-daphne",
    name: "Nakamyuka Daphne",
    role: "Firmware Lead",
    image: "/default-avatar.png",
    bio: "Nakamyuka Daphne is an expert in embedded firmware development and microcontroller programming. She led the development and refinement of low-level software for system stability and performance.",
    email: "daphne.nakamyuka@example.com",
    github: "https://github.com/daphnenakamyuka",
    linkedin: "https://linkedin.com/in/daphnenakamyuka",
    contributions: [
      "Led firmware development and optimization for microcontrollers",
      "Ensured stability and reliability of low-level system code",
      "Integrated firmware with sensors and communication protocols",
      "Collaborated with hardware and software teams to ensure compatibility",
    ],
  },
  {
    id: "kisakye-martha",
    name: "Kisakye Martha",
    role: "Data & Analytics Lead",
    image: "/martha.jpg",
    bio: "Kisakye Martha is a motivated data engineer. She builds and maintains data pipelines, transforms raw data into structured formats, and supports analytics through clean, reliable datasets.",
    email: "mkisakye15@gmail.com",
    github: "https://github.com/MarthaKJ",
    linkedin: "https://www.linkedin.com/in/martha-kisakye-mj5/",
    contributions: [
      "Assisted in cleaning, normalizing, and enriching structured and semi-structured data",
      "Contributed to designing simple data models for analytics and reporting",
      "Collaborated with team members to ensure data accuracy and reliability",
      "Created user manuals and technical guides",
    ],
  },

  {
    id: "wabweni-brian",
    name: "Wabweni Brian",
    role: "Software Lead",
    image: "/brian.jpg",
    bio: "Wabweni Brian is a full-stack developer with a strong foundation in web technologies. He led the development of the web backend and dashboard, ensuring seamless cloud integration and responsive UI design.",
    email: "wabwenib66@gmail.com",
    github: "https://github.com/WabweniBrian",
    linkedin: "https://www.linkedin.com/in/wabweni-brian-631079247",
    contributions: [
      "Led the development of the web backend using Node.js and Next.js",
      "Designed and implemented the administrative dashboard",
      "Ensured seamless cloud integration with ThingSpeak",
      "Implemented responsive UI design for multiple devices",
    ],
  },
];
