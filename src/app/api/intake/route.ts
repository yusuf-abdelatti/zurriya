import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
});

function v(x: unknown): string {
  if (x === null || x === undefined || x === '') return '—';
  if (typeof x === 'boolean') return x ? '✓ Yes / نعم' : '✗ No / لا';
  if (Array.isArray(x)) return x.filter(Boolean).join(', ') || '—';
  if (typeof x === 'object') return JSON.stringify(x, null, 2);
  return String(x);
}

function row(label: string, value: unknown) {
  return `<tr>
    <td style="padding:7px 14px;font-weight:600;color:#1B5E6E;width:42%;vertical-align:top;border-bottom:1px solid #e8e8e8;font-size:13px">${label}</td>
    <td style="padding:7px 14px;color:#333;border-bottom:1px solid #e8e8e8;font-size:13px;white-space:pre-wrap">${v(value)}</td>
  </tr>`;
}

function sec(title: string, rows: string) {
  return `<div style="margin-bottom:24px">
    <h2 style="background:#1B5E6E;color:#fff;padding:10px 16px;margin:0;font-size:14px;font-family:Arial,sans-serif;letter-spacing:.5px">${title}</h2>
    <table style="width:100%;border-collapse:collapse;background:#fff">${rows}</table>
  </div>`;
}

function tableSection(title: string, headers: string[], rows: Record<string, string>[] | undefined) {
  if (!rows?.length) return '';
  const ths = headers.map(h => `<th style="padding:8px 12px;text-align:left;font-weight:600;color:#1B5E6E;border:1px solid #ddd;background:#f0f7f8;font-size:12px">${h}</th>`).join('');
  const trs = rows.map(r =>
    `<tr>${Object.values(r).map(c => `<td style="padding:7px 12px;border:1px solid #ddd;font-size:12px">${c || '—'}</td>`).join('')}</tr>`
  ).join('');
  return `<div style="margin-bottom:24px">
    <h2 style="background:#1B5E6E;color:#fff;padding:10px 16px;margin:0;font-size:14px;font-family:Arial,sans-serif">${title}</h2>
    <table style="width:100%;border-collapse:collapse;background:#fff"><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table>
  </div>`;
}

export async function POST(req: Request) {
  try {
    const d = await req.json();
    const childName = d.childFullName || 'غير محدد / Not specified';

    const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;background:#f2f2f2;padding:20px;margin:0">
<div style="max-width:860px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.1)">

<div style="background:#1B5E6E;color:#fff;padding:24px;text-align:center">
  <h1 style="margin:0;font-size:22px;letter-spacing:1px">ذرية — Zurriya</h1>
  <p style="margin:6px 0 0;font-size:13px;opacity:.8">Child Registration & Intake Form / استمارة تسجيل وبيانات الطفل</p>
  <p style="margin:6px 0 0;font-size:12px;opacity:.6">Received: ${new Date().toLocaleString('en-GB')}</p>
</div>

<div style="padding:24px">

${sec('1. Basic Information / البيانات الأساسية', [
  row("Child's Full Name / اسم الطفل", d.childFullName),
  row("Date of Birth / تاريخ الميلاد", d.dob),
  row("Age / العمر", d.age),
  row("Sex / الجنس", d.sex),
  row("Nationality / الجنسية", d.nationality),
  row("National ID / الرقم القومي", d.nationalId),
  row("Home Languages / لغات المنزل", d.homeLanguages),
  row("Other Languages / لغات أخرى", d.otherLanguages),
  row("Referral Source / جهة الإحالة", d.referralSource),
  row("Referring Doctor / الطبيب المحيل", d.referringDoctor),
  row("Form Completed By / من أكمل الاستمارة", d.completedBy),
  row("Date Completed / تاريخ التعبئة", d.formDate),
].join(''))}

${sec('2. Mother / الأم', [
  row("Name / الاسم", d.motherName),
  row("Age / السن", d.motherAge),
  row("Occupation / المهنة", d.motherOccupation),
  row("Education / المؤهل", d.motherEducation),
  row("Phone / الهاتف", d.motherPhone),
  row("Email / البريد", d.motherEmail),
].join(''))}

${sec('2. Father / الأب', [
  row("Name / الاسم", d.fatherName),
  row("Age / السن", d.fatherAge),
  row("Occupation / المهنة", d.fatherOccupation),
  row("Education / المؤهل", d.fatherEducation),
  row("Phone / الهاتف", d.fatherPhone),
  row("Email / البريد", d.fatherEmail),
].join(''))}

${sec('2. Family & Legal Status / الوضع الأسري والقانوني', [
  row("Marital Status / الحالة الاجتماعية", d.maritalStatus),
  row("Legal Custody / حق الحضانة القانونية", d.legalCustody),
  row("Consent Authority / المخول بالموافقة على العلاج", d.consentAuthority),
  row("Child Lives With / يعيش مع", d.childLivesWith),
  row("Primary Daytime Caregiver / مقدم الرعاية الأساسي", d.primaryCaregiver),
  row("Caregiver Notes / ملاحظات (مربية / قريب / سائق)", d.caregiverNote),
  row("Preferred Contact / وسيلة التواصل المفضلة", d.preferredContact),
  row("Preferred Report Language / لغة التقارير المفضلة", d.preferredReportLang),
  row("Emergency Contact Name / جهة اتصال الطوارئ", d.emergencyName),
  row("Emergency Relationship / صلة القرابة", d.emergencyRelation),
  row("Emergency Phone / هاتف الطوارئ", d.emergencyPhone),
].join(''))}

${sec('3. Reason for Visit / سبب الزيارة والشكوى الحالية', [
  row("Main Concern / المخاوف الرئيسية", d.mainConcern),
  row("When First Noticed / متى لوحظت المشكلة أول مرة", d.whenNoticed),
  row("Why Seeking Help Now / لماذا تقررتم طلب المساعدة الآن", d.whyNow),
  row("Main Goal for Child / الهدف الأهم لطفلكم", d.mainGoal),
  row("Previous Attempts / ما جربتم من قبل", d.previousAttempts),
  row("Currently Seeing Other Specialists / متابعة مع متخصصين آخرين", d.currentSpecialists),
  row("Specialist Contact / بيانات التواصل مع المختص", d.specialistContact),
  row("Most Urgent Area / الأكثر إلحاحاً", d.mostUrgentConcern),
].join(''))}

${d.concernRatings && Object.keys(d.concernRatings).length ? sec('3. Concern Ratings / تقييم مجالات القلق (١ = لا قلق | ٥ = قلق شديد)',
  Object.entries(d.concernRatings).map(([k, v]) => row(k, v as string)).join('')) : ''}

${sec('4. Pregnancy & Birth History / تاريخ الحمل والولادة', [
  row("Mother's Age During Pregnancy / عمر الأم وقت الحمل", d.motherAgeAtPregnancy),
  row("Planned Pregnancy / حمل مخطط", d.plannedPregnancy),
  row("Complications During Pregnancy / مضاعفات أثناء الحمل", d.pregnancyComplications),
  row("Complication Types / أنواع المضاعفات", d.complicationList),
  row("Complication Details / تفاصيل المضاعفات", d.complicationDetails),
  row("Medications / Substances During Pregnancy / أدوية أو مواد خلال الحمل", d.medications),
  row("Gestational Age at Birth (weeks) / عمر الحمل عند الولادة", d.gestationalAge),
  row("Delivery Type / نوع الولادة", d.deliveryType),
  row("C-Section Reason / سبب الولادة القيصرية", d.csectionReason),
  row("Birth Weight / وزن الطفل عند الميلاد", d.birthWeight),
  row("Apgar Score / درجة أبجار", d.apgarScore),
  row("Baby Cried Immediately / بكى الطفل فوراً", d.babyCried),
  row("NICU / الحضانة الطبية", d.nicu),
  row("NICU Details / تفاصيل الحضانة", d.nicuDetails),
  row("First Month Issues / مشكلات الشهر الأول", d.firstMonthIssues),
  row("Additional Pregnancy/Birth Notes / ملاحظات إضافية", d.pregnancyNotes),
].join(''))}

${sec('5. Developmental Milestones / مراحل النمو والتطور', [
  row("Head Control / التحكم في الرأس", d.ms_headControl ? `${d.ms_headControl}${d.ms_headControl_notyet ? ' (Not yet / لم يتقنها)' : ''}` : (d.ms_headControl_notyet ? 'Not yet / لم يتقنها' : '—')),
  row("Sitting Without Support / الجلوس دون سند", d.ms_sitting ? `${d.ms_sitting}${d.ms_sitting_notyet ? ' (Not yet)' : ''}` : (d.ms_sitting_notyet ? 'Not yet' : '—')),
  row("Crawling / الحبو", d.ms_crawling ? `${d.ms_crawling}${d.ms_crawling_notyet ? ' (Not yet)' : ''}` : (d.ms_crawling_notyet ? 'Not yet' : '—')),
  row("Walking / المشي", d.ms_walking ? `${d.ms_walking}${d.ms_walking_notyet ? ' (Not yet)' : ''}` : (d.ms_walking_notyet ? 'Not yet' : '—')),
  row("First Word / أول كلمة", d.ms_firstWord ? `${d.ms_firstWord}${d.ms_firstWord_notyet ? ' (Not yet)' : ''}` : (d.ms_firstWord_notyet ? 'Not yet' : '—')),
  row("Two-Word Sentence / جملة من كلمتين", d.ms_twoWords ? `${d.ms_twoWords}${d.ms_twoWords_notyet ? ' (Not yet)' : ''}` : (d.ms_twoWords_notyet ? 'Not yet' : '—')),
  row("Full Sentences / جمل كاملة", d.ms_sentences ? `${d.ms_sentences}${d.ms_sentences_notyet ? ' (Not yet)' : ''}` : (d.ms_sentences_notyet ? 'Not yet' : '—')),
  row("Daytime Toilet Control / التحكم في الحمام نهاراً", d.ms_toiletDay ? `${d.ms_toiletDay}${d.ms_toiletDay_notyet ? ' (Not yet)' : ''}` : (d.ms_toiletDay_notyet ? 'Not yet' : '—')),
  row("Nighttime Toilet Control / التحكم في الحمام ليلاً", d.ms_toiletNight ? `${d.ms_toiletNight}${d.ms_toiletNight_notyet ? ' (Not yet)' : ''}` : (d.ms_toiletNight_notyet ? 'Not yet' : '—')),
  row("Self-Feeding / إطعام نفسه بالملعقة", d.ms_feeding ? `${d.ms_feeding}${d.ms_feeding_notyet ? ' (Not yet)' : ''}` : (d.ms_feeding_notyet ? 'Not yet' : '—')),
  row("Dressing Self / ارتداء ملابسه", d.ms_dressing ? `${d.ms_dressing}${d.ms_dressing_notyet ? ' (Not yet)' : ''}` : (d.ms_dressing_notyet ? 'Not yet' : '—')),
  row("Skill Regression? / تراجع في المهارات؟", d.skillRegression),
  row("Regression Details / تفاصيل التراجع", d.skillRegressionDetails),
  row("Events During Regression / أحداث في تلك الفترة", d.regressionContext),
].join(''))}

${tableSection('6. Current Diagnoses / التشخيصات الحالية',
  ['Diagnosis / التشخيص', 'Date / التاريخ', 'Diagnosing Physician or Institution / الجهة'],
  d.currentDiagnoses)}

${sec('6. Medical History / التاريخ الطبي', [
  row("Medical Events / الأحداث الطبية", d.medicalEvents),
  row("Medical Event Details / تفاصيل الأحداث", d.medicalEventDetails),
  row("Allergies / الحساسية", d.allergies),
  row("Hearing Test / اختبار السمع", d.hearingTest),
  row("Hearing Test Result & Date / نتيجة وتاريخ اختبار السمع", d.hearingTestResult),
  row("Vision Test / اختبار البصر", d.visionTest),
  row("Vision Test Result & Date / نتيجة وتاريخ اختبار البصر", d.visionTestResult),
  row("Vaccinations Up to Date / التطعيمات محدثة", d.vaccinations),
  row("Family History / التاريخ العائلي", d.familyHistory),
  row("Family History — Relationship / صلة القرابة", d.familyHistoryRelation),
  row("Consanguineous Marriage / زواج أقارب", d.consanguineousMarriage),
  row("Consanguinity Details / درجة القرابة", d.consanguineousDetails),
].join(''))}

${tableSection('6. Current Medications / الأدوية الحالية',
  ['Medication / الدواء', 'Dosage / الجرعة', 'Prescribed By / من وصفه', 'Since / منذ متى'],
  d.currentMedications)}

${sec('7. Behavior / السلوك', [
  row("Bedtime / موعد النوم", d.sleepBedtime),
  row("Wake Time / موعد الاستيقاظ", d.sleepWakeTime),
  row("Total Sleep Hours / إجمالي ساعات النوم", d.sleepHours),
  row("Sleep Issues / مشكلات النوم", d.sleepIssues),
  row("Eating Habits / عادات الأكل", d.eatingHabits),
  row("Approximate # of Accepted Foods / عدد الأطعمة المقبولة", d.foodCount),
  row("Toilet Training Status / التدريب على الحمام", d.toiletTraining),
  row("What Child Does When Refused / ماذا يفعل عند الرفض", d.wantsMotivator),
  row("What Happens Before Challenging Behavior / ما يحدث قبل السلوك", d.behaviorBefore),
  row("What Happens After / ما يحدث بعد السلوك", d.behaviorAfter),
  row("Safety Concerns / مخاوف على السلامة", d.safetyConcerns),
  row("Safety Details / تفاصيل", d.safetyDetails),
].join(''))}

${d.challengingBehaviors?.length ? tableSection('7. Challenging Behaviors / السلوكيات الصعبة',
  ['Behavior / السلوك', 'How Often / كم مرة', 'How Long / كم تدوم', 'Severity 1-5 / الشدة'],
  d.challengingBehaviors) : ''}

${sec('8. Communication & Social Interaction / التواصل والتفاعل الاجتماعي', [
  row("Communication Methods / طرق التواصل", d.communicationMethods),
  row("Approximate Word Count / عدد الكلمات تقريباً", d.wordCount),
  row("Longest Sentence / أطول جملة", d.longestSentence),
  row("Follows One-Step Instruction / تعليمة خطوة واحدة", d.followsOneStep),
  row("Follows Two-Step Instruction / تعليمة خطوتين", d.followsTwoStep),
  row("Responds When Called By Name / يستجيب لاسمه", d.respondsToName),
  row("Eye Contact / التواصل البصري", d.eyeContact),
  row("Points to Show (not request) / يشير للأشياء ليريكم", d.points),
  row("Brings Things to Share Interest / يحضر أشياء لمشاركتكم", d.bringsThing),
  row("Looks Where You Point / ينظر حيث تشيرون", d.looksWhere),
  row("Plays With Other Children / يلعب مع أطفال آخرين", d.playsWithChildren),
  row("Pretend Play / اللعب الخيالي", d.pretendPlay),
  row("Shows Affection to Family / يُظهر المودة لأفراد الأسرة", d.showsAffection),
  row("Repetitive Behaviors / السلوكيات النمطية والاهتمامات", d.repetitiveBehaviors),
  row("Favorite Activity or Interest / النشاط أو الاهتمام المفضل", d.favoriteTopic),
].join(''))}

${sec('9. Education / التعليم', [
  row("School/Nursery Name / اسم المدرسة أو الحضانة", d.schoolName),
  row("School Type / نوع المدرسة", d.schoolType),
  row("Grade/Class / الصف أو الفصل", d.gradeClass),
  row("Hours Per Day / ساعات يومياً", d.hoursPerDay),
  row("Language of Instruction / لغة الدراسة", d.instructionLanguage),
  row("Shadow Teacher / مدرس ظل", d.shadowTeacher),
  row("Shadow Hours Per Week / ساعات الظل أسبوعياً", d.shadowHours),
  row("IEP / خطة تعليمية فردية", d.iep),
  row("Academic Performance Notes / ملاحظات الأداء الدراسي", d.academicPerformance ? JSON.stringify(d.academicPerformance) : '—'),
  row("Concerns Raised By School/Teacher / مخاوف المدرسة أو المعلم", d.schoolConcerns),
  row("Has Child Changed Schools? / هل غيّر المدرسة؟", d.schoolChanges),
  row("Expelled or Refused Admission? / طُلب منه المغادرة أو رُفض قبوله؟", d.expelledOrRefused),
  row("Details / تفاصيل", d.expelledDetails),
].join(''))}

${d.sensoryProfile && Object.keys(d.sensoryProfile).length ? sec('10. Sensory Profile / المتطلبات الحسية',
  Object.entries(d.sensoryProfile).map(([k, v]) => row(k, v as string)).join('')) : ''}
${d.sensoryNotes ? sec('10. Sensory Notes / ملاحظات حسية', row("Notes / ملاحظات", d.sensoryNotes)) : ''}

${tableSection('11. Previous Assessments / التقييمات السابقة',
  ['Assessment / التقييم', 'Date / التاريخ', 'Conducted By / بواسطة', 'Result / النتيجة'],
  d.previousAssessments)}

${tableSection('11. Previous / Current Therapy / العلاج السابق أو الحالي',
  ['Type / النوع', 'Provider / الجهة', 'Start Date / بداية', 'Sessions/Week / جلسات أسبوعياً', 'Ongoing? / مستمر؟'],
  d.previousTherapy)}

${sec('11. Reports / التقارير السابقة', row("Will Bring Reports to First Session / سيحضر التقارير للجلسة الأولى", d.willBringReports))}

${tableSection('12. Siblings / الإخوة والأخوات',
  ['Name / الاسم', 'Age / العمر', 'Developmental/Behavioral Concerns / أي مخاوف نمائية أو سلوكية'],
  d.siblings)}

${sec('12. Home Environment / البيئة المنزلية', [
  row("Who Lives At Home / من يعيش في المنزل", d.homeResidents),
  row("Daily Screen Time / وقت الشاشات يومياً", d.screenTime),
  row("Consistent Daily Routine / روتين يومي ثابت", d.dailyRoutine),
  row("Recent Life Events / أحداث حياتية حديثة", d.recentEvents),
  row("Event Details & Child's Response / تفاصيل واستجابة الطفل", d.recentEventDetails),
  row("Cultural/Religious Considerations / اعتبارات ثقافية أو دينية", d.culturalConsiderations),
].join(''))}

${sec('13. Family Priorities & Expectations / أولويات الأسرة وتوقعاتها', [
  row("Top Goal 1 / الهدف الأول (الأهم)", d.topGoal1),
  row("Top Goal 2 / الهدف الثاني", d.topGoal2),
  row("Top Goal 3 / الهدف الثالث", d.topGoal3),
  row("What You Hope We Can Offer / ما تأملون أن نقدمه", d.hopeFor),
  row("What Worries You Most / ما يقلقكم أكثر شيء", d.worries),
  row("Days Per Week Available / أيام متاحة أسبوعياً", d.daysPerWeek),
  row("Both Parents Agree on Seeking Support / الوالدان موافقان", d.parentsAgree),
  row("Anything Else to Tell Us / أي شيء آخر تودّون إخبارنا به", d.additionalInfo),
].join(''))}

${sec('14. Consent / الموافقة', [
  row("Confidentiality — Info Kept Confidential / السرية — المعلومات سرية", d.consent_conf1),
  row("Confidentiality — Exceptions for Safety/Law / استثناءات السرية", d.consent_conf2),
  row("Consent to Assessment / الموافقة على التقييم", d.consent_assess1),
  row("Confirms Legal Authority to Consent / يؤكد الصلاحية القانونية", d.consent_assess2),
  row("Will Receive Written Report / سيتسلم تقريراً مكتوباً", d.consent_assess3),
  row("Consent to Contact Other Parties / الموافقة على التواصل مع جهات أخرى", d.consent_communicate),
  row("Consent to Recording / الموافقة على التسجيل", d.consent_recording),
  row("Understands Session Fees / يفهم رسوم الجلسات", d.consent_fees1),
  row("Cancellation Policy / سياسة الإلغاء", d.consent_fees2),
  row("Repeated Absence Policy / سياسة الغياب المتكرر", d.consent_fees3),
  row("Data Retention Policy / الاحتفاظ بالبيانات", d.consent_dataRetention),
  row("Guardian Name / اسم ولي الأمر", d.guardianName),
  row("Relationship to Child / صلة القرابة بالطفل", d.guardianRelation),
  row("Signature (typed) / التوقيع (مكتوب)", d.guardianSignature),
  row("Date / التاريخ", d.signatureDate),
  row("Second Guardian Signature / توقيع ولي الأمر الثاني", d.guardian2Signature),
  row("Second Guardian Date / تاريخ", d.signature2Date),
].join(''))}

</div>
<div style="background:#1B5E6E;color:#fff;text-align:center;padding:12px;font-size:12px;opacity:.85">
  ذرية — Zurriya Child Development Center · zurriyacdc@gmail.com · +20 104 158 2668
</div>
</div>
</body></html>`;

    await transporter.sendMail({
      from: `"Zurriya Intake Form" <${process.env.GMAIL_USER}>`,
      to: 'zurriyacdc@gmail.com',
      subject: `📋 Intake Form — ${childName} — ${new Date().toLocaleDateString('en-GB')}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Intake email error:', err);
    return NextResponse.json({ error: 'Failed to send intake form' }, { status: 500 });
  }
}
