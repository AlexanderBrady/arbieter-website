'use client'
import { AUTOMATION_SERVICES } from './types';

// React Flow compatible node and edge definitions with skeumorphic images
export const userOnboardingFlow = {
  id: 'sales-meeting-automation',
  title: 'AI-Powered Sales Meeting Automation',
  description: 'Automatically process sales meetings with AI summarization, classification, and multi-platform updates',
  nodes: [
    {
      id: 'zoom-meeting',
      type: 'automationNode',
      position: { x: 50, y: 200 },
      data: { 
        title: 'New Sales Meeting',
        subtitle: 'Zoom Meeting',
        baseImage: AUTOMATION_SERVICES.ZOOM.base,
        width: 100,
        height: 100
      }
    },
    {
      id: 'ai-summarizer',
      type: 'automationNode',
      position: { x: 250, y: 200 },
      data: { 
        title: 'AI Summarizer',
        subtitle: 'Meeting Notes',
        baseImage: AUTOMATION_SERVICES.GPT.base,
        width: 100,
        height: 100
      }
    },
    {
      id: 'update-sheets',
      type: 'automationNode',
      position: { x: 450, y: 120 },
      data: { 
        title: 'Update Sheets',
        subtitle: 'Meeting Summary',
        baseImage: AUTOMATION_SERVICES.GOOGLE_SHEETS.base,
        width: 100,
        height: 100
      }
    },
    {
      id: 'update-notion',
      type: 'automationNode',
      position: { x: 450, y: 280 },
      data: { 
        title: 'Update Notion',
        subtitle: 'Meeting Notes',
        baseImage: AUTOMATION_SERVICES.NOTION.base,
        width: 100,
        height: 100
      }
    },
    {
      id: 'ai-classifier',
      type: 'automationNode',
      position: { x: 650, y: 200 },
      data: { 
        title: 'AI Classifier',
        subtitle: 'Cold/Warm/Hot',
        baseImage: AUTOMATION_SERVICES.GPT.base,
        width: 100,
        height: 100
      }
    },
    {
      id: 'update-sheets-classification',
      type: 'automationNode',
      position: { x: 850, y: 120 },
      data: { 
        title: 'Update Sheets',
        subtitle: 'Lead Classification',
        baseImage: AUTOMATION_SERVICES.GOOGLE_SHEETS.base,
        width: 100,
        height: 100
      }
    },
    {
      id: 'update-notion-classification',
      type: 'automationNode',
      position: { x: 950, y: 200 },
      data: { 
        title: 'Update Notion',
        subtitle: 'Lead Status',
        baseImage: AUTOMATION_SERVICES.NOTION.base,
        width: 100,
        height: 100
      }
    },
    {
      id: 'webhook-crm',
      type: 'automationNode',
      position: { x: 850, y: 280 },
      data: { 
        title: 'CRM Webhook',
        subtitle: 'Update CRM',
        baseImage: AUTOMATION_SERVICES.WEBHOOK.base,
        width: 100,
        height: 100
      }
    },
    {
      id: 'webhook-sales-platforms',
      type: 'automationNode',
      position: { x: 950, y: 360 },
      data: { 
        title: 'Sales Platforms',
        subtitle: 'Update Other Platforms',
        baseImage: AUTOMATION_SERVICES.WEBHOOK.base,
        width: 100,
        height: 100
      }
    }
  ],
  edges: [
    {
      id: 'e1',
      source: 'zoom-meeting',
      target: 'ai-summarizer',
      type: 'smoothstep',
      animated: true,
    },
    {
      id: 'e2',
      source: 'ai-summarizer',
      target: 'update-sheets',
      type: 'smoothstep',
      animated: true,
    },
    {
      id: 'e3',
      source: 'ai-summarizer',
      target: 'update-notion',
      type: 'smoothstep',
      animated: true,
    },
    {
      id: 'e4',
      source: 'ai-summarizer',
      target: 'ai-classifier',
      type: 'smoothstep',
      animated: true,
    },
    {
      id: 'e5',
      source: 'ai-classifier',
      target: 'update-sheets-classification',
      type: 'smoothstep',
      animated: true,
    },
    {
      id: 'e6',
      source: 'ai-classifier',
      target: 'update-notion-classification',
      type: 'smoothstep',
      animated: true,
    },
    {
      id: 'e7',
      source: 'ai-classifier',
      target: 'webhook-crm',
      type: 'smoothstep',
      animated: true,
    },
    {
      id: 'e8',
      source: 'ai-classifier',
      target: 'webhook-sales-platforms',
      type: 'smoothstep',
      animated: true,
    }
  ],
  metadata: {
    category: 'Sales Automation',
    complexity: 'medium',
    tags: ['sales', 'ai-summarization', 'lead-classification', 'crm-integration']
  }
};

// AI Document Processing Flow
export const documentProcessingFlow = {
  id: 'document-processing',
  title: 'AI Document Processing & Analysis',
  description: 'Automatically process, analyze, and route documents with AI-powered classification and extraction',
  nodes: [
    {
      id: 'document-upload',
      type: 'automationNode',
      position: { x: 50, y: 200 },
      data: { 
        title: 'Document Upload',
        subtitle: 'Email/Drive/Upload',
        baseImage: AUTOMATION_SERVICES.GOOGLE_DRIVE.base,
        width: 100,
        height: 100
      }
    },
    {
      id: 'ai-extractor',
      type: 'automationNode',
      position: { x: 250, y: 200 },
      data: { 
        title: 'AI Extractor',
        subtitle: 'Extract Key Data',
        baseImage: AUTOMATION_SERVICES.GPT.base,
        width: 100,
        height: 100
      }
    },
    {
      id: 'document-classifier',
      type: 'automationNode',
      position: { x: 450, y: 200 },
      data: { 
        title: 'AI Classifier',
        subtitle: 'Invoice/Contract/Report',
        baseImage: AUTOMATION_SERVICES.GEMINI.base,
        width: 100,
        height: 100
      }
    },
    {
      id: 'invoice-processing',
      type: 'automationNode',
      position: { x: 650, y: 80 },
      data: { 
        title: 'Invoice Processing',
        subtitle: 'Accounting System',
        baseImage: AUTOMATION_SERVICES.GOOGLE_SHEETS.base,
        width: 100,
        height: 100
      }
    },
    {
      id: 'contract-review',
      type: 'automationNode',
      position: { x: 650, y: 200 },
      data: { 
        title: 'Contract Review',
        subtitle: 'Legal Database',
        baseImage: AUTOMATION_SERVICES.NOTION.base,
        width: 100,
        height: 100
      }
    },
    {
      id: 'report-analysis',
      type: 'automationNode',
      position: { x: 650, y: 320 },
      data: { 
        title: 'Report Analysis',
        subtitle: 'Dashboard Update',
        baseImage: AUTOMATION_SERVICES.GOOGLE_DOCS.base,
        width: 100,
        height: 100
      }
    },
    {
      id: 'notification-webhook',
      type: 'automationNode',
      position: { x: 850, y: 200 },
      data: { 
        title: 'Team Notification',
        subtitle: 'Slack/Email Alert',
        baseImage: AUTOMATION_SERVICES.WEBHOOK.base,
        width: 100,
        height: 100
      }
    }
  ],
  edges: [
    {
      id: 'e1',
      source: 'document-upload',
      target: 'ai-extractor',
      type: 'smoothstep',
      animated: true,
    },
    {
      id: 'e2',
      source: 'ai-extractor',
      target: 'document-classifier',
      type: 'smoothstep',
      animated: true,
    },
    {
      id: 'e3',
      source: 'document-classifier',
      target: 'invoice-processing',
      type: 'smoothstep',
      animated: true,
      label: 'Invoice',
    },
    {
      id: 'e4',
      source: 'document-classifier',
      target: 'contract-review',
      type: 'smoothstep',
      animated: true,
      label: 'Contract',
    },
    {
      id: 'e5',
      source: 'document-classifier',
      target: 'report-analysis',
      type: 'smoothstep',
      animated: true,
      label: 'Report',
    },
    {
      id: 'e6',
      source: 'invoice-processing',
      target: 'notification-webhook',
      type: 'smoothstep',
      animated: true,
    },
    {
      id: 'e7',
      source: 'contract-review',
      target: 'notification-webhook',
      type: 'smoothstep',
      animated: true,
    },
    {
      id: 'e8',
      source: 'report-analysis',
      target: 'notification-webhook',
      type: 'smoothstep',
      animated: true,
    }
  ],
  metadata: {
    category: 'Document Management',
    complexity: 'medium',
    tags: ['ai-extraction', 'document-classification', 'workflow-automation']
  }
};

// Social Media Content Automation Flow
export const socialMediaFlow = {
  id: 'social-media-automation',
  title: 'AI Social Media Content Pipeline',
  description: 'Generate, schedule, and optimize social media content across multiple platforms with AI',
  nodes: [
    {
      id: 'content-brief',
      type: 'automationNode',
      position: { x: 50, y: 200 },
      data: { 
        title: 'Content Brief',
        subtitle: 'Topic/Keywords',
        baseImage: AUTOMATION_SERVICES.GOOGLE_DOCS.base,
        width: 100,
        height: 100
      }
    },
    {
      id: 'ai-content-generator',
      type: 'automationNode',
      position: { x: 250, y: 200 },
      data: { 
        title: 'AI Content Creator',
        subtitle: 'Generate Posts',
        baseImage: AUTOMATION_SERVICES.GPT.base,
        width: 100,
        height: 100
      }
    },
    {
      id: 'image-generator',
      type: 'automationNode',
      position: { x: 450, y: 120 },
      data: { 
        title: 'AI Image Creator',
        subtitle: 'Generate Visuals',
        baseImage: AUTOMATION_SERVICES.GEMINI.base,
        width: 100,
        height: 100
      }
    },
    {
      id: 'content-optimizer',
      type: 'automationNode',
      position: { x: 450, y: 280 },
      data: { 
        title: 'Platform Optimizer',
        subtitle: 'Adapt for Platforms',
        baseImage: AUTOMATION_SERVICES.GPT.base,
        width: 100,
        height: 100
      }
    },
    {
      id: 'instagram-scheduler',
      type: 'automationNode',
      position: { x: 650, y: 80 },
      data: { 
        title: 'Instagram',
        subtitle: 'Schedule Post',
        baseImage: AUTOMATION_SERVICES.INSTAGRAM.base,
        width: 100,
        height: 100
      }
    },
    {
      id: 'linkedin-scheduler',
      type: 'automationNode',
      position: { x: 650, y: 200 },
      data: { 
        title: 'LinkedIn',
        subtitle: 'Schedule Post',
        baseImage: AUTOMATION_SERVICES.LINKEDIN.base,
        width: 100,
        height: 100
      }
    },
    {
      id: 'analytics-tracker',
      type: 'automationNode',
      position: { x: 650, y: 320 },
      data: { 
        title: 'Analytics Tracker',
        subtitle: 'Performance Data',
        baseImage: AUTOMATION_SERVICES.GOOGLE_SHEETS.base,
        width: 100,
        height: 100
      }
    },
    {
      id: 'performance-webhook',
      type: 'automationNode',
      position: { x: 850, y: 200 },
      data: { 
        title: 'Performance Alert',
        subtitle: 'Success Metrics',
        baseImage: AUTOMATION_SERVICES.WEBHOOK.base,
        width: 100,
        height: 100
      }
    }
  ],
  edges: [
    {
      id: 'e1',
      source: 'content-brief',
      target: 'ai-content-generator',
      type: 'smoothstep',
      animated: true,
    },
    {
      id: 'e2',
      source: 'ai-content-generator',
      target: 'image-generator',
      type: 'smoothstep',
      animated: true,
    },
    {
      id: 'e3',
      source: 'ai-content-generator',
      target: 'content-optimizer',
      type: 'smoothstep',
      animated: true,
    },
    {
      id: 'e4',
      source: 'image-generator',
      target: 'instagram-scheduler',
      type: 'smoothstep',
      animated: true,
    },
    {
      id: 'e5',
      source: 'content-optimizer',
      target: 'linkedin-scheduler',
      type: 'smoothstep',
      animated: true,
    },
    {
      id: 'e6',
      source: 'content-optimizer',
      target: 'analytics-tracker',
      type: 'smoothstep',
      animated: true,
    },
    {
      id: 'e7',
      source: 'instagram-scheduler',
      target: 'performance-webhook',
      type: 'smoothstep',
      animated: true,
    },
    {
      id: 'e8',
      source: 'linkedin-scheduler',
      target: 'performance-webhook',
      type: 'smoothstep',
      animated: true,
    },
    {
      id: 'e9',
      source: 'analytics-tracker',
      target: 'performance-webhook',
      type: 'smoothstep',
      animated: true,
    }
  ],
  metadata: {
    category: 'Marketing Automation',
    complexity: 'medium',
    tags: ['content-generation', 'social-media', 'ai-optimization', 'scheduling']
  }
};

export const exampleFlows = [
  userOnboardingFlow,
  documentProcessingFlow,
  socialMediaFlow,
];
