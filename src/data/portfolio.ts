import type {
  NavLink,
  SocialLink,
  Skill,
  Project,
  Experience,
  Education,
  Certification,
} from '../types/index.ts'

// ===== Navigation =====
export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

// ===== Personal Info =====
export const personalInfo = {
  fullName: 'I Kadek Hendra Juniarta',
  brandName: 'Hendra Juniarta',
  logoInitials: 'HJ.',
  title: 'Software Developer',
  tagline: 'Building robust enterprise software & modern web applications with passion and precision.',
  shortBio:
    'A passionate Software Developer with 1.5 years of professional experience, combining a solid academic background in Information Technology with hands-on enterprise software development and IT infrastructure support.',
  email: 'dekhendrajun1@gmail.com',
  location: 'Bali, Indonesia',
  availability: 'Open to Opportunities',
  yearsOfExperience: '1.5+',
  completedProjects: '10+',
}

// ===== Social Links =====
export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/', icon: 'Linkedin' },
  { name: 'GitHub', url: 'https://github.com/', icon: 'Github' },
  { name: 'Email', url: 'mailto:dekhendrajun1@gmail.com', icon: 'Mail' },
]

// ===== Skills =====
export const skills: Skill[] = [
  { name: 'React', category: 'Frontend', level: 90 },
  { name: 'TypeScript', category: 'Frontend', level: 85 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 90 },
  { name: 'ASP.NET Core', category: 'Backend', level: 85 },
  { name: 'C#', category: 'Backend', level: 85 },
  { name: 'Microservices', category: 'Architecture', level: 80 },
  { name: 'MVC Architecture', category: 'Architecture', level: 85 },
  { name: 'IT Infrastructure & Support', category: 'Infrastructure', level: 90 },
  { name: 'Cybersecurity Fundamentals', category: 'Security', level: 80 },
  { name: 'Git & GitHub', category: 'Tools', level: 88 },
]

// ===== Experience =====
export const experiences: Experience[] = [
  {
    id: 'sanata-system',
    role: 'Software Engineer',
    company: 'PT. Sanata System',
    location: 'Bali, Indonesia',
    startDate: '2025',
    endDate: 'Present',
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
    startDate: '2021',
    endDate: '2021',
    description:
      'Memberikan dukungan teknis menyeluruh, pemeliharaan infrastruktur IT, serta troubleshooting sistem operasional instansi.',
    highlights: [
      'Menangani pemeliharaan preventif dan kuratif perangkat keras, jaringan komputer, dan sistem operasional.',
      'Melakukan troubleshooting insiden teknis harian guna menjamin kelancaran sistem pelayanan publik kepolisian.',
      'Mendukung konfigurasi jaringan aman dan integritas data operasional instansi.',
    ],
  },
]

// ===== Education =====
export const educations: Education[] = [
  {
    id: 'pnb',
    institution: 'Politeknik Negeri Bali',
    degree: 'Sarjana Terapan (D4) - Teknologi Informasi (Information Technology)',
    startDate: '2022',
    endDate: '2026',
    gpa: '3.66 / 4.00',
    description:
      'Mendalami rekayasa perangkat lunak, arsitektur sistem, jaringan komputer, dan keamanan siber dengan pencapaian akademis memuaskan (IPK 3.66). Aktif dalam eksplorasi teknologi modern dan implementasi proyek praktis.',
  },
]

// ===== Projects =====
export const projects: Project[] = [
  {
    id: 'sanata-webapp',
    title: 'PT Sanata System Web App',
    description:
      'Pengembangan dan optimalisasi website resmi perusahaan PT. Sanata System. Menghadirkan antarmuka modern yang cepat, responsif, dan SEO-friendly untuk memperkenalkan layanan perusahaan.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Web Optimization'],
    liveUrl: 'https://sanatasystem.com/',
    featured: true,
  },
  {
    id: 'simrs',
    title: 'SIMRS (Sistem Informasi Manajemen Rumah Sakit)',
    description:
      'Pembangunan sistem rumah sakit terpadu menggunakan arsitektur MVC dan Microservices dengan backend ASP.NET (.NET Core) dan frontend React. Mengelola alur pelayanan pasien, data medis, dan operasional rumah sakit dengan keamanan dan keandalan tinggi.',
    tags: ['ASP.NET Core', 'C#', 'Microservices', 'React', 'MVC', 'SQL Server'],
    featured: true,
  },
]

// ===== Certifications =====
export const certifications: Certification[] = [
  {
    id: 'cybersecurity-essentials',
    title: 'Cybersecurity Awareness & Security Fundamentals',
    issuer: 'Professional Certification Program',
    date: '2025',
    description:
      'Pemahaman mendalam mengenai prinsip keamanan informasi, mitigasi kerentanan sistem, manajemen risiko siber, dan praktik pertahanan infrastruktur IT.',
  },
]
