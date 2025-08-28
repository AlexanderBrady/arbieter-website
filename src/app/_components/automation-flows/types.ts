// Flow configuration types and interfaces

export interface FlowNode {
  id: string;
  type: 'trigger' | 'ai-agent' | 'condition' | 'action' | 'tool';
  title: string;
  subtitle?: string;
  baseImage: string;
  fillImage?: string;
  position: { x: number; y: number };
  size?: { width: number; height: number };
  connections?: string[]; // Array of node IDs this node connects to
  metadata?: {
    description?: string;
    parameters?: Record<string, unknown>;
  };
}

export interface ConnectionLine {
  from: string;
  to: string;
  type?: 'success' | 'failure' | 'conditional';
  label?: string;
  curve?: 'straight' | 'curved' | 'bezier';
}

export interface FlowConfiguration {
  id: string;
  title: string;
  description?: string;
  nodes: FlowNode[];
  connections: ConnectionLine[];
  metadata?: {
    category?: string;
    tags?: string[];
    complexity?: 'simple' | 'medium' | 'complex';
  };
}

// Available automation service typs
export const AUTOMATION_SERVICES = {
  ZOOM: {
    base: '/automation/zoom.png',
    fill: '/automation/zoom-fill.png',
    name: 'Zoom'
  },
  INSTAGRAM: {
    base: '/automation/insta.png',
    fill: '/automation/insta-fill.png',
    name: 'Instagram'
  },
  GPT: {
    base: '/automation/gpt.png',
    fill: '/automation/gpt-fill.png',
    name: 'ChatGPT'
  },
  GOOGLE_DRIVE: {
    base: '/automation/drive.png',
    fill: '/automation/drive-fill.png',
    name: 'Google Drive'
  },
  GOOGLE_SHEETS: {
    base: '/automation/sheets.png',
    fill: '/automation/sheets-fill.png',
    name: 'Google Sheets'
  },
  GOOGLE_DOCS: {
    base: '/automation/docs.png',
    fill: '/automation/docs-fill.png',
    name: 'Google Docs'
  },
  NOTION: {
    base: '/automation/notion.png',
    fill: '/automation/notion-fill.png',
    name: 'Notion'
  },
  WEBHOOK: {
    base: '/automation/webhook.png',
    fill: '/automation/webhook-fill.png',
    name: 'Webhook'
  },
  GOOGLE: {
    base: '/automation/google.png',
    fill: '/automation/google-fill.png',
    name: 'Google'
  },
  LINKEDIN: {
    base: '/automation/linkedin.png',
    fill: '/automation/linkedin-02.png', // Using same for fill
    name: 'LinkedIn'
  },
  GEMINI: {
    base: '/automation/gemini.png',
    fill: '/automation/gemini.png', // Using same for fill
    name: 'Google Gemini'
  }
} as const;

export type AutomationServiceKey = keyof typeof AUTOMATION_SERVICES;
