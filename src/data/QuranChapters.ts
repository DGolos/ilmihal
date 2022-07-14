export interface QuranChapter{
    id:number;
    place:string;
    numberOfAyah: number;
    title: string;
    arabicTitle: string;
    description:string;
    note:string;
    page: number;
    player:boolean;
};

export const quranChapters:QuranChapter[]=[
    {
        id: 1,
        place: "Mecca",
        numberOfAyah: 7,
        title: "label-quran-chapter1-title",
        arabicTitle: "الفاتحة",
        description: "label-quran-chapter1-description",
        note: "label-quran-chapter1-note",
        page: 1,
        player: true
    },
    {
        id: 2,
        place: "Medina",
        numberOfAyah: 286,
        title: "label-quran-chapter2-title",
        arabicTitle: "البقرة",
        description: "label-quran-chapter2-description",
        note: "label-quran-chapter2-note",
        page: 2,
        player: false
    },
    {
        id: 3,
        place: "Medina",
        numberOfAyah: 200,
        title: "label-quran-chapter3-title",
        arabicTitle: "آل عمران",
        description: "label-quran-chapter3-description",
        note: "label-quran-chapter3-note",
        page: 50,
        player: false
    },
    {
        id: 4,
        place: "Medina",
        numberOfAyah: 176,
        title: "label-quran-chapter4-title",
        arabicTitle: "النساء",
        description: "label-quran-chapter4-description",
        note: "label-quran-chapter4-note",
        page: 77,
        player: false
    },
    {
        id: 5,
        place: "Medina",
        numberOfAyah: 120,
        title: "label-quran-chapter5-title",
        arabicTitle: "المائدة",
        description: "label-quran-chapter5-description",
        note: "label-quran-chapter5-note",
        page: 106,
        player: false
    },
    {
        id: 6,
        place: "Mecca",
        numberOfAyah: 165,
        title: "label-quran-chapter6-title",
        arabicTitle: "الأنعام",
        description: "label-quran-chapter6-description",
        note: "label-quran-chapter6-note",
        page: 128,
        
        player: false
    },
    {
        id: 7,
        place: "Mecca",
        numberOfAyah: 206,
        title: "label-quran-chapter7-title",
        arabicTitle: "الأعراف",
        description: "label-quran-chapter7-description",
        note: "label-quran-chapter7-note",
        page: 151,
        
        player: false
    },
    {
        id: 8,
        place: "Medina",
        numberOfAyah: 75,
        title: "label-quran-chapter8-title",
        arabicTitle: "الأنفال",
        description: "label-quran-chapter8-description",
        note: "label-quran-chapter8-note",
        page: 177,
        
        player: false
    },
    {
        id: 9,
        place: "Medina",
        numberOfAyah: 129,
        title: "label-quran-chapter9-title",
        arabicTitle: "التوبة",
        description: "label-quran-chapter9-description",
        note: "label-quran-chapter9-note",
        page: 187,
        
        player: false
    },
    {
        id: 10,
        place: "Mecca",
        numberOfAyah: 109,
        title: "label-quran-chapter10-title",
        arabicTitle: "يونس",
        description: "label-quran-chapter10-description",
        note: "label-quran-chapter10-note",
        page: 208,
        
        player: false
    },
    {
        id: 11,
        place: "Mecca",
        numberOfAyah: 123,
        title: "Hud",
        arabicTitle: "هود",
        description: "",
        note: "",
        page: 221,
        
        player: false
    },
    {
        id: 12,
        place: "Mecca",
        numberOfAyah: 111,
        title: "Yusuf",
        arabicTitle: "يوسف",
        description: "",
        note: "",
        page: 235,
        
        player: false
    },
    {
        id: 13,
        place: "Medina",
        numberOfAyah: 43,
        title: "Ar-Ra'd",
        arabicTitle: "الرعد",
        description: "",
        note: "",
        page: 249,
        
        player: false
    },
    {
        id: 14,
        place: "Mecca",
        numberOfAyah: 52,
        title: "Ibrahim",
        arabicTitle: "إبراهيم",
        description: "",
        note: "",
        page: 255,
        
        player: false
    },
    {
        id: 15,
        place: "Mecca",
        numberOfAyah: 99,
        title: "Al-Hijr",
        arabicTitle: "الحجر",
        description: "",
        note: "",
        page: 262,
        
        player: false
    },
    {
        id: 16,
        place: "Mecca",
        numberOfAyah: 128,
        title: "An-Nahl",
        arabicTitle: "النحل",
        description: "",
        note: "",
        page: 267,
        
        player: false
    },
    {
        id: 17,
        place: "Mecca",
        numberOfAyah: 111,
        title: "Al-Israa",
        arabicTitle: "الإسراء",
        description: "",
        note: "",
        page: 282,
        
        player: false
    },
    {
        id: 18,
        place: "Mecca",
        numberOfAyah: 110,
        title: "Al-Kahf",
        arabicTitle: "الكهف",
        description: "",
        note: "",
        page: 293,
        player: true
    },
    {
        id: 19,
        place: "Mecca",
        numberOfAyah: 98,
        title: "Maryam",
        arabicTitle: "مريم",
        description: "",
        note: "",
        page: 305,
        
        player: false
    },
    {
        id: 20,
        place: "Mecca",
        numberOfAyah: 135,
        title: "Ta-Ha",
        arabicTitle: "طه",
        description: "",
        note: "",
        page: 312,
        
        player: false
    },
    {
        id: 21,
        place: "Mecca",
        numberOfAyah: 112,
        title: "Al-Anbiya",
        arabicTitle: "الأنبياء",
        description: "",
        note: "",
        page: 322,
        
        player: false
    },
    {
        id: 22,
        place: "Medina",
        numberOfAyah: 78,
        title: "Al-Hajj",
        arabicTitle: "الحج",
        description: "",
        note: "",
        page: 332,
        
        player: false
    },
    {
        id: 23,
        place: "Mecca",
        numberOfAyah: 118,
        title: "Al-Muminun",
        arabicTitle: "المؤمنون",
        description: "",
        note: "",
        page: 342,
        
        player: false
    },
    {
        id: 24,
        place: "Medina",
        numberOfAyah: 64,
        title: "An-Nur",
        arabicTitle: "النور",
        description: "",
        note: "",
        page: 350,
        
        player: false
    },
    {
        id: 25,
        place: "Mecca",
        numberOfAyah: 77,
        title: "Al-Furqan",
        arabicTitle: "الفرقان",
        description: "",
        note: "",
        page: 359,
        
        player: false
    },
    {
        id: 26,
        place: "Mecca",
        numberOfAyah: 227,
        title: "Ash-Shuara",
        arabicTitle: "الشعراء",
        description: "",
        note: "",
        page: 367,
        
        player: false
    },
    {
        id: 27,
        place: "Mecca",
        numberOfAyah: 93,
        title: "An-Naml",
        arabicTitle: "النمل",
        description: "",
        note: "",
        page: 377,
        
        player: false
    },
    {
        id: 28,
        place: "Mecca",
        numberOfAyah: 88,
        title: "Al-Qasas",
        arabicTitle: "القصص",
        description: "",
        note: "",
        page: 385,
        
        player: false
    },
    {
        id: 29,
        place: "Mecca",
        numberOfAyah: 69,
        title: "Al-Ankabut",
        arabicTitle: "العنكبوت",
        description: "",
        note: "",
        page: 396,
        
        player: false
    },
    {
        id: 30,
        place: "Mecca",
        numberOfAyah: 60,
        title: "Ar-Rum",
        arabicTitle: "الروم",
        description: "",
        note: "",
        page: 404,
        
        player: false
    },
    {
        id: 31,
        place: "Mecca",
        numberOfAyah: 34,
        title: "Luqman",
        arabicTitle: "لقمان",
        description: "",
        note: "",
        page: 411,
        player: true
    },
    {
        id: 32,
        place: "Mecca",
        numberOfAyah: 30,
        title: "As-Sajdah",
        arabicTitle: "السجدة",
        description: "",
        note: "",
        page: 415,
        player: true
    },
    {
        id: 33,
        place: "Medina",
        numberOfAyah: 73,
        title: "Al-Ahzab",
        arabicTitle: "الأحزاب",
        description: "",
        note: "",
        page: 418,
        
        player: false
    },
    {
        id: 34,
        place: "Mecca",
        numberOfAyah: 54,
        title: "Saba",
        arabicTitle: "سبأ",
        description: "",
        note: "",
        page: 428,
        
        player: false
    },
    {
        id: 35,
        place: "Mecca",
        numberOfAyah: 45,
        title: "Fatir",
        arabicTitle: "فاطر",
        description: "",
        note: "",
        page: 434,
        
        player: false
    },
    {
        id: 36,
        place: "Mecca",
        numberOfAyah: 83,
        title: "Yasin",
        arabicTitle: "يس",
        description: "",
        note: "",
        page: 440,
        
        player: false
    },
    {
        id: 37,
        place: "Mecca",
        numberOfAyah: 182,
        title: "As-Saffat",
        arabicTitle: "الصافات",
        description: "",
        note: "",
        page: 446,
        
        player: false
    },
    {
        id: 38,
        place: "Mecca",
        numberOfAyah: 88,
        title: "Sad",
        arabicTitle: "ص",
        description: "",
        note: "",
        page: 453,
        
        player: false
    },
    {
        id: 39,
        place: "Mecca",
        numberOfAyah: 75,
        title: "Az-Zumar",
        arabicTitle: "الزمر",
        description: "",
        note: "",
        page: 458,
        
        player: false
    },
    {
        id: 40,
        place: "Mecca",
        numberOfAyah: 85,
        title: "Ghafir",
        arabicTitle: "غافر",
        description: "",
        note: "",
        page: 467,
        
        player: false
    },
    {
        id: 41,
        place: "Mecca",
        numberOfAyah: 54,
        title: "Fussilat",
        arabicTitle: "فصلت",
        description: "",
        note: "",
        page: 477,
        
        player: false
    },
    {
        id: 42,
        place: "Mecca",
        numberOfAyah: 53,
        title: "Ash-Shura",
        arabicTitle: "الشورى",
        description: "",
        note: "",
        page: 483,
        
        player: false
    },
    {
        id: 43,
        place: "Mecca",
        numberOfAyah: 89,
        title: "Az-Zukhruf",
        arabicTitle: "الزخرف",
        description: "",
        note: "",
        page: 489,
        
        player: false
    },
    {
        id: 44,
        place: "Mecca",
        numberOfAyah: 59,
        title: "Ad-Dukhan",
        arabicTitle: "الدخان",
        description: "",
        note: "",
        page: 496,
        
        player: false
    },
    {
        id: 45,
        place: "Mecca",
        numberOfAyah: 37,
        title: "Al-Jathiya",
        arabicTitle: "الجاثية",
        description: "",
        note: "",
        page: 499,
        
        player: false
    },
    {
        id: 46,
        place: "Mecca",
        numberOfAyah: 35,
        title: "Al-Ahqaf",
        arabicTitle: "الأحقاف",
        description: "",
        note: "",
        page: 502,
        
        player: false
    },
    {
        id: 47,
        place: "Medina",
        numberOfAyah: 38,
        title: "Muhammad",
        arabicTitle: "محمد",
        description: "",
        note: "",
        page: 507,
        
        player: false
    },
    {
        id: 48,
        place: "Medina",
        numberOfAyah: 29,
        title: "Al-Fath",
        arabicTitle: "الفتح",
        description: "",
        note: "",
        page: 511,
        
        player: false
    },
    {
        id: 49,
        place: "Medina",
        numberOfAyah: 18,
        title: "Al-Hujurat",
        arabicTitle: "الحجرات",
        description: "",
        note: "",
        page: 515,
        
        player: false
    },
    {
        id: 50,
        place: "Mecca",
        numberOfAyah: 45,
        title: "Qaf",
        arabicTitle: "ق",
        description: "",
        note: "",
        page: 518,
        
        player: false
    },
    {
        id: 51,
        place: "Mecca",
        numberOfAyah: 60,
        title: "Az-Zariyat",
        arabicTitle: "الذاريات",
        description: "",
        note: "",
        page: 520,
        
        player: false
    },
    {
        id: 52,
        place: "Mecca",
        numberOfAyah: 49,
        title: "At-Tur",
        arabicTitle: "الطور",
        description: "",
        note: "",
        page: 523,
        
        player: false
    },
    {
        id: 53,
        place: "Mecca",
        numberOfAyah: 62,
        title: "An-Najm",
        arabicTitle: "النجم",
        description: "",
        note: "",
        page: 526,
        
        player: false
    },
    {
        id: 54,
        place: "Mecca",
        numberOfAyah: 55,
        title: "Al-Qamar",
        arabicTitle: "القمر",
        description: "",
        note: "",
        page: 528,
        
        player: false
    },
    {
        id: 55,
        place: "Medina",
        numberOfAyah: 78,
        title: "Ar-Rahman",
        arabicTitle: "الرحمن",
        description: "",
        note: "",
        page: 531,
        
        player: false
    },
    {
        id: 56,
        place: "Mecca",
        numberOfAyah: 96,
        title: "Al-Waqia",
        arabicTitle: "الواقعة",
        description: "",
        note: "",
        page: 534,
        
        player: false
    },
    {
        id: 57,
        place: "Medina",
        numberOfAyah: 29,
        title: "Al-Hadid",
        arabicTitle: "الحديد",
        description: "",
        note: "",
        page: 537,
        
        player: false
    },
    {
        id: 58,
        place: "Medina",
        numberOfAyah: 22,
        title: "Al-Mujadilah",
        arabicTitle: "المجادلة",
        description: "",
        note: "",
        page: 542,
        
        player: false
    },
    {
        id: 59,
        place: "Medina",
        numberOfAyah: 24,
        title: "Al-Hashr",
        arabicTitle: "الحشر",
        description: "",
        note: "",
        page: 545,
        
        player: false
    },
    {
        id: 60,
        place: "Medina",
        numberOfAyah: 13,
        title: "Al-Mumtahinah",
        arabicTitle: "الممتحنة",
        description: "",
        note: "",
        page: 549,
        
        player: false
    },
    {
        id: 61,
        place: "Medina",
        numberOfAyah: 14,
        title: "As-Saff",
        arabicTitle: "الصف",
        description: "",
        note: "",
        page: 551,
        
        player: false
    },
    {
        id: 62,
        place: "Medina",
        numberOfAyah: 11,
        title: "Al-Jumu'ah",
        arabicTitle: "الجمعة",
        description: "",
        note: "",
        page: 553,
        
        player: false
    },
    {
        id: 63,
        place: "Medina",
        numberOfAyah: 11,
        title: "Al-Munafiqun",
        arabicTitle: "المنافقون",
        description: "",
        note: "",
        page: 554,
        
        player: false
    },
    {
        id: 64,
        place: "Medina",
        numberOfAyah: 18,
        title: "At-Taghabun",
        arabicTitle: "التغابن",
        description: "",
        note: "",
        page: 556,
        
        player: false
    },
    {
        id: 65,
        place: "Medina",
        numberOfAyah: 12,
        title: "At-Talaq",
        arabicTitle: "الطلاق",
        description: "",
        note: "",
        page: 558,
        
        player: false
    },
    {
        id: 66,
        place: "Medina",
        numberOfAyah: 12,
        title: "At-Tahrim",
        arabicTitle: "التحريم",
        description: "",
        note: "",
        page: 560,
        
        player: false
    },
    {
        id: 67,
        place: "Mecca",
        numberOfAyah: 30,
        title: "Al-Mulk",
        arabicTitle: "الملك",
        description: "",
        note: "",
        page: 562,
        
        player: true
    },
    {
        id: 68,
        place: "Mecca",
        numberOfAyah: 52,
        title: "Al-Qalam",
        arabicTitle: "القلم",
        description: "",
        note: "",
        page: 564,
        
        player: false
    },
    {
        id: 69,
        place: "Mecca",
        numberOfAyah: 52,
        title: "Al-Haqqah",
        arabicTitle: "الحاقة",
        description: "",
        note: "",
        page: 566,
        
        player: false
    },
    {
        id: 70,
        place: "Mecca",
        numberOfAyah: 44,
        title: "Al-Ma'arij",
        arabicTitle: "المعارج",
        description: "",
        note: "",
        page: 568,
        
        player: false
    },
    {
        id: 71,
        place: "Mecca",
        numberOfAyah: 28,
        title: "Nuh",
        arabicTitle: "نوح",
        description: "",
        note: "",
        page: 570,
        
        player: false
    },
    {
        id: 72,
        place: "Mecca",
        numberOfAyah: 28,
        title: "Al-Jinn",
        arabicTitle: "الجن",
        description: "",
        note: "",
        page: 572,
        
        player: false
    },
    {
        id: 73,
        place: "Mecca",
        numberOfAyah: 20,
        title: "Al-Muzzammil",
        arabicTitle: "المزمل",
        description: "",
        note: "",
        page: 574,
        
        player: false
    },
    {
        id: 74,
        place: "Mecca",
        numberOfAyah: 56,
        title: "Al-Muddaththir",
        arabicTitle: "المدثر",
        description: "",
        note: "",
        page: 575,
        
        player: false
    },
    {
        id: 75,
        place: "Mecca",
        numberOfAyah: 40,
        title: "Al-Qiyamah",
        arabicTitle: "القيامة",
        description: "",
        note: "",
        page: 577,
        
        player: false
    },
    {
        id: 76,
        place: "Medina",
        numberOfAyah: 31,
        title: "Al-Insan",
        arabicTitle: "الإنسان",
        description: "",
        note: "",
        page: 578,
        
        player: false
    },
    {
        id: 77,
        place: "Mecca",
        numberOfAyah: 50,
        title: "Al-Mursalat",
        arabicTitle: "المرسلات",
        description: "",
        note: "",
        page: 580,
        
        player: false
    },
    {
        id: 78,
        place: "Mecca",
        numberOfAyah: 40,
        title: "An-Naba",
        arabicTitle: "النبأ",
        description: "",
        note: "",
        page: 582,
        
        player: false
    },
    {
        id: 79,
        place: "Mecca",
        numberOfAyah: 46,
        title: "An-Naziat",
        arabicTitle: "النازعات",
        description: "",
        note: "",
        page: 583,
        
        player: false
    },
    {
        id: 80,
        place: "Mecca",
        numberOfAyah: 42,
        title: "Abasa",
        arabicTitle: "عبس",
        description: "",
        note: "",
        page: 585,
        
        player: false
    },
    {
        id: 81,
        place: "Mecca",
        numberOfAyah: 29,
        title: "At-Takwir",
        arabicTitle: "التكوير",
        description: "",
        note: "",
        page: 586,
        
        player: false
    },
    {
        id: 82,
        place: "Mecca",
        numberOfAyah: 19,
        title: "Al-Infitar",
        arabicTitle: "الإنفطار",
        description: "",
        note: "",
        page: 587,
        
        player: false
    },
    {
        id: 83,
        place: "Mecca",
        numberOfAyah: 36,
        title: "Al-Mutaffifin",
        arabicTitle: "المطففين",
        description: "",
        note: "",
        page: 587,
        
        player: false
    },
    {
        id: 84,
        place: "Mecca",
        numberOfAyah: 25,
        title: "Al-Inshiqaq",
        arabicTitle: "الإنشقاق",
        description: "",
        note: "",
        page: 589,
        
        player: false
    },
    {
        id: 85,
        place: "Mecca",
        numberOfAyah: 22,
        title: "Al-Buruj",
        arabicTitle: "البروج",
        description: "",
        note: "",
        page: 590,
        
        player: false
    },
    {
        id: 86,
        place: "Mecca",
        numberOfAyah: 17,
        title: "At-Tariq",
        arabicTitle: "الطارق",
        description: "",
        note: "",
        page: 591,
        
        player: false
    },
    {
        id: 87,
        place: "Mecca",
        numberOfAyah: 19,
        title: "Al-Ala",
        arabicTitle: "الأعلى",
        description: "",
        note: "",
        page: 591,
        
        player: false
    },
    {
        id: 88,
        place: "Mecca",
        numberOfAyah: 26,
        title: "Al-Ghashiyah",
        arabicTitle: "الغاشية",
        description: "",
        note: "",
        page: 592,
        
        player: false
    },
    {
        id: 89,
        place: "Mecca",
        numberOfAyah: 30,
        title: "Al-Fajr",
        arabicTitle: "الفجر",
        description: "",
        note: "",
        page: 593,
        
        player: false
    },
    {
        id: 90,
        place: "Mecca",
        numberOfAyah: 20,
        title: "Al-Balad",
        arabicTitle: "البلد",
        description: "",
        note: "",
        page: 594,
        
        player: false
    },
    {
        id: 91,
        place: "Mecca",
        numberOfAyah: 15,
        title: "Ash-Shams",
        arabicTitle: "الشمس",
        description: "",
        note: "",
        page: 595,
        
        player: false
    },
    {
        id: 92,
        place: "Mecca",
        numberOfAyah: 21,
        title: "Al-Lail",
        arabicTitle: "الليل",
        description: "",
        note: "",
        page: 595,
        
        player: false
    },
    {
        id: 93,
        place: "Mecca",
        numberOfAyah: 11,
        title: "Ad-Duha",
        arabicTitle: "الضحى",
        description: "",
        note: "",
        page: 596,
        
        player: true
    },
    {
        id: 94,
        place: "Mecca",
        numberOfAyah: 8,
        title: "Ash-Sharh",
        arabicTitle: "الشرح",
        description: "",
        note: "",
        page: 596,
        
        player: true
    },
    {
        id: 95,
        place: "Mecca",
        numberOfAyah: 8,
        title: "At-Tin",
        arabicTitle: "التين",
        description: "",
        note: "",
        page: 597,
        
        player: true
    },
    {
        id: 96,
        place: "Mecca",
        numberOfAyah: 19,
        title: "Al-Alaq",
        arabicTitle: "العلق",
        description: "",
        note: "",
        page: 597,
        
        player: true
    },
    {
        id: 97,
        place: "Mecca",
        numberOfAyah: 5,
        title: "Al-Qadr",
        arabicTitle: "القدر",
        description: "",
        note: "",
        page: 598,
        
        player: true
    },
    {
        id: 98,
        place: "Medina",
        numberOfAyah: 8,
        title: "Al-Bayinah",
        arabicTitle: "البينة",
        description: "",
        note: "",
        page: 598,
        
        player: true
    },
    {
        id: 99,
        place: "Medina",
        numberOfAyah: 8,
        title: "Az-Zalzalah",
        arabicTitle: "الزلزلة",
        description: "",
        note: "",
        page: 599,
        
        player: false
    },
    {
        id: 100,
        place: "Mecca",
        numberOfAyah: 11,
        title: "Al-Adiyat",
        arabicTitle: "العاديات",
        description: "",
        note: "",
        page: 599,
        
        player: true
    },
    {
        id: 101,
        place: "Mecca",
        numberOfAyah: 11,
        title: "Al-Qariah",
        arabicTitle: "القارعة",
        description: "",
        note: "",
        page: 600,
        
        player: true
    },
    {
        id: 102,
        place: "Mecca",
        numberOfAyah: 8,
        title: "Al-Takathur",
        arabicTitle: "التكاثر",
        description: "",
        note: "",
        page: 600,
        
        player: true
    },
    {
        id: 103,
        place: "Mecca",
        numberOfAyah: 3,
        title: "Al-Asr",
        arabicTitle: "العصر",
        description: "",
        note: "",
        page: 601,
        
        player: true
    },
    {
        id: 104,
        place: "Mecca",
        numberOfAyah: 9,
        title: "Al-Humazah",
        arabicTitle: "الهمزة",
        description: "",
        note: "",
        page: 601,
        
        player: true
    },
    {
        id: 105,
        place: "Mecca",
        numberOfAyah: 5,
        title: "Al-Fil",
        arabicTitle: "الفيل",
        description: "",
        note: "",
        page: 601,
        
        player: true
    },
    {
        id: 106,
        place: "Mecca",
        numberOfAyah: 4,
        title: "Quraish",
        arabicTitle: "قريش",
        description: "",
        note: "",
        page: 602,
        
        player: true
    },
    {
        id: 107,
        place: "Mecca",
        numberOfAyah: 7,
        title: "Al-Ma'un",
        arabicTitle: "الماعون",
        description: "",
        note: "",
        page: 602,
        
        player: true
    },
    {
        id: 108,
        place: "Mecca",
        numberOfAyah: 3,
        title: "Al-Kauthar",
        arabicTitle: "الكوثر",
        description: "",
        note: "",
        page: 602,
        
        player: true
    },
    {
        id: 109,
        place: "Mecca",
        numberOfAyah: 6,
        title: "Al-Kafirun",
        arabicTitle: "الكافرون",
        description: "",
        note: "",
        page: 603,
        
        player: true
    },
    {
        id: 110,
        place: "Medina",
        numberOfAyah: 3,
        title: "An-Nasr",
        arabicTitle: "النصر",
        description: "",
        note: "",
        page: 603,
        
        player: true
    },
    {
        id: 111,
        place: "Mecca",
        numberOfAyah: 5,
        title: "Al-Masad",
        arabicTitle: "المسد",
        description: "",
        note: "",
        page: 603,
        
        player: true
    },
    {
        id: 112,
        place: "Mecca",
        numberOfAyah: 4,
        title: "Al-Ikhlas",
        arabicTitle: "الإخلاص",
        description: "",
        note: "",
        page: 604,
        
        player: true
    },
    {
        id: 113,
        place: "Mecca",
        numberOfAyah: 5,
        title: "Al-Falaq",
        arabicTitle: "الفلق",
        description: "",
        note: "",
        page: 604,
        
        player: true
    },
    {
        id: 114,
        place: "Mecca",
        numberOfAyah: 6,
        title: "An-Nas",
        arabicTitle: "الناس",
        description: "",
        note: "",
        page: 604,
        
        player: true
    }
];