'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface Question {
  id: string
  text: string
  category: string
  weight: number
  options: {
    text: string
    score: number
  }[]
}

const questions: Question[] = [
  {
    id: 'revenue',
    text: 'Wie hoch ist Ihr aktueller Jahresumsatz?',
    category: 'Unternehmensgröße',
    weight: 3,
    options: [
      { text: 'Unter CHF 5M', score: 1 },
      { text: 'CHF 5-25M', score: 2 },
      { text: 'CHF 25-100M', score: 4 },
      { text: 'Über CHF 100M', score: 5 }
    ]
  },
  {
    id: 'us_exposure',
    text: 'Welcher Anteil Ihres Umsatzes kommt aus dem U.S.-Markt?',
    category: 'Marktexposure',
    weight: 4,
    options: [
      { text: 'Unter 10%', score: 1 },
      { text: '10-25%', score: 2 },
      { text: '25-50%', score: 4 },
      { text: 'Über 50%', score: 5 }
    ]
  },
  {
    id: 'tariff_impact',
    text: 'Wie stark sind Sie von U.S.-Importzöllen betroffen?',
    category: 'Tariff-Risiko',
    weight: 5,
    options: [
      { text: 'Gar nicht', score: 1 },
      { text: 'Gering (unter 10%)', score: 2 },
      { text: 'Moderat (10-25%)', score: 3 },
      { text: 'Hoch (25-50%)', score: 4 },
      { text: 'Sehr hoch (über 50%)', score: 5 }
    ]
  },
  {
    id: 'manufacturing_complexity',
    text: 'Wie komplex ist Ihr Fertigungsprozess?',
    category: 'Produktion',
    weight: 3,
    options: [
      { text: 'Einfach (wenige Schritte)', score: 5 },
      { text: 'Moderat (standardisiert)', score: 4 },
      { text: 'Komplex (viele Varianten)', score: 2 },
      { text: 'Hochkomplex (Spezialfertigung)', score: 1 }
    ]
  },
  {
    id: 'supply_chain',
    text: 'Wie abhängig sind Sie von europäischen Zulieferern?',
    category: 'Supply Chain',
    weight: 3,
    options: [
      { text: 'Sehr abhängig', score: 2 },
      { text: 'Moderat abhängig', score: 3 },
      { text: 'Flexibel', score: 4 },
      { text: 'Bereits diversifiziert', score: 5 }
    ]
  },
  {
    id: 'financial_readiness',
    text: 'Welches Investment können Sie für U.S.-Setup bereitstellen?',
    category: 'Finanzielle Bereitschaft',
    weight: 4,
    options: [
      { text: 'Unter CHF 1M', score: 1 },
      { text: 'CHF 1-5M', score: 2 },
      { text: 'CHF 5-10M', score: 4 },
      { text: 'Über CHF 10M', score: 5 }
    ]
  },
  {
    id: 'timeline',
    text: 'Bis wann möchten Sie in den USA produzieren?',
    category: 'Zeitplanung',
    weight: 3,
    options: [
      { text: 'Sofort/2025', score: 5 },
      { text: '2026', score: 4 },
      { text: '2027', score: 3 },
      { text: '2028 oder später', score: 1 }
    ]
  },
  {
    id: 'us_experience',
    text: 'Haben Sie bereits Erfahrung mit dem U.S.-Markt?',
    category: 'Markterfahrung',
    weight: 2,
    options: [
      { text: 'Keine', score: 1 },
      { text: 'Verkauf über Distributoren', score: 3 },
      { text: 'Eigene U.S.-Sales', score: 4 },
      { text: 'U.S.-Operations vorhanden', score: 5 }
    ]
  }
]

const getRecommendation = (score: number, maxScore: number) => {
  const percentage = (score / maxScore) * 100

  if (percentage >= 80) {
    return {
      level: 'Sofort bereit',
      color: 'green',
      title: '🚀 Hervorragend positioniert für U.S.-Expansion',
      description: 'Sie erfüllen alle Voraussetzungen für eine erfolgreiche U.S.-Produktionsstätte. Mit Ihrer starken Marktposition und finanziellen Basis können Sie den Zoll-Herausforderungen erfolgreich begegnen.',
      action: 'Kostenlose Machbarkeitsstudie anfordern',
      urgency: 'Starten Sie noch 2025 - begrenzte Plätze für 2026-Projekte!'
    }
  } else if (percentage >= 60) {
    return {
      level: 'Gut positioniert',
      color: 'blue',
      title: '✅ Starke Ausgangslage mit Optimierungsbedarf',
      description: 'Sie haben eine solide Basis für U.S.-Expansion. Mit gezielten Vorbereitungen können Sie die Tariff-Risiken erfolgreich minimieren und neues Wachstum erschließen.',
      action: 'Strategiegespräch vereinbaren',
      urgency: 'Nutzen Sie die Planungsphase 2025 für optimalen 2026-Start'
    }
  } else if (percentage >= 40) {
    return {
      level: 'Vorbereitung nötig',
      color: 'orange',
      title: '⚠️ Grundlagen vorhanden, Entwicklung erforderlich',
      description: 'Ihre Situation zeigt Potenzial, jedoch sind wichtige Vorbereitungen nötig. Ein strukturierter Aufbauplan kann Sie erfolgreich zu einer U.S.-Präsenz führen.',
      action: 'Entwicklungsplan erstellen lassen',
      urgency: '2027-Timeline realistisch bei sofortigem Start der Vorbereitung'
    }
  } else {
    return {
      level: 'Fundamentale Vorbereitung',
      color: 'red',
      title: '🔄 Strategische Neuausrichtung empfohlen',
      description: 'Eine U.S.-Expansion erfordert in Ihrer Situation grundlegende strategische Vorbereitungen. Konzentrieren Sie sich zunächst auf die Stärkung der Basis.',
      action: 'Strategische Beratung buchen',
      urgency: 'Langfristige Planung ab 2028 mit intensiver Vorbereitung'
    }
  }
}

export default function USReadinessCheck() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [showResults, setShowResults] = useState(false)

  // Set page title
  useEffect(() => {
    document.title = 'U.S.-Readiness Check - Aversis'
  }, [])

  const maxScore = questions.reduce((sum, q) => sum + (q.weight * 5), 0)
  const currentScore = Object.entries(answers).reduce((sum, [questionId, score]) => {
    const question = questions.find(q => q.id === questionId)
    return sum + (question ? question.weight * score : 0)
  }, 0)

  const handleAnswer = (score: number) => {
    const questionId = questions[currentQuestion].id
    setAnswers(prev => ({ ...prev, [questionId]: score }))

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const restartAssessment = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }

  const recommendation = getRecommendation(currentScore, maxScore)
  const progress = showResults ? 100 : ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-aversis-blue to-blue-700 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            U.S.-Readiness Check
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ermitteln Sie in 8 Fragen, wie bereit Ihr Schweizer Fertigungsunternehmen 
            für eine erfolgreiche U.S.-Produktionsstätte ist.
          </p>
        </div>
      </section>

      {/* Assessment Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {!showResults ? (
            <>
              {/* Progress Bar */}
              <div className="mb-12">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-600">
                    Frage {currentQuestion + 1} von {questions.length}
                  </span>
                  <span className="text-sm font-medium text-aversis-blue">
                    {Math.round(progress)}% abgeschlossen
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-aversis-blue to-blue-600 h-3 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Question Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="mb-6">
                  <div className="text-sm font-medium text-aversis-blue mb-2">
                    {questions[currentQuestion].category}
                  </div>
                  <h2 className="text-2xl font-bold text-aversis-dark mb-4">
                    {questions[currentQuestion].text}
                  </h2>
                </div>

                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option.score)}
                      className="w-full text-left p-4 border-2 border-gray-200 rounded-lg hover:border-aversis-blue hover:bg-blue-50 transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-800 group-hover:text-aversis-blue">
                          {option.text}
                        </span>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-aversis-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            /* Results Section */
            <div className="space-y-8">
              {/* Score Overview */}
              <div className={`bg-gradient-to-r ${
                recommendation.color === 'green' ? 'from-green-500 to-green-600' :
                recommendation.color === 'blue' ? 'from-blue-500 to-blue-600' :
                recommendation.color === 'orange' ? 'from-orange-500 to-orange-600' :
                'from-red-500 to-red-600'
              } rounded-2xl p-8 text-white text-center`}>
                <div className="text-5xl font-bold mb-4">
                  {Math.round((currentScore / maxScore) * 100)}%
                </div>
                <div className="text-2xl font-semibold mb-2">
                  {recommendation.level}
                </div>
                <div className="text-lg opacity-90">
                  U.S.-Readiness Score: {currentScore} von {maxScore} Punkten
                </div>
              </div>

              {/* Detailed Results */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-aversis-dark mb-6">
                  {recommendation.title}
                </h2>
                
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {recommendation.description}
                </p>

                {/* Category Breakdown */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {questions.map(question => {
                    const score = answers[question.id] || 0
                    const maxQuestionScore = question.weight * 5
                    const percentage = (score / maxQuestionScore) * 100
                    
                    return (
                      <div key={question.id} className="border-l-4 border-aversis-blue pl-4">
                        <div className="font-semibold text-gray-800 mb-2">{question.category}</div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-600">{score}/{maxQuestionScore} Punkte</span>
                          <span className="text-sm font-medium text-aversis-blue">{Math.round(percentage)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              percentage >= 80 ? 'bg-green-500' :
                              percentage >= 60 ? 'bg-blue-500' :
                              percentage >= 40 ? 'bg-orange-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Urgency Message */}
                <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-8">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-orange-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold text-orange-900 mb-2">⏰ Zeitfaktor beachten</h3>
                      <p className="text-orange-800">{recommendation.urgency}</p>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="text-center">
                  <a 
                    href="/kontakt"
                    className="btn-primary text-lg px-12 py-4 inline-block"
                  >
                    Kostenloses Erstgespräch anfragen
                  </a>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <button 
                      onClick={restartAssessment}
                      className="text-aversis-blue hover:text-aversis-orange transition font-medium"
                    >
                      🔄 Assessment wiederholen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}