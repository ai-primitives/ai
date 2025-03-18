import { AI } from 'functions.do'

export const ai = AI({
  
  // Basic idea generation
  generateIdeas: {
    concept: 'What is the core business idea?',
    industry: 'What industry is this idea in?',
    icp: 'What is the ideal customer profile?',
    ideas: ['List of generated business ideas'],
    rationale: 'Explanation of the thought process behind the ideas',
    marketPotential: 'Assessment of market potential for these ideas',
    implementationDifficulty: 'Assessment of difficulty to implement these ideas',
    resourceRequirements: ['Key resources required to implement these ideas'],
    timeToMarket: 'Estimated time to bring these ideas to market',
    scalabilityPotential: 'Assessment of how scalable these ideas are',
    innovationLevel: 'Assessment of how innovative these ideas are',
    competitiveAdvantage: 'Potential competitive advantages of these ideas',
    revenueModels: ['Potential revenue models for these ideas'],
    keyMetrics: ['Key metrics to track success of these ideas'],
    nextSteps: ['Recommended next steps to validate these ideas']
  },
  
  // Startup idea validation
  validateIdea: {
    concept: 'What is the startup idea to validate?',
    targetMarket: 'Who is the target market for this idea?',
    marketSize: 'Estimated size of the target market (TAM, SAM, SOM)',
    problemStatement: 'What problem does this idea solve?',
    problemSeverity: 'How severe is this problem for the target market?',
    problemFrequency: 'How frequently does this problem occur?',
    willingnessToPay: 'Assessment of target market\'s willingness to pay',
    existingSolutions: ['List of existing solutions in the market'],
    differentiators: ['What makes this idea different from existing solutions'],
    validationMethods: ['Methods to validate this idea'],
    mvpRecommendation: 'Recommendation for minimum viable product',
    customerDiscoveryPlan: ['Plan for customer discovery interviews'],
    experimentDesign: ['Design for validation experiments'],
    successCriteria: ['Criteria to determine if the idea is validated'],
    pivotOptions: ['Potential pivot options if validation fails'],
    riskAssessment: {
      marketRisks: ['Potential market risks'],
      technicalRisks: ['Potential technical risks'],
      operationalRisks: ['Potential operational risks'],
      financialRisks: ['Potential financial risks'],
      regulatoryRisks: ['Potential regulatory risks'],
      competitiveRisks: ['Potential competitive risks']
    },
    validationScore: 'Score from 1-10 on how promising this idea is',
    validationRationale: 'Explanation of the validation score',
    recommendations: ['Recommendations for proceeding with this idea'],
    timelineEstimate: 'Estimated timeline for validation process',
    budgetEstimate: 'Estimated budget for validation process'
  },
  
  // Problem-solution fit analysis
  problemSolutionFit: {
    problem: 'What problem are you trying to solve?',
    problemCategory: 'Category of problem (e.g., efficiency, cost, experience)',
    problemSeverity: 'How severe is this problem for customers?',
    problemFrequency: 'How frequently does this problem occur?',
    targetCustomers: ['Who experiences this problem the most?'],
    customerSegmentation: ['Detailed segmentation of target customers'],
    painPoints: ['What are the specific pain points?'],
    painPointPrioritization: 'Prioritization of pain points by importance',
    currentAlternatives: ['How do people currently solve this problem?'],
    alternativesAnalysis: 'Analysis of strengths and weaknesses of current alternatives',
    proposedSolution: 'What solution are you proposing?',
    solutionComponents: ['Key components of the proposed solution'],
    valueProposition: 'Why is your solution better than alternatives?',
    uniqueSellingPoints: ['Unique selling points of your solution'],
    customerBenefits: ['Specific benefits customers will receive'],
    fitAssessment: 'Assessment of how well the solution fits the problem',
    fitScore: 'Score from 1-10 on problem-solution fit',
    evidenceNeeded: ['What evidence would validate this fit?'],
    experimentSuggestions: ['Experiments to test problem-solution fit'],
    customerFeedbackPlan: 'Plan for gathering customer feedback',
    iterationStrategy: 'Strategy for iterating on the solution based on feedback',
    nextSteps: ['Recommended next steps to improve fit'],
    timelineEstimate: 'Estimated timeline for achieving strong problem-solution fit'
  },
  
  // Competitive landscape analysis
  competitiveLandscape: {
    industry: 'What industry is the startup in?',
    industryMaturity: 'Assessment of industry maturity stage',
    industryTrends: ['Key trends shaping the industry'],
    marketSize: 'Estimated total market size and growth rate',
    marketSegmentation: ['Key market segments and their characteristics'],
    directCompetitors: [{
      name: 'Competitor name',
      description: 'Brief description of the competitor',
      founded: 'Year founded',
      funding: 'Funding status and amount if known',
      marketShare: 'Estimated market share',
      targetCustomers: 'Who they target',
      valueProposition: 'Their core value proposition',
      productOffering: 'Overview of their product/service offering',
      pricing: 'Pricing strategy and model',
      strengths: ['Key strengths'],
      weaknesses: ['Key weaknesses'],
      recentDevelopments: ['Recent developments or pivots'],
      growthStrategy: 'Their apparent growth strategy',
      customerSentiment: 'Assessment of customer sentiment'
    }],
    indirectCompetitors: [{
      name: 'Competitor name',
      description: 'Brief description of the competitor',
      relevance: 'How they compete indirectly',
      threat: 'Level of threat they pose',
      potentialResponse: 'How they might respond to your entry'
    }],
    competitiveIntensity: 'Assessment of overall competitive intensity',
    barrierToEntry: 'Assessment of barriers to entry in this market',
    supplierPower: 'Assessment of supplier power in this market',
    buyerPower: 'Assessment of buyer power in this market',
    substituteThreat: 'Assessment of threat of substitutes',
    marketGaps: ['Identified gaps in the market'],
    blueOceanOpportunities: ['Potential blue ocean opportunities'],
    differentiationStrategy: 'How to differentiate from competitors',
    competitiveAdvantage: 'Potential sustainable competitive advantage',
    marketEntryStrategy: 'Recommended strategy for entering the market',
    defensibilityAssessment: 'Assessment of how defensible your position would be',
    competitiveResponsePrediction: 'Prediction of how competitors might respond',
    winningStrategy: 'Recommended strategy to win in this competitive landscape'
  },
  
  // Business model canvas
  businessModelCanvas: {
    valueProposition: 'What unique value do you provide to customers?',
    problemSolved: 'What customer problem does your business solve?',
    customerSegments: ['Who are your most important customers?'],
    customerSegmentPrioritization: 'Prioritization of customer segments',
    earlyAdopters: 'Description of likely early adopters',
    channels: ['How do you reach your customers?'],
    channelEffectiveness: 'Assessment of each channel\'s effectiveness',
    channelEconomics: 'Economics of each channel (cost, conversion rate)',
    customerRelationships: ['What type of relationship do you establish?'],
    relationshipCosts: 'Costs associated with maintaining these relationships',
    customerAcquisition: 'Strategy for customer acquisition',
    customerRetention: 'Strategy for customer retention',
    customerLifetimeValue: 'Estimated customer lifetime value',
    revenueStreams: ['How do you generate revenue?'],
    revenueModel: 'Detailed explanation of revenue model',
    pricingStrategy: 'Strategy for pricing your product/service',
    revenueProjections: 'Preliminary revenue projections',
    keyResources: ['What key resources does your value proposition require?'],
    resourceAcquisition: 'How will you acquire these resources?',
    resourceCosts: 'Costs associated with key resources',
    keyActivities: ['What key activities does your value proposition require?'],
    activityPrioritization: 'Prioritization of key activities',
    activityCosts: 'Costs associated with key activities',
    keyPartnerships: ['Who are your key partners/suppliers?'],
    partnershipStrategy: 'Strategy for establishing and maintaining partnerships',
    partnershipValue: 'Value exchange in each partnership',
    costStructure: ['What are the most important costs in your business model?'],
    fixedCosts: 'Fixed costs in your business model',
    variableCosts: 'Variable costs in your business model',
    economiesOfScale: 'Potential economies of scale',
    unitEconomics: 'Analysis of unit economics',
    breakEvenAnalysis: 'Preliminary break-even analysis',
    scalabilityAssessment: 'Assessment of how scalable this business model is',
    profitabilityAssessment: 'Assessment of potential profitability',
    businessModelRisks: ['Risks associated with this business model'],
    recommendations: ['Recommendations for improving the business model'],
    businessModelInnovation: ['Potential areas for business model innovation'],
    implementationRoadmap: 'Roadmap for implementing this business model'
  },
  
  // Startup naming
  generateStartupName: {
    concept: 'What is the core concept of the startup?',
    industry: 'What industry is the startup in?',
    values: ['What are the key values of the startup?'],
    targetAudience: 'Who is the target audience?',
    brandPersonality: 'Desired personality for the brand',
    namingCriteria: ['Specific criteria the name should meet'],
    nameStyle: 'Preferred style of name (descriptive, abstract, etc.)',
    wordAssociations: ['Key word associations to consider'],
    avoidWords: ['Words or concepts to avoid'],
    nameOptions: ['Generated name options'],
    nameRationale: ['Explanation for each name option'],
    nameScoring: [{
      name: 'Name option',
      memorability: 'Score for memorability (1-10)',
      uniqueness: 'Score for uniqueness (1-10)',
      relevance: 'Score for relevance to concept (1-10)',
      pronunciation: 'Score for ease of pronunciation (1-10)',
      spelling: 'Score for ease of spelling (1-10)',
      brandability: 'Score for brandability (1-10)',
      totalScore: 'Total score (out of 60)'
    }],
    domainAvailability: ['Assessment of domain availability for each name'],
    socialMediaAvailability: ['Assessment of social media handle availability'],
    trademarkConsiderations: ['Trademark considerations for each name'],
    internationalConsiderations: ['How each name might be perceived internationally'],
    brandingPotential: ['Assessment of branding potential for each name'],
    logoCompatibility: ['How well each name might work with a logo'],
    marketingCompatibility: ['How well each name works in marketing contexts'],
    recommendations: ['Recommended names with reasoning'],
    nextSteps: ['Next steps for finalizing the name selection']
  },
  
  // Market sizing and opportunity analysis
  marketOpportunityAnalysis: {
    industry: 'What industry is the startup targeting?',
    targetMarket: 'Specific market segment being targeted',
    totalAddressableMarket: 'Estimated total addressable market (TAM) size',
    serviceableAddressableMarket: 'Estimated serviceable addressable market (SAM) size',
    serviceableObtainableMarket: 'Estimated serviceable obtainable market (SOM) size',
    marketGrowthRate: 'Projected annual growth rate of the market',
    marketDrivers: ['Key factors driving market growth'],
    marketConstraints: ['Key factors constraining market growth'],
    marketTrends: ['Significant trends shaping the market'],
    customerSegmentation: [{
      segment: 'Customer segment name',
      size: 'Estimated segment size',
      characteristics: ['Key characteristics of this segment'],
      needs: ['Primary needs of this segment'],
      willingnessToPay: 'Willingness to pay assessment',
      acquisitionChannels: ['Effective channels to reach this segment'],
      growthPotential: 'Growth potential of this segment'
    }],
    competitiveDynamics: 'Analysis of competitive dynamics in the market',
    marketConcentration: 'Assessment of market concentration',
    entryBarriers: ['Barriers to entry in this market'],
    regulatoryFactors: ['Regulatory factors affecting the market'],
    technologyImpact: 'How technology is impacting this market',
    opportunityWindows: ['Specific windows of opportunity'],
    marketRisks: ['Key risks in this market'],
    marketEntryStrategy: 'Recommended market entry strategy',
    timeToMarket: 'Estimated time required to enter the market',
    resourceRequirements: ['Resources required to capture this opportunity'],
    successFactors: ['Critical success factors for this market'],
    opportunityScore: 'Overall opportunity score (1-10)',
    opportunityRationale: 'Explanation of opportunity score',
    recommendations: ['Strategic recommendations for pursuing this opportunity']
  },
  
  // Startup pitch deck creation
  createPitchDeck: {
    startupName: 'Name of the startup',
    tagline: 'Catchy tagline for the startup',
    slides: [{
      title: 'Cover Slide',
      content: 'Company name, tagline, and logo',
      designRecommendations: ['Design recommendations for this slide'],
      keyMessage: 'The key message this slide should convey'
    }, {
      title: 'Problem',
      content: 'Clear articulation of the problem being solved',
      designRecommendations: ['Design recommendations for this slide'],
      keyMessage: 'The key message this slide should convey'
    }, {
      title: 'Solution',
      content: 'Your solution to the problem',
      designRecommendations: ['Design recommendations for this slide'],
      keyMessage: 'The key message this slide should convey'
    }, {
      title: 'Product',
      content: 'Product description and demonstration',
      designRecommendations: ['Design recommendations for this slide'],
      keyMessage: 'The key message this slide should convey'
    }, {
      title: 'Market Opportunity',
      content: 'Market size and opportunity',
      designRecommendations: ['Design recommendations for this slide'],
      keyMessage: 'The key message this slide should convey'
    }, {
      title: 'Business Model',
      content: 'How you make money',
      designRecommendations: ['Design recommendations for this slide'],
      keyMessage: 'The key message this slide should convey'
    }, {
      title: 'Traction',
      content: 'Progress and milestones achieved',
      designRecommendations: ['Design recommendations for this slide'],
      keyMessage: 'The key message this slide should convey'
    }, {
      title: 'Competition',
      content: 'Competitive landscape and your advantage',
      designRecommendations: ['Design recommendations for this slide'],
      keyMessage: 'The key message this slide should convey'
    }, {
      title: 'Team',
      content: 'Key team members and their expertise',
      designRecommendations: ['Design recommendations for this slide'],
      keyMessage: 'The key message this slide should convey'
    }, {
      title: 'Financials',
      content: 'Key financial projections and metrics',
      designRecommendations: ['Design recommendations for this slide'],
      keyMessage: 'The key message this slide should convey'
    }, {
      title: 'Ask',
      content: 'What you\'re asking for (investment, partnership, etc.)',
      designRecommendations: ['Design recommendations for this slide'],
      keyMessage: 'The key message this slide should convey'
    }],
    overallDesignRecommendations: ['Overall design recommendations for the pitch deck'],
    presentationTips: ['Tips for effectively presenting the pitch deck'],
    commonQuestions: ['Common questions investors might ask'],
    recommendedResponses: ['Recommended responses to common questions']
  },
  
  // Startup financial projections
  createFinancialProjections: {
    startupName: 'Name of the startup',
    businessModel: 'Brief description of the business model',
    projectionPeriod: 'Period for which projections are made (e.g., 3 years, 5 years)',
    revenueModel: {
      revenueStreams: ['Different revenue streams'],
      pricingAssumptions: ['Assumptions about pricing'],
      customerAcquisition: ['Assumptions about customer acquisition'],
      customerRetention: ['Assumptions about customer retention'],
      growthAssumptions: ['Assumptions about revenue growth']
    },
    costStructure: {
      fixedCosts: ['Fixed costs and their assumptions'],
      variableCosts: ['Variable costs and their assumptions'],
      cogAssumptions: ['Assumptions about cost of goods sold'],
      opexAssumptions: ['Assumptions about operating expenses']
    },
    capitalRequirements: {
      initialInvestment: 'Required initial investment',
      additionalRounds: ['Projected additional funding rounds'],
      useOfFunds: ['How funds will be used']
    },
    financialStatements: {
      incomeStatement: {
        revenue: ['Projected revenue by period'],
        cogs: ['Projected cost of goods sold by period'],
        grossProfit: ['Projected gross profit by period'],
        operatingExpenses: ['Projected operating expenses by period'],
        ebitda: ['Projected EBITDA by period'],
        netIncome: ['Projected net income by period']
      },
      cashFlow: {
        operatingCashFlow: ['Projected operating cash flow by period'],
        investingCashFlow: ['Projected investing cash flow by period'],
        financingCashFlow: ['Projected financing cash flow by period'],
        netCashFlow: ['Projected net cash flow by period'],
        endingCashBalance: ['Projected ending cash balance by period']
      },
      balanceSheet: {
        assets: ['Projected assets by period'],
        liabilities: ['Projected liabilities by period'],
        equity: ['Projected equity by period']
      }
    },
    keyMetrics: {
      unitEconomics: ['Unit economics metrics and projections'],
      customerMetrics: ['Customer-related metrics and projections'],
      financialRatios: ['Key financial ratios and projections'],
      breakEvenAnalysis: 'Break-even analysis and projection'
    },
    sensitivityAnalysis: {
      bestCase: 'Best case scenario projections',
      baseCase: 'Base case scenario projections',
      worstCase: 'Worst case scenario projections',
      keyVariables: ['Key variables that most impact projections']
    },
    valuationEstimate: {
      methodologies: ['Valuation methodologies used'],
      estimatedValuation: 'Estimated valuation range',
      valuationRationale: 'Rationale for the valuation estimate'
    },
    investmentReturns: {
      roi: 'Projected return on investment',
      irr: 'Projected internal rate of return',
      exitScenarios: ['Potential exit scenarios and returns']
    },
    assumptions: ['All key assumptions underlying the projections'],
    risks: ['Key risks that could affect financial performance'],
    recommendations: ['Financial recommendations for the startup']
  }
})
