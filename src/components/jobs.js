
let job_list = [
    {
        job_id: "10085",
        job_posting_date: "08-10-2024", //DD-MM-YYYY
        work_type: "Remote",
        icon: "/assets/tesla.svg",
        company: "Tesla",
        role: "Software Developer",
        location: "Toronto",
        salary: "45000 USD/Year",
        eligibilty: "BTech CSE,IT,ECE,EEE 2026 batch",
        role_description: "We are seeking a passionate and skilled Software Developer to join our dynamic development team. The ideal candidate will design, develop, and maintain software solutions, contributing to all stages of the development lifecycle. You will work closely with other developers, product managers, and stakeholders to ensure high-quality, scalable, and secure applications. This role requires a balance of strong technical expertise, collaboration, and problem-solving skills.",
    },
    {
        job_id: "14827",
        job_posting_date: "08-09-2024", //DD-MM-YYYY
        work_type: "Remote",
        icon: "/assets/google.svg",
        company: "Google",
        role: "Frontend Engineer",
        location: "Mountain View",
        salary: "120000 USD/Year",
        eligibilty: "Btech 2025 and 2026 batch, CSE,IT",
        role_description: "We are looking for a talented Frontend Engineer who is passionate about crafting intuitive and dynamic user experiences. The ideal candidate will be responsible for translating UI/UX designs into high-quality, interactive, and scalable web applications. You will work closely with the backend team, designers, and stakeholders to ensure that the front-end of the application is both visually appealing and functionally robust.",
    },
    {
        job_id: "19056",
        job_posting_date: "08-10-2024", //DD-MM-YYYY
        work_type: "Remote",
        icon: "/assets/apple.svg",
        company: "Amazon",
        role: "Backend Developer",
        location: "Seattle",
        salary: "110000 USD/Year",
        eligibilty: "BTech CSE,IT,ECE,EEE 2025 and 2026 batch",
        role_description: "As a backend developer, you will be responsible for designing, developing, and maintaining the server-side components of our web applications. You will work closely with front-end developers, DevOps, and other team members to deliver high-performance, scalable, and secure applications that power our user-facing products. If you are passionate about backend technologies, data management, and API development, we’d love to meet you!",
    },
    {
        job_id: "16709",
        job_posting_date: "08-10-2024", //DD-MM-YYYY
        work_type: "On-site",
        icon: "/assets/microsoft.svg",
        company: "Microsoft",
        role: "Cloud Engineer",
        location: "Redmond",
        salary: "130000 USD/Year",
        eligibilty: "BTech CSE,IT,ECE,EEE 2025 and 2026 batch",
        role_description: "We are seeking an experienced Cloud Engineer to design, implement, and maintain cloud-based infrastructure and services. As a Cloud Engineer, you will work on deploying, automating, and managing cloud-based systems that are scalable, resilient, and secure. You will collaborate with development, operations, and security teams to ensure optimal performance, reliability, and cost-efficiency of cloud environments.",
    },
    {
        job_id: "13456",
        job_posting_date: "10-05-2024", //DD-MM-YYYY
        work_type: "On-site",
        icon: "/assets/apple.svg",
        company: "Apple",
        role: "iOS Developer",
        location: "Cupertino",
        salary: "140000 USD/Year",
        eligibilty: "2024 and 2025 BTech CSE",
        role_description: "We are looking for a skilled iOS Developer to join our team in designing and developing high-quality mobile applications for Apple’s iOS platform. The ideal candidate will be responsible for building innovative and user-friendly apps.",
    },
    {
        job_id: "18292",
        job_posting_date: "08-10-2024", //DD-MM-YYYY
        work_type: "Remote",
        icon: "/assets/netflix.svg",
        company: "Netflix",
        role: "DevOps Engineer",
        location: "Los Angeles",
        salary: "135000 USD/Year",
        eligibilty: "2026 passouts",
        role_description: "",
    },
    {
        job_id: "14590",
        job_posting_date: "08-10-2024", //DD-MM-YYYY
        work_type: "Remote",
        icon: "/assets/facebook.svg",
        company: "Facebook",
        role: "Data Scientist",
        location: "Menlo Park",
        salary: "150000 USD/Year",
        eligibilty: "2026 passouts",
        role_description: "",
    },
    {
        job_id: "14324",
        job_posting_date: "08-10-2024", //DD-MM-YYYY
        work_type: "Remote",
        icon: "/assets/uber.svg",
        company: "Uber",
        role: "Mobile App Developer",
        location: "San Francisco",
        salary: "125000 USD/Year",
        eligibilty: "2026 passouts",
        role_description: "",
    },
    {
        job_id: "10410",
        job_posting_date: "08-10-2024", //DD-MM-YYYY
        work_type: "Remote",
        icon: "/assets/infosys.svg",
        company: "Infosys",
        role: "Full Stack Developer",
        location: "Bangalore",
        salary: "18 LPA",
        eligibilty: "2026 passouts",
        role_description: "We are looking for a talented Full Stack Developer to join our team and help build and maintain end-to-end web applications. You will work across the entire development stack, from frontend interfaces to backend systems, ensuring seamless integration and performance. You’ll collaborate with designers, product managers, and other developers to deliver high-quality, user-friendly applications.",
    },
    {
        job_id: "24632",
        job_posting_date: "08-10-2024", //DD-MM-YYYY
        work_type: "Remote",
        icon: "/assets/tcs.svg",
        company: "Tata Consultancy Services (TCS)",
        role: "Java Developer",
        location: "Mumbai",
        salary: "10 LPA",
        eligibilty: "2026 passouts",
        role_description: "",
    },
    {
        job_id: "25342",
        job_posting_date: "08-10-2024", //DD-MM-YYYY
        work_type: "Remote",
        icon:"/assets/wipro.svg",
        company: "Wipro",
        role: "UI/UX Designer",
        location: "Hyderabad",
        salary: "12 LPA",
        eligibilty: "2026 passouts",
        role_description: "We are seeking a UI/UX Designer with a passion for creating user-centered designs that are intuitive, visually appealing, and functional. You will be responsible for understanding user needs, conducting research, creating wireframes and prototypes, and collaborating with developers to bring your designs to life. Your work will directly influence the user experience of our products.",
    },
    {
        job_id: "19878",
        job_posting_date: "08-10-2024", //DD-MM-YYYY
        work_type: "Remote",
        icon:"/assets/hcl.svg",
        company: "HCL Technologies",
        role: "Network Engineer",
        location: "Chennai",
        salary: "15 LPA",
        eligibilty: "2026 passouts",
        role_description: "We are looking for a Network Engineer to design, implement, and maintain our company’s network infrastructure. You will be responsible for ensuring network security, reliability, and scalability while optimizing performance. This role requires a strong understanding of networking protocols, hardware, and cloud networking environments.",
    },
    {
        job_id: "17654",
        job_posting_date: "08-10-2024", //DD-MM-YYYY
        work_type: "Remote",
        icon:"/assets/cognizant.svg",
        company: "Cognizant",
        role: "Data Analyst",
        location: "Pune",
        salary: "13 LPA",
        eligibilty: "2026 passouts",
        role_description: "",
    },
    {
        job_id: "18989",
        job_posting_date: "08-10-2024", //DD-MM-YYYY
        work_type: "Remote",
        icon: "/assets/flipkart.svg",
        company: "Flipkart",
        role: "Product Manager",
        location: "Bangalore",
        salary: "22 LPA",
        eligibilty: "2026 passouts",
        role_description: "",
    },
    {
        job_id: "12674",
        job_posting_date: "08-10-2024", //DD-MM-YYYY
        work_type: "Remote",
        icon: "/assets/swiggy.svg",
        company: "Swiggy",
        role: "Machine Learning Engineer",
        location: "Gurgaon",
        salary: "20 LPA",
        eligibilty: "2026 passouts",
        role_description: "",
    },
    {
        job_id: "23114",
        job_posting_date: "08-10-2024", //DD-MM-YYYY
        work_type: "Remote",
        icon: "/assets/zomato.svg",
        company: "Zomato",
        role: "Backend Developer",
        location: "Delhi",
        salary: "18 LPA",
        eligibilty: "2026 passouts",
        role_description: "As a backend developer, you will be responsible for designing, developing, and maintaining the server-side components of our web applications. You will work closely with front-end developers, DevOps, and other team members to deliver high-performance, scalable, and secure applications that power our user-facing products. If you are passionate about backend technologies, data management, and API development, we’d love to meet you!",
    },
    {
        job_id: "10123",
        job_posting_date: "08-10-2024", //DD-MM-YYYY
        work_type: "Remote",
        icon: "/assets/nvidia.svg",
        company: "Nvidia",
        role: "Frontend Developer",
        location: "Bangalore",
        salary: "32 LPA",
        eligibilty: "2026 passouts",
        role_description: "",
    }
];

export default job_list;