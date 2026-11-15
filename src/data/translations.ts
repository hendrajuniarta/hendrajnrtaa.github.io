export type Language = 'en' | 'id'

export interface TranslationDictionary {
  nav: {
    home: string
    about: string
    experience: string
    projects: string
    education: string
    certifications: string
    contact: string
    contactMe: string
  }
  hero: {
    fullName: string
    brandName: string
    title: string
    shortBio: string
    yearsNumber: string
    yearsLabel: string
    gpaNumber: string
    gpaLabel: string
    enterpriseNumber: string
    enterpriseLabel: string
    exploreProjects: string
    contactMe: string
    activeStatus: string
    developerRole: string
  }
  about: {
    title: string
    subtitle: string
    knownAs: string
    bioP1: string
    bioP2: string
    strengthsTitle: string
    highlights: string[]
    techStackTitle: string
    categories: Array<{
      title: string
      badge: string
      tags: string[]
    }>
  }
  experience: {
    title: string
    subtitle: string
    present: string
    responsibilitiesTitle: string
    items: Array<{
      id: string
      role: string
      company: string
      location: string
      date: string
      description: string
      highlights: string[]
    }>
  }
  projects: {
    title: string
    subtitle: string
    detailsTitle: string
    visitButton: string
    internalBadge: string
    items: Array<{
      id: string
      title: string
      category: string
      badgeType: string
      subCategory: string
      description: string
      highlights: string[]
      tags: string[]
      liveUrl?: string
    }>
  }
  education: {
    title: string
    subtitle: string
    badge: string
    institution: string
    degree: string
    startDate: string
    endDate: string
    gpaLabel: string
    gpaValue: string
    description: string
    highlightsTitle: string
    highlights: string[]
  }
  certifications: {
    title: string
    subtitle: string
    credentialDoc: string
    verifiedBadge: string
    clickToEnlarge: string
    domainsTitle: string
    items: Array<{
      id: string
      title: string
      categoryBadge: string
      issuer: string
      date: string
      description: string
      domains: string[]
    }>
  }
  contact: {
    title: string
    subtitle: string
    heading: string
    description: string
    emailLabel: string
    locationLabel: string
    locationValue: string
    directContact: string
    sendInquiry: string
    ctaDescription: string
    sendButton: string
  }
  footer: {
    roleTitle: string
    builtWith: string
    backToTop: string
  }
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      certifications: 'Certifications',
      contact: 'Contact',
      contactMe: 'Contact Me',
    },
    hero: {
      fullName: 'I Kadek Hendra Juniarta',
      brandName: 'Hendra Juniarta',
      title: 'Software Developer',
      shortBio:
        'A passionate Software Developer with 1.5 years of professional experience, combining a solid academic background in Information Technology with hands-on enterprise software development and IT infrastructure support.',
      yearsNumber: '1.5+',
      yearsLabel: 'Years Exp',
      gpaNumber: '3.66',
      gpaLabel: 'GPA (IT at PNB)',
      enterpriseNumber: 'Enterprise',
      enterpriseLabel: 'Dev & Support',
      exploreProjects: 'Explore Projects',
      contactMe: 'Get In Touch',
      activeStatus: 'Active',
      developerRole: 'Software Developer',
    },
    about: {
      title: 'About Me',
      subtitle:
        'Bridging academic knowledge with robust enterprise software engineering and reliable IT operations.',
      knownAs: 'Known professionally as',
      bioP1:
        'I am a Software Developer with over 1.5 years of professional experience building, maintaining, and optimizing enterprise-grade web applications. I combine a solid academic foundation in Information Technology from Politeknik Negeri Bali with practical industry and government institution field experience.',
      bioP2:
        'My focus spans the entire software engineering lifecycle from designing intuitive, responsive user interfaces with React & TypeScript, architecting high-performance backend systems with ASP.NET (.NET Core) & Microservices, to comprehensive network maintenance and IT technical troubleshooting.',
      strengthsTitle: 'Core Strengths & Highlights',
      highlights: [
        '1.5 Years of hands-on Software Engineering experience in enterprise web apps.',
        'Strong foundation in MVC Architecture and Microservices using ASP.NET Core & React.',
        'Proven track record in IT Support and infrastructure troubleshooting at Polresta Denpasar.',
        'Strong academic background in Information Technology at Politeknik Negeri Bali (GPA 3.66/4.00).',
      ],
      techStackTitle: 'Technology Stack & Competencies',
      categories: [
        {
          title: 'Frontend Development',
          badge: 'Client-side',
          tags: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive UI'],
        },
        {
          title: 'Backend & Architecture',
          badge: 'Core Services',
          tags: ['ASP.NET Core', 'C#', 'Microservices', 'MVC Pattern', 'RESTful API'],
        },
        {
          title: 'IT Infrastructure & Support',
          badge: 'Operations',
          tags: ['Hardware & Network', 'System Troubleshooting', 'OS & Server Support'],
        },
        {
          title: 'Security & Best Practices',
          badge: 'Standards',
          tags: ['Cybersecurity Fundamentals', 'Data Integrity', 'Git & Version Control'],
        },
      ],
    },
    experience: {
      title: 'Professional Experience',
      subtitle:
        'Hands-on industry journey delivering software solutions and operational IT infrastructure.',
      present: 'Present',
      responsibilitiesTitle: 'Key Responsibilities & Impact',
      items: [
        {
          id: 'sanata-system',
          role: 'Software Engineer',
          company: 'PT. Sanata System',
          location: 'Bali, Indonesia',
          date: '2025 – Present',
          description:
            'Spearheaded end-to-end web application development, maintenance, and performance optimization with a core focus on scalability and responsiveness.',
          highlights: [
            'Led full-lifecycle development and maintenance of PT Sanata System official enterprise web application.',
            'Performed routine codebase maintenance, proactive bug resolution, and frontend performance tuning.',
            'Collaborated closely with cross-functional teams to ensure high system availability, security, and user satisfaction.',
          ],
        },
        {
          id: 'polresta-denpasar',
          role: 'IT Support',
          company: 'Polresta Denpasar',
          location: 'Denpasar, Bali',
          date: '2021',
          description:
            'Delivered comprehensive technical support, institutional IT infrastructure maintenance, and rapid troubleshooting of operational systems.',
          highlights: [
            'Handled preventive and corrective maintenance of workstation hardware, local network infrastructure, and operating systems.',
            'Conducted daily technical incident troubleshooting to guarantee uninterrupted public service systems.',
            'Supported secure network configurations and safeguarded institutional operational data integrity.',
          ],
        },
      ],
    },
    projects: {
      title: 'Featured Projects',
      subtitle:
        'Enterprise web solutions engineered for scalability, performance, and seamless user experiences.',
      detailsTitle: 'Key Implementation Details',
      visitButton: 'Visit sanatasystem.com',
      internalBadge: 'Internal Enterprise Hospital Information System',
      items: [
        {
          id: 'sanata-webapp',
          title: 'PT Sanata System Web App',
          category: 'Corporate Web Application',
          badgeType: 'Live Production',
          subCategory: 'Web Optimization',
          description:
            'Engineered and optimized the corporate web platform for PT Sanata System, delivering a modern, high-speed, and SEO-optimized web experience across all device form factors.',
          highlights: [
            'Development and continuous maintenance of PT Sanata System official website.',
            'Optimization of page load speeds, SEO architecture, and modern responsive user interfaces across all devices.',
            'Integration of modern frontend architecture for maximum client-side performance.',
          ],
          tags: ['React', 'TypeScript', 'Tailwind CSS', 'Web Optimization'],
          liveUrl: 'https://sanatasystem.com/',
        },
        {
          id: 'simrs',
          title: 'SIMRS (Sistem Informasi Manajemen Rumah Sakit)',
          category: 'Enterprise Healthcare System',
          badgeType: 'Enterprise System',
          subCategory: 'Microservices & MVC',
          description:
            'Integrated hospital management platform architected on MVC patterns and Microservices principles, leveraging ASP.NET Core backend and React frontend to handle clinical operations, patient workflows, and medical records securely.',
          highlights: [
            'Modular backend architecture based on Microservices & MVC patterns with ASP.NET Core.',
            'Interactive and responsive user interface built in React for patient workflow and clinical records administration.',
            'Centralized relational database management with optimized SQL query performance.',
          ],
          tags: ['ASP.NET Core', 'C#', 'Microservices', 'React', 'MVC', 'SQL Server'],
        },
      ],
    },
    education: {
      title: 'Academic Background',
      subtitle:
        'Formal foundation in Information Technology nurturing analytical problem solving and engineering mindset.',
      badge: 'Higher Education',
      institution: 'Politeknik Negeri Bali',
      degree: 'Sarjana Terapan (D4) - Teknologi Informasi (Information Technology)',
      startDate: '2022',
      endDate: '2026',
      gpaLabel: 'Cumulative GPA',
      gpaValue: '3.66 / 4.00',
      description:
        'Specialized in software engineering, system architecture, computer networks, and cybersecurity with distinguished academic marks (GPA 3.66/4.00). Actively engaged in hands-on modern tech projects.',
      highlightsTitle: 'Key Academic Studies & Focus',
      highlights: [
        'Software Engineering & Modern Web Development',
        'System Architecture, Distributed Databases & Object-Oriented Design',
        'Computer Networks, Server Administration & IT Infrastructure Troubleshooting',
        'Cybersecurity Fundamentals & Information Risk Management',
      ],
    },
    certifications: {
      title: 'Certifications & Security',
      subtitle:
        'Commitment to continuous learning, software resilience, and cybersecurity best practices.',
      credentialDoc: 'Official Credential Document',
      verifiedBadge: 'Verified',
      clickToEnlarge: 'Click to view full certificate',
      domainsTitle: 'Covered Competence & Security Domains',
      items: [
        {
          id: 'cybersecurity-essentials',
          title: 'Cybersecurity Awareness & Security Fundamentals',
          categoryBadge: 'Professional Certification',
          issuer: 'Professional Certification Program',
          date: '2025',
          description:
            'In-depth comprehension of information security principles, threat mitigation, vulnerability management, and IT infrastructure defense strategies.',
          domains: [
            'Network Vulnerability Assessment & Mitigation',
            'Web Application Security & OWASP Top 10 Awareness',
            'Secure Coding Practices & Data Integrity Safeguards',
            'Identity, Access Management & Authentication Protocols',
          ],
        },
        {
          id: 'bnsp-web',
          title: 'Certificate of Competence - Web Developer',
          categoryBadge: 'National Professional Certification',
          issuer: 'Badan Nasional Sertifikasi Profesi (BNSP) & LSP Komputer',
          date: '2020',
          description:
            'National competence certification in Network and Infrastructure with Web Developer qualification, issued by the Indonesian Professional Certification Authority (BNSP) through Computer Professional Certification Institution.',
          domains: [
            'Web Application Architecture & Development',
            'Client-side & Server-side Programming',
            'Network & IT Infrastructure Integration',
            'National Standards of Competence (SKKNI)',
          ],
        },
      ],
    },
    contact: {
      title: 'Get In Touch',
      subtitle:
        "Have an opportunity, enterprise project, or collaboration in mind? Let's connect and build together.",
      heading: "Let's Discuss Your Next Project",
      description:
        'Saya selalu terbuka untuk mendiskusikan peluang software engineering, pengembangan sistem enterprise, maupun konsultasi infrastruktur IT.',
      emailLabel: 'Email',
      locationLabel: 'Location',
      locationValue: 'Bali, Indonesia',
      directContact: 'Direct Contact',
      sendInquiry: 'Send an Inquiry',
      ctaDescription: 'Klik tombol di bawah untuk langsung membuka email client Anda dan memulai percakapan.',
      sendButton: 'Send Message',
    },
    footer: {
      roleTitle: 'Software Developer',
      builtWith: 'Crafted with passion using React, TypeScript & Tailwind CSS',
      backToTop: 'Back to top',
    },
  },
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      experience: 'Pengalaman',
      projects: 'Proyek',
      education: 'Pendidikan',
      certifications: 'Sertifikasi',
      contact: 'Kontak',
      contactMe: 'Hubungi Saya',
    },
    hero: {
      fullName: 'I Kadek Hendra Juniarta',
      brandName: 'Hendra Juniarta',
      title: 'Software Developer',
      shortBio:
        'Software Developer dengan pengalaman profesional lebih dari 1.5 tahun, memadukan latar belakang akademis kuat di bidang Teknologi Informasi dengan pengembangan software enterprise dan dukungan infrastruktur IT.',
      yearsNumber: '1.5+',
      yearsLabel: 'Tahun Pengalaman',
      gpaNumber: '3.66',
      gpaLabel: 'IPK (TI di PNB)',
      enterpriseNumber: 'Enterprise',
      enterpriseLabel: 'Dev & Dukungan IT',
      exploreProjects: 'Lihat Proyek',
      contactMe: 'Hubungi Saya',
      activeStatus: 'Aktif',
      developerRole: 'Software Developer',
    },
    about: {
      title: 'Tentang Saya',
      subtitle:
        'Menjembatani keilmuan akademis dengan rekayasa perangkat lunak enterprise dan operasional IT yang andal.',
      knownAs: 'Dikenal secara profesional sebagai',
      bioP1:
        'Saya adalah seorang Software Developer dengan pengalaman profesional lebih dari 1.5 tahun dalam membangun, memelihara, dan mengoptimalkan sistem web berbasis enterprise. Saya menggabungkan keilmuan akademis yang solid di bidang Teknologi Informasi dari Politeknik Negeri Bali dengan pengalaman lapangan nyata di industri dan instansi pemerintahan.',
      bioP2:
        'Fokus saya mencakup siklus hidup pengembangan perangkat lunak secara menyeluruh mulai dari frontend yang interaktif dan responsif menggunakan React & TypeScript, arsitektur backend berkinerja tinggi dengan ASP.NET (.NET Core) & Microservices, hingga pemeliharaan infrastruktur jaringan dan pemecahan masalah teknis IT secara komprehensif.',
      strengthsTitle: 'Kekuatan Utama & Ringkasan',
      highlights: [
        '1.5 tahun pengalaman rekayasa perangkat lunak pada aplikasi web enterprise.',
        'Fondasi kuat dalam Arsitektur MVC dan Microservices dengan ASP.NET Core & React.',
        'Rekam jejak terbukti dalam IT Support dan troubleshooting infrastruktur di Polresta Denpasar.',
        'Latar belakang akademis kuat di bidang Teknologi Informasi di Politeknik Negeri Bali (IPK 3.66/4.00).',
      ],
      techStackTitle: 'Keahlian & Tumpukan Teknologi',
      categories: [
        {
          title: 'Pengembangan Frontend',
          badge: 'Client-side',
          tags: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive UI'],
        },
        {
          title: 'Backend & Arsitektur',
          badge: 'Core Services',
          tags: ['ASP.NET Core', 'C#', 'Microservices', 'MVC Pattern', 'RESTful API'],
        },
        {
          title: 'Infrastruktur & Dukungan IT',
          badge: 'Operations',
          tags: ['Hardware & Network', 'System Troubleshooting', 'OS & Server Support'],
        },
        {
          title: 'Keamanan & Standar Praktik',
          badge: 'Standards',
          tags: ['Cybersecurity Fundamentals', 'Data Integrity', 'Git & Version Control'],
        },
      ],
    },
    experience: {
      title: 'Pengalaman Profesional',
      subtitle:
        'Perjalanan industri praktis dalam menghadirkan solusi software dan infrastruktur operasional IT.',
      present: 'Sekarang',
      responsibilitiesTitle: 'Tanggung Jawab Utama & Dampak',
      items: [
        {
          id: 'sanata-system',
          role: 'Software Engineer',
          company: 'PT. Sanata System',
          location: 'Bali, Indonesia',
          date: '2025 – Sekarang',
          description:
            'Menangani pengembangan, pemeliharaan, dan optimalisasi aplikasi web perusahaan secara end-to-end dengan fokus pada skalabilitas dan performa.',
          highlights: [
            'Memimpin dan menangani pengembangan website resmi perusahaan PT Sanata System.',
            'Melakukan pemeliharaan berkala, perbaikan bug, dan optimasi performa web application.',
            'Berkolaborasi erat dengan tim lintas fungsi untuk memastikan keandalan sistem dan kepuasan pengguna.',
          ],
        },
        {
          id: 'polresta-denpasar',
          role: 'IT Support',
          company: 'Polresta Denpasar',
          location: 'Denpasar, Bali',
          date: '2021',
          description:
            'Memberikan dukungan teknis menyeluruh, pemeliharaan infrastruktur IT, serta troubleshooting sistem operasional instansi.',
          highlights: [
            'Menangani pemeliharaan preventif dan kuratif perangkat keras, jaringan komputer, dan sistem operasional.',
            'Melakukan troubleshooting insiden teknis harian guna menjamin kelancaran sistem pelayanan publik kepolisian.',
            'Mendukung konfigurasi jaringan aman dan integritas data operasional instansi.',
          ],
        },
      ],
    },
    projects: {
      title: 'Proyek Unggulan',
      subtitle:
        'Solusi web enterprise yang dirancang untuk skalabilitas, performa tinggi, dan pengalaman pengguna optimal.',
      detailsTitle: 'Detail Implementasi Kunci',
      visitButton: 'Kunjungi sanatasystem.com',
      internalBadge: 'Sistem Informasi Manajemen Rumah Sakit Internal',
      items: [
        {
          id: 'sanata-webapp',
          title: 'PT Sanata System Web App',
          category: 'Aplikasi Web Perusahaan',
          badgeType: 'Live Production',
          subCategory: 'Web Optimization',
          description:
            'Pengembangan dan optimalisasi website resmi perusahaan PT. Sanata System. Menghadirkan antarmuka modern yang cepat, responsif, dan SEO-friendly untuk memperkenalkan layanan perusahaan.',
          highlights: [
            'Pengembangan dan pemeliharaan website resmi perusahaan PT Sanata System.',
            'Optimasi kecepatan muat, SEO, dan estetika UI modern yang responsif di seluruh perangkat.',
            'Integrasi arsitektur frontend terkini dengan performa tinggi.',
          ],
          tags: ['React', 'TypeScript', 'Tailwind CSS', 'Web Optimization'],
          liveUrl: 'https://sanatasystem.com/',
        },
        {
          id: 'simrs',
          title: 'SIMRS (Sistem Informasi Manajemen Rumah Sakit)',
          category: 'Sistem Informasi Kesehatan Enterprise',
          badgeType: 'Enterprise System',
          subCategory: 'Microservices & MVC',
          description:
            'Pembangunan sistem rumah sakit terpadu menggunakan arsitektur MVC dan Microservices dengan backend ASP.NET (.NET Core) dan frontend React. Mengelola alur pelayanan pasien, data medis, dan operasional rumah sakit dengan keamanan dan keandalan tinggi.',
          highlights: [
            'Arsitektur backend modular berbasis Microservices & MVC dengan ASP.NET Core.',
            'Antarmuka pengguna interaktif dan responsif menggunakan React untuk manajemen data pasien & klinis.',
            'Penyimpanan data relasional terpusat dengan optimasi performa query SQL.',
          ],
          tags: ['ASP.NET Core', 'C#', 'Microservices', 'React', 'MVC', 'SQL Server'],
        },
      ],
    },
    education: {
      title: 'Latar Belakang Akademis',
      subtitle:
        'Fondasi formal di bidang Teknologi Informasi yang mengasah pola pikir rekayasa dan pemecahan masalah analitis.',
      badge: 'Pendidikan Tinggi',
      institution: 'Politeknik Negeri Bali',
      degree: 'Sarjana Terapan (D4) - Teknologi Informasi (Information Technology)',
      startDate: '2022',
      endDate: '2026',
      gpaLabel: 'IPK Kumulatif',
      gpaValue: '3.66 / 4.00',
      description:
        'Mendalami rekayasa perangkat lunak, arsitektur sistem, jaringan komputer, dan keamanan siber dengan pencapaian akademis memuaskan (IPK 3.66). Aktif dalam eksplorasi teknologi modern dan implementasi proyek praktis.',
      highlightsTitle: 'Fokus & Bidang Studi Akademis',
      highlights: [
        'Rekayasa Perangkat Lunak (Software Engineering) & Web Development',
        'Arsitektur Sistem, Basis Data Terdistribusi, & Pemrograman Berorientasi Objek',
        'Jaringan Komputer, Administrasi Server, & Troubleshooting Infrastruktur IT',
        'Dasar-dasar Keamanan Siber (Cybersecurity) & Manajemen Risiko Informasi',
      ],
    },
    certifications: {
      title: 'Sertifikasi & Keamanan',
      subtitle:
        'Komitmen terhadap pembelajaran berkelanjutan, ketahanan perangkat lunak, dan standar keamanan siber.',
      credentialDoc: 'Dokumen Kredensial Resmi',
      verifiedBadge: 'Terverifikasi',
      clickToEnlarge: 'Klik untuk melihat sertifikat penuh',
      domainsTitle: 'Domain Kompetensi & Keamanan yang Dipelajari',
      items: [
        {
          id: 'cybersecurity-essentials',
          title: 'Cybersecurity Awareness & Security Fundamentals',
          categoryBadge: 'Sertifikasi Profesional',
          issuer: 'Program Sertifikasi Profesional',
          date: '2025',
          description:
            'Pemahaman mendalam mengenai prinsip keamanan informasi, mitigasi kerentanan sistem, manajemen risiko siber, dan praktik pertahanan infrastruktur IT.',
          domains: [
            'Penilaian & Mitigasi Kerentanan Jaringan',
            'Keamanan Aplikasi Web & Kesadaran OWASP Top 10',
            'Praktik Secure Coding & Perlindungan Integritas Data',
            'Manajemen Akses, Identitas & Protokol Autentikasi',
          ],
        },
        {
          id: 'bnsp-web',
          title: 'Sertifikat Kompetensi - Pengembang Web (Web Developer)',
          categoryBadge: 'Sertifikasi Profesi Nasional',
          issuer: 'Badan Nasional Sertifikasi Profesi (BNSP) & LSP Komputer',
          date: '2022',
          description:
            'Sertifikasi kompetensi nasional bidang Jaringan dan Infrastruktur dengan kualifikasi Pengembang Web (Web Developer) yang diterbitkan oleh Badan Nasional Sertifikasi Profesi (BNSP) melalui Lembaga Sertifikasi Profesi Komputer.',
          domains: [
            'Rekayasa & Arsitektur Aplikasi Web',
            'Pemrograman Sisi Klien & Sisi Server',
            'Integrasi Infrastruktur & Jaringan IT',
            'Standar Kompetensi Kerja Nasional Indonesia (SKKNI)',
          ],
        },
      ],
    },
    contact: {
      title: 'Hubungi Saya',
      subtitle:
        'Memiliki peluang karir, proyek enterprise, atau kebutuhan kolaborasi? Mari terhubung dan bangun bersama.',
      heading: 'Diskusikan Proyek Anda Berikutnya',
      description:
        'Saya selalu terbuka untuk mendiskusikan peluang software engineering, pengembangan sistem enterprise, maupun konsultasi infrastruktur IT.',
      emailLabel: 'Email',
      locationLabel: 'Lokasi',
      locationValue: 'Bali, Indonesia',
      directContact: 'Kontak Langsung',
      sendInquiry: 'Kirim Pesan',
      ctaDescription: 'Klik tombol di bawah untuk langsung membuka email client Anda dan memulai percakapan.',
      sendButton: 'Kirim Email',
    },
    footer: {
      roleTitle: 'Software Developer',
      builtWith: 'Dibuat dengan dedikasi menggunakan React, TypeScript & Tailwind CSS',
      backToTop: 'Kembali ke atas',
    },
  },
}
