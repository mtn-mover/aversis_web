'use client'

import { useState, useEffect, useCallback } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface CalculationInputs {
  currentRevenue: number
  currentMargin: number
  tariffImpact: number
  expectedUSGrowth: number
  setupCosts: number
  timeframe: number
}

export default function ROICalculator() {
  const [inputs, setInputs] = useState<CalculationInputs>({
    currentRevenue: 10000000, // CHF 10M default
    currentMargin: 15,
    tariffImpact: 39,
    expectedUSGrowth: 25,
    setupCosts: 2000000, // CHF 2M default
    timeframe: 3
  })

  // Set page title
  useEffect(() => {
    document.title = 'U.S.-Produktions ROI Calculator - Aversis'
  }, [])

  const [results, setResults] = useState<any>(null)

  const calculateROI = useCallback(() => {
    // Current situation with tariffs
    const revenueAtRisk = inputs.currentRevenue * (inputs.tariffImpact / 100)
    const marginLoss = revenueAtRisk * (inputs.currentMargin / 100)
    
    // US production scenario
    const potentialUSRevenue = inputs.currentRevenue * (inputs.expectedUSGrowth / 100)
    const savedMargin = marginLoss
    const additionalMargin = potentialUSRevenue * (inputs.currentMargin / 100)
    
    // ROI calculation
    const totalBenefit = savedMargin + additionalMargin
    const annualBenefit = totalBenefit / inputs.timeframe
    const roi = ((totalBenefit - inputs.setupCosts) / inputs.setupCosts) * 100
    const breakEvenTime = inputs.setupCosts / annualBenefit
    
    setResults({
      revenueAtRisk,
      marginLoss,
      potentialUSRevenue,
      totalBenefit,
      annualBenefit,
      roi,
      breakEvenTime,
      netGain: totalBenefit - inputs.setupCosts
    })
  }, [inputs])

  useEffect(() => {
    calculateROI()
  }, [calculateROI])


  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('de-CH', {
      style: 'currency',
      currency: 'CHF',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const handleInputChange = (field: keyof CalculationInputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-aversis-blue to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            U.S.-Produktions ROI Calculator
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Berechnen Sie das Potenzial einer U.S.-Produktionsstätte für Ihr Schweizer Fertigungsunternehmen. 
            Basierend auf 12 Jahren Erfahrung im U.S.-Marktaufbau.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Input Panel */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-aversis-dark mb-8">Ihre Unternehmensdaten</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Aktueller Jahresumsatz (CHF)
                  </label>
                  <input
                    type="number"
                    value={inputs.currentRevenue}
                    onChange={(e) => handleInputChange('currentRevenue', Number(e.target.value))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aversis-blue focus:border-aversis-blue"
                    step="1000000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Operative Marge (%)
                  </label>
                  <input
                    type="number"
                    value={inputs.currentMargin}
                    onChange={(e) => handleInputChange('currentMargin', Number(e.target.value))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aversis-blue focus:border-aversis-blue"
                    min="1"
                    max="50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tariff-Auswirkung (%)
                  </label>
                  <input
                    type="number"
                    value={inputs.tariffImpact}
                    onChange={(e) => handleInputChange('tariffImpact', Number(e.target.value))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aversis-blue focus:border-aversis-blue"
                    min="1"
                    max="100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Erwartetes U.S.-Wachstum (%)
                  </label>
                  <input
                    type="number"
                    value={inputs.expectedUSGrowth}
                    onChange={(e) => handleInputChange('expectedUSGrowth', Number(e.target.value))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aversis-blue focus:border-aversis-blue"
                    min="1"
                    max="200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Setup-Kosten (CHF)
                  </label>
                  <input
                    type="number"
                    value={inputs.setupCosts}
                    onChange={(e) => handleInputChange('setupCosts', Number(e.target.value))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aversis-blue focus:border-aversis-blue"
                    step="100000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Planungshorizont (Jahre)
                  </label>
                  <input
                    type="number"
                    value={inputs.timeframe}
                    onChange={(e) => handleInputChange('timeframe', Number(e.target.value))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aversis-blue focus:border-aversis-blue"
                    min="1"
                    max="10"
                  />
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-aversis-dark mb-8">ROI Berechnung</h2>
              
              {results && (
                <div className="space-y-6">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-red-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-red-600">
                        {formatCurrency(results.marginLoss)}
                      </div>
                      <div className="text-sm text-red-700">Jährlicher Margenverlust durch Zölle</div>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {formatCurrency(results.annualBenefit)}
                      </div>
                      <div className="text-sm text-green-700">Jährlicher Nutzen U.S.-Produktion</div>
                    </div>
                  </div>

                  {/* ROI Highlight */}
                  <div className="bg-gradient-to-r from-aversis-blue to-blue-700 rounded-xl p-6 text-white text-center">
                    <div className="text-4xl font-bold mb-2">
                      {results.roi > 0 ? '+' : ''}{results.roi.toFixed(1)}%
                    </div>
                    <div className="text-lg">Return on Investment über {inputs.timeframe} Jahre</div>
                  </div>

                  {/* Detailed Breakdown */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">Umsatz unter Tariff-Risiko:</span>
                      <span className="font-semibold text-red-600">{formatCurrency(results.revenueAtRisk)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">Potenzieller U.S.-Zusatzumsatz:</span>
                      <span className="font-semibold text-green-600">{formatCurrency(results.potentialUSRevenue)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">Break-Even Zeit:</span>
                      <span className="font-semibold">{results.breakEvenTime.toFixed(1)} Jahre</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">Nettogewinn über {inputs.timeframe} Jahre:</span>
                      <span className="font-semibold text-aversis-blue">{formatCurrency(results.netGain)}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3 mt-8">
                    <button className="w-full bg-aversis-orange text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition">
                      🚀 Kostenlose Machbarkeitsstudie anfordern
                    </button>
                    <button className="w-full border-2 border-aversis-blue text-aversis-blue py-3 px-6 rounded-lg font-semibold hover:bg-aversis-blue hover:text-white transition">
                      📋 Detaillierte Analyse per E-Mail erhalten
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 bg-blue-50 rounded-2xl p-8">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Wichtiger Hinweis</h3>
                <p className="text-blue-800 text-sm leading-relaxed">
                  Diese Berechnung basiert auf vereinfachten Annahmen und dient als Orientierungshilfe. 
                  Für eine detaillierte und auf Ihr Unternehmen zugeschnittene Analyse empfehlen wir eine 
                  kostenlose Machbarkeitsstudie mit konkreten Marktdaten und spezifischen Kostenfaktoren.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}