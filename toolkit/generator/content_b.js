// Version B wording for the CLEAR Ownership Staff Resource Toolkit.
// Voice: short, direct sentences; "Topic: what it does" titles.
// Approved training terms kept as-is: the six CCE element labels, the seven rung names,
// the Eisenhower quadrant labels, the RACI role names, the five reversal step names, and
// request steps 1–4. Request steps 5 and 6 use Version B wording.

const CCE_SRC = 'Based on: Communicating CLEAR training, final series, slides 11–19 and 37–41.';
const LADDER_SRC = 'Based on: Decision & Escalation training, Supervisor edition, slides 8–9. Model: Trevor Maber, TED-Ed, “Rethinking thinking.”';
const EIS_SRC = 'Based on: Time Management in a CLEAR Way workshop. Model: FranklinCovey, The 5 Choices, Choice 1.';
const RACI_SRC = 'Based on: Decision & Escalation training, Supervisor edition, slides 11–12. Follow your branch’s approved guidance.';
const REV_SRC = 'Based on: Safe to Decide training, Supervisor edition, slides 23–25.';
const REQ_SRC = 'Based on: Decision & Escalation training, six-step request checklist; Communicating CLEAR training, slide 41.';

const LINKS = {
  ted: 'https://ed.ted.com/lessons/rethinking-thinking-trevor-maber',
  usc: 'https://gould.usc.edu/news/understanding-the-ladder-of-inference-navigating-cognitive-pitfalls/',
  fc: 'https://www.franklincovey.com/courses/the-5-choices/choice-1/',
  cornell: 'https://it.cornell.edu/it-service-management/raci-and-rasci-definitions',
};

const CCE = [
  'What is changing or being asked',
  'Why / Why it is changing',
  'Who owns it and who decides',
  'What is not changing',
  'What to do if it is unclear, and when you will hear back',
  'Where this lives (whenever applicable)',
];

const LADDER = [
  ['Take action', 'What am I about to do?'],
  ['Form beliefs', 'What do I now believe is true?'],
  ['Draw conclusions', 'What have I concluded?'],
  ['Make assumptions', 'What am I taking for granted?'],
  ['Add meaning', 'What do I think this means?'],
  ['Select information', 'What did I pay attention to, and what did I skip?'],
  ['Observe facts', 'What actually happened?'],
];

const QUADRANTS = {
  q1: ['Q1', 'ACT NOW', 'Real deadline or service risk. Handle it now through the proper channel.'],
  q2: ['Q2', 'SCHEDULE', 'Planning, prevention, training, and required work. Book time for it before it turns urgent.'],
  q3: ['Q3', 'CHECK & ROUTE', 'Someone else’s urgency. Confirm it, then pass it on, delegate it, or reset the timeline if you’re allowed to.'],
  q4: ['Q4', 'REDUCE OR STOP', 'Not required and not useful. Once you’ve confirmed that, scale it back or drop it.'],
};

const RACI_META = [
  ['Branch / team', 'Process / project'],
  ['Prepared by', 'Review date'],
];

const steps = (arr) => arr.map(([label, desc], i) => ({ n: String(i + 1).padStart(2, '0'), label, desc }));
const zip = (labels, descs) => labels.map((l, i) => [l, descs[i]]);
const cceSteps = (descs) => steps(zip(CCE, descs));

const REVERSAL = ['Recognize', 'Explain', 'Own', 'Direct', 'Clarify'];
const REQUEST = [
  'Name the exact decision',
  'Check authority and boundaries',
  'Gather facts and required input',
  'Offer options and a recommendation',
  'Check who decides and the deadline', // Version B wording (training: "Use the correct route and verify timing")
  'Follow up and share the outcome', // Version B wording (training: "Track the reply and close the loop")
];

const DOCS = [
  // ───────────────────────────── 01 CCEs ─────────────────────────────
  {
    folder: '01_CCEs', file: '01_CCEs_Flyer', topic: 'CCEs', type: 'Flyer', num: '01', pages: 1,
    blocks: [
      { t: 'kicker', text: '01  |  CCEs  |  FLYER' },
      { t: 'title', text: 'CCEs: Six Parts of a Clear Message' },
      { t: 'lead', text: 'CLEAR Communication Elements for giving and receiving direction' },
      { t: 'para', text: 'A clear message answers six questions. If one is missing, people have to guess.' },
      { t: 'steps', size: 'lg', items: cceSteps([
        'Who does what, and by when?',
        'What is the reason?',
        'Who does the work? Who makes the call?',
        'What stays the same?',
        'Who answers questions, and how soon?',
        'Which form, policy, or guide goes with it?',
      ]) },
      { t: 'callout', title: 'Who this is for', body: 'Leaders: CCEs 1–5 are required in written direction under the Administrative Directive. Add CCE 6 when there is a source document. Everyone: use the six questions to find what is missing and ask about it.' },
      { t: 'basis', text: CCE_SRC },
    ],
  },
  {
    folder: '01_CCEs', file: '01_CCEs_Desk_Reference', topic: 'CCEs', type: 'Desk reference', num: '01', pages: 1,
    blocks: [
      { t: 'kicker', text: '01  |  CCEs  |  DESK REFERENCE' },
      { t: 'title', text: 'CCEs: Quick Message Check' },
      { t: 'lead', text: 'Run through this before you send, forward, or act on work direction.' },
      { t: 'callout', title: 'Required for leadership messages', body: 'Written expectations, changes, decisions, and reminders from leadership need CCEs 1–5. Add CCE 6 when a source document applies. Greetings and “got it” replies are exempt.' },
      { t: 'table', headers: ['Element', 'Check'], widths: [42, 58], rows: zip(CCE.map((l, i) => `${i + 1}. ${l}`), [
        'Who, what, and by when are all stated.',
        'The reason is given.',
        'The worker and the decision-maker are both named.',
        'What stays the same is stated.',
        'A contact and a reply time are given.',
        'The form, policy, or guide is linked or named.',
      ]) },
      { t: 'h1', text: 'Passing a message along?' },
      { t: 'para', text: 'Keep the action, reason, deadline, audience, and decision-maker the same. Simpler words are fine. New meaning is not. If something is missing, ask. Don’t fill the gap yourself.' },
      { t: 'h1', text: 'Receiving direction?' },
      { t: 'para', text: 'Say it back in your own words:' },
      { t: 'quote', text: '“So I need to __________ by __________. I’m responsible for __________. I still need to check __________ with __________.”' },
      { t: 'callout', title: 'Before you hit send', body: 'Could someone read this and know the next step, the deadline, and who to ask? If they would have to open a link to find out, add it to the message.' },
      { t: 'basis', text: CCE_SRC },
    ],
  },
  {
    folder: '01_CCEs', file: '01_CCEs_Resource', topic: 'CCEs', type: 'Resource', num: '01', pages: 2,
    blocks: [
      { t: 'kicker', text: '01  |  CCEs  |  RESOURCE' },
      { t: 'title', text: 'CCEs: A Guide for Leaders and Staff' },
      { t: 'lead', text: 'What each element means and what to write' },
      { t: 'para', text: 'The CCE Administrative Directive covers written direction from leadership. Staff at any level can use the same six questions to understand an assignment, ask for a missing detail, or hand off work. The CCEs do not change who has approval authority.' },
      { t: 'h1', text: 'What to write for each element' },
      { t: 'steps', items: cceSteps([
        'Say who the message is for, what they need to do, and the deadline or start date. If people need to know something on one date and act on another, list both dates.',
        'Give the reason or the problem the work solves. “Management wants it” doesn’t tell anyone why.',
        'Name the person who will do the work and the person who will decide. Spell out what the reader can decide on their own.',
        'List the duties, service levels, rules, or approvals that are not affected. Check before you call anything unchanged.',
        'Name the contact for questions and when they will reply. Escalated questions get an answer, or the name of the person handling them, within two working days. If it will take longer, say when the next update is coming.',
        'Name the document, its version, and where to find it. If no document applies, skip this one.',
      ]) },
      { t: 'callout', title: 'Every channel counts', body: 'Emails, chats, forwards, and reminders that give direction need the CCEs that apply. Greetings and replies that just confirm receipt don’t.' },
      { t: 'basis', text: CCE_SRC },
      { t: 'pagebreak' },
      { t: 'kicker', text: '01  |  CCEs  |  RESOURCE (CONTINUED)' },
      { t: 'title', text: 'CCEs: Example and Practice' },
      { t: 'lead', text: 'Example only. Swap in your own details.' },
      { t: 'table', headers: ['CCE', 'Example'], widths: [26, 74], rows: [
        ['1. Action', 'Service desk team: look over next week’s draft coverage schedule and email your supervisor about any conflicts by noon Thursday.'],
        ['2. Reason', 'We want to catch coverage gaps before the schedule is locked in.'],
        ['3. Owners', 'You check your own availability. Your supervisor approves the final coverage plan.'],
        ['4. Unchanged', 'Your current assignments, service hours, approved leave, and duties stay as they are until a change is approved.'],
        ['5. Questions and reply', 'Questions go to your supervisor. Escalated questions get an answer, or the name of the person handling them, within two working days. If it takes longer, you’ll get an update.'],
        ['6. Source', 'The current coverage schedule is attached. In a real message, attach the approved file or say where it is saved.'],
      ] },
      { t: 'h1', text: 'Practice: draft your next message' },
      { t: 'notes', rows: ['What and by when', 'Why, and who owns it', 'What stays the same', 'Who to ask, and source'] },
      { t: 'h1', text: 'Make sure it landed' },
      { t: 'para', text: 'Ask: “Just to check I was clear, what’s your next step?” Listen for the task, the deadline, and who they’d go to for help. If any of those are missing, fix the message.' },
      { t: 'para', text: 'Rewording is fine. Changing the confirmed task, deadline, or decision-maker is not.' },
      { t: 'basis', text: CCE_SRC },
    ],
  },

  // ───────────────────────── 02 Ladder of Inference ─────────────────────────
  {
    folder: '02_Ladder_of_Inference', file: '02_Ladder_of_Inference_Flyer', topic: 'Ladder of Inference', type: 'Flyer', num: '02', pages: 1,
    blocks: [
      { t: 'kicker', text: '02  |  LADDER OF INFERENCE  |  FLYER' },
      { t: 'title', text: 'Ladder of Inference: Check the Facts' },
      { t: 'lead', text: 'Slow down before you jump to a conclusion' },
      { t: 'para', text: 'We move from “what happened” to “what I’ll do about it” very fast. Each step up the ladder adds a little of our own interpretation.' },
      { t: 'ladder', size: 'lg' },
      { t: 'callout', title: 'Climb back down', body: 'Ask yourself: What do I actually know? What did I add? What question would test it? Get the answer, then decide or escalate.' },
      { t: 'para', text: 'Watch for the feedback loop: what you already believe changes what you notice next.' },
      { t: 'basis', text: LADDER_SRC },
    ],
  },
  {
    folder: '02_Ladder_of_Inference', file: '02_Ladder_of_Inference_Desk_Reference', topic: 'Ladder of Inference', type: 'Desk reference', num: '02', pages: 1,
    blocks: [
      { t: 'kicker', text: '02  |  LADDER OF INFERENCE  |  DESK REFERENCE' },
      { t: 'title', text: 'Ladder of Inference: Self-Check' },
      { t: 'lead', text: 'Work through these questions before you decide or ask for a decision.' },
      { t: 'table', headers: ['Step', 'Question'], widths: [34, 66], rows: [...LADDER].reverse().map(([a, b], i) => [`${i + 1}. ${a}`, b]) },
      { t: 'h1', text: 'Spot the assumption' },
      { t: 'table', headers: ['Fact', 'Assumption', 'Better question'], widths: [33, 33, 34], rows: [[
        'The reply said, “Please send your recommendation.”',
        '“They’ve already decided. This is a waste of time.”',
        '“What decision is this for, and what should I include?”',
      ]] },
      { t: 'h1', text: 'Before you decide or escalate' },
      { t: 'para', text: 'Be clear about the decision. Look up the current policy and who has the authority. Ask the one question that would settle the missing fact. If the answer changes things, change your conclusion.' },
      { t: 'lines', items: ['What I know for sure', 'What I’m assuming', 'What I’ll ask, and next step'] },
      { t: 'callout', title: 'Safety first', body: 'If there’s a safety concern or an immediate risk to services, use the urgent process now. Skip this worksheet.' },
      { t: 'basis', text: LADDER_SRC },
      { t: 'links', items: [['Watch the TED-Ed lesson', LINKS.ted]] },
    ],
  },
  {
    folder: '02_Ladder_of_Inference', file: '02_Ladder_of_Inference_Resource', topic: 'Ladder of Inference', type: 'Resource', num: '02', pages: 2,
    blocks: [
      { t: 'kicker', text: '02  |  LADDER OF INFERENCE  |  RESOURCE' },
      { t: 'title', text: 'Ladder of Inference: How Assumptions Form' },
      { t: 'lead', text: 'The seven steps between seeing something and acting on it' },
      { t: 'para', text: 'The Ladder of Inference maps how we get from an observation to an action. Most of the time we climb it without noticing. Knowing the steps makes it easier to catch the moment a guess starts to feel like a fact.' },
      { t: 'ladder', size: 'md' },
      { t: 'h1', text: 'The feedback loop' },
      { t: 'para', text: 'What we believe shapes what we notice. If you’re sure a coworker never replies, every late answer stands out and the quick ones fade from memory. Look for the evidence that doesn’t fit.' },
      { t: 'callout', title: 'A tool for yourself', body: 'Use the ladder to check your own thinking, not to label someone else. Stick to what you saw or heard. Ask a neutral question and listen to the answer. Even a reasonable conclusion may need checking.' },
      { t: 'basis', text: LADDER_SRC },
      { t: 'links', items: [['TED-Ed lesson', LINKS.ted], ['USC explanation of the seven steps', LINKS.usc]] },
      { t: 'pagebreak' },
      { t: 'kicker', text: '02  |  LADDER OF INFERENCE  |  RESOURCE (CONTINUED)' },
      { t: 'title', text: 'Ladder of Inference: Example and Practice' },
      { t: 'lead', text: 'Example only. This is not a real County case.' },
      { t: 'table', headers: ['Steps', 'What happens'], widths: [30, 70], rows: [
        ['1–2. Facts and focus', 'Your supervisor writes back, “Please send your recommendation.” You focus on the request, but you don’t know what your supervisor still needs.'],
        ['3–4. Meaning and assumptions', 'You take the reply as a brush-off and decide the outcome is already settled. Your supervisor never said either thing.'],
        ['5–7. Conclusion, belief, and action', 'You figure your input won’t count and the process is pointless. You stall, or you send a frustrated reply.'],
      ] },
      { t: 'h1', text: 'What to do instead' },
      { t: 'callout', title: 'Ask before you assume', body: '“I can put together a recommendation. What decision is it for, what should I include, and when do you need it?”' },
      { t: 'para', text: 'Then sort out who does what. You might own the research while someone else owns the approval. Send the facts you’ve checked, the open question, and the next step you suggest.' },
      { t: 'h1', text: 'Practice with something current' },
      { t: 'notes', rows: ['What happened', 'What I assumed, or another possibility', 'Who I’ll ask, and what', 'My next step'] },
      { t: 'h1', text: 'When your thinking changes' },
      { t: 'quote', text: '“I thought __________. Then I checked __________ and found out __________. Now I’m going to __________.”' },
      { t: 'basis', text: LADDER_SRC },
    ],
  },

  // ───────────────────────── 03 Eisenhower Chart ─────────────────────────
  {
    folder: '03_Eisenhower_Chart', file: '03_Eisenhower_Chart_Flyer', topic: 'Eisenhower Chart', type: 'Flyer', num: '03', pages: 1,
    blocks: [
      { t: 'kicker', text: '03  |  EISENHOWER CHART  |  FLYER' },
      { t: 'title', text: 'Eisenhower Chart: Sorting Your Work' },
      { t: 'lead', text: 'Decide what to do now, what to schedule, what to pass on, and what to drop' },
      { t: 'quadrants', size: 'lg' },
      { t: 'callout', title: 'Protect your Q2 time', body: 'Choose one Q2 task this week. Block time for it on your calendar and decide what finished looks like.' },
      { t: 'h1', text: 'Ask two questions' },
      { t: 'defs', items: [['Urgent?', 'What happens if it waits?'], ['Important?', 'Does it support required duties, services, safety, or agreed goals?']] },
      { t: 'para', text: 'Your job duties, your branch RACI, and your supervisor decide what counts as important. Routine required work is still important.' },
      { t: 'basis', text: EIS_SRC },
    ],
  },
  {
    folder: '03_Eisenhower_Chart', file: '03_Eisenhower_Chart_Desk_Reference', topic: 'Eisenhower Chart', type: 'Desk reference', num: '03', pages: 1,
    blocks: [
      { t: 'kicker', text: '03  |  EISENHOWER CHART  |  DESK REFERENCE' },
      { t: 'title', text: 'Eisenhower Chart: Daily Sort' },
      { t: 'lead', text: 'Check the real deadline, the cost of waiting, and your role before you sort a task.' },
      { t: 'quadrants', size: 'md' },
      { t: 'defs', items: [
        ['Urgency', 'Is the deadline real? What happens if it waits?'],
        ['Importance', 'Does it tie to required work, services, safety, or agreed goals?'],
        ['Authority', 'Who can change the timing, reassign it, or stop it?'],
      ] },
      { t: 'h1', text: 'Book one Q2 task today' },
      { t: 'notes', rows: ['Task, and what finished means', 'When, and who'] },
      { t: 'callout', title: 'Too many priorities?', body: 'Take the deadlines, what’s at stake, two options, and your recommendation to the leader who can decide. Get a clear answer on what comes first. Don’t drop a required task on your own.' },
      { t: 'basis', text: EIS_SRC },
      { t: 'links', items: [['FranklinCovey: urgency and importance', LINKS.fc]] },
    ],
  },
  {
    folder: '03_Eisenhower_Chart', file: '03_Eisenhower_Chart_Resource', topic: 'Eisenhower Chart', type: 'Resource', num: '03', pages: 2,
    blocks: [
      { t: 'kicker', text: '03  |  EISENHOWER CHART  |  RESOURCE' },
      { t: 'title', text: 'Eisenhower Chart: Setting Priorities' },
      { t: 'lead', text: 'Sort work by your real duties and the authority you have' },
      { t: 'para', text: 'Urgent means time-sensitive: something happens if it waits. Important means it matters to required work, services, safety, or agreed goals. Some requests feel urgent but aren’t the best use of your time.' },
      { t: 'quadrants', size: 'md' },
      { t: 'h1', text: 'Start with your role' },
      { t: 'para', text: 'Your job duties, your branch RACI, current procedures, and your supervisor’s expectations tell you what’s important. A request from someone senior still has to be checked against the real service need and deadline.' },
      { t: 'h1', text: 'Office Hours and focus time' },
      { t: 'para', text: 'Save non-urgent questions for Office Hours or the published support schedule when you can. Use focus time to finish important work, work through requests, and answer messages. Urgent service or safety issues go through the required process right away. Don’t hold them for Office Hours.' },
      { t: 'callout', title: 'Watch out for these', body: 'Q3 doesn’t mean pushing every urgent request onto someone else. Q4 doesn’t mean skipping required work. Before you change or stop anything, make sure it isn’t needed and that you’re allowed to.' },
      { t: 'basis', text: EIS_SRC },
      { t: 'links', items: [['FranklinCovey: urgency and importance', LINKS.fc]] },
      { t: 'pagebreak' },
      { t: 'kicker', text: '03  |  EISENHOWER CHART  |  RESOURCE (CONTINUED)' },
      { t: 'title', text: 'Eisenhower Chart: Examples and Planning' },
      { t: 'lead', text: 'Examples only. Your facts and role could put a task in a different box.' },
      { t: 'table', headers: ['Example', 'Quadrant', 'What to do'], widths: [42, 14, 44], center: [1], rows: [
        ['There’s no coverage for the next required service window.', 'Q1', 'Use the proper process to cover the service risk now.'],
        ['A better job aid would stop the same questions from coming in.', 'Q2', 'Book time to write it and get any review it needs.'],
        ['Someone wants an optional font change by noon. It doesn’t affect the work.', 'Q3', 'Check the deadline and the reason. Reset the timeline or reroute it if you’re allowed to.'],
        ['Someone is still polishing an optional flyer for a canceled event.', 'Q4', 'Make sure nothing still needs it, then stop or scale it back.'],
      ] },
      { t: 'h1', text: 'Plan one important task' },
      { t: 'notes', rows: ['Task and why it matters', 'Deadline and time blocked', 'Quadrant, next step, owner', 'What finished looks like'] },
      { t: 'h1', text: 'Look back' },
      { t: 'para', text: 'Did you use the time you blocked? What got in the way? Did the work cut repeat questions, reduce rework, or help service? Adjust and try again.' },
      { t: 'callout', title: 'Commit to a next step', body: '“I’ll finish __________ during __________. The result will be __________. I need __________ to confirm __________.”' },
      { t: 'basis', text: EIS_SRC },
    ],
  },

  // ───────────────────────────── 04 RACI ─────────────────────────────
  {
    folder: '04_RACI_Chart', file: '04_RACI_Chart_Flyer', topic: 'RACI Chart', type: 'Flyer', num: '04', pages: 1,
    blocks: [
      { t: 'kicker', text: '04  |  RACI CHART  |  FLYER' },
      { t: 'title', text: 'RACI Chart: Who Does What' },
      { t: 'lead', text: 'Four roles for every task: do it, own it, weigh in, stay informed' },
      { t: 'raciLegend', items: [
        ['R', 'Responsible', 'Does the work.'],
        ['A', 'Accountable', 'Owns the outcome. One A per task.'],
        ['C', 'Consulted', 'Weighs in before work starts.'],
        ['I', 'Informed', 'Hears about the result.'],
      ] },
      { t: 'para', text: 'Put one task or decision on each row. Fill in names or job titles for R, A, C, and I.' },
      { t: 'fields', rows: RACI_META },
      { t: 'raci', rowHeight: 'xl' },
      { t: 'callout', title: 'Double-check', body: 'Every row needs an R and one A. They can be the same person. If a role isn’t settled, write “To confirm” and check through the usual approval process.' },
      { t: 'basis', text: RACI_SRC },
    ],
  },
  {
    folder: '04_RACI_Chart', file: '04_RACI_Chart_Desk_Reference', topic: 'RACI Chart', type: 'Desk reference', num: '04', pages: 1,
    blocks: [
      { t: 'kicker', text: '04  |  RACI CHART  |  DESK REFERENCE' },
      { t: 'title', text: 'RACI Chart: Blank Template' },
      { t: 'lead', text: 'Add names or job titles. Start a new row whenever the decision-maker changes.' },
      { t: 'raciStrip' },
      { t: 'fields', rows: RACI_META },
      { t: 'raci', rowHeight: 'lg' },
      { t: 'h1', text: 'Check before you use it' },
      { t: 'para', text: 'Every task has an R and exactly one A, and they can be the same person. The right people are listed as C and I. The chart matches current authority and approved procedures.' },
      { t: 'lines', items: ['Source / limits', 'Open questions'] },
      { t: 'callout', title: 'A chart is not an approval', body: 'Filling this out doesn’t give anyone approval authority. It doesn’t replace your branch’s approved RACI or the Decision & Permission Matrix.' },
      { t: 'basis', text: RACI_SRC },
    ],
  },
  {
    folder: '04_RACI_Chart', file: '04_RACI_Chart_Resource', topic: 'RACI Chart', type: 'Resource', num: '04', pages: 2,
    blocks: [
      { t: 'kicker', text: '04  |  RACI CHART  |  RESOURCE' },
      { t: 'title', text: 'RACI Chart: Assigning Roles' },
      { t: 'lead', text: 'How to fill in a RACI chart with your team. A blank chart is on page 2.' },
      { t: 'para', text: 'A RACI chart lays out who is involved in a task and in what way. It separates the person doing the work from the person who answers for the result, and shows who should weigh in or be kept informed.' },
      { t: 'table', headers: ['Role', 'Meaning', 'Ask'], widths: [26, 46, 28], rows: [
        ['R  •  Responsible', 'Does the task or carries out the agreed work.', 'Who’s doing it?'],
        ['A  •  Accountable', 'Owns the outcome and the decision that goes with it. One A per task.', 'Who answers for it?'],
        ['C  •  Consulted', 'Provides needed information before a decision or action.', 'Whose input is needed?'],
        ['I  •  Informed', 'Is told about the result so they can understand it or act on it.', 'Who needs to know?'],
      ] },
      { t: 'h1', text: 'Four steps to build it' },
      { t: 'steps', items: steps([
        ['One task or decision per row', 'If different people prepare, approve, and carry out the work, split those into separate rows.'],
        ['Pick the R and one A', 'Check who has the authority today. Name an R and one A. The same person can be both.'],
        ['Add the C and I', 'Name who needs to weigh in and who needs to hear the result. Being consulted doesn’t make someone the owner.'],
        ['Review it and keep it current', 'Go over it with the people involved and the leader who has authority. Write down the source, any open questions, and a review date.'],
      ]) },
      { t: 'callout', title: 'Owner unclear?', body: 'Write “To confirm” and name who will find out. Until it’s settled, stick to the work you already have authority to do.' },
      { t: 'basis', text: 'Based on: Decision & Escalation training, Supervisor edition, slides 11–12. Definitions: Cornell IT.', link: ['Cornell IT definitions', LINKS.cornell] },
      { t: 'pagebreak' },
      { t: 'kicker', text: '04  |  RACI CHART  |  RESOURCE (CONTINUED)' },
      { t: 'title', text: 'RACI Chart: Team Worksheet' },
      { t: 'lead', text: 'Fill this in together. Use names or job titles.' },
      { t: 'fields', rows: RACI_META },
      { t: 'raci', rowHeight: 'sm' },
      { t: 'raciStrip' },
      { t: 'notes', rowHeight: 540, rows: ['Source and version', 'Scope and limits', 'Open question and owner'] },
      { t: 'fields', rows: [['Confirmed with', 'Next review']] },
      { t: 'callout', title: 'Final check', body: 'One task or decision per row. At least one R. Exactly one A. Any questions about authority go through the usual approval process.' },
      { t: 'basis', text: RACI_SRC },
    ],
  },

  // ───────────────────────── 05 Respectful Reversal ─────────────────────────
  {
    folder: '05_Respectful_Reversal', file: '05_Respectful_Reversal_Flyer', topic: 'Respectful Reversal', type: 'Flyer', num: '05', pages: 1,
    blocks: [
      { t: 'kicker', text: '05  |  RESPECTFUL REVERSAL  |  FLYER' },
      { t: 'title', text: 'Respectful Reversal: Changing Course' },
      { t: 'lead', text: 'Five steps for explaining a change' },
      { t: 'steps', size: 'lg', items: steps(zip(REVERSAL, [
        'Say what was decided and what was known when it was decided.',
        'Say what is new: the information, risk, or limit that changes things.',
        'Take responsibility for the change and for making it clear.',
        'Say what happens next, when, and what help is available.',
        'Say whether this is a one-time change or a new rule.',
      ])) },
      { t: 'callout', title: 'No blame', body: 'Talk about what changed and what comes next. People who followed the direction they were given did the right thing.' },
      { t: 'h1', text: 'On the receiving end?' },
      { t: 'para', text: 'Ask what’s changing, why, when, and who it affects. Confirm your next step, what help you’ll have, and what’s still yours to do.' },
      { t: 'basis', text: REV_SRC },
    ],
  },
  {
    folder: '05_Respectful_Reversal', file: '05_Respectful_Reversal_Desk_Reference', topic: 'Respectful Reversal', type: 'Desk reference', num: '05', pages: 1,
    blocks: [
      { t: 'kicker', text: '05  |  RESPECTFUL REVERSAL  |  DESK REFERENCE' },
      { t: 'title', text: 'Respectful Reversal: Conversation Guide' },
      { t: 'lead', text: 'For when you have authority to change a decision, or need to explain an approved change.' },
      { t: 'table', headers: ['Step', 'Cover this', 'Try saying'], widths: [20, 38, 42], rows: [
        ['1. Recognize', 'The original decision and what was known then.', '“You went with the information we had.”'],
        ['2. Explain', 'The new fact, risk, or limit.', '“Now we know __________, so __________ needs to change.”'],
        ['3. Own', 'Your part in giving clear direction and following up.', '“This is on me to make clear.”'],
        ['4. Direct', 'Next step, timing, and help.', '“Here’s what happens next: __________. You’ll have __________.”'],
        ['5. Clarify', 'One-time change or new rule.', '“This applies to __________. __________ isn’t changing.”'],
      ] },
      { t: 'h1', text: 'Before you talk' },
      { t: 'para', text: 'Check the facts. Make sure you have the authority. Decide the next step and what help you can give. Only call the first decision reasonable or authorized if the facts back that up.' },
      { t: 'h1', text: 'Hearing about a change?' },
      { t: 'para', text: 'Say it back:' },
      { t: 'quote', text: '“OK, so now I’ll __________ by __________. I’m still responsible for __________. This applies to __________. If I need help, I’ll go to __________.”' },
      { t: 'callout', title: 'Writing it up', body: 'Use the CCEs that apply. State the decision, give the reason, and make the next step clear for everyone it affects.' },
      { t: 'basis', text: REV_SRC },
    ],
  },
  {
    folder: '05_Respectful_Reversal', file: '05_Respectful_Reversal_Resource', topic: 'Respectful Reversal', type: 'Resource', num: '05', pages: 2,
    blocks: [
      { t: 'kicker', text: '05  |  RESPECTFUL REVERSAL  |  RESOURCE' },
      { t: 'title', text: 'Respectful Reversal: Leading Through a Change' },
      { t: 'lead', text: 'How to change direction while keeping roles and responsibilities clear' },
      { t: 'para', text: 'New facts sometimes mean a decision has to change. Handled well, the conversation helps people understand why and get back to work with confidence. Use these steps when you change direction within your authority or explain a change someone else approved.' },
      { t: 'steps', items: steps(zip(REVERSAL, [
        'Say what was decided and what was known at the time. Acknowledge the reasoning behind it. Check the facts before you call the decision authorized or reasonable.',
        'Describe what’s new: the information, service risk, or limit that means the decision has to change. Talk about the work, not the person.',
        'Own your part in the first direction and the new one. Don’t pin it on staff, and don’t pass along a change without explaining it.',
        'Lay out what happens next, when, who does it, and what help is available. Flag any decision that still needs someone with authority.',
        'Make clear whether the change is for this situation only or for a wider process. A one-time fix isn’t a new rule.',
      ])) },
      { t: 'h1', text: 'If you’re receiving the change' },
      { t: 'para', text: 'Ask about anything that wasn’t covered. Say back what you’ll do, what you can still decide, and who will help. When you pass the change on, keep the meaning the same and leave blame out of it.' },
      { t: 'callout', title: 'Respect and accountability go together', body: 'Being respectful doesn’t mean skipping a required review. It means keeping the facts, expectations, help, and responsibilities clear while the work gets fixed.' },
      { t: 'basis', text: REV_SRC },
      { t: 'pagebreak' },
      { t: 'kicker', text: '05  |  RESPECTFUL REVERSAL  |  RESOURCE (CONTINUED)' },
      { t: 'title', text: 'Respectful Reversal: Example and Planning' },
      { t: 'lead', text: 'Example only: a confirmed coverage gap means today’s assignments change for one day.' },
      { t: 'table', headers: ['Step', 'Try saying'], widths: [22, 78], rows: [
        ['1. Recognize', '“You planned today around the coverage schedule we confirmed.”'],
        ['2. Explain', '“We’ve got a coverage gap in the afternoon service window, so today’s assignments need to change.”'],
        ['3. Own', '“It’s on me to make the new plan clear and help the team make it work.”'],
        ['4. Direct', '“This afternoon, please follow the revised assignment. I’ll help get the word out and line up support before the window opens.”'],
        ['5. Clarify', '“This is just for today. Tomorrow’s schedule and the normal approval process aren’t changing.”'],
      ] },
      { t: 'h1', text: 'Plan the conversation' },
      { t: 'notes', rows: ['First decision and facts', 'What’s new, and why', 'My part', 'Next step and help', 'One time or new rule?'] },
      { t: 'h1', text: 'Did it land?' },
      { t: 'para', text: 'Ask: “What’s your next step, and what help do you still need?” Then settle who will tell anyone else affected and whether a written CCE message or an updated document is needed.' },
      { t: 'basis', text: REV_SRC },
    ],
  },

  // ───────────────────────────── 06 Clear Requests ─────────────────────────────
  {
    folder: '06_Clear_Requests', file: '06_Clear_Requests_Flyer', topic: 'Clear Requests', type: 'Flyer', num: '06', pages: 1,
    blocks: [
      { t: 'kicker', text: '06  |  CLEAR REQUESTS  |  FLYER' },
      { t: 'title', text: 'Clear Requests: Asking for a Decision' },
      { t: 'lead', text: 'Six steps for requests, escalations, and follow-ups' },
      { t: 'steps', size: 'lg', items: steps(zip(REQUEST, [
        'Say exactly what you need: an answer, an approval, or a clarification.',
        'Check current guidance. Know what you can decide and what needs someone else.',
        'Separate what you know from what you’re assuming. Include what the decision-maker needs.',
        'Lay out the options and say which one you recommend.',
        'Find out who makes the call, the real deadline, and when you’ll hear back.',
        'Write down the answer, confirm the next step, and let the right people know.',
      ])) },
      { t: 'callout', title: 'Silence isn’t a yes', body: 'Decide how you’ll track the reply before you send. When you hear back, confirm the next step. No answer doesn’t mean approved.' },
      { t: 'basis', text: REQ_SRC },
    ],
  },
  {
    folder: '06_Clear_Requests', file: '06_Clear_Requests_Desk_Reference', topic: 'Clear Requests', type: 'Desk reference', num: '06', pages: 1,
    blocks: [
      { t: 'kicker', text: '06  |  CLEAR REQUESTS  |  DESK REFERENCE' },
      { t: 'title', text: 'Clear Requests: Before You Send' },
      { t: 'lead', text: 'Use for a decision request, an escalation, or a follow-up.' },
      { t: 'table', headers: ['Step', 'Check'], widths: [40, 60], rows: zip(REQUEST.map((l, i) => `${i + 1}. ${l}`), [
        'Will the reader know exactly what I’m asking for?',
        'What can I decide or keep doing? What needs someone else?',
        'What do I know for sure? What’s still unconfirmed? Whose input do I need?',
        'What are my real options? Which do I recommend, and why?',
        'Who decides? Is the deadline real? When will I hear back?',
        'Who’s tracking this, doing the next step, and updating others?',
      ]) },
      { t: 'h1', text: 'Keep track of three dates' },
      { t: 'fields', rows: [['Decision needed by', 'Reply expected by'], ['Next update, if still open', 'Confirmed with']] },
      { t: 'h1', text: 'Following up' },
      { t: 'para', text: 'Point back to your original request and the update date you agreed on. Say what’s still open, what’s new, and what happens if it waits. Check for a reply before you send it again.' },
      { t: 'callout', title: 'How fast to expect an answer', body: 'Escalated questions get an answer, or the name of the person handling them, within two working days. If it’ll take longer, expect a date for the next update. Immediate risks and required deadlines go through the urgent process.' },
      { t: 'basis', text: REQ_SRC },
    ],
  },
  {
    folder: '06_Clear_Requests', file: '06_Clear_Requests_Resource', topic: 'Clear Requests', type: 'Resource', num: '06', pages: 2,
    blocks: [
      { t: 'kicker', text: '06  |  CLEAR REQUESTS  |  RESOURCE' },
      { t: 'title', text: 'Clear Requests: Escalating the Right Way' },
      { t: 'lead', text: 'Hand off the decision. Keep doing your part.' },
      { t: 'steps', items: steps(zip(REQUEST, [
        'Get specific. “Which coverage option is approved?” works better than “Can you deal with this?” Say whether you need an answer, an approval, or a clarification.',
        'Look at the current role guidance, your branch RACI, and the Decision & Permission Matrix. Sort out what’s yours and what belongs to someone else.',
        'Use current sources and confirmed facts. Point out what’s missing. Get the input you need, and don’t pass off a guess as a fact.',
        'Offer two workable options when you can. Show what each means for services, resources, and trade-offs. If only one works, say why.',
        'Confirm who decides, when the decision is needed, when you’ll hear back, and when the next update is due. A date you asked for isn’t a date someone agreed to.',
        'Before you send, decide who will follow up. After you hear back, write down the answer, confirm the next step and who owns it, and update the people affected.',
      ])) },
      { t: 'callout', title: 'An answer isn’t always a fix', body: 'Within two working days you’ll get an answer or the name of the person handling your question. That doesn’t mean the issue will be solved by then. If it needs more time, confirm when the next update is coming. Urgent issues go through the required process right away.' },
      { t: 'basis', text: REQ_SRC },
      { t: 'pagebreak' },
      { t: 'kicker', text: '06  |  CLEAR REQUESTS  |  RESOURCE (CONTINUED)' },
      { t: 'title', text: 'Clear Requests: Worksheet and Examples' },
      { t: 'lead', text: 'Use real facts, approved sources, and confirmed dates.' },
      { t: 'notes', header: ['Step', 'Your request'], rows: ['What I need decided', 'Authority and source', 'Facts and input', 'Options and my pick', 'Who decides, and when', 'Follow-up and next step'] },
      { t: 'h1', text: 'Sample request' },
      { t: 'callout', title: 'Coverage decision', body: '“We need a decision between two coverage options. The attached summary lays out the gap, both options, and the input we got. I recommend option A because it keeps the service window covered. We need an answer before the window opens. Can you tell me who will decide and when we’ll hear back? I’ll watch for the reply and update the team.”', note: 'Example only.' },
      { t: 'h1', text: 'Following up' },
      { t: 'quote', text: '“Following up on my request from __________. We’d agreed on an update by __________. Still open: __________. What’s new: __________. If this waits, __________. Can you send the answer, who’s handling it, or when the next update will be?”' },
      { t: 'h1', text: 'Once you have an answer' },
      { t: 'para', text: 'Write down the decision and any limits. Confirm who does what and by when. Let the affected people know. Until it’s approved, stick to the work you already have authority to do.' },
      { t: 'basis', text: REQ_SRC },
    ],
  },
];

module.exports = { DOCS, LADDER, QUADRANTS, LINKS };
