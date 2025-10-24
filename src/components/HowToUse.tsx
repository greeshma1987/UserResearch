import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { BookOpen, Sparkles, Check, Zap, Shield, Users, Palette } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "./ThemeContext";
import { Footer } from "./Footer";

export function HowToUse() {
  const { colors } = useTheme();

  const features = [
    { icon: Zap, title: "Auto-Save", description: "Your work is automatically saved as you type", color: "#f59e0b" },
    { icon: Palette, title: "Themes", description: "Switch between color themes in the header", color: "#8b5cf6" },
    { icon: BookOpen, title: "Editable", description: "Click anywhere to edit and customize", color: "#3b82f6" },
    { icon: Users, title: "Collaborative", description: "Share your unique URL with stakeholders", color: "#10b981" },
  ];

  const steps = [
    {
      number: "1",
      title: "Sign In & Start",
      description: "Sign in with your Google account to automatically save your research progress. Your data is stored securely and accessible from any device.",
      tip: "Your work auto-saves as you type - no need to manually save!",
      icon: Shield,
    },
    {
      number: "2",
      title: "Add Your Content",
      description: "Click into any text field, table cell, or card to edit. Replace all placeholder content with your actual research data and insights.",
      tip: "Use drag-and-drop features for organizing insights and sticky notes",
      icon: BookOpen,
    },
    {
      number: "3",
      title: "Review & Share",
      description: "Navigate through tabs to complete all sections. Share your research URL with stakeholders for collaborative review and feedback.",
      tip: "Switch between color themes to match your presentation style",
      icon: Users,
    },
  ];

  const sections = [
    { name: "Research Overview", description: "Define project goals, hypotheses, and research questions", icon: "🎯" },
    { name: "Participant Profile", description: "Document participant demographics and recruitment criteria", icon: "👥" },
    { name: "Research Plan", description: "Schedule sessions and create discussion guides", icon: "📅" },
    { name: "Data Collection", description: "Capture observations, quotes, and upload research files", icon: "📊" },
    { name: "Analysis & Insights", description: "Identify patterns and conduct framework analysis", icon: "💡" },
    { name: "Recommendations", description: "Create actionable recommendations with priority levels", icon: "🎯" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Hero Section */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="shadow-xl overflow-hidden" style={{ backgroundColor: colors.cardBg, borderColor: colors.primaryLight }}>
          <div 
            className="h-2"
            style={{ background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary}, ${colors.accent})` }}
          />
          <CardContent className="pt-8 pb-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4"
              style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})` }}
            >
              <BookOpen className="size-10 text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold mb-3" style={{ color: colors.text }}>
              Welcome to UX Research Template
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.textMuted }}>
              A comprehensive toolkit for documenting and visualizing user research insights in a structured, professional format.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ backgroundColor: colors.cardBg, borderColor: colors.primaryLight }}>
          <CardHeader 
            className="border-b"
            style={{ borderColor: colors.primaryLight, backgroundColor: colors.primaryLight }}
          >
            <CardTitle style={{ color: colors.primaryDark }} className="flex items-center gap-2">
              <Sparkles className="size-5" />
              Key Features
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-5 rounded-xl shadow-md transition-all"
                  style={{ backgroundColor: colors.secondaryLight }}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 shadow-md"
                      style={{ backgroundColor: feature.color }}
                    >
                      <feature.icon className="size-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: colors.text }}>{feature.title}</h4>
                      <p className="text-sm" style={{ color: colors.textMuted }}>{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Getting Started Steps */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ backgroundColor: colors.cardBg, borderColor: colors.primaryLight }}>
          <CardHeader 
            className="border-b"
            style={{ borderColor: colors.primaryLight, backgroundColor: colors.primaryLight }}
          >
            <CardTitle style={{ color: colors.primaryDark }}>Getting Started</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="p-6 rounded-xl shadow-md hover:shadow-lg transition-all relative overflow-hidden"
                  style={{ backgroundColor: colors.secondaryLight }}
                >
                  {/* Decorative gradient */}
                  <div 
                    className="absolute top-0 left-0 bottom-0 w-1"
                    style={{ background: `linear-gradient(180deg, ${colors.primary}, ${colors.accent})` }}
                  />

                  <div className="flex items-start gap-5">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-2xl shrink-0 shadow-lg"
                      style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`, color: 'white' }}
                    >
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon style={{ color: colors.primary }} className="size-5" />
                        <h4 className="font-semibold text-lg" style={{ color: colors.text }}>{step.title}</h4>
                      </div>
                      <p className="text-sm mb-3" style={{ color: colors.textMuted }}>{step.description}</p>
                      <div 
                        className="flex items-start gap-2 p-3 rounded-lg"
                        style={{ backgroundColor: `${colors.accent}10`, borderLeft: `3px solid ${colors.accent}` }}
                      >
                        <Sparkles style={{ color: colors.accent }} className="size-4 shrink-0 mt-0.5" />
                        <span className="text-xs" style={{ color: colors.text }}>
                          <strong style={{ color: colors.accent }}>Tip:</strong> {step.tip}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </CardContent>
        </Card>
      </motion.div>

      {/* Template Sections */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ backgroundColor: colors.cardBg, borderColor: colors.primaryLight }}>
          <CardHeader 
            className="border-b"
            style={{ borderColor: colors.primaryLight, backgroundColor: colors.primaryLight }}
          >
            <CardTitle style={{ color: colors.primaryDark }}>Template Sections</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {sections.map((section, index) => (
                <motion.div
                  key={section.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 * index }}
                  className="flex items-start gap-3 p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
                  style={{ backgroundColor: colors.secondaryLight }}
                >
                  <div className="text-2xl shrink-0">{section.icon}</div>
                  <div>
                    <div className="font-medium text-sm mb-1" style={{ color: colors.text }}>{section.name}</div>
                    <div className="text-xs" style={{ color: colors.textMuted }}>{section.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Pro Tips */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ backgroundColor: colors.cardBg, borderColor: colors.primaryLight }}>
          <CardHeader 
            className="border-b"
            style={{ borderColor: colors.primaryLight, backgroundColor: colors.primaryLight }}
          >
            <CardTitle style={{ color: colors.primaryDark }} className="flex items-center gap-2">
              <Zap className="size-5" />
              Pro Tips
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-3">
              {[
                "Use the + buttons throughout to add new items dynamically",
                "Hover over items to reveal edit and delete options",
                "Export your research by printing or saving as PDF",
                "Collaborate by sharing your unique template URL",
              ].map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                  className="flex items-start gap-3 p-3 rounded-lg"
                  style={{ backgroundColor: colors.secondaryLight }}
                >
                  <Check style={{ color: colors.primary }} className="size-5 shrink-0 mt-0.5" />
                  <span className="text-sm" style={{ color: colors.text }}>{tip}</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Support Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Card 
          className="shadow-lg overflow-hidden"
          style={{ backgroundColor: colors.cardBg, borderColor: colors.primaryLight }}
        >
          <div 
            className="p-8 text-center"
            style={{ background: `linear-gradient(135deg, ${colors.primaryLight}, ${colors.secondaryLight})` }}
          >
            <h3 className="text-xl font-semibold mb-3" style={{ color: colors.primaryDark }}>Need Help?</h3>
            <p className="mb-4 max-w-xl mx-auto" style={{ color: colors.text }}>
              This template is designed to be intuitive and flexible. Customize it to fit your research process and workflow.
            </p>
            <p className="text-sm" style={{ color: colors.textMuted }}>
              Template created by <strong style={{ color: colors.primary }}>Dr. Greeshma Sharma</strong>
            </p>
          </div>
        </Card>
      </motion.div>

      <Footer />
    </motion.div>
  );
}
