(function () {
  window.PORTFOLIO_DATA = {
    profile: {
      fullName: "NGUYEN GIA HAU",
      title: "Fresher Software Developer",
      avatarSrc: "assets/images/avatar.jpg",
      avatarAlt: "Nguyen Gia Hau avatar",
      phone: "0346269996",
      phoneHref: "tel:+84346269996",
      email: "nguyengiahau2004@gmail.com",
      emailHref: "mailto:nguyengiahau2004@gmail.com",
      githubLabel: "github.com/nguyengiahau0508",
      githubHref: "https://github.com/nguyengiahau0508",
      location: "574/45 Le Hong Phong, Phu Hoa, Thu Dau Mot, Binh Duong, Ho Chi Minh",
      objective:
        "Final-year Information Technology student seeking a Fresher Software Developer position. Passionate about backend and full-stack development, with hands-on experience in Angular, NestJS, and MariaDB. Eager to contribute to real-world projects while continuously improving technical and problem-solving skills.",
      cvFile: "NGUYEN GIA HAU - SOFTWARE DEVELOPER INTERNSHIP - EN.pdf"
    },

    quickStats: [
      { label: "GPA", value: "3.2 / 4.0" },
      { label: "Teaching", value: "~3 years at MindX" },
      { label: "Research", value: "4 projects scored 80+" },
      { label: "Highlight", value: "Coderank Top 2 | 95/100" }
    ],

    skills: {
      core: ["Angular", "NestJS", "MariaDB"],
      familiar: ["Linux", "Docker", "Nginx", "AWS", "Git", "Redis", "OAuth2"]
    },

    experience: [
      {
        period: "2026 (3 Months)",
        company: "CIT Software",
        logo: "assets/images/logo/cit-logo.jpg",
        role: "Backend Developer Intern",
        bullets: [
          "Developed backend services using NestJS and CMS features using React.",
          "Implemented new features, fixed bugs, and maintained existing systems.",
          "Collaborated with team members in an Agile development environment.",
          "Worked with RESTful APIs, databases, and Git version control."
        ]
      },
      {
        period: "2023 - Present (~3 years)",
        company: "MindX Technology School",
        logo: "assets/images/logo/mindx-logo.png",
        role: "Programming Instructor (Part-time)",
        bullets: [
          "Taught Scratch, Python, and Web Development courses to students.",
          "Designed hands-on lessons and guided coding projects.",
          "Evaluated student progress and provided learning support."
        ]
      }
    ],

    projects: [
      {
        name: "Bạn Say Tôi Lái (You Drink, I Drive)",
        type: "Company Project",
        role: "Backend Developer Intern",
        period: "2026 (3 Months)",
        description:
          "A multi-service mobility platform providing on-demand ride-hailing, driver matching, and flexible self-driving vehicle rentals.",
        stack: [
          "NestJS",
          "React",
          "VNPAY API",
          "MariaDB",
          "Git"
        ],
        highlights: [
          "Developed RESTful APIs for the self-driving car rental module, enabling users to search, book, and manage vehicle rentals.",
          "Integrated VNPAY payment gateway APIs to handle transactions across various modules, including ride bookings, discount code purchases, and driver security deposits.",
          "Built a secure wallet and fund withdrawal module for drivers.",
          "Implemented a dynamic Role-Based Access Control (RBAC) system for both the backend API and the Admin CMS.",
          "Collaborated with the QA team to troubleshoot and fix reported bugs, ensuring system stability."
        ],
        logo: "assets/images/projects/bansaytoilai/bansaytoilai_logo.png",
        media: [
          {
            src: "assets/images/projects/bansaytoilai/preview.jpg",
            alt: "Bạn Say Tôi Lái system preview"
          }
        ],
        links: []
      },
      {
        name: "CodeRank - AI-powered Programming Learning Platform",
        period: "2024 - 2025",
        description:
          "Developed a programming learning platform with courses and coding exercises (C++, Python).",
        stack: [
          "Angular 21",
          "PrimeNG 21",
          "Tailwind CSS 4",
          "Monaco Editor",
          "NestJS 11",
          "TypeORM",
          "MariaDB",
          "BullMQ",
          "Express + LLM Agent",
          "JWT + OAuth"
        ],
        highlights: [
          "Built an automated submission and grading system.",
          "Integrated AI-based chatbot to assist users in solving problems, analyzing errors, and improving learning efficiency.",
          "Achieved 95/100 score, ranked Top 2 in faculty.",
          "Resulted in 1 scientific publication presented at faculty-level conference."
        ],
        media: [
          {
            src: "evidence/projects/coderank/Trang danh sách bài tập.png",
            alt: "Exercise list page on Coderank"
          }
        ],
        links: [
          {
            label: "GitHub Repository",
            href: "https://github.com/nguyengiahau0508/coderank"
          },
          {
            label: "Watch demo video",
            href: "https://www.youtube.com/watch?v=RzGnqTQyCW8&list=PLwUXS99hcSiEnMu3yWYT4iB4wJUHOvzMb&index=3"
          }
        ]
      },
      {
        name: "Auctions Project - Multi-Service Auction Platform",
        period: "2024 - 2025",
        description:
          "A full-stack auction system built with a React frontend and multiple NestJS backend services for assets, auction workflows, and event operations.",
        stack: [
          "React + TypeScript",
          "Vite",
          "Tailwind CSS",
          "Ant Design",
          "NestJS",
          "TypeORM",
          "MariaDB",
          "Axios"
        ],
        highlights: [
          "Designed a split architecture with auction-web-app frontend and three backend services: asset-service, auction-management-service, and event-management-service.",
          "Implemented client features including homepage modules, asset filters, detail pages, popup login with token persistence, and a personal workspace with notifications and bidding history.",
          "Built admin modules for Account, Assets, Auction, Activities, Finance, Inspector, and Request domains with searchable, filterable, paginated CRUD tables.",
          "Delivered practical API integrations on key screens: User, Inspector, Request, Asset Type, Asset, Inventory, Warehouse, Auction Item, Auction Session, and Tax.",
          "Configured local environments for frontend and backend services with dedicated ports, MariaDB databases, and Swagger endpoints.",
          "Defined build, lint, test, and e2e workflows for the frontend and each NestJS service to support maintainable delivery."
        ],
        media: [
          {
            src: "evidence/projects/auction/Trang chủ.png",
            alt: "Auctions platform homepage"
          }
        ],
        links: [
          {
            label: "Watch demo video",
            href: "https://www.youtube.com/watch?v=rMuSP0EIe5c&list=PLwUXS99hcSiEnMu3yWYT4iB4wJUHOvzMb&index=4"
          }
        ]
      },
      {
        name: "Research Management - Scientific Research Management System",
        period: "2024 - 2025",
        description:
          "A full-stack research management platform organized as a monorepo, with dedicated applications for Admin, Student, and Lecturer, plus a NestJS backend for authentication, business workflows, and data services.",
        stack: [
          "Angular 19",
          "Angular Material + CDK",
          "RxJS",
          "NestJS 10",
          "TypeORM",
          "MariaDB/MySQL",
          "JWT + Passport",
          "Google OAuth2",
          "Swagger",
          "Nodemailer + Handlebars"
        ],
        highlights: [
          "Designed a role-based frontend architecture with three separate SPAs: admin client, student client, and lecturer client.",
          "Built modular backend domains for authentication, profiles, departments, research groups, research topics, and publication management.",
          "Implemented Google OAuth2 login, JWT cookie sessions, registration approval flow, profile retrieval, and logout handling.",
          "Developed scientific activity modules including mentorship, awards, achievements, practical applications, and external activities.",
          "Integrated supporting services for Google Drive file management, email notifications, and MoMo payment workflows.",
          "Defined environment-driven deployment settings for database, JWT lifecycle, OAuth, mailer, and payment gateways."
        ],
        media: [
          {
            src: "evidence/projects/QL-NCKH/Giao diện dashboard của giáo viên.png",
            alt: "Lecturer dashboard of QL-NCKH system"
          }
        ],
        links: [
          {
            label: "GitHub Repository",
            href: "https://github.com/nguyengiahau0508/Research-Management"
          }
        ]
      },
      {
        name: "TDMU Dispatch System",
        period: "2024 - 2025",
        description:
          "An electronic document management and processing system developed for Thu Dau Mot University, supporting the full workflow from document creation and approval to storage and retrieval.",
        stack: [
          "Angular 20",
          "PrimeNG",
          "TailwindCSS",
          "NestJS 11",
          "GraphQL",
          "TypeORM",
          "MariaDB/MySQL",
          "JWT + Passport"
        ],
        highlights: [
          "Implemented authentication and authorization features including JWT login, email OTP verification, role-based permissions (Admin, User, Manager), and token refresh.",
          "Built document management capabilities: create/edit/delete, multi-format file upload, category classification, search/filter, and version tracking.",
          "Developed configurable workflow and multi-level approval processes with status tracking, auto notifications, and approval history.",
          "Integrated organizational management modules for departments, hierarchical structures, and role assignment.",
          "Designed architecture for Angular frontend, NestJS GraphQL backend, MariaDB persistence, and Google Drive file integration."
        ],
        media: [
          {
            src: "evidence/projects/TDMU-DISPATCH/Giao diện xử lý văn bản.png",
            alt: "Document processing interface on TDMU Dispatch System"
          }
        ],
        links: [
          {
            label: "GitHub Repository",
            href: "https://github.com/nguyengiahau0508/tdmu-dispatch-dev"
          }
        ]
      }
    ],

    education: [
      {
        period: "2022 - Present",
        school: "Thu Dau Mot University",
        major: "Information Technology",
        gpa: "3.2 / 4.0"
      }
    ],

    achievements: [
      "3rd Prize, 11th Student Programming Contest (Thu Dau Mot University)",
      "Consolation Prize, 9th & 10th Student Programming Contest (Thu Dau Mot University)",
      "Consolation Prize, 3rd Information Security Contest (Thu Dau Mot University)",
      "Completed 5 scientific research projects, including one project scoring 95/100",
      "Published 1 faculty-level scientific paper (2025)"
    ],

    evidenceCategories: [
      {
        id: "contest",
        label: "Contest Awards",
        items: [
          {
            type: "image",
            title: "Consolation Prize - Information Security Contest (3rd)",
            src: "evidence/contests/Ảnh đạt giải cuộc thi An Toàn Thông Tin Đại Học Thủ Dầu Một lần 3.jpg"
          },
          {
            type: "image",
            title: "Third Prize - Student Programming Contest (11th)",
            src: "evidence/contests/Ảnh đạt giải ba cuộc thi Lập Trình Sinh Viên Đại Học Thủ Dầu Một lần 11.jpg"
          },

          {
            type: "image",
            title: "Consolation Prize Certificate - Student Programming Contest (10th)",
            src: "evidence/contests/Giấy khen khuyến khích cuộc thi Lập Trình Sinh Viên Đại Học Thủ Dầu Một Lần 10.jpg"
          },
          {
            type: "image",
            title: "Consolation Prize - Student Programming Contest (10th)",
            src: "evidence/contests/Ảnh đạt giải khuyến khích cuộc thi Lập Trình Sinh Viên Đại Học Thủ Dầu Một lần 10.jpg"
          },
          {
            type: "image",
            title: "Consolation Prize - Student Programming Contest (9th)",
            src: "evidence/contests/Ảnh đạt giải khuyến khích cuộc thi Lập Trình Sinh Viên Đại Học Thủ Dầu Một lần 9.jpg"
          },
          ,
          {
            type: "image",
            title: "ICPC National 2025 Participation",
            src: "evidence/contests/Ảnh tham gia cuộc thi ICPC NATIONAL 2025.jpg"
          },
          {
            type: "image",
            title: "ICPC National 2024 Participation",
            src: "evidence/contests/Ảnh tham gia cuộc thi ICPC NATIONAL 2024.jpg"
          }
        ]
      },
      {
        id: "work",
        label: "Teaching Evidence",
        items: [
          {
            type: "image",
            title: "MindX trial class",
            src: "evidence/work/mindx/TRIAL.jpg"
          },
          {
            type: "image",
            title: "MindX class - TDM-C4K-GA20",
            src: "evidence/work/mindx/TDM-C4K-GA20.jpg"
          },
          {
            type: "image",
            title: "MindX class - TA-C4K-GB01-HB",
            src: "evidence/work/mindx/TA-C4K-GB01-HB.jpg"
          }
        ]
      },
      {
        id: "research",
        label: "Research Projects",
        items: [
          {
            type: "image",
            title: "Research Mangement - Acceptance result (80 points)",
            src: "evidence/projects/QL-NCKH/Kết quả nghiệm thu QL-NCKH.png"
          },
          {
            type: "image",
            title: "Coderank - Acceptance result (95 points)",
            src: "evidence/projects/coderank/Kết quả nghiệm thu đề tài coderank.png"
          },
          {
            type: "pdf",
            title: "Faculty-level scientific paper",
            thumbnail: "evidence/projects/coderank/Coderank - Bài báo khoa học.png",
            src: "evidence/Bài báo - Nguyễn Gia Hậu_Phát triển công cụ hỗ trợ sinh viên học lập trình.pdf"
          }
        ]
      },
    ]
  };
})();
