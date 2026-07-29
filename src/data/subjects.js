// icon: name resolved via utils/icons.js (getSubjectIcon) to a lucide-react component
// كل الفيديوهات MP4 — بدّل url برابط الفيديو الحقيقي عندك

const subjects = [
  {
    id: "iis101",
    title: "IIS101",
    description: "مقدمة في نظم المعلومات",
    icon: "Database",
    color: "cyan",
    videos: [
      {
        id: 1,
        title: "المحاضرة 1 - مقدمة عن نظم المعلومات",
        type: "mp4",
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
      },
      {
        id: 2,
        title: "المحاضرة 2 - دورة حياة تطوير النظم",
        type: "mp4",
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
      },
      {
        id: 3,
        title: "المحاضرة 3 - قواعد البيانات الأساسية",
        type: "mp4",
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
      },
    ],
    summary: "https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1",
    exams: {
      quizzes: [
        {
          id: 1,
          title: "كويز 1 - الفصل الأول",
          questions: [
            {
              question: "ما هو نظام المعلومات؟",
              options: [
                "مجموعة من الأجهزة فقط",
                "مجموعة متكاملة من الأشخاص والعمليات والتقنية لإدارة المعلومات",
                "برنامج واحد لتخزين البيانات",
                "شبكة اتصالات فقط",
              ],
              correctIndex: 1,
            },
            {
              question: "أي مما يلي يُعتبر من مكونات نظام المعلومات؟",
              options: ["الأشخاص", "العمليات", "البيانات", "كل ما سبق"],
              correctIndex: 3,
            },
            {
              question: "ما الهدف الرئيسي من دورة حياة تطوير النظم (SDLC)؟",
              options: [
                "زيادة تكلفة المشروع",
                "تنظيم عملية بناء النظام من التخطيط حتى الصيانة",
                "استبدال المبرمجين",
                "تقليل عدد المستخدمين",
              ],
              correctIndex: 1,
            },
          ],
        },
      ],
      previous: [
        {
          id: 1,
          title: "امتحان منتصف الفصل 2023",
          questions: [
            {
              question: "أي مرحلة تأتي أولاً في SDLC؟",
              options: ["التصميم", "التخطيط", "الاختبار", "الصيانة"],
              correctIndex: 1,
            },
            {
              question: "ما المقصود بـ Database Management System؟",
              options: [
                "برنامج لتحرير النصوص",
                "نظام لإدارة وتنظيم قواعد البيانات",
                "لغة برمجة",
                "نوع من الشبكات",
              ],
              correctIndex: 1,
            },
          ],
        },
      ],
    },
  },
  {
    id: "db201",
    title: "Database",
    description: "تصميم قواعد البيانات و SQL",
    icon: "Server",
    color: "purple",
    videos: [],
    summary: null,
    exams: {
      quizzes: [],
      previous: [],
    },
  },
  {
    id: "oop202",
    title: "OOP",
    description: "البرمجة كائنية التوجه",
    icon: "Code2",
    color: "green",
    videos: [
      {
        id: 1,
        title: "المحاضرة 1 - الكلاسات والكائنات",
        type: "mp4",
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
      },
    ],
    summary: null,
    exams: {
      quizzes: [
        {
          id: 1,
          title: "كويز 1 - الكلاسات",
          questions: [
            {
              question: "ما هو الـ Class في البرمجة كائنية التوجه؟",
              options: [
                "دالة عادية",
                "قالب لإنشاء الكائنات (Objects)",
                "متغير وحيد",
                "نوع من الحلقات التكرارية",
              ],
              correctIndex: 1,
            },
            {
              question: "ما الفرق بين Class و Object؟",
              options: [
                "لا يوجد فرق",
                "الـ Object نسخة فعلية من الـ Class",
                "الـ Class نسخة من الـ Object",
                "كلاهما نفس الشي دايماً",
              ],
              correctIndex: 1,
            },
          ],
        },
      ],
      previous: [],
    },
  },
  {
    id: "math301",
    title: "Math",
    description: "الرياضيات الهندسية",
    icon: "Sigma",
    color: "cyan",
    videos: [],
    summary: "https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1",
    exams: {
      quizzes: [],
      previous: [
        {
          id: 1,
          title: "الامتحان النهائي 2022",
          questions: [
            {
              question: "ما ناتج مشتقة x²؟",
              options: ["x", "2x", "x²", "2"],
              correctIndex: 1,
            },
          ],
        },
      ],
    },
  },
];

export default subjects;
