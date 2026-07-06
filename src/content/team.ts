export type TeamMember = {
  slug: string;
  initials: string;
  photo?: string; // path under /public, e.g. "/team/yusuf-abdelatti.jpg"
  name: { en: string; ar: string };
  titles: { en: string[]; ar: string[] };
  teaser: { en: string; ar: string };
  isPlaceholder?: boolean;
  // Full profile
  bio: { en: string; ar: string };
  education: { en: string[]; ar: string[] };
  approach: { en: string; ar: string };
  experience: { en: string; ar: string };
  assessmentTech: { en: string; ar: string };
  focusAreas: { en: string[]; ar: string[] };
  familyWork: { en: string; ar: string };
};

export const teamMembers: TeamMember[] = [
  {
    slug: 'yusuf-abdelatti',
    initials: 'YA',
    photo: '/team/yusuf-abdelatti.jpg',
    name: {
      en: 'Yusuf Abdelatti',
      ar: 'يوسف عبد العاطي',
    },
    titles: {
      en: ['Psychologist', 'Child Development Specialist', 'Behavior Modification Specialist', 'Neurofeedback Therapist'],
      ar: ['عالم نفس', 'أخصائي تنمية الطفل', 'أخصائي تعديل السلوك', 'معالج بالنيوروفيدباك'],
    },
    teaser: {
      en: 'Yusuf Abdelatti is a psychologist, child development specialist, and behavior modification specialist with dual honours degrees in Psychology and over 1,700 hours of clinical experience in assessment, behavioral intervention, and neurofeedback. He currently leads the Mental Health and Psychological Support Department across multiple early childhood educational settings.',
      ar: 'يوسف عبد العاطي عالم نفس وأخصائي تنمية طفل وأخصائي تعديل سلوك، يحمل درجتي شرف في علم النفس، وتجاوزت ساعاته الإكلينيكية 1,700 ساعة في التقييم والتدخل السلوكي والنيوروفيدباك. يتولى حالياً قيادة قسم الصحة النفسية والدعم النفسي في عدة بيئات تعليمية للطفولة المبكرة.',
    },
    bio: {
      en: 'Yusuf Abdelatti is a psychologist, child development specialist, family counselor, psychotherapist, behavior modification specialist, neurofeedback therapist, and psychometric assessor whose work centers on helping children, families, and educational systems create meaningful, evidence-based, and sustainable change.',
      ar: 'يوسف عبد العاطي عالم نفس وأخصائي تنمية طفل ومستشار أسري ومعالج نفسي وأخصائي تعديل سلوك ومعالج بالنيوروفيدباك ومقيّم سيكومتري، يتمحور عمله حول مساعدة الأطفال والأسر والأنظمة التعليمية على إحداث تغيير حقيقي ومستدام قائم على الأدلة العلمية.',
    },
    education: {
      en: [
        'Dual Honours BSc in Psychology — London South Bank University & British University in Egypt',
        'MSc in Psychology (in progress) — Liverpool John Moores University',
      ],
      ar: [
        'بكالوريوس مزدوج بامتياز في علم النفس — جامعة لندن ساوث بانك والجامعة البريطانية في مصر',
        'ماجستير علم النفس (قيد الإنجاز) — جامعة ليفربول جون مورز',
      ],
    },
    approach: {
      en: 'Yusuf believes every child\'s behavior is shaped by a dynamic interaction of developmental, cognitive, emotional, environmental, educational, and family factors. Rather than focusing narrowly on managing behaviors, his work centers on understanding the mechanisms behind them — while empowering families and educators to become active participants in the intervention itself. His clinical practice draws on Cognitive Behavioral Therapy (CBT), Acceptance and Commitment Therapy (ACT), Dialectical Behavior Therapy (DBT), Behavior Modification, Neurofeedback, Biofeedback, and cognitive rehabilitation — integrated into individualized plans rather than applied as a single fixed model.',
      ar: 'يرى يوسف أن سلوك كل طفل يتشكّل من تفاعل ديناميكي بين عوامل تطورية ومعرفية وعاطفية وبيئية وتعليمية وأسرية. لا يقتصر عمله على إدارة السلوكيات، بل يتعمق في فهم الآليات الكامنة وراءها، ويعمل على تمكين الأسر والمعلمين ليكونوا شركاء فاعلين في التدخل ذاته. تستند ممارسته الإكلينيكية إلى العلاج المعرفي السلوكي (CBT)، وعلاج القبول والالتزام (ACT)، والعلاج السلوكي الجدلي (DBT)، وتعديل السلوك، والنيوروفيدباك، والبيوفيدباك، وإعادة التأهيل المعرفي — مدمجةً في خطط فردية لا في نموذج ثابت.',
    },
    experience: {
      en: 'Yusuf has worked across psychiatric hospitals, outpatient mental health services, schools, nurseries, and private practice, giving him a multidisciplinary view of children\'s needs from clinical, educational, and family-systems perspectives. His early clinical training included internships at Dr. Gamal Mady Abou El Azayem Psychiatric Hospital and Dr. Hany ElHennawy Psychiatric Center, where he also received supervised training in Neurofeedback and Biofeedback.\n\nHe later focused on supporting children within their natural environments — home, school, and early childhood settings — first as part of a School Counseling Team, then as Psychologist and Behavior Modification Specialist within early childhood educational settings. He currently serves as Supervisor of the Mental Health and Psychological Support Department, leading psychological services across multiple early childhood educational settings, overseeing behavioral intervention programs, developmental follow-up, teacher support, and parent education initiatives.\n\nAcross these roles, Yusuf has accumulated more than 1,700 hours of psychotherapy, parenting consultation, behavioral intervention, and psychological support.',
      ar: 'عمل يوسف في المستشفيات النفسية والخدمات النفسية الخارجية والمدارس وروضات الأطفال والعيادات الخاصة، مما منحه رؤية متعددة التخصصات لاحتياجات الأطفال من منظور إكلينيكي وتعليمي وأسري. شملت تدريباته الإكلينيكية المبكرة تدريباً في مستشفى الدكتور جمال ماضي أبو العزايم ومركز الدكتور هاني الحناوي، حيث تلقّى أيضاً تدريبه المشرف عليه في النيوروفيدباك والبيوفيدباك.\n\nتركّز عمله لاحقاً على دعم الأطفال في بيئاتهم الطبيعية — المنزل والمدرسة ومرحلة الطفولة المبكرة — أولاً ضمن فريق الإرشاد المدرسي، ثم بصفة عالم نفس وأخصائي تعديل سلوك في بيئات الطفولة المبكرة. يشغل حالياً منصب المشرف على قسم الصحة النفسية والدعم النفسي، ويقود الخدمات النفسية عبر عدة مؤسسات تعليمية للطفولة المبكرة.\n\nتجاوزت ساعاته التراكمية في العلاج النفسي والاستشارات الأسرية والتدخل السلوكي والدعم النفسي 1,700 ساعة.',
    },
    assessmentTech: {
      en: 'A central part of Yusuf\'s work is comprehensive psychological assessment — considering developmental history, cognitive ability, emotional functioning, behavior, environment, and family dynamics together, rather than judging a child by an isolated symptom. He conducts standardized cognitive, behavioral, personality, and clinical assessments to support diagnosis, intervention planning, and progress monitoring.\n\nHe also incorporates Neurofeedback and Biofeedback where clinically indicated, supporting attention, self-regulation, and executive function. He works as a Scientific Development Team Member at Cognitive Suite, contributing to the design of evidence-based cognitive assessment and training tools — reflecting his broader interest in combining psychological science with technology to make effective child-focused care more accessible.',
      ar: 'يُشكّل التقييم النفسي الشامل محوراً أساسياً في عمل يوسف — إذ يأخذ في الاعتبار التاريخ التطوري والقدرة المعرفية والأداء العاطفي والسلوك والبيئة وديناميكيات الأسرة معاً، دون الاكتفاء بأعراض معزولة. يجري تقييمات موحّدة معرفية وسلوكية وشخصية وإكلينيكية لدعم التشخيص وتخطيط التدخل ومراقبة التقدم.\n\nيدمج النيوروفيدباك والبيوفيدباك حين يستدعي ذلك سريرياً لدعم الانتباه والتنظيم الذاتي والوظائف التنفيذية. كما يعمل عضواً في فريق التطوير العلمي بـ Cognitive Suite، مساهماً في تصميم أدوات تقييم وتدريب معرفي قائمة على الأدلة.',
    },
    focusAreas: {
      en: [
        'ADHD and executive functioning difficulties',
        'Emotional and behavioral regulation',
        'Developmental delays',
        'School adjustment and learning-related difficulties',
        'Cognitive training (attention, working memory, processing efficiency)',
      ],
      ar: [
        'اضطراب نقص الانتباه وفرط النشاط وصعوبات الوظائف التنفيذية',
        'التنظيم العاطفي والسلوكي',
        'التأخر التطوري',
        'التكيف المدرسي وصعوبات التعلم',
        'التدريب المعرفي (الانتباه، الذاكرة العاملة، كفاءة المعالجة)',
      ],
    },
    familyWork: {
      en: 'Yusuf considers parent consultation a core part of treatment, not an add-on. He works directly with parents to build their understanding of child development, behavioral principles, and practical, evidence-based parenting strategies — and works with teachers and schools in the same way, since lasting progress depends on consistency across every environment surrounding the child.',
      ar: 'يعتبر يوسف استشارة الوالدين جزءاً أساسياً من العلاج لا إضافةً اختيارية. يعمل مباشرةً مع الأهل لبناء فهمهم لتنمية الطفل والمبادئ السلوكية واستراتيجيات التربية العملية المبنية على الأدلة — ويتعامل مع المعلمين والمدارس بالطريقة ذاتها، إذ يعتمد التقدم المستدام على الاتساق في كل بيئة محيطة بالطفل.',
    },
  },
  {
    slug: 'ziad-hamdy',
    initials: 'ZH',
    photo: '/team/ziad-hamdy.jpg',
    name: {
      en: 'Ziad Hamdy',
      ar: 'زياد حمدي',
    },
    titles: {
      en: ['Certified ABAT (QABA)', 'Clinical Psychologist', 'ABA Specialist'],
      ar: ['معالج سلوكي معتمد ABAT/QABA', 'عالم نفس إكلينيكي', 'أخصائي تحليل السلوك التطبيقي'],
    },
    teaser: {
      en: 'Ziad Hamdy is a Certified ABAT (QABA) and Clinical Psychologist specializing in Applied Behavior Analysis (ABA) and psychological assessment, with particular expertise in IQ and cognitive testing. Currently pursuing the QBA credential through the QABA Board.',
      ar: 'زياد حمدي معالج سلوكي معتمد (ABAT/QABA) وعالم نفس إكلينيكي متخصص في تحليل السلوك التطبيقي والتقييم النفسي، مع خبرة خاصة في اختبارات الذكاء والتقييم المعرفي. يسعى حالياً للحصول على اعتماد QBA من مجلس QABA.',
    },
    bio: {
      en: 'Ziad Hamdy is a Certified ABAT (QABA) and Clinical Psychologist based in Egypt, specializing in Applied Behavior Analysis (ABA) and psychological assessment, with particular expertise in IQ and cognitive testing. He is currently pursuing the QBA (Qualified Behavior Analyst) credential through the QABA Board.',
      ar: 'زياد حمدي معالج سلوكي معتمد (ABAT/QABA) وعالم نفس إكلينيكي مقيم في مصر، متخصص في تحليل السلوك التطبيقي (ABA) والتقييم النفسي، مع خبرة خاصة في اختبارات الذكاء والتقييم المعرفي. يسعى حالياً للحصول على اعتماد QBA (المحلل السلوكي المؤهل) من مجلس QABA.',
    },
    education: {
      en: [
        'BSc in Clinical Psychology — Dual degree, The British University in Egypt (BUE) & London South Bank University (LSBU)',
        'MSc in Psychology (in progress) — Liverpool John Moores University (LJMU)',
      ],
      ar: [
        'بكالوريوس في علم النفس الإكلينيكي — درجة مزدوجة، الجامعة البريطانية في مصر (BUE) وجامعة لندن ساوث بانك (LSBU)',
        'ماجستير علم النفس (قيد الإنجاز) — جامعة ليفربول جون مورز (LJMU)',
      ],
    },
    approach: {
      en: 'Ziad\'s practice draws on a broad clinical toolkit that spans structured behavioral assessment and intervention frameworks alongside evidence-based psychological therapies. He integrates ABLLS-R, VB-MAPP, PEAK, AFLS, FBA, and DTT with Cognitive Behavioral Therapy (CBT) and Acceptance and Commitment Therapy (ACT) — selecting methods based on each client\'s individual profile rather than a single fixed model.',
      ar: 'تستند ممارسة زياد إلى مجموعة أدوات إكلينيكية متكاملة تجمع بين أطر تقييم السلوك والتدخل المنظم والعلاجات النفسية المبنية على الأدلة. يدمج ABLLS-R وVB-MAPP وPEAK وAFLS وFBA وDTT مع العلاج المعرفي السلوكي (CBT) وعلاج القبول والالتزام (ACT) — مختاراً الأساليب وفق الملف الفردي لكل عميل لا وفق نموذج ثابت.',
    },
    experience: {
      en: 'Ziad brings hands-on experience across direct therapy, academic support, and clinical supervision. His work spans behavioral assessment and intervention, cognitive testing, and the practical application of ABA principles across clinical and educational settings.',
      ar: 'يمتلك زياد خبرة عملية في العلاج المباشر والدعم الأكاديمي والإشراف الإكلينيكي. يشمل عمله التقييم والتدخل السلوكي واختبارات المعرفة والتطبيق العملي لمبادئ تحليل السلوك التطبيقي في البيئات الإكلينيكية والتعليمية.',
    },
    assessmentTech: {
      en: 'Ziad specializes in IQ and cognitive assessment, administering the Stanford-Binet Intelligence Scale alongside a comprehensive suite of behavioral assessment tools including ABLLS-R, VB-MAPP, PEAK, and AFLS. He applies Functional Behavior Assessment (FBA) and Discrete Trial Training (DTT) to design data-driven intervention programs grounded in Applied Behavior Analysis.',
      ar: 'يتخصص زياد في اختبارات الذكاء والتقييم المعرفي، مطبّقاً مقياس ستانفورد-بينيه للذكاء إلى جانب مجموعة شاملة من أدوات التقييم السلوكي تشمل ABLLS-R وVB-MAPP وPEAK وAFLS. يوظّف تقييم السلوك الوظيفي (FBA) والتدريب بالمحاولات المنفصلة (DTT) لتصميم برامج تدخل مبنية على البيانات وفق مبادئ تحليل السلوك التطبيقي.',
    },
    focusAreas: {
      en: [
        'Applied Behavior Analysis (ABA)',
        'IQ and cognitive assessment',
        'Behavioral assessment and intervention (ABLLS-R, VB-MAPP, PEAK, AFLS)',
        'Functional Behavior Assessment (FBA)',
        'Academic support',
      ],
      ar: [
        'تحليل السلوك التطبيقي (ABA)',
        'اختبارات الذكاء والتقييم المعرفي',
        'تقييم السلوك والتدخل (ABLLS-R وVB-MAPP وPEAK وAFLS)',
        'تقييم السلوك الوظيفي (FBA)',
        'الدعم الأكاديمي',
      ],
    },
    familyWork: {
      en: 'Ziad works closely with families to ensure that ABA-based strategies are understood and consistently implemented across home environments, not just within clinical sessions. He believes that family education and involvement are essential components of any effective behavioral intervention program.',
      ar: 'يعمل زياد بشكل وثيق مع الأسر لضمان فهم الاستراتيجيات المبنية على تحليل السلوك التطبيقي وتطبيقها باتساق في البيئة المنزلية، وليس داخل الجلسات الإكلينيكية فحسب. يؤمن بأن تثقيف الأسرة ومشاركتها مكوّنان أساسيان في أي برنامج تدخل سلوكي فعّال.',
    },
  },
];

export function getMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((m) => m.slug === slug);
}
