// Single source of truth for copy. Edit here, not in components.
export const SITE = {
  name: "چتراتک",
  tagline: "طراحی، توسعه و رشد محصولات دیجیتال",
  email: "hello@chatran.team",
} as const;

export const NAV_LINKS = [
  { label: "تخصص‌ها", href: "#services" },
  { label: "اعضای تیم", href: "#team" },
  { label: "فرآیند همکاری", href: "#process" },
] as const;

export const HEADER_CTA = { label: "شروع همکاری", href: "#contact" } as const;

export const HERO = {
  eyebrow: "یک تیم، سه تخصص، یک هدف",
  lines: {
    first: "ایده‌ات را",
    accent: ["طراحی می‌کنیم،", "می‌سازیم"],
    last: "و به رشد می‌رسانیم.",
  },
  description:
    "ما یک تیم سه‌نفره از طراح، توسعه‌دهنده و متخصص سئو هستیم؛ برای ساختن تجربه‌های دیجیتالی که فقط زیبا نیستند، بلکه نتیجه می‌سازند.",
  primaryCta: { label: "پروژه‌ات را تعریف کن", href: "#contact" },
  secondaryCta: { label: "آشنایی با تخصص‌ها", href: "#services" },
} as const;

export const TICKER = [
  "PRODUCT DESIGN",
  "FULL-STACK DEVELOPMENT",
  "SEO & GROWTH",
  "FROM IDEA TO IMPACT",
] as const;

/* ───────────── Phase 2: services + team ───────────── */

export const SERVICES_SECTION = {
  eyebrow: "تخصص‌های ما",
  title: "سه ضلع یک",
  accent: "محصول موفق",
  description:
    "به‌جای هماهنگ‌کردن چند تیم پراکنده، تمام چیزی را که محصول شما برای شکل‌گرفتن و رشد نیاز دارد یک‌جا دریافت می‌کنید.",
} as const;

export type ServiceIcon = "code" | "design" | "growth";

export const SERVICES: {
  icon: ServiceIcon;
  label: string;
  title: string;
  description: string;
  tags: string[];
}[] = [
  {
    icon: "code",
    label: "FULL-STACK",
    title: "توسعه وب",
    description: "از معماری بک‌اند تا رابط کاربری سریع؛ محصولی پایدار و آماده رشد می‌سازیم.",
    tags: ["DevOps", "API", "Node.js", "React"],
  },
  {
    icon: "design",
    label: "UI / UX",
    title: "طراحی تجربه",
    description: "مسیر کاربر را ساده، برند را متمایز و هر تعامل را هدفمند طراحی می‌کنیم.",
    tags: ["Prototype", "Design System", "Figma", "Research"],
  },
  {
    icon: "growth",
    label: "SEO",
    title: "رشد ارگانیک",
    description: "با استراتژی محتوا و سئوی فنی، مسیر دیده‌شدن و تبدیل را هموار می‌کنیم.",
    tags: ["Growth", "Analytics", "Content", "Technical SEO"],
  },
];

export const TEAM_SECTION = {
  eyebrow: "آشنایی نزدیک‌تر",
  title: "آدم‌های پشت",
  accent: "چتراتک",
  description: "هر عضو چتراتک با تخصصی متفاوت، در تمام مسیر پروژه می‌ماند؛ از اولین تصمیم تا آخرین جزئیات.",
} as const;

export type Contact = { kind: "email" | "web" | "phone"; label: string; value: string; href: string };

export type Member = {
  initials: string;
  name: string;
  role: string;
  badges: string[];
  category: [string, string];
  quote: string;
  bio: string[];
  skills: string[];
  contacts: Contact[];
  theme: "violet" | "sky" | "emerald";
};

export const MEMBERS: Member[] = [
  {
    initials: "HM",
    name: "حسام‌الدین مجدی",
    role: "طراح رابط و تجربه کاربری",
    badges: ["ILLUSTRATOR", "ADOBE XD", "FIGMA"],
    category: ["UI/UX", "PRODUCT DESIGN"],
    quote:
      "طراحی برای من فقط کنار هم قرار دادن رنگ‌ها و المان‌ها نیست؛ خلق تجربه‌ای است که هر جزئیات در آن دلیل مشخصی دارد.",
    bio: [
      "به‌عنوان طراح UI/UX، تمرکز اصلی من روی ساخت تجربه‌های دیجیتال دقیق، ساده و کاربردی است؛ از ساختار و مسیر کاربر گرفته تا تایپوگرافی، فاصله‌ها و کوچک‌ترین جزئیات بصری.",
      "جزئیات اهمیت دارند؛ چون گاهی تفاوت میان یک طراحی خوب و یک تجربه عالی، دقیقاً همان‌جایی شکل می‌گیرد که کمتر به چشم می‌آید.",
    ],
    skills: [
      "UI Design", "UX Design", "Web Design", "Design Systems", "Wireframing", "Prototyping",
      "Responsive Design", "User Flow", "Information Architecture", "Interaction Design",
      "Typography", "Visual Design", "Usability", "Design Thinking",
    ],
    contacts: [
      { kind: "email", label: "ارتباط مستقیم", value: "404.majdi@gmail.com", href: "mailto:404.majdi@gmail.com" },
    ],
    theme: "violet",
  },
  {
    initials: "AH",
    name: "امیر حیدری",
    role: "توسعه‌دهنده Full-Stack و DevOps",
    badges: ["REDIS", "PRISMA", "NEXT.JS", "NESTJS"],
    category: ["FULL-STACK", "DEVOPS"],
    quote: "محصول خوب از معماری درست شروع می‌شود؛ معماری‌ای که امروز سریع و فردا آماده رشد باشد.",
    bio: [
      "از بنیان‌گذاران و مدیر فنی نرم‌افزار چتراتک هستم و روی توسعه و پیاده‌سازی پلتفرم‌ها و سرویس‌های Backend تمرکز دارم.",
      "تجربه من شامل طراحی معماری‌های Microservices، توسعه سیستم‌های مقیاس‌پذیر با JavaScript و TypeScript و اجرای پروژه‌های Full-Stack از زیرساخت تا رابط کاربری است.",
    ],
    skills: [
      "JavaScript", "TypeScript", "Asynchronous Programming", "OOP", "Design Patterns", "System Design",
      "Microservices", "REST API", "GraphQL", "WebSocket", "NestJS", "Next.js", "React", "Redux", "Redis",
      "TypeORM", "Prisma", "NPM", "PWA", "Regex", "Tailwind CSS", "Bootstrap", "Browser Extensions",
    ],
    contacts: [
      { kind: "email", label: "ایمیل", value: "mr.heydariamir@gmail.com", href: "mailto:mr.heydariamir@gmail.com" },
      { kind: "web", label: "وب‌سایت", value: "heydariamir.ir", href: "https://heydariamir.ir" },
      { kind: "phone", label: "تماس", value: "09121318937", href: "tel:+989121318937" },
    ],
    theme: "sky",
  },
  {
    initials: "MJ",
    name: "مهدی جعفری بهشتی حائری",
    role: "توسعه‌دهنده .NET و متخصص سئو",
    badges: ["AHREFS", "SQL", "ASP.NET", ".NET"],
    category: [".NET DEVELOPMENT", "SEO"],
    quote: "کدنویسی برای عملکرد، بهینه‌سازی برای دیده‌شدن.",
    bio: [
      "یکی از اعضای چتراتک هستم؛ جایی که زیرساخت‌های مهندسی نرم‌افزار به استراتژی‌های رشد گره می‌خورند. به‌عنوان برنامه‌نویس .NET چالش‌های پیچیده بک‌اند را حل می‌کنم و به‌عنوان متخصص سئو، همان چالش‌ها را به فرصت دیده‌شدن تبدیل می‌کنم.",
      "تجربه من شامل توسعه نرم‌افزارهای دسکتاپ و تحت وب با .NET و ASP.NET بر پایه Clean Architecture، فعالیت در حوزه نرم‌افزارهای حسابداری و بهینه‌سازی فنی پروژه‌های چتراتک، الکتریکی فانوس، پیامرسان و قیمت‌گذاری آنلاین است.",
    ],
    skills: [
      ".NET", "ASP.NET", "Clean Architecture", "SQL", "Asynchronous Programming", "OOP", "System Design",
      "Technical SEO", "SEO Strategy", "SEO Automation", "AEO", "Core Web Vitals", "SSR / CSR",
      "Schema Markup", "Crawl Budget", "Google Search Console", "Google Analytics", "PageSpeed", "Ahrefs",
    ],
    contacts: [
      { kind: "email", label: "ایمیل", value: "zarrin2005jafari@gmail.com", href: "mailto:zarrin2005jafari@gmail.com" },
      { kind: "phone", label: "تماس", value: "09102509884", href: "tel:+989102509884" },
    ],
    theme: "emerald",
  },
];

/* ───────────── Phase 3: why-us, process, CTA, footer ───────────── */

export const WHY = {
  eyebrow: "چرا چتراتک؟",
  title: "جزئیات متفاوت، هدف مشترک",
  description:
    "ما از سه زاویه متفاوت به یک مسئله نگاه می‌کنیم. نتیجه، محصولی است که هم درست کار می‌کند، هم درست دیده می‌شود و هم حس درستی منتقل می‌کند.",
  points: ["ارتباط مستقیم با متخصص", "تصمیم‌گیری سریع و شفاف", "نگاه یکپارچه به محصول"],
  stats: [
    { value: "۱", label: "تیم یکپارچه" },
    { value: "۳", label: "متخصص متمرکز" },
    { value: "۱۰۰٪", label: "متعهد به نتیجه" },
  ],
} as const;

export const PROCESS = {
  eyebrow: "مسیر همکاری",
  title: "ساده، شفاف،",
  accent: "بدون پیچیدگی",
  description: "چهار گام روشن از اولین گفت‌وگو تا رشد محصول؛ بدون ابهام و بدون سورپرایز.",
  steps: [
    { title: "شناخت", description: "هدف، مخاطب و مسئله را دقیق می‌شناسیم." },
    { title: "طراحی", description: "راه‌حل را ترسیم و قبل از اجرا اعتبارسنجی می‌کنیم." },
    { title: "ساخت", description: "با استانداردهای فنی، محصول را توسعه می‌دهیم." },
    { title: "رشد", description: "داده‌ها را می‌خوانیم و مسیر رشد را بهینه می‌کنیم." },
  ],
} as const;

export const CTA = {
  eyebrow: "آماده شروع هستید؟",
  lines: ["بیایید چیزی بسازیم", "که ارزش دیده‌شدن دارد."],
} as const;

/* ───────────── Phase 4: SEO copy ───────────── */
export const SEO = {
  title: "چتراتک | طراحی، توسعه و رشد محصولات دیجیتال",
  description:
    "تیم سه‌نفره چتراتک: طراحی رابط و تجربه کاربری، توسعه وب فول‌استک و سئوی فنی؛ از ایده تا رشد، یک‌جا و با ارتباط مستقیم با متخصص.",
  locale: "fa_IR",
  alternateName: "Chatra Tech",
} as const;
