// Plain-language alternate edition of the CLEAR Ownership Staff Resource Toolkit.
// Approved training terms are unchanged: the six CCE element labels, the seven rung names,
// the five reversal step names, the six request step names (including the approved Step 5
// wording), the Eisenhower quadrant labels, and the RACI role names.

const CCE_SRC = 'Source: Communicating CLEAR training, final series, slides 11–19 and 37–41.';
const LADDER_SRC = 'Source: Decision & Escalation training, Supervisor edition, slides 8–9. Model: Trevor Maber, TED-Ed, “Rethinking thinking.”';
const EIS_SRC = 'Source: Time Management in a CLEAR Way workshop. Model: FranklinCovey, The 5 Choices, Choice 1.';
const RACI_SRC = 'Source: Decision & Escalation training, Supervisor edition, slides 11–12. Follow your branch’s current approved guidance.';
const REV_SRC = 'Source: Safe to Decide training, Supervisor edition, slides 23–25.';
const REQ_SRC = 'Source: Decision & Escalation training, six-step request checklist; Communicating CLEAR training, slide 41.';

const LINKS = {
  ted: 'https://ed.ted.com/lessons/rethinking-thinking-trevor-maber',
  usc: 'https://gould.usc.edu/news/understanding-the-ladder-of-inference-navigating-cognitive-pitfalls/',
  fc: 'https://www.franklincovey.com/courses/the-5-choices/choice-1/',
  cornell: 'https://it.cornell.edu/it-service-management/raci-and-rasci-definitions',
};

// Approved CCE element labels (from the Six-Element Message Template). Do not reword.
const CCE = [
  'What is changing or being asked',
  'Why / Why it is changing',
  'Who owns it and who decides',
  'What is not changing',
  'What to do if it is unclear, and when you will hear back',
  'Where this lives (whenever applicable)',
];

const LADDER = [
  ['Take action', 'What will I do?'],
  ['Form beliefs', 'What am I now treating as true?'],
  ['Draw conclusions', 'What have I decided this means?'],
  ['Make assumptions', 'What am I assuming without checking?'],
  ['Add meaning', 'How am I reading those details?'],
  ['Select information', 'Which details did I notice, and which did I miss?'],
  ['Observe facts', 'What was actually said, done, or written down?'],
]; // listed 7 → 1 (top to bottom)

const QUADRANTS = {
  q1: ['Q1', 'ACT NOW', 'There is a real deadline or risk to services. Act now, using the correct approval process.'],
  q2: ['Q2', 'SCHEDULE', 'Set aside time for planning, prevention, training, and required work before it becomes urgent.'],
  q3: ['Q3', 'CHECK & ROUTE', 'Confirm the request is real. Then route it, delegate it, or ask for more time, if you have the authority.'],
  q4: ['Q4', 'REDUCE OR STOP', 'If the work is not required and serves no purpose, cut it back or stop it.'],
};

const RACI_META = [
  ['Branch / team', 'Process / project'],
  ['Prepared by', 'Review date'],
];

const steps = (arr) => arr.map(([label, desc], i) => ({ n: String(i + 1).padStart(2, '0'), label, desc }));
const cceSteps = (descs) => steps(CCE.map((l, i) => [l, descs[i]]));

const REVERSAL = ['Recognize', 'Explain', 'Own', 'Direct', 'Clarify'];
const REQUEST = [
  'Name the exact decision',
  'Check authority and boundaries',
  'Gather facts and required input',
  'Offer options and a recommendation',
  'Use the correct route and verify timing', // approved revision; keep exact
  'Track the reply and close the loop',
];
const zip = (labels, descs) => labels.map((l, i) => [l, descs[i]]);

const DOCS = [
  // ───────────────────────────── 01 CCEs ─────────────────────────────
  {
    folder: '01_CCEs', file: '01_CCEs_Flyer', topic: 'CCEs', type: 'Flyer', num: '01', pages: 1,
    blocks: [
      { t: 'kicker', text: '01  |  CCEs  |  FLYER' },
      { t: 'title', text: 'CLEAR Communication Elements (CCEs)' },
      { t: 'lead', text: 'Six questions to answer when you give or receive work direction' },
      { t: 'para', text: 'Use these questions to check that a message tells people what they need to know to do the work.' },
      { t: 'steps', size: 'lg', items: cceSteps([
        'Who needs to do what, and by when?',
        'Why is the work or the change needed?',
        'Who does the work, and who makes the decision?',
        'Which duties, rules, deadlines, or approvals stay the same?',
        'Who do you contact with questions, and when will you get a reply or update?',
        'Which form, policy, or guide applies, if any?',
      ]) },
      { t: 'callout', title: 'Who uses the CCEs', body: 'Leaders include CCEs 1–5 in written direction covered by the Administrative Directive, and add CCE 6 when a source document applies. All staff can use the questions to spot missing information and ask about it.' },
      { t: 'basis', text: CCE_SRC },
    ],
  },
  {
    folder: '01_CCEs', file: '01_CCEs_Desk_Reference', topic: 'CCEs', type: 'Desk reference', num: '01', pages: 1,
    blocks: [
      { t: 'kicker', text: '01  |  CCEs  |  DESK REFERENCE' },
      { t: 'title', text: 'CCE Message Checklist' },
      { t: 'lead', text: 'Use this checklist when you write, read, or forward work direction.' },
      { t: 'callout', title: 'When the Administrative Directive applies', body: 'Written expectations, changes, decisions, and work reminders from leadership must include CCEs 1–5, plus CCE 6 when a source document applies. Greetings and replies that only confirm receipt do not need the CCEs.' },
      { t: 'table', headers: ['Element', 'What to check'], widths: [42, 58], rows: zip(CCE.map((l, i) => `${i + 1}. ${l}`), [
        'Is it clear who needs to do what, and by when?',
        'Does the message explain why?',
        'Does it name who does the work and who decides?',
        'Does it say what stays the same?',
        'Does it say who to contact and when to expect a reply?',
        'Does it point to the right form, policy, or guide?',
      ]) },
      { t: 'h1', text: 'Before you send or forward a message' },
      { t: 'para', text: 'Do not change the action, reason, deadline, audience, or decision-maker. You can reword for clarity, but the direction must stay the same. If a fact is missing, ask for it instead of guessing.' },
      { t: 'h1', text: 'When you receive direction' },
      { t: 'para', text: 'Repeat it back to confirm you understood:' },
      { t: 'quote', text: '“I understand that I need to __________ by __________. I am responsible for __________. I still need to confirm __________ with __________.”' },
      { t: 'callout', title: 'Last check', body: 'Could the reader tell you what to do next, by when, and who to ask for help? A link to a document can help, but the message itself still needs to explain the direction.' },
      { t: 'basis', text: CCE_SRC },
    ],
  },
  {
    folder: '01_CCEs', file: '01_CCEs_Resource', topic: 'CCEs', type: 'Resource', num: '01', pages: 2,
    blocks: [
      { t: 'kicker', text: '01  |  CCEs  |  RESOURCE' },
      { t: 'title', text: 'Using the CLEAR Communication Elements' },
      { t: 'lead', text: 'How the six CCEs help leaders and staff share clear direction' },
      { t: 'para', text: 'The CCE Administrative Directive applies to written direction from leadership. Any staff member can also use the six questions to understand an assignment, ask about a missing detail, or check a handoff. Using the CCEs does not give anyone new approval authority.' },
      { t: 'h1', text: 'What each element should include' },
      { t: 'steps', items: cceSteps([
        'Name who the message is for, what they need to do, and the deadline or start date. If the date to share the information is different from the date to do the work, give both.',
        'Explain the purpose of the work or the problem it solves. “Management asked for it” is not a reason.',
        'Name the person doing the work and the person who makes the decision. Say what the reader can decide on their own and what needs someone else’s approval.',
        'List the duties, service expectations, rules, or approval steps that stay the same. Only call something unchanged after you have confirmed it.',
        'Say who answers questions and when people can expect a reply. Escalated questions get an answer, or the name of the person handling them, within two working days. If it will take longer, give a date for the next update.',
        'If a document applies, give its name, version, and where to find it. If no document applies, you can leave this element out.',
      ]) },
      { t: 'callout', title: 'Short messages count too', body: 'Emails, chat messages, forwards, and reminders that give direction need the CCEs that apply. A greeting, or a reply that only confirms you received something, does not.' },
      { t: 'basis', text: CCE_SRC },
      { t: 'pagebreak' },
      { t: 'kicker', text: '01  |  CCEs  |  RESOURCE (CONTINUED)' },
      { t: 'title', text: 'Sample CCE Message' },
      { t: 'lead', text: 'This is a made-up example. Replace the details with your own.' },
      { t: 'table', headers: ['CCE', 'Example wording'], widths: [26, 74], rows: [
        ['1. Action', 'Service desk staff: review next week’s proposed coverage schedule and email any conflicts to your supervisor by noon Thursday.'],
        ['2. Reason', 'We need to find coverage gaps before the schedule is final.'],
        ['3. Owners', 'Each staff member checks their own availability. The supervisor approves the unit’s coverage plan.'],
        ['4. Unchanged', 'Current assignments, service hours, approved leave, and duties stay the same until a change is approved.'],
        ['5. Questions and reply', 'Send questions to your supervisor. Escalated questions get an answer, or the name of the person handling them, within two working days. If it will take longer, you will get an update.'],
        ['6. Source', 'The current coverage schedule is attached. In a real message, attach the approved document or say where to find it.'],
      ] },
      { t: 'h1', text: 'Draft your next message' },
      { t: 'notes', rows: ['Action and deadline', 'Reason and owners', 'What stays the same', 'Who to ask, and source'] },
      { t: 'h1', text: 'Check that your message was understood' },
      { t: 'para', text: 'Ask: “So I know I explained this clearly, what will you do next?” Listen for the action, the deadline, and who to contact for help. If something is missing, fix the message.' },
      { t: 'para', text: 'When you reword a message, do not change the confirmed action, deadline, or decision-maker.' },
      { t: 'basis', text: CCE_SRC },
    ],
  },

  // ───────────────────────── 02 Ladder of Inference ─────────────────────────
  {
    folder: '02_Ladder_of_Inference', file: '02_Ladder_of_Inference_Flyer', topic: 'Ladder of Inference', type: 'Flyer', num: '02', pages: 1,
    blocks: [
      { t: 'kicker', text: '02  |  LADDER OF INFERENCE  |  FLYER' },
      { t: 'title', text: 'The Ladder of Inference' },
      { t: 'lead', text: 'Check your facts before you act' },
      { t: 'para', text: 'People often jump from what they see to a conclusion in seconds. The ladder shows the steps in between, so you can tell when you are treating an assumption as a fact.' },
      { t: 'ladder', size: 'lg' },
      { t: 'callout', title: 'How to use it', body: 'Work back down the ladder. What do I actually know? What have I added? What question would test my assumption? Get the answer before you decide or escalate.' },
      { t: 'para', text: 'Our beliefs also shape what we notice next. This is called the feedback loop.' },
      { t: 'basis', text: LADDER_SRC },
    ],
  },
  {
    folder: '02_Ladder_of_Inference', file: '02_Ladder_of_Inference_Desk_Reference', topic: 'Ladder of Inference', type: 'Desk reference', num: '02', pages: 1,
    blocks: [
      { t: 'kicker', text: '02  |  LADDER OF INFERENCE  |  DESK REFERENCE' },
      { t: 'title', text: 'Ladder of Inference Checklist' },
      { t: 'lead', text: 'Use these questions before you make a decision or a request.' },
      { t: 'table', headers: ['Step', 'What to ask yourself'], widths: [34, 66], rows: [...LADDER].reverse().map(([a, b], i) => [`${i + 1}. ${a}`, b]) },
      { t: 'h1', text: 'Fact or assumption?' },
      { t: 'table', headers: ['What happened', 'What I might assume', 'What I could ask'], widths: [33, 33, 34], rows: [[
        'The reply said, “Please send your recommendation.”',
        '“They already know the answer and are wasting my time.”',
        '“Which decision should my recommendation cover, and what facts do you need?”',
      ]] },
      { t: 'h1', text: 'Before you decide or escalate' },
      { t: 'para', text: 'Name the decision. Check the current policy or procedure and who has the authority to decide. Ask the question that would fill in the missing fact. If new information changes the picture, change your conclusion.' },
      { t: 'lines', items: ['A fact I can confirm', 'An assumption to check', 'My question and next step'] },
      { t: 'callout', title: 'Urgent situations come first', body: 'If there is a safety concern or an immediate risk to services, use the required urgent process right away. Do not stop to fill out this worksheet.' },
      { t: 'basis', text: LADDER_SRC },
      { t: 'links', items: [['Watch the TED-Ed lesson', LINKS.ted]] },
    ],
  },
  {
    folder: '02_Ladder_of_Inference', file: '02_Ladder_of_Inference_Resource', topic: 'Ladder of Inference', type: 'Resource', num: '02', pages: 2,
    blocks: [
      { t: 'kicker', text: '02  |  LADDER OF INFERENCE  |  RESOURCE' },
      { t: 'title', text: 'Understanding the Ladder of Inference' },
      { t: 'lead', text: 'The seven steps from what we observe to what we do' },
      { t: 'para', text: 'The Ladder of Inference shows how we get from what we observe to how we act. We often climb it in seconds without noticing. Knowing the steps helps you see when an interpretation has turned into an assumption.' },
      { t: 'ladder', size: 'md' },
      { t: 'h1', text: 'The feedback loop' },
      { t: 'para', text: 'Our beliefs affect what we notice next. For example, if you believe a coworker never responds, you may notice every delay and miss the times they did reply. Look for information that does not fit your first explanation.' },
      { t: 'callout', title: 'Use it to check your own thinking', body: 'The ladder is a tool for checking your own conclusions. It is not a way to label other people. Describe what you saw or heard, ask a neutral question, and listen for anything that could change your view. A conclusion can be reasonable and still need to be checked.' },
      { t: 'basis', text: LADDER_SRC },
      { t: 'links', items: [['TED-Ed lesson', LINKS.ted], ['USC explanation of the seven steps', LINKS.usc]] },
      { t: 'pagebreak' },
      { t: 'kicker', text: '02  |  LADDER OF INFERENCE  |  RESOURCE (CONTINUED)' },
      { t: 'title', text: 'Example: Checking an Assumption' },
      { t: 'lead', text: 'This is a made-up workplace example, not a real County case.' },
      { t: 'table', headers: ['Steps on the ladder', 'What might happen'], widths: [30, 70], rows: [
        ['1–2. Facts and what you notice', 'A supervisor replies, “Please send your recommendation.” You notice the request, but you may not know what information the supervisor still needs.'],
        ['3–4. Meaning and assumptions', 'You read the reply as a brush-off and assume the decision has already been made. The supervisor did not say either of these things.'],
        ['5–7. Conclusion, belief, and action', 'You decide your input won’t matter and that the process is pointless. You put off the request or send a frustrated reply.'],
      ] },
      { t: 'h1', text: 'A better next step' },
      { t: 'callout', title: 'Ask a clarifying question', body: '“I can prepare a recommendation. Which decision needs to be made, what facts should I include, and when do you need it?”' },
      { t: 'para', text: 'Then confirm your role. You may be responsible for the research and recommendation while someone else approves it. Share the facts you have checked, the open question, and the next step you recommend.' },
      { t: 'h1', text: 'Try it with a current situation' },
      { t: 'notes', rows: ['What I observed', 'My assumption, or another explanation', 'Who to ask, and what', 'What I will do next'] },
      { t: 'h1', text: 'When your view changes' },
      { t: 'quote', text: '“At first I thought __________. After I checked __________, I learned __________. My next step is __________.”' },
      { t: 'basis', text: LADDER_SRC },
    ],
  },

  // ───────────────────────── 03 Eisenhower Chart ─────────────────────────
  {
    folder: '03_Eisenhower_Chart', file: '03_Eisenhower_Chart_Flyer', topic: 'Eisenhower Chart', type: 'Flyer', num: '03', pages: 1,
    blocks: [
      { t: 'kicker', text: '03  |  EISENHOWER CHART  |  FLYER' },
      { t: 'title', text: 'The Eisenhower Chart' },
      { t: 'lead', text: 'Sort tasks by urgency and importance to decide what to do next' },
      { t: 'quadrants', size: 'lg' },
      { t: 'callout', title: 'Make time for Q2 work', body: 'Pick one Q2 task. Put it on your calendar and decide what “done” looks like.' },
      { t: 'h1', text: 'Two questions to ask' },
      { t: 'defs', items: [['Is it urgent?', 'What happens if this waits?'], ['Is it important?', 'Does it support required duties, services, safety, or agreed goals?']] },
      { t: 'para', text: 'Your job duties, your branch RACI, and your supervisor’s direction help define what is important. Required work is still important, even when it is routine.' },
      { t: 'basis', text: EIS_SRC },
    ],
  },
  {
    folder: '03_Eisenhower_Chart', file: '03_Eisenhower_Chart_Desk_Reference', topic: 'Eisenhower Chart', type: 'Desk reference', num: '03', pages: 1,
    blocks: [
      { t: 'kicker', text: '03  |  EISENHOWER CHART  |  DESK REFERENCE' },
      { t: 'title', text: 'Eisenhower Chart Worksheet' },
      { t: 'lead', text: 'Check the real deadline, what happens if the task waits, and your role.' },
      { t: 'quadrants', size: 'md' },
      { t: 'defs', items: [
        ['Check urgency', 'Confirm the deadline and what happens if the task waits.'],
        ['Check importance', 'Connect the task to required work, services, safety, or agreed goals.'],
        ['Check authority', 'Confirm who can change the timing, assign the work, or stop it.'],
      ] },
      { t: 'h1', text: 'Schedule one Q2 task today' },
      { t: 'notes', rows: ['Task and what “done” means', 'Time set aside / owner'] },
      { t: 'callout', title: 'When priorities conflict', body: 'Bring the deadlines, the impact of each task, two possible options, and your recommendation to the leader who has authority to decide. Confirm which work comes first. Do not drop a required duty on your own.' },
      { t: 'basis', text: EIS_SRC },
      { t: 'links', items: [['FranklinCovey: urgency and importance', LINKS.fc]] },
    ],
  },
  {
    folder: '03_Eisenhower_Chart', file: '03_Eisenhower_Chart_Resource', topic: 'Eisenhower Chart', type: 'Resource', num: '03', pages: 2,
    blocks: [
      { t: 'kicker', text: '03  |  EISENHOWER CHART  |  RESOURCE' },
      { t: 'title', text: 'Using the Eisenhower Chart' },
      { t: 'lead', text: 'How to set priorities based on your actual duties and authority' },
      { t: 'para', text: 'Urgency is about time: what happens if a task is delayed. Importance is about results: required work, services, safety, and agreed goals. A request can feel urgent and still not be the best use of your time.' },
      { t: 'quadrants', size: 'md' },
      { t: 'h1', text: 'Your role defines what is important' },
      { t: 'para', text: 'Start with your job duties, your branch RACI, current procedures, and your supervisor’s expectations. A request from someone senior still needs to be checked against the actual service need and deadline.' },
      { t: 'h1', text: 'Office Hours and focus time' },
      { t: 'para', text: 'When it makes sense, save non-urgent questions for the published Office Hours or support schedule. Use protected focus time to finish important work, process requests, and answer messages. Urgent service or safety issues should go through the required process right away, without waiting for Office Hours.' },
      { t: 'callout', title: 'Two common mistakes', body: 'Q3 does not mean handing every urgent task to someone else. Q4 does not mean dropping a required duty. Before you change or stop any work, check whether it is needed and whether you have the authority.' },
      { t: 'basis', text: EIS_SRC },
      { t: 'links', items: [['FranklinCovey: urgency and importance', LINKS.fc]] },
      { t: 'pagebreak' },
      { t: 'kicker', text: '03  |  EISENHOWER CHART  |  RESOURCE (CONTINUED)' },
      { t: 'title', text: 'Eisenhower Chart Examples and Planner' },
      { t: 'lead', text: 'These are made-up examples. Your own facts and role may put a task in a different quadrant.' },
      { t: 'table', headers: ['Example', 'Quadrant', 'Next step'], widths: [42, 14, 44], center: [1], rows: [
        ['Coverage is missing before the next required service window.', 'Q1', 'Use the correct process to cover the immediate service risk.'],
        ['A clearer job aid would prevent the same questions from coming up again.', 'Q2', 'Schedule time to write the update and get any required review.'],
        ['Someone wants an optional font change by noon. It does not affect the work.', 'Q3', 'Confirm the deadline and the reason. Ask for more time or reroute it, if you have the authority.'],
        ['Someone is still polishing an optional flyer for an event that was canceled.', 'Q4', 'Confirm nothing still requires it, then stop or cut back the work.'],
      ] },
      { t: 'h1', text: 'Plan one important task' },
      { t: 'notes', rows: ['Task and why it matters', 'Deadline / time set aside', 'Quadrant, next step, owner', 'What “done” looks like'] },
      { t: 'h1', text: 'Review how it went' },
      { t: 'para', text: 'Did you use the time you set aside? What got in the way? Did the work cut down on repeat questions, reduce rework, or improve service? Adjust your plan as needed.' },
      { t: 'callout', title: 'Write down your next step', body: '“I will finish __________ during __________. The result will be __________. I need __________ to confirm __________.”' },
      { t: 'basis', text: EIS_SRC },
    ],
  },

  // ───────────────────────────── 04 RACI ─────────────────────────────
  {
    folder: '04_RACI_Chart', file: '04_RACI_Chart_Flyer', topic: 'RACI Chart', type: 'Flyer', num: '04', pages: 1,
    blocks: [
      { t: 'kicker', text: '04  |  RACI CHART  |  FLYER' },
      { t: 'title', text: 'RACI Chart' },
      { t: 'lead', text: 'Show who does the work, who owns the result, who gives input, and who gets updates' },
      { t: 'raciLegend', items: [
        ['R', 'Responsible', 'Does the work.'],
        ['A', 'Accountable', 'Owns the result. Only one A per task.'],
        ['C', 'Consulted', 'Gives input before the work is done.'],
        ['I', 'Informed', 'Gets updates on the result.'],
      ] },
      { t: 'para', text: 'List one task or decision in each row. Then add names or job titles for R, A, C, and I.' },
      { t: 'fields', rows: RACI_META },
      { t: 'raci', rowHeight: 'xl' },
      { t: 'callout', title: 'Review the chart', body: 'Each row needs an R and exactly one A. One person can be both. If you don’t know who fills a role yet, write “To confirm” and check through the normal approval process.' },
      { t: 'basis', text: RACI_SRC },
    ],
  },
  {
    folder: '04_RACI_Chart', file: '04_RACI_Chart_Desk_Reference', topic: 'RACI Chart', type: 'Desk reference', num: '04', pages: 1,
    blocks: [
      { t: 'kicker', text: '04  |  RACI CHART  |  DESK REFERENCE' },
      { t: 'title', text: 'Blank RACI Chart' },
      { t: 'lead', text: 'Write names or job titles in each column. Use a new row when the decision-maker changes.' },
      { t: 'raciStrip' },
      { t: 'fields', rows: RACI_META },
      { t: 'raci', rowHeight: 'lg' },
      { t: 'h1', text: 'Before you use the chart' },
      { t: 'para', text: 'Each task needs an R and exactly one A, and one person can be both. List the right people as C and I. Make sure the chart matches current authority and approved procedures.' },
      { t: 'lines', items: ['Source / limits', 'Questions to confirm'] },
      { t: 'callout', title: 'This chart does not grant authority', body: 'Filling out a RACI chart does not give anyone approval authority. It does not replace your branch’s approved RACI or the Decision & Permission Matrix.' },
      { t: 'basis', text: RACI_SRC },
    ],
  },
  {
    folder: '04_RACI_Chart', file: '04_RACI_Chart_Resource', topic: 'RACI Chart', type: 'Resource', num: '04', pages: 2,
    blocks: [
      { t: 'kicker', text: '04  |  RACI CHART  |  RESOURCE' },
      { t: 'title', text: 'Using a RACI Chart' },
      { t: 'lead', text: 'How to assign roles for a task. A blank chart is on page 2.' },
      { t: 'para', text: 'A RACI chart shows who is involved in a task and how. It separates the person who does the work from the person who owns the result, and lists who needs to give input or get updates.' },
      { t: 'table', headers: ['Role', 'What it means', 'Question to ask'], widths: [26, 46, 28], rows: [
        ['R  •  Responsible', 'Does the task or carries out the agreed work.', 'Who is doing this?'],
        ['A  •  Accountable', 'Owns the result and the related decision. Only one A per task.', 'Who answers for the result?'],
        ['C  •  Consulted', 'Gives needed information before a decision or action.', 'Whose input do we need?'],
        ['I  •  Informed', 'Gets updates so they can understand or act on the result.', 'Who needs to know?'],
      ] },
      { t: 'h1', text: 'How to build the chart' },
      { t: 'steps', items: steps([
        ['List one task or decision per row', 'Put one action in each row. If different people prepare, approve, and carry out the work, give each one its own row.'],
        ['Name the R and one A', 'Check who currently has authority. Name an R and one A. One person can hold both roles.'],
        ['Add the C and I', 'List the people whose input is needed and the people who need the result. Being consulted does not make someone the owner.'],
        ['Review and update', 'Go over the chart with the people involved and the leader with authority. Note the source, any open questions, and a review date.'],
      ]) },
      { t: 'callout', title: 'If you’re not sure who owns a task', body: 'Write “To confirm” in that spot and name who will find out. Until then, only do the work you already have authority to do.' },
      { t: 'basis', text: 'Source: Decision & Escalation training, Supervisor edition, slides 11–12. Definitions: Cornell IT.', link: ['Cornell IT definitions', LINKS.cornell] },
      { t: 'pagebreak' },
      { t: 'kicker', text: '04  |  RACI CHART  |  RESOURCE (CONTINUED)' },
      { t: 'title', text: 'RACI Chart Worksheet' },
      { t: 'lead', text: 'Enter names or job titles. Leave the rows blank until your team fills them in together.' },
      { t: 'fields', rows: RACI_META },
      { t: 'raci', rowHeight: 'sm' },
      { t: 'raciStrip' },
      { t: 'notes', rowHeight: 540, rows: ['Source and version', 'Scope and decision limits', 'Open question and who owns it'] },
      { t: 'fields', rows: [['Confirmed with', 'Next review']] },
      { t: 'callout', title: 'Last check', body: 'Each row has one task or decision, at least one R, and exactly one A. Send any open questions about authority through the normal approval process.' },
      { t: 'basis', text: RACI_SRC },
    ],
  },

  // ───────────────────────── 05 Respectful Reversal ─────────────────────────
  {
    folder: '05_Respectful_Reversal', file: '05_Respectful_Reversal_Flyer', topic: 'Respectful Reversal', type: 'Flyer', num: '05', pages: 1,
    blocks: [
      { t: 'kicker', text: '05  |  RESPECTFUL REVERSAL  |  FLYER' },
      { t: 'title', text: 'Five Steps for a Respectful Reversal' },
      { t: 'lead', text: 'How to explain a change to a decision' },
      { t: 'steps', size: 'lg', items: steps(zip(REVERSAL, [
        'Name the original decision and the facts that were known at the time.',
        'Share the new information, risk, or limit that requires the change.',
        'Take responsibility for the change and for explaining it clearly.',
        'Explain the next step, when it starts, and what support is available.',
        'Say whether the change affects only this situation or a wider rule.',
      ])) },
      { t: 'callout', title: 'Don’t blame the person', body: 'Explain what changed and what happens next. No one should be blamed for following the direction they were given.' },
      { t: 'h1', text: 'If you are receiving a reversal' },
      { t: 'para', text: 'Ask what is changing, why, when, and who it affects. Confirm your next step, the support available, and which duties are still yours.' },
      { t: 'basis', text: REV_SRC },
    ],
  },
  {
    folder: '05_Respectful_Reversal', file: '05_Respectful_Reversal_Desk_Reference', topic: 'Respectful Reversal', type: 'Desk reference', num: '05', pages: 1,
    blocks: [
      { t: 'kicker', text: '05  |  RESPECTFUL REVERSAL  |  DESK REFERENCE' },
      { t: 'title', text: 'Respectful Reversal Checklist' },
      { t: 'lead', text: 'Use this when you have the authority to change a decision, or when you explain a change that has been approved.' },
      { t: 'table', headers: ['Step', 'What to include', 'What you could say'], widths: [20, 38, 42], rows: [
        ['1. Recognize', 'The original decision and the facts known at the time.', '“You used the information we had at the time.”'],
        ['2. Explain', 'The new fact, risk, or limit.', '“We now know __________, so __________ has to change.”'],
        ['3. Own', 'Your responsibility for clear direction and follow-up.', '“It’s my job to make this change clear.”'],
        ['4. Direct', 'The next step, timing, and support.', '“The next step is __________. You will have __________ to help.”'],
        ['5. Clarify', 'Whether this changes one situation or a wider rule.', '“This applies to __________. __________ stays the same.”'],
      ] },
      { t: 'h1', text: 'Before the conversation' },
      { t: 'para', text: 'Check the facts and confirm you have the authority. Decide on the next step and the support you can offer. Only call the original decision reasonable or authorized if the facts support it.' },
      { t: 'h1', text: 'If you are receiving a change' },
      { t: 'para', text: 'Repeat it back to confirm:' },
      { t: 'quote', text: '“To confirm, I will now __________ by __________. I am still responsible for __________. This change applies to __________. I will contact __________ if I need help.”' },
      { t: 'callout', title: 'Putting the change in writing', body: 'Use the CCEs that apply. State the confirmed decision, explain why, and make the next step clear to everyone affected.' },
      { t: 'basis', text: REV_SRC },
    ],
  },
  {
    folder: '05_Respectful_Reversal', file: '05_Respectful_Reversal_Resource', topic: 'Respectful Reversal', type: 'Resource', num: '05', pages: 2,
    blocks: [
      { t: 'kicker', text: '05  |  RESPECTFUL REVERSAL  |  RESOURCE' },
      { t: 'title', text: 'How to Reverse a Decision Respectfully' },
      { t: 'lead', text: 'Five steps for explaining a change while keeping roles clear' },
      { t: 'para', text: 'Sometimes new facts mean a decision has to change. A good conversation helps people understand why and keep working with confidence. Use these steps when you change direction within your authority, or when you explain a change that someone else approved.' },
      { t: 'steps', items: steps(zip(REVERSAL, [
        'State the original decision and what was known at the time. Acknowledge the person’s reasoning. Confirm the facts before you say the decision was authorized or reasonable.',
        'Describe the new information, service risk, or limit that requires the change. Keep the focus on the work, not on the person.',
        'Take responsibility for your part in both the original direction and the new one. Don’t shift blame to staff or pass along a change without explaining it.',
        'Explain what happens next, when, who does it, and what support is available. Point out any decision that still needs someone with authority.',
        'Say whether the change applies only to this situation or to a wider process. Don’t present a one-time fix as a new rule.',
      ])) },
      { t: 'h1', text: 'When you are on the receiving end' },
      { t: 'para', text: 'Ask about any step that wasn’t explained. Repeat back what you will do, what you can still decide, and who will support you. When you share the change with others, don’t add blame or change its meaning.' },
      { t: 'callout', title: 'Respectful and accountable', body: 'A respectful explanation does not skip a required review. It keeps the facts, expectations, support, and responsibilities clear while the work is corrected.' },
      { t: 'basis', text: REV_SRC },
      { t: 'pagebreak' },
      { t: 'kicker', text: '05  |  RESPECTFUL REVERSAL  |  RESOURCE (CONTINUED)' },
      { t: 'title', text: 'Respectful Reversal Example and Planner' },
      { t: 'lead', text: 'Made-up example: a confirmed coverage gap means today’s assignments must change for one day.' },
      { t: 'table', headers: ['Step', 'What you could say'], widths: [22, 78], rows: [
        ['1. Recognize', '“You planned today’s work using the coverage schedule we confirmed.”'],
        ['2. Explain', '“We now have a coverage gap during the afternoon service window, so we need to change today’s assignments.”'],
        ['3. Own', '“It’s my job to make the new plan clear and help the team carry it out.”'],
        ['4. Direct', '“Please use the revised assignment this afternoon. I’ll help let the team know and confirm support before the service window starts.”'],
        ['5. Clarify', '“This change is for today only. Tomorrow’s schedule and the usual approval process stay the same.”'],
      ] },
      { t: 'h1', text: 'Plan your conversation' },
      { t: 'notes', rows: ['Original decision and facts', 'New information and reason', 'My responsibility', 'Next step and support', 'One situation or a wider rule?'] },
      { t: 'h1', text: 'Check that the message was understood' },
      { t: 'para', text: 'Ask: “What will you do next, and what support do you still need?” Then confirm who will tell anyone else affected, and whether a written CCE message or an updated document is needed.' },
      { t: 'basis', text: REV_SRC },
    ],
  },

  // ───────────────────────────── 06 Clear Requests ─────────────────────────────
  {
    folder: '06_Clear_Requests', file: '06_Clear_Requests_Flyer', topic: 'Clear Requests', type: 'Flyer', num: '06', pages: 1,
    blocks: [
      { t: 'kicker', text: '06  |  CLEAR REQUESTS  |  FLYER' },
      { t: 'title', text: 'Six Steps for a Clear Request' },
      { t: 'lead', text: 'How to ask for a decision, escalate an issue, or follow up' },
      { t: 'steps', size: 'lg', items: steps(zip(REQUEST, [
        'Say exactly what answer, approval, or clarification you need.',
        'Check current guidance to see what you can decide and what needs someone else.',
        'Separate confirmed facts from assumptions. Include the information the decision-maker needs.',
        'List the possible options and explain which one you recommend.',
        'Confirm who decides, the real deadline, and when to expect a reply or update.',
        'Record the answer, confirm the next step, and update the people affected.',
      ])) },
      { t: 'callout', title: 'Plan your follow-up', body: 'Before you send the request, decide how you will track the reply. After you get an answer, confirm the next step. No reply does not mean the request is approved.' },
      { t: 'basis', text: REQ_SRC },
    ],
  },
  {
    folder: '06_Clear_Requests', file: '06_Clear_Requests_Desk_Reference', topic: 'Clear Requests', type: 'Desk reference', num: '06', pages: 1,
    blocks: [
      { t: 'kicker', text: '06  |  CLEAR REQUESTS  |  DESK REFERENCE' },
      { t: 'title', text: 'Clear Request Checklist' },
      { t: 'lead', text: 'Use this for a decision request, an escalation, or a follow-up on an open item.' },
      { t: 'table', headers: ['Step', 'Ask yourself before you send'], widths: [40, 60], rows: zip(REQUEST.map((l, i) => `${i + 1}. ${l}`), [
        'Will the reader know exactly what answer, approval, or clarification I need?',
        'What can I decide or keep doing? What needs someone else’s approval?',
        'What do I know for sure? What is still unconfirmed? Whose input do I need?',
        'What are the realistic options? Which one do I recommend, and why?',
        'Who makes the decision? Is the deadline real? When will I get a reply or update?',
        'Who will track the request, do the next step, and update others?',
      ]) },
      { t: 'h1', text: 'Track three dates' },
      { t: 'fields', rows: [['Decision needed by', 'Reply expected by'], ['Next update, if still open', 'Confirmed with']] },
      { t: 'h1', text: 'Following up on a request' },
      { t: 'para', text: 'Refer to your original request and the update date you agreed on. Say what is still unanswered, any new facts, and what happens if the decision waits. Check for a reply before you send a second request.' },
      { t: 'callout', title: 'Response times and urgent issues', body: 'Escalated questions get an answer, or the name of the person handling them, within two working days. If it will take longer, you should get a date for the next update. Immediate risks and required deadlines go through the urgent process.' },
      { t: 'basis', text: REQ_SRC },
    ],
  },
  {
    folder: '06_Clear_Requests', file: '06_Clear_Requests_Resource', topic: 'Clear Requests', type: 'Resource', num: '06', pages: 2,
    blocks: [
      { t: 'kicker', text: '06  |  CLEAR REQUESTS  |  RESOURCE' },
      { t: 'title', text: 'How to Make a Clear Request' },
      { t: 'lead', text: 'Six steps for asking someone else to decide while you keep working on your part' },
      { t: 'steps', items: steps(zip(REQUEST, [
        'Be specific. “Which coverage option is approved?” is clearer than “Please handle this problem.” Say what answer, approval, or clarification you need.',
        'Review the current role guidance, your branch RACI, and the Decision & Permission Matrix. Separate the work you own from decisions that belong to someone else.',
        'Use current sources and confirmed facts. Say what information is missing. Get any required input, and don’t present an assumption as a fact.',
        'Give two realistic options when you can. Explain the effect on services and resources, and the trade-offs. If only one option works, explain why.',
        'Confirm who decides, when the decision is needed, when to expect a reply, and when the next update will come. A date you asked for is not the same as a date someone agreed to.',
        'Before you send the request, decide who will follow up. After you send it, record the answer, confirm the next step and who owns it, and update the people affected.',
      ])) },
      { t: 'callout', title: 'Getting a reply vs. solving the issue', body: 'The two-working-day standard means you will get an answer or the name of the person handling your question. It does not promise the issue will be solved in that time. If more time is needed, confirm when the next update will come. Urgent issues go through the required process right away.' },
      { t: 'basis', text: REQ_SRC },
      { t: 'pagebreak' },
      { t: 'kicker', text: '06  |  CLEAR REQUESTS  |  RESOURCE (CONTINUED)' },
      { t: 'title', text: 'Clear Request Worksheet and Examples' },
      { t: 'lead', text: 'Use real facts, approved sources, and confirmed dates.' },
      { t: 'notes', header: ['Step', 'Your request'], rows: ['Decision needed', 'Authority and source', 'Facts and input needed', 'Options and recommendation', 'Who decides, and when', 'Who tracks it, and next step'] },
      { t: 'h1', text: 'Sample request' },
      { t: 'callout', title: 'Asking for a decision on coverage', body: '“We need a decision on one of two coverage options. The attached summary shows the gap, both options, and the input we received. I recommend option A because it keeps the service window covered. We need a decision before the window starts. Please let me know who will decide and when we can expect an answer or update. I will track the reply and let the team know.”', note: 'Made-up example.' },
      { t: 'h1', text: 'Following up on an unanswered request' },
      { t: 'quote', text: '“I’m following up on my request from __________. We agreed on an update by __________. The open decision is __________. New information: __________. If this waits, __________. Please send the answer, the name of the person handling it, or a date for the next update.”' },
      { t: 'h1', text: 'After you get an answer' },
      { t: 'para', text: 'Write down the decision and any limits. Confirm who will do what, and by when. Share the update with the people affected. While you wait for approval, only do work you already have authority to do.' },
      { t: 'basis', text: REQ_SRC },
    ],
  },
];

module.exports = { DOCS, LADDER, QUADRANTS, LINKS };
