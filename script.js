// script.js

const questions = [
    // سوالات عمومی
    {
        category: "general",
        question: "پایتخت ایران کدام شهر است؟",
        options: ["مشهد", "اصفهان", "شیراز", "تهران"],
        answer: "تهران"
    },
    {
        category: "general",
        question: "واحد پول ژاپن چیست؟",
        options: ["یوان", "وون", "ین", "روپیه"],
        answer: "ین"
    },
    {
        category: "general",
        question: "کدام سیاره به سیاره سرخ معروف است؟",
        options: ["مریخ", "زهره", "مشتری", "اورانوس"],
        answer: "مریخ"
    },
    {
        category: "general",
        question: "بزرگترین اقیانوس جهان کدام است؟",
        options: ["اطلس", "هند", "آرام", "منجمد شمالی"],
        answer: "آرام"
    },
    {
        category: "general",
        question: "نویسنده شاهنامه کیست؟",
        options: ["حافظ", "سعدی", "فردوسی", "مولوی"],
        answer: "فردوسی"
    },
    // سوالات تخصصی (مثال: برنامه نویسی)
    {
        category: "technical",
        question: "جاوااسکریپت چه نوع زبانی است؟",
        options: ["کامپایلری", "مفسری", "هر دو", "هیچکدام"],
        answer: "مفسری"
    },
    {
        category: "technical",
        question: "کدام فریمورک جاوااسکریپت نیست؟",
        options: ["React", "Angular", "Vue", "Django"],
        answer: "Django"
    },
    {
        category: "technical",
        question: "CSS مخفف چیست؟",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        category: "technical",
        question: "HTML مخفف چیست؟",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        category: "technical",
        question: "برای تعریف متغیر در ES6 از کدام کلمه کلیدی استفاده نمی‌شود؟",
        options: ["var", "let", "const", "int"],
        answer: "int"
    },
    // ... ادامه دهید تا ۱۰۰ سوال
    // سوالات بیشتر برای تکمیل 100 سوال
    { category: "general", question: "کدام کشور به سرزمین آفتاب تابان معروف است؟", options: ["چین", "کره جنوبی", "ژاپن", "تایلند"], answer: "ژاپن" },
    { category: "general", question: "رشته کوه هیمالیا در کدام قاره قرار دارد؟", options: ["آفریقا", "اروپا", "آسیا", "آمریکا"], answer: "آسیا" },
    { category: "general", question: "بنیانگذار شرکت مایکروسافت کیست؟", options: ["استیو جابز", "بیل گیتس", "مارک زاکربرگ", "الون ماسک"], answer: "بیل گیتس" },
    { category: "general", question: "واحد اندازه‌گیری مقاومت الکتریکی چیست؟", options: ["ولت", "آمپر", "وات", "اهم"], answer: "اهم" },
    { category: "general", question: "کوچکترین کشور جهان کدام است؟", options: ["موناکو", "واتیکان", "سان مارینو", "لیختن اشتاین"], answer: "واتیکان" },
    { category: "technical", question: "برای افزودن یک رویداد کلیک در جاوااسکریپت از چه تابعی استفاده می‌شود؟", options: ["addEventListener", "attachEvent", "onClick", "onEvent"], answer: "addEventListener" },
    { category: "technical", question: "کدام زبان برای استایل‌دهی به صفحات وب استفاده می‌شود؟", options: ["JavaScript", "Python", "CSS", "PHP"], answer: "CSS" },
    { category: "technical", question: "پروتکل امن برای انتقال داده در وب چیست؟", options: ["HTTP", "FTP", "HTTPS", "SMTP"], answer: "HTTPS" },
    { category: "technical", question: "کدام پایگاه داده NoSQL است؟", options: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server"], answer: "MongoDB" },
    { category: "technical", question: "اولین زبان برنامه‌نویسی سطح بالا کدام است؟", options: ["Fortran", "C", "Java", "Python"], answer: "Fortran" },
    { category: "general", question: "مرتفع‌ترین قله جهان چیست؟", options: ["کی۲", "کانچنجونگا", "اورست", "لهوتسه"], answer: "اورست" },
    { category: "general", question: "تئوری نسبیت توسط چه کسی ارائه شد؟", options: ["آیزاک نیوتن", "آلبرت اینشتین", "گالیلئو گالیله", "نیکولا تسلا"], answer: "آلبرت اینشتین" },
    { category: "general", question: "کدام فلز مایع در دمای اتاق است؟", options: ["آهن", "مس", "جیوه", "طلا"], answer: "جیوه" },
    { category: "general", question: "حس بویایی در کدام عضو بدن است؟", options: ["چشم", "زبان", "بینی", "گوش"], answer: "بینی" },
    { category: "general", question: "کشور سازنده اتومبیل پورشه کدام است؟", options: ["ایتالیا", "آلمان", "فرانسه", "ژاپن"], answer: "آلمان" },
    { category: "technical", question: "دستور `console.log()` در جاوااسکریپت چه کاری انجام می‌دهد؟", options: ["خطا را نمایش می‌دهد", "متن را در کنسول چاپ می‌کند", "متغیر را تعریف می‌کند", "حلقه ایجاد می‌کند"], answer: "متن را در کنسول چاپ می‌کند" },
    { category: "technical", question: "برای ارسال داده به سرور از کدام متد HTTP استفاده می‌شود؟", options: ["GET", "POST", "PUT", "DELETE"], answer: "POST" },
    { category: "technical", question: "کدام مفهوم در برنامه‌نویسی شی‌گرا نیست؟", options: ["وراثت", "چندریختی", "کپسوله‌سازی", "تابع بازگشتی"], answer: "تابع بازگشتی" },
    { category: "technical", question: "پایگاه داده رابطه‌ای از چه زبانی برای کوئری استفاده می‌کند؟", options: ["JSON", "XML", "SQL", "YAML"], answer: "SQL" },
    { category: "technical", question: "کدام مرورگر وب از موتور رندرینگ Blink استفاده می‌کند؟", options: ["Firefox", "Safari", "Edge (جدید)", "Internet Explorer"], answer: "Edge (جدید)" },
    { category: "general", question: "محل اصلی بازی‌های المپیک باستانی کدام کشور بود؟", options: ["یونان", "ایتالیا", "روم", "مصر"], answer: "یونان" },
    { category: "general", question: "رنگ اصلی پرچم ژاپن چیست؟", options: ["آبی و سفید", "قرمز و سفید", "سبز و سفید", "مشکی و سفید"], answer: "قرمز و سفید" },
    { category: "general", question: "کوچکترین قاره جهان کدام است؟", options: ["اروپا", "آفریقا", "استرالیا", "قطب جنوب"], answer: "استرالیا" },
    { category: "general", question: "صدا با چه سرعتی در هوا حرکت می‌کند؟", options: ["آهسته‌تر از نور", "سریعتر از نور", "با سرعت نور", "بستگی به دما دارد"], answer: "آهسته‌تر از نور" },
    { category: "general", question: "بزرگترین صحرا در جهان کدام است؟", options: ["گبی", "صحرای بزرگ آفریقا", "آتشفشان آتشی", "دشت لوت"], answer: "صحرای بزرگ آفریقا" },
    { category: "technical", question: "پروتکل مورد استفاده برای ارسال ایمیل چیست؟", options: ["HTTP", "FTP", "SMTP", "POP3"], answer: "SMTP" },
    { category: "technical", question: "کدام یک سیستم عامل نیست؟", options: ["Windows", "Linux", "Mac OS", "Photoshop"], answer: "Photoshop" },
    { category: "technical", question: "برای کامپایل کدهای جاوا از کدام ابزار استفاده می‌شود؟", options: ["JDK", "Node.js", "NPM", "Webpack"], answer: "JDK" },
    { category: "technical", question: "مفهوم REST در API به چه معناست؟", options: ["Representational State Transfer", "Remote Execution System Type", "Resourceful System Transfer", "Real-time State Tracking"], answer: "Representational State Transfer" },
    { category: "technical", question: "کدام یک از این موارد یک زبان برنامه‌نویسی بک‌اند است؟", options: ["HTML", "CSS", "Python", "JavaScript (Front-end)"], answer: "Python" },
    { category: "general", question: "چه حیوانی بزرگترین حیوان روی زمین است؟", options: ["فیل", "نهنگ آبی", "کوسه نهنگ", "زرافه"], answer: "نهنگ آبی" },
    { category: "general", question: "کدام رودخانه طولانی‌ترین رودخانه جهان است؟", options: ["آمازون", "نیل", "یانگ‌تسه", "میسیسیپی"], answer: "نیل" },
    { category: "general", question: "کدام قاره بیشترین کشور را دارد؟", options: ["آسیا", "آفریقا", "اروپا", "آمریکای شمالی"], answer: "آفریقا" },
    { category: "general", question: "نیروی جاذبه زمین توسط چه کسی کشف شد؟", options: ["آلبرت اینشتین", "اسحاق نیوتن", "گالیلئو گالیله", "نیکولا تسلا"], answer: "اسحاق نیوتن" },
    { category: "general", question: "رنگ آبی در پرچم فرانسه نماد چیست؟", options: ["صلح", "برابری", "آزادی", "برادری"], answer: "آزادی" },
    { category: "technical", question: "تگ `<div>` در HTML چه کاربردی دارد؟", options: ["تعریف پاراگراف", "تعریف بخش", "تعریف لینک", "تعریف تصویر"], answer: "تعریف بخش" },
    { category: "technical", question: "کدام یک از اینها یک پکیج منیجر برای Node.js است؟", options: ["Composer", "Pip", "NPM", "Maven"], answer: "NPM" },
    { category: "technical", question: "در CSS، `padding` چه کاری انجام می‌دهد؟", options: ["فاصله داخلی", "فاصله خارجی", "عرض عنصر", "ارتفاع عنصر"], answer: "فاصله داخلی" },
    { category: "technical", question: "کدام یک از اینها یک زبان برنامه‌نویسی برای هوش مصنوعی است؟", options: ["Java", "C++", "Python", "Ruby"], answer: "Python" },
    { category: "technical", question: "نام فایل‌های استایل شیت معمولاً با چه پسوندی ذخیره می‌شوند؟", options: [".js", ".html", ".css", ".php"], answer: ".css" },
    { category: "general", question: "چه کشوری به 'سرزمین هزار دریاچه' معروف است؟", options: ["نروژ", "سوئد", "فنلاند", "کانادا"], answer: "فنلاند" },
    { category: "general", question: "کدام ساز برای نواختن موسیقی کلاسیک استفاده می‌شود؟", options: ["گیتار", "پیانو", "درامز", "ساکسیفون"], answer: "پیانو" },
    { category: "general", question: "چه ماده‌ای باعث سبز شدن گیاهان می‌شود؟", options: ["اکسیژن", "کلروفیل", "آب", "کربن دی‌اکسید"], answer: "کلروفیل" },
    { category: "general", question: "کدام شهر به 'شهر نور' معروف است؟", options: ["رم", "لندن", "پاریس", "نیویورک"], answer: "پاریس" },
    { category: "general", question: "کوچکترین پرنده جهان کدام است؟", options: ["گنجشک", "مرغ مگس خوار", "بلبل", "قناری"], answer: "مرغ مگس خوار" },
    { category: "technical", question: "کدام تگ برای ساخت لینک در HTML استفاده می‌شود؟", options: ["<a>", "<link>", "<href>", "<url>"], answer: "<a>" },
    { category: "technical", question: "تفاوت بین `==` و `===` در جاوااسکریپت چیست؟", options: ["یکی مقایسه مقدار، دیگری مقایسه نوع و مقدار", "هر دو یکی هستند", "یکی برای رشته، دیگری برای عدد", "هیچکدام"], answer: "یکی مقایسه مقدار، دیگری مقایسه نوع و مقدار" },
    { category: "technical", question: "کدام یک از اینها یک فریمورک بک‌اند برای پایتون است؟", options: ["React", "Angular", "Flask", "Vue"], answer: "Flask" },
    { category: "technical", question: "برای تعریف یک آرایه در جاوااسکریپت از چه علامتی استفاده می‌شود؟", options: ["{}", "()", "[]", "<>"], answer: "[]" },
    { category: "technical", question: "کدام یک یک سیستم کنترل نسخه است؟", options: ["Docker", "Kubernetes", "Git", "Jenkins"], answer: "Git" },
    { category: "general", question: "کدام حیوان بزرگترین چشم را در بین تمام حیوانات خشکی دارد؟", options: ["شترمرغ", "اسب", "فیل", "زرافه"], answer: "شترمرغ" },
    { category: "general", question: "چه جزیره‌ای محل تولد ناپلئون بناپارت بود؟", options: ["ساردینیا", "سیسیل", "کرس", "مالت"], answer: "کرس" },
    { category: "general", question: "چه میوه‌ای به 'پادشاه میوه‌ها' معروف است؟", options: ["سیب", "انبه", "دورین", "موز"], answer: "دورین" },
    { category: "general", question: "کدام کشور به دلیل کانگوروهایش معروف است؟", options: ["نیوزلند", "آفریقای جنوبی", "استرالیا", "کانادا"], answer: "استرالیا" },
    { category: "general", question: "اولین فردی که به فضا سفر کرد چه کسی بود؟", options: ["نیل آرمسترانگ", "یوری گاگارین", "باز آلدرین", "ولادیمیر کوماروف"], answer: "یوری گاگارین" },
    { category: "technical", question: "کدام تگ برای درج تصویر در HTML استفاده می‌شود؟", options: ["<img>", "<pic>", "<image>", "<src>"], answer: "<img>" },
    { category: "technical", question: "مفهوم 'DOM' در جاوااسکریپت به چه معناست؟", options: ["Data Object Model", "Document Object Model", "Direct Object Manipulation", "Dynamic Output Module"], answer: "Document Object Model" },
    { category: "technical", question: "برای قرار دادن کد جاوااسکریپت در HTML از کدام تگ استفاده می‌شود؟", options: ["<js>", "<script>", "<javascript>", "<code>"], answer: "<script>" },
    { category: "technical", question: "کدام متد آرایه در جاوااسکریپت برای اضافه کردن یک عنصر به انتهای آرایه استفاده می‌شود؟", options: ["unshift()", "push()", "pop()", "shift()"], answer: "push()" },
    { category: "technical", question: "کدام یک از این موارد یک زبان مارک‌آپ (Markup Language) است؟", options: ["Python", "Java", "HTML", "C++"], answer: "HTML" },
    { category: "general", question: "بزرگترین صحرای یخی جهان کجاست؟", options: ["گرینلند", "سیبری", "آلاسکا", "قطب جنوب"], answer: "قطب جنوب" },
    { category: "general", question: "چه حیوانی می‌تواند تا ۱۰۰ سال زندگی کند؟", options: ["سگ", "گربه", "لاک‌پشت", "فیل"], answer: "لاک‌پشت" },
    { category: "general", question: "نام اقیانوس بین اروپا و آمریکا چیست؟", options: ["آرام", "هند", "اطلس", "منجمد شمالی"], answer: "اطلس" },
    { category: "general", question: "کدام کشور به 'سرزمین آفتاب نیمه‌شب' معروف است؟", options: ["کانادا", "ایسلند", "نروژ", "روسیه"], answer: "نروژ" },
    { category: "general", question: "در کدام قاره جنگل‌های آمازون قرار دارد؟", options: ["آفریقا", "آمریکای جنوبی", "آسیا", "آمریکای شمالی"], answer: "آمریکای جنوبی" },
    { category: "technical", question: "برای تغییر استایل یک عنصر با جاوااسکریپت از چه ویژگی‌ای استفاده می‌شود؟", options: ["style", "class", "id", "data"], answer: "style" },
    { category: "technical", question: "مفهوم 'callback function' در جاوااسکریپت چیست؟", options: ["تابعی که بلافاصله اجرا می‌شود", "تابعی که به عنوان آرگومان به تابع دیگری پاس داده می‌شود", "تابعی که فقط یک بار اجرا می‌شود", "تابعی که خود را فراخوانی می‌کند"], answer: "تابعی که به عنوان آرگومان به تابع دیگری پاس داده می‌شود" },
    { category: "technical", question: "کدام ابزار برای تست کدهای جاوااسکریپت در مرورگر استفاده می‌شود؟", options: ["IDE", "DevTools", "Text Editor", "Compiler"], answer: "DevTools" },
    { category: "technical", question: "کدام یک از اینها یک سیستم مدیریت محتوا (CMS) است؟", options: ["Django", "React", "WordPress", "Node.js"], answer: "WordPress" },
    { category: "technical", question: "پروتکل امنیتی برای ارتباطات اینترنتی چیست؟", options: ["FTP", "SSH", "SSL/TLS", "TCP/IP"], answer: "SSL/TLS" },
    { category: "general", question: "بلندترین ساختمان جهان کدام است؟", options: ["برج ایفل", "برج شانگهای", "برج خلیفه", "برج پتروناس"], answer: "برج خلیفه" },
    { category: "general", question: "در کدام شهر برج کج پیزا قرار دارد؟", options: ["رم", "میلان", "فلورانس", "پیزا"], answer: "پیزا" },
    { category: "general", question: "کدام حیوان سریعترین حیوان روی خشکی است؟", options: ["شیر", "ببر", "یوزپلنگ", "غزال"], answer: "یوزپلنگ" },
    { category: "general", question: "بزرگترین قاره جهان از نظر مساحت و جمعیت کدام است؟", options: ["آفریقا", "اروپا", "آسیا", "آمریکای شمالی"], answer: "آسیا" },
    { category: "general", question: "چه کشوری به 'سرزمین فرعون‌ها' معروف است؟", options: ["یونان", "ترکیه", "مصر", "عراق"], answer: "مصر" },
    { category: "technical", question: "تفاوت بین `localStorage` و `sessionStorage` چیست؟", options: ["محل ذخیره‌سازی", "محدوده زمانی", "نوع داده", "هر دو یکی هستند"], answer: "محدوده زمانی" },
    { category: "technical", question: "کدام از اینها یک موتور جستجو نیست؟", options: ["Google", "Bing", "Yahoo", "Wikipedia"], answer: "Wikipedia" },
    { category: "technical", question: "برای ساخت انیمیشن در CSS از کدام ویژگی استفاده می‌شود؟", options: ["transform", "transition", "animation", "all"], answer: "animation" },
    { category: "technical", question: "کدام یک از اینها یک زبان برنامه‌نویسی شیءگرا است؟", options: ["C", "Fortran", "Java", "Assembly"], answer: "Java" },
    { category: "technical", question: "پورت پیش‌فرض برای HTTP کدام است؟", options: ["80", "443", "21", "22"], answer: "80" },
    { category: "general", question: "نژاد گربه بی‌موی کدام است؟", options: ["پرشین", "سیامی", "اسفینکس", "راگدال"], answer: "اسفینکس" },
    { category: "general", question: "کدام کشور صاحب 'برج خلیفه' است؟", options: ["قطر", "عربستان سعودی", "امارات متحده عربی", "کویت"], answer: "امارات متحده عربی" },
    { category: "general", question: "بزرگترین جزیره جهان کدام است؟", options: ["نیو گینه", "بورنئو", "ماداگاسکار", "گرینلند"], answer: "گرینلند" },
    { category: "general", question: "کدام عنصر شیمیایی نماد 'O' را دارد؟", options: ["طلا", "نقره", "اکسیژن", "آهن"], answer: "اکسیژن" },
    { category: "general", question: "چه سیاره‌ای به 'سیاره آبی' معروف است؟", options: ["مریخ", "زمین", "نپتون", "اورانوس"], answer: "زمین" },
    { category: "technical", question: "برای ایجاد یک عنصر جدید در DOM با جاوااسکریپت از کدام متد استفاده می‌شود؟", options: ["createElement()", "appendChild()", "createTextNode()", "getElementById()"], answer: "createElement()" },
    { category: "technical", question: "مفهوم 'Async/Await' در جاوااسکریپت برای چه منظوری است؟", options: ["همگام‌سازی کد", "مدیریت عملیات ناهمگام", "تعریف کلاس", "ایجاد حلقه"], answer: "مدیریت عملیات ناهمگام" },
    { category: "technical", question: "کدام نوع داده در جاوااسکریپت برای ذخیره مقادیر True/False استفاده می‌شود؟", options: ["string", "number", "boolean", "object"], answer: "boolean" },
    { category: "technical", question: "کدام فریمورک فرانت‌اند برای ساخت برنامه‌های موبایل هم استفاده می‌شود؟", options: ["AngularJS", "Vue.js", "React Native", "jQuery"], answer: "React Native" },
    { category: "technical", question: "کدام از اینها یک پورت TCP است؟", options: ["25", "23", "20", "22"], answer: "25" }, // SMTP
    { category: "general", question: "کدام حشره برای تولید عسل شناخته شده است؟", options: ["مورچه", "زنبور", "پروانه", "مگس"], answer: "زنبور" },
    { category: "general", question: "چه کشوری به 'سرزمین فلات‌ها' معروف است؟", options: ["سوئیس", "نروژ", "تبت", "نیوزلند"], answer: "تبت" },
    { category: "general", question: "اولین قاره‌ای که انسان‌ها در آن سکونت یافتند کدام بود؟", options: ["اروپا", "آسیا", "آفریقا", "استرالیا"], answer: "آفریقا" },
    { category: "general", question: "کدام عضو بدن بیشترین مقدار آب را دارد؟", options: ["مغز", "خون", "عضلات", "ریه"], answer: "ریه" },
    { category: "general", question: "نام ستاره نزدیکترین به زمین چیست؟", options: ["آلفا قنطورس", "پروکسیما قنطورس", "خورشید", "سیریوس"], answer: "خورشید" },
    { category: "technical", question: "برای دسترسی به عناصر HTML با استفاده از ID از کدام متد جاوااسکریپت استفاده می‌شود؟", options: ["getElementsByClassName", "getElementsByTagName", "querySelector", "getElementById"], answer: "getElementById" },
    { category: "technical", question: "کدام از اینها یک ابزار برای مدیریت وابستگی‌ها در پروژه های جاوا است؟", options: ["NPM", "Pip", "Maven", "Bundler"], answer: "Maven" },
    { category: "technical", question: "کدام ویژگی CSS برای تغییر رنگ متن استفاده می‌شود؟", options: ["background-color", "font-color", "color", "text-color"], answer: "color" },
    { category: "technical", question: "کدام یک از اینها یک زبان برنامه‌نویسی برای هوش مصنوعی نیست؟", options: ["Python", "R", "Prolog", "HTML"], answer: "HTML" },
    { category: "technical", question: "کدام پروتکل برای انتقال فایل‌ها از طریق شبکه استفاده می‌شود؟", options: ["HTTP", "SMTP", "FTP", "DNS"], answer: "FTP" }
];


// مدیریت وضعیت بازی (استفاده از localStorage برای نگهداری اطلاعات بین صفحات)
function saveGameData(data) {
    localStorage.setItem('quizGameData', JSON.stringify(data));
}

function getGameData() {
    return JSON.parse(localStorage.getItem('quizGameData'));
}

function clearGameData() {
    localStorage.removeItem('quizGameData');
}

// تابع برای انتخاب 10 سوال تصادفی و یکسان برای همه شرکت‌کنندگان
function getQuizQuestions() {
    let gameData = getGameData();
    if (gameData && gameData.selectedQuestions && gameData.selectedQuestions.length === 10) {
        return gameData.selectedQuestions; // اگر سوالات از قبل انتخاب شده‌اند، همان‌ها را برگردان
    }

    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);
    
    // ذخیره سوالات انتخاب شده برای استفاده در سایر صفحات
    if (!gameData) {
        gameData = { players: [], selectedQuestions: [], currentQuestionIndex: 0, playerScores: {} };
    }
    gameData.selectedQuestions = selected;
    saveGameData(gameData);

    return selected;
}

// توابع مربوط به index.html (صفحه دریافت اطلاعات)
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('player-form')) {
        const playerForm = document.getElementById('player-form');
        const numPlayersSelect = document.getElementById('num-players');
        const playerNamesDiv = document.getElementById('player-names');
        const startGameButton = document.getElementById('start-game');

        numPlayersSelect.addEventListener('change', (e) => {
            const num = parseInt(e.target.value);
            playerNamesDiv.innerHTML = '';
            for (let i = 0; i < num; i++) {
                playerNamesDiv.innerHTML += `
                    <div class="player-input">
                        <label for="player${i + 1}-name">نام شرکت‌کننده ${i + 1}:</label>
                        <input type="text" id="player${i + 1}-name" required>
                    </div>
                `;
            }
        });

        startGameButton.addEventListener('click', (e) => {
            e.preventDefault();
            const numPlayers = parseInt(numPlayersSelect.value);
            const players = [];
            for (let i = 0; i < numPlayers; i++) {
                const playerNameInput = document.getElementById(`player${i + 1}-name`);
                if (playerNameInput.value.trim() === '') {
                    alert('لطفاً نام همه شرکت‌کنندگان را وارد کنید.');
                    return;
                }
                players.push(playerNameInput.value.trim());
            }

            if (players.length === 0) {
                alert('حداقل یک شرکت‌کننده اضافه کنید.');
                return;
            }
            
            clearGameData(); // پاک کردن اطلاعات بازی قبلی
            const initialGameData = {
                players: players,
                playerScores: Object.fromEntries(players.map(player => [player, 0])),
                selectedQuestions: getQuizQuestions(), // انتخاب سوالات برای بازی جدید
                currentQuestionIndex: 0,
                playerAnswers: Object.fromEntries(players.map(player => [player, []])) // برای ذخیره پاسخ هر بازیکن
            };
            saveGameData(initialGameData);
            window.location.href = 'quiz.html';
        });

        // تنظیم اولیه تعداد بازیکنان به 1
        numPlayersSelect.dispatchEvent(new Event('change'));
    }

    // توابع مربوط به quiz.html (صفحه سوالات)
    if (document.getElementById('quiz-container')) {
        const quizContainer = document.getElementById('quiz-container');
        const questionElement = document.getElementById('question');
        const optionsContainer = document.getElementById('options-container');
        const playerTurnElement = document.getElementById('player-turn');
        const nextQuestionButton = document.getElementById('next-question');
        const endQuizButton = document.getElementById('end-quiz');
        const feedbackElement = document.getElementById('feedback');
        const currentQuestionNumberElement = document.getElementById('current-question-number');
        const totalQuestionsNumberElement = document.getElementById('total-questions-number');

        let gameData = getGameData();
        if (!gameData || gameData.players.length === 0) {
            alert('اطلاعات شرکت‌کنندگان یافت نشد. به صفحه شروع بازگردانده می‌شوید.');
            window.location.href = 'index.html';
            return;
        }

        let currentPlayerIndex = 0;
        let currentQuestionGlobalIndex = gameData.currentQuestionIndex || 0;

        function displayQuestion() {
            const currentQuestion = gameData.selectedQuestions[currentQuestionGlobalIndex];
            const currentPlayer = gameData.players[currentPlayerIndex];

            playerTurnElement.textContent = `نوبت: ${currentPlayer}`;
            questionElement.textContent = currentQuestion.question;
            optionsContainer.innerHTML = '';
            feedbackElement.textContent = ''; // Clear previous feedback

            currentQuestionNumberElement.textContent = currentQuestionGlobalIndex + 1;
            totalQuestionsNumberElement.textContent = gameData.selectedQuestions.length;

            currentQuestion.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.classList.add('option-button');
                button.onclick = () => selectOption(option, currentQuestion.answer, currentPlayer);
                optionsContainer.appendChild(button);
            });

            // Disable all options if an answer has already been selected for this player/question
            const playerHasAnswered = gameData.playerAnswers[currentPlayer] && gameData.playerAnswers[currentPlayer][currentQuestionGlobalIndex] !== undefined;
            if (playerHasAnswered) {
                disableOptions(true); // Disable options if already answered
                showCorrectAnswer(currentQuestion.answer, gameData.playerAnswers[currentPlayer][currentQuestionGlobalIndex]);
                nextQuestionButton.style.display = 'block'; // Show next button if answered
            } else {
                disableOptions(false); // Enable options if not answered yet
                nextQuestionButton.style.display = 'none'; // Hide next button until answered
            }

            endQuizButton.style.display = 'none'; // Initially hide end quiz button
            if (currentQuestionGlobalIndex === gameData.selectedQuestions.length - 1 && currentPlayerIndex === gameData.players.length - 1) {
                endQuizButton.style.display = 'block';
            }
        }

        function disableOptions(disable) {
            Array.from(optionsContainer.children).forEach(button => {
                button.disabled = disable;
            });
        }

        function showCorrectAnswer(correctAnswer, selectedAnswer = null) {
            Array.from(optionsContainer.children).forEach(button => {
                if (button.textContent === correctAnswer) {
                    button.classList.add('correct');
                } else if (selectedAnswer && button.textContent === selectedAnswer && selectedAnswer !== correctAnswer) {
                    button.classList.add('incorrect');
                }
            });
        }

        function selectOption(selectedOption, correctAnswer, currentPlayer) {
            disableOptions(true); // Disable options after selection

            let isCorrect = selectedOption === correctAnswer;
            
            // Update score
            if (isCorrect) {
                gameData.playerScores[currentPlayer]++;
                feedbackElement.textContent = 'پاسخ صحیح است!';
                feedbackElement.style.color = 'green';
            } else {
                feedbackElement.textContent = 'پاسخ اشتباه است.';
                feedbackElement.style.color = 'red';
            }

            // Save player's answer for this question
            if (!gameData.playerAnswers[currentPlayer]) {
                gameData.playerAnswers[currentPlayer] = [];
            }
            gameData.playerAnswers[currentPlayer][currentQuestionGlobalIndex] = selectedOption;

            showCorrectAnswer(correctAnswer, selectedOption);

            saveGameData(gameData);
            nextQuestionButton.style.display = 'block'; // Show next question button
        }

        nextQuestionButton.addEventListener('click', () => {
            currentPlayerIndex++;
            if (currentPlayerIndex >= gameData.players.length) {
                currentPlayerIndex = 0; // Reset player index
                currentQuestionGlobalIndex++; // Move to next question for all players
            }

            if (currentQuestionGlobalIndex < gameData.selectedQuestions.length) {
                gameData.currentQuestionIndex = currentQuestionGlobalIndex; // Update global question index in game data
                saveGameData(gameData);
                displayQuestion(); // Display next question/player turn
            } else {
                // All questions answered by all players
                window.location.href = 'results.html';
            }
        });

        endQuizButton.addEventListener('click', () => {
            window.location.href = 'results.html';
        });

        displayQuestion(); // Initial display
    }

    // توابع مربوط به results.html (صفحه نتایج)
    if (document.getElementById('results-container')) {
        const resultsContainer = document.getElementById('results-container');
        const playerScoresList = document.getElementById('player-scores');
        const winnerDisplay = document.getElementById('winner-display');
        const playAgainButton = document.getElementById('play-again');

        const gameData = getGameData();
        if (!gameData || !gameData.playerScores || Object.keys(gameData.playerScores).length === 0) {
            resultsContainer.innerHTML = '<p>اطلاعات نتایج یافت نشد. لطفاً ابتدا یک مسابقه را شروع کنید.</p>';
            playAgainButton.textContent = 'بازگشت به صفحه شروع';
            playAgainButton.onclick = () => {
                clearGameData();
                window.location.href = 'index.html';
            };
            return;
        }

        let maxScore = -1;
        let winners = [];

        // Display scores and determine winner(s)
        for (const player in gameData.playerScores) {
            const score = gameData.playerScores[player];
            const listItem = document.createElement('li');
            listItem.textContent = `${player}: ${score} پاسخ صحیح`;
            playerScoresList.appendChild(listItem);

            if (score > maxScore) {
                maxScore = score;
                winners = [player];
            } else if (score === maxScore) {
                winners.push(player);
            }
        }

        if (winners.length === 1) {
            winnerDisplay.textContent = `برنده: ${winners[0]} با ${maxScore} پاسخ صحیح!`;
        } else if (winners.length > 1) {
            winnerDisplay.textContent = `برندگان مشترک: ${winners.join(', ')} با ${maxScore} پاسخ صحیح!`;
        } else {
            winnerDisplay.textContent = 'مسابقه بدون برنده به پایان رسید.'; // Should not happen if scores are tracked
        }

        playAgainButton.addEventListener('click', () => {
            clearGameData(); // پاک کردن تمام اطلاعات بازی
            window.location.href = 'index.html';
        });
    }
});
