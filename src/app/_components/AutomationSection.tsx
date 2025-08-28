"use client"
import React, { useState } from 'react'
import { FlowDiagram, userOnboardingFlow, documentProcessingFlow, socialMediaFlow } from './automation-flows'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'


const AutomationSection = () => {
  const [activeTab, setActiveTab] = useState('sales')

  const automationFlows = [
    {
      id: 'sales',
      title: 'Sales Automation',
      description: 'AI-powered sales meeting processing with lead classification',
      flow: userOnboardingFlow,
    },
    {
      id: 'documents',
      title: 'Document Processing',
      description: 'Intelligent document analysis and automated routing',
      flow: documentProcessingFlow,
    },
    {
      id: 'social',
      title: 'Social Media',
      description: 'AI content generation and multi-platform scheduling',
      flow: socialMediaFlow,
    }
  ]

  return ( 
    <section className=" w-full relative z-10">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-6xl mb-6 inset-shadow">
            AI & Automation Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            We specialize in AI integrations and custom development solutions
            designed specifically for construction, real estate, and technology
            companies.
          </p>
        </div>

        {/* Automation Flow Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mx-auto">
          <TabsList className="w-fit mx-auto">
            {automationFlows.map((automation) => (
              <TabsTrigger 
                key={automation.id} 
                value={automation.id}
                className="flex items-center gap-2 px-4 py-3"
              >
                <span className="hidden sm:inline">{automation.title}</span>
                <span className="sm:hidden">{automation.title.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {automationFlows.map((automation) => (
            <TabsContent key={automation.id} value={automation.id} className="mt-0">
              <FlowDiagram flow={automation.flow} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

export default AutomationSection