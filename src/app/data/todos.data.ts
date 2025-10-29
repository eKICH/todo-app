import { _Todo } from '../model/todo.model';

export const DUMMY_TODOS: _Todo[] = [
  {
    id: 1,
    title: 'Buy groceries',
    description: 'Pick up milk, eggs, and bread from the local supermarket.',
    status: 'open',
    startDate: '2025-10-05T09:00:00Z',
    endDate: '2025-10-05T11:00:00Z',
    createdAt: '2025-10-04T18:00:00Z',
    updatedAt: '2025-10-05T08:00:00Z',
    task: ['Make a list', 'Go to store', 'Pay via card']
  },
  {
    id: 2,
    title: 'Complete Angular project',
    description: 'Finish the reusable modal and button component tasks.',
    status: 'complete',
    startDate: '2025-09-20T10:00:00Z',
    endDate: '2025-09-22T16:30:00Z',
    createdAt: '2025-09-18T12:00:00Z',
    updatedAt: '2025-09-22T17:00:00Z',
    task: ['Design components', 'Implement signals', 'Run tests']
  },
  {
    id: 3,
    title: 'Pay utility bills',
    description: 'Pay electricity, water, and internet bills online.',
    status: 'complete',
    startDate: '2025-10-03T08:30:00Z',
    endDate: '2025-10-03T09:15:00Z',
    createdAt: '2025-10-02T14:00:00Z',
    updatedAt: '2025-10-03T09:20:00Z',
    task: ['Check due dates', 'Pay via banking app', 'Save receipts']
  },
  {
    id: 4,
    title: 'Doctor appointment',
    description: 'Routine check-up at Green Valley Clinic.',
    status: 'open',
    startDate: '2025-10-10T10:00:00Z',
    endDate: '2025-10-10T11:00:00Z',
    createdAt: '2025-10-07T09:00:00Z',
    task: ['Confirm schedule', 'Carry medical records']
  },
  {
    id: 5,
    title: 'Car maintenance',
    description: 'Get oil change and tire rotation at AutoCare.',
    status: 'complete',
    startDate: '2025-10-02T09:30:00Z',
    endDate: '2025-10-02T11:30:00Z',
    createdAt: '2025-09-30T15:00:00Z',
    updatedAt: '2025-10-02T12:00:00Z',
    task: ['Book appointment', 'Replace air filter', 'Test brakes']
  },
  {
    id: 6,
    title: 'Team meeting',
    description: 'Project sync with the frontend and backend teams.',
    status: 'open',
    startDate: '2025-10-09T14:00:00Z',
    endDate: '2025-10-09T15:30:00Z',
    createdAt: '2025-10-05T12:00:00Z',
    task: ['Prepare agenda', 'Share notes', 'Assign action items']
  },
  {
    id: 7,
    title: 'Read "Clean Code"',
    description: 'Continue reading chapters 5 to 8.',
    status: 'open',
    startDate: '2025-10-06T19:00:00Z',
    endDate: '2025-10-06T21:00:00Z',
    createdAt: '2025-10-04T10:00:00Z',
    task: ['Summarize key ideas', 'Note best practices']
  },
  {
    id: 8,
    title: 'Plan weekend trip',
    description: 'Trip to the mountains with family.',
    status: 'open',
    startDate: '2025-10-18T07:00:00Z',
    endDate: '2025-10-19T21:00:00Z',
    createdAt: '2025-10-08T09:30:00Z',
    task: ['Book cabin', 'Prepare gear', 'Buy snacks']
  },
  {
    id: 9,
    title: 'Clean house',
    description: 'Weekend cleanup of kitchen, living room, and balcony.',
    status: 'complete',
    startDate: '2025-10-04T08:00:00Z',
    endDate: '2025-10-04T11:30:00Z',
    createdAt: '2025-10-03T16:00:00Z',
    updatedAt: '2025-10-04T12:00:00Z',
    task: ['Vacuum floors', 'Dust shelves', 'Mop tiles']
  },
  {
    id: 10,
    title: 'Gym session',
    description: 'Focus on upper body strength and cardio.',
    status: 'open',
    startDate: '2025-10-07T07:00:00Z',
    endDate: '2025-10-07T08:30:00Z',
    createdAt: '2025-10-06T20:00:00Z',
    task: ['Warm up', 'Bench press', 'Treadmill run']
  },
  {
    id: 11,
    title: 'Prepare presentation',
    description: 'Slides for Monday’s team update meeting.',
    status: 'open',
    startDate: '2025-10-08T18:00:00Z',
    endDate: '2025-10-08T20:00:00Z',
    createdAt: '2025-10-07T15:30:00Z',
    task: ['Outline topics', 'Design slides', 'Practice delivery']
  },
  {
    id: 12,
    title: 'Laundry and ironing',
    description: 'Wash and press clothes for the week.',
    status: 'complete',
    startDate: '2025-10-03T13:00:00Z',
    endDate: '2025-10-03T16:00:00Z',
    createdAt: '2025-10-02T09:00:00Z',
    updatedAt: '2025-10-03T16:15:00Z',
    task: ['Sort clothes', 'Use fabric softener', 'Fold neatly']
  },
  {
    id: 13,
    title: 'Organize workspace',
    description: 'Declutter desk and sort project folders.',
    status: 'open',
    startDate: '2025-10-09T09:00:00Z',
    endDate: '2025-10-09T11:00:00Z',
    createdAt: '2025-10-08T14:00:00Z',
    task: ['Clean drawers', 'Archive files', 'Rearrange setup']
  },
  {
    id: 14,
    title: 'Backup laptop files',
    description: 'Create a full backup of work and personal data.',
    status: 'complete',
    startDate: '2025-09-30T18:00:00Z',
    endDate: '2025-09-30T19:30:00Z',
    createdAt: '2025-09-29T08:00:00Z',
    updatedAt: '2025-09-30T19:45:00Z',
    task: ['Check storage space', 'Run backup', 'Verify files']
  },
  {
    id: 15,
    title: 'Refactor codebase',
    description: 'Improve code readability and remove unused imports.',
    status: 'open',
    startDate: '2025-10-11T13:00:00Z',
    endDate: '2025-10-11T17:00:00Z',
    createdAt: '2025-10-09T11:30:00Z',
    task: ['Lint project', 'Fix warnings', 'Commit changes']
  }
];