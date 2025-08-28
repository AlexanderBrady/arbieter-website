'use client'
// Export all automation flow components and utilities
export { default as FlowDiagram } from './flow-diagram';

// Export types and configurations
export * from './types';
export { exampleFlows } from './example-flows';

// Re-export specific flows for convenience
export { 
  userOnboardingFlow,
  documentProcessingFlow,
  socialMediaFlow,
} from './example-flows';
