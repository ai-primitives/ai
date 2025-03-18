import { AI } from 'functions.do'

export const ai = AI({
  
  categorizeSoftware: {
    productName: 'name of the software product',
    provider: 'name of the software company/provider',
    isDataDriven: 'all | most | some | none',
    description: 'reason why it is or is not',
    resources: ['list 10 of the key resources'],
    examples: ['5 example of this software'],
    dept: 'department that would be responsible for this software',
    buyer: 'persona of the buyer of this software',
    user: 'persona of the user of this software',
    useCase: 'example use case of this software',
    apiExists: 'required | usually | sometimes | rarely | never',
    apiUsed: 'required | usually | sometimes | rarely | never',
  },
  
  jobsToBeDone: {
    productName: 'name of the product or service',
    functionalJob: 'the practical task the customer wants to accomplish',
    emotionalJob: 'how the customer wants to feel when using the product',
    socialJob: 'how the customer wants to be perceived by others',
    painPoints: ['list of current pain points customers face'],
    gains: ['list of benefits customers hope to achieve'],
    alternatives: ['list of current alternatives or workarounds'],
    hiringCriteria: ['list of criteria customers use to evaluate solutions'],
    jobStatement: 'When I [context], I want to [motivation], so I can [desired outcome]',
    keyInsights: ['list of key insights about the jobs to be done'],
    recommendations: ['list of recommendations based on the analysis']
  },
  
  leanCanvas: {
    productName: 'name of the product or service',
    problem: ['top 3 problems the product solves'],
    solution: ['top 3 solutions the product offers'],
    uniqueValueProposition: 'clear message that states the benefit of your product',
    unfairAdvantage: 'something that cannot be easily copied or bought',
    customerSegments: ['list of target customer segments'],
    keyMetrics: ['list of key numbers that tell you how your business is doing'],
    channels: ['path to customers'],
    costStructure: ['list of operational costs'],
    revenueStreams: ['list of revenue sources'],
    recommendations: ['list of recommendations based on the analysis']
  },
  
  fourForces: {
    productName: 'name of the product or service',
    pushOfTheSituation: ['factors that push customers to change'],
    pullOfTheNewSolution: ['attractive factors of the new solution'],
    anxietyOfTheNewSolution: ['concerns customers have about the new solution'],
    habitOfThePresent: ['current behaviors that are difficult to change'],
    dominantForce: 'which force appears to be strongest',
    marketReadiness: 'assessment of how ready the market is for this solution',
    adoptionBarriers: ['list of key barriers to adoption'],
    accelerationStrategies: ['list of strategies to accelerate adoption'],
    recommendations: ['list of recommendations based on the analysis']
  },
  
  sevenPowers: {
    productName: 'name of the product or service',
    scaleBenefits: 'assessment of scale economies advantage',
    networkEconomics: 'assessment of network effects advantage',
    counterPositioning: 'assessment of new approach that incumbent cannot copy',
    switching: 'assessment of customer switching costs',
    branding: 'assessment of customer preference for product at same price',
    corneredResource: 'assessment of preferential access to a coveted asset',
    processAdvantage: 'assessment of embedded company methods',
    dominantPower: 'which power appears to be strongest',
    powerGaps: ['list of areas where power could be strengthened'],
    competitiveAdvantage: 'overall assessment of competitive advantage',
    recommendations: ['list of recommendations based on the analysis']
  },
  
  storyBrand: {
    productName: 'name of the product or service',
    hero: 'description of the customer as the hero',
    problem: ['internal, external, and philosophical problems the hero faces'],
    guide: 'how the company serves as a guide',
    plan: ['clear steps the guide gives the hero'],
    callToAction: 'direct and transitional calls to action',
    success: 'description of what success looks like for the hero',
    failure: `description of what failure looks like if the hero doesn't act`,
    messagingExamples: ['examples of clear messaging using this framework'],
    recommendations: ['list of recommendations for improving brand messaging']
  },

})