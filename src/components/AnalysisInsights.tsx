import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Lightbulb, Plus, X, TrendingUp, AlertTriangle, CheckCircle2, Target, Shield } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useTheme } from "./ThemeContext";
import { Footer } from "./Footer";

export function AnalysisInsights() {
  const { colors } = useTheme();
  const [insights, setInsights] = useState([
    {
      title: "Users abandon cart when costs appear late",
      summary: "67% of participants expressed frustration when shipping costs were only revealed at the final checkout step.",
      impact: "High",
    },
    {
      title: "Guest checkout is strongly preferred",
      summary: "8 out of 10 first-time buyers attempted to complete purchase without creating an account.",
      impact: "High",
    },
    {
      title: "Security indicators reduce hesitation",
      summary: "Participants who noticed security badges expressed higher confidence in completing the purchase.",
      impact: "Medium",
    },
  ]);

  const [themes, setThemes] = useState([
    { name: "Trust & Transparency", count: 12 },
    { name: "Ease of Use", count: 8 },
    { name: "Speed & Performance", count: 6 },
  ]);

  const addInsight = () => {
    setInsights([...insights, { title: "", summary: "", impact: "Medium" }]);
  };

  const removeInsight = (index: number) => {
    setInsights(insights.filter((_, i) => i !== index));
  };

  const updateInsight = (index: number, field: string, value: string) => {
    const newInsights = [...insights];
    newInsights[index] = { ...newInsights[index], [field]: value };
    setInsights(newInsights);
  };

  const getImpactBadge = (impact: string) => {
    const configs = {
      High: { emoji: "🔴", label: "High Impact", bg: "#fee2e2", text: "#991b1b" },
      Medium: { emoji: "🟡", label: "Medium Impact", bg: "#fef3c7", text: "#92400e" },
      Low: { emoji: "🟢", label: "Low Impact", bg: "#d1fae5", text: "#065f46" },
    };
    return configs[impact as keyof typeof configs] || configs.Medium;
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Stats Overview */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <Card className="shadow-md hover:shadow-lg transition-all" style={{ backgroundColor: colors.cardBg, borderLeft: `4px solid ${colors.primary}` }}>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm" style={{ color: colors.textMuted }}>Key Insights</p>
                <p className="text-3xl font-bold mt-1" style={{ color: colors.primary }}>{insights.length}</p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: colors.primaryLight }}>
                <Lightbulb style={{ color: colors.primary }} className="size-8" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-all" style={{ backgroundColor: colors.cardBg, borderLeft: `4px solid ${colors.secondary}` }}>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm" style={{ color: colors.textMuted }}>High Impact Issues</p>
                <p className="text-3xl font-bold mt-1" style={{ color: colors.secondary }}>
                  {insights.filter(i => i.impact === "High").length}
                </p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: colors.secondaryLight }}>
                <AlertTriangle style={{ color: colors.secondary }} className="size-8" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-all" style={{ backgroundColor: colors.cardBg, borderLeft: `4px solid ${colors.accent}` }}>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm" style={{ color: colors.textMuted }}>Themes Identified</p>
                <p className="text-3xl font-bold mt-1" style={{ color: colors.accent }}>{themes.length}</p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: `${colors.accent}20` }}>
                <TrendingUp style={{ color: colors.accent }} className="size-8" />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Key Insights */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ backgroundColor: colors.cardBg, borderColor: colors.primaryLight }}>
          <CardHeader 
            className="border-b flex flex-row items-center justify-between"
            style={{ borderColor: colors.primaryLight, backgroundColor: colors.primaryLight }}
          >
            <CardTitle style={{ color: colors.primaryDark }} className="flex items-center gap-2">
              <Lightbulb className="size-5" />
              Key Insights
            </CardTitle>
            <Button
              onClick={addInsight}
              size="sm"
              className="shadow-md"
              style={{ backgroundColor: colors.primary }}
            >
              <Plus className="size-4 mr-1" />
              Add Insight
            </Button>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <AnimatePresence>
              {insights.map((insight, index) => {
                const badge = getImpactBadge(insight.impact);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-5 rounded-xl shadow-md hover:shadow-lg transition-all group relative overflow-hidden"
                    style={{ backgroundColor: colors.secondaryLight }}
                  >
                    {/* Decorative element */}
                    <div 
                      className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-20"
                      style={{ background: colors.primary, transform: 'translate(30%, -30%)' }}
                    />

                    <div className="flex items-start justify-between mb-3 relative z-10">
                      <select
                        value={insight.impact}
                        onChange={(e) => updateInsight(index, "impact", e.target.value)}
                        className="text-xs px-3 py-1.5 rounded-lg border-0 font-medium shadow-sm"
                        style={{ backgroundColor: badge.bg, color: badge.text }}
                      >
                        <option value="High">🔴 High Impact</option>
                        <option value="Medium">🟡 Medium Impact</option>
                        <option value="Low">🟢 Low Impact</option>
                      </select>
                      <Button
                        onClick={() => removeInsight(index)}
                        variant="ghost"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: colors.textMuted }}
                      >
                        <X className="size-4" />
                      </Button>
                    </div>

                    <input
                      type="text"
                      value={insight.title}
                      onChange={(e) => updateInsight(index, "title", e.target.value)}
                      placeholder="Insight title..."
                      className="w-full font-semibold text-lg bg-transparent border-0 focus:outline-none mb-2 relative z-10"
                      style={{ color: colors.text }}
                    />

                    <Textarea
                      value={insight.summary}
                      onChange={(e) => updateInsight(index, "summary", e.target.value)}
                      placeholder="Describe the insight and supporting evidence..."
                      className="border-0 bg-white/50 p-3 resize-none min-h-20 text-sm rounded-lg relative z-10"
                      style={{ color: colors.textMuted }}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </CardContent>
        </Card>
      </motion.div>

      {/* Patterns & Themes */}
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
            <CardTitle style={{ color: colors.primaryDark }} className="flex items-center gap-2">
              <TrendingUp className="size-5" />
              Patterns & Themes
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {themes.map((theme, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-5 rounded-xl shadow-md transition-all text-center"
                  style={{ background: `linear-gradient(135deg, ${colors.primaryLight}, ${colors.secondaryLight})` }}
                >
                  <div className="text-4xl font-bold mb-2" style={{ color: colors.primary }}>{theme.count}</div>
                  <div className="text-sm font-medium" style={{ color: colors.text }}>{theme.name}</div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Analysis Frameworks */}
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
            <CardTitle style={{ color: colors.primaryDark }}>Analysis Frameworks</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <Tabs defaultValue="affinity" className="w-full">
              <TabsList className="grid w-full grid-cols-3 h-auto p-1" style={{ backgroundColor: colors.secondaryLight }}>
                <TabsTrigger value="affinity" className="py-2">Affinity Map</TabsTrigger>
                <TabsTrigger value="usability" className="py-2">Usability</TabsTrigger>
                <TabsTrigger value="accessibility" className="py-2">Accessibility</TabsTrigger>
              </TabsList>

              <TabsContent value="affinity" className="space-y-4 mt-6">
                <div className="p-4 rounded-lg" style={{ backgroundColor: colors.secondaryLight }}>
                  <p className="text-sm mb-2" style={{ color: colors.text }}>
                    Group related observations and identify patterns across participant feedback.
                  </p>
                </div>
                <Textarea
                  placeholder="Document your affinity mapping process and key clusters..."
                  className="border-2 min-h-32 resize-none"
                  style={{ borderColor: colors.border }}
                />
              </TabsContent>

              <TabsContent value="usability" className="space-y-4 mt-6">
                <div className="p-4 rounded-lg" style={{ backgroundColor: colors.secondaryLight }}>
                  <p className="text-sm mb-2" style={{ color: colors.text }}>
                    Evaluate against Nielsen's 10 Usability Heuristics or other frameworks.
                  </p>
                </div>
                
                <div className="space-y-3">
                  {[
                    "Visibility of system status",
                    "Match between system and real world",
                    "User control and freedom",
                    "Consistency and standards",
                    "Error prevention",
                  ].map((heuristic) => (
                    <div
                      key={heuristic}
                      className="flex items-start gap-3 p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
                      style={{ backgroundColor: colors.secondaryLight }}
                    >
                      <CheckCircle2 style={{ color: colors.primary }} className="size-5 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="text-sm font-medium mb-2" style={{ color: colors.text }}>{heuristic}</div>
                        <input
                          type="text"
                          placeholder="Add notes..."
                          className="w-full text-sm bg-white border-2 rounded px-3 py-2 focus:outline-none"
                          style={{ borderColor: colors.border, color: colors.textMuted }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="accessibility" className="space-y-4 mt-6">
                <div className="p-4 rounded-lg" style={{ backgroundColor: colors.secondaryLight }}>
                  <p className="text-sm mb-2" style={{ color: colors.text }}>
                    Assess WCAG 2.1 compliance and accessibility barriers.
                  </p>
                </div>
                
                <div className="space-y-3">
                  {[
                    { level: "A", name: "Perceivable - Text alternatives" },
                    { level: "A", name: "Operable - Keyboard accessible" },
                    { level: "AA", name: "Understandable - Readable content" },
                    { level: "AA", name: "Robust - Compatible with assistive tech" },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="flex items-start gap-3 p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
                      style={{ backgroundColor: colors.secondaryLight }}
                    >
                      <Badge 
                        className="shrink-0 text-xs font-bold"
                        style={{ backgroundColor: colors.accent, color: 'white' }}
                      >
                        {item.level}
                      </Badge>
                      <div className="flex-1">
                        <div className="text-sm font-medium mb-2" style={{ color: colors.text }}>{item.name}</div>
                        <input
                          type="text"
                          placeholder="Assessment notes..."
                          className="w-full text-sm bg-white border-2 rounded px-3 py-2 focus:outline-none"
                          style={{ borderColor: colors.border, color: colors.textMuted }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>

      {/* Summary */}
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
            <CardTitle style={{ color: colors.primaryDark }}>Summary & Next Steps</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <Textarea
              placeholder="Synthesize your findings and outline next steps for the team..."
              className="border-2 min-h-32 resize-none"
              style={{ borderColor: colors.border }}
            />
          </CardContent>
        </Card>
      </motion.div>

      <Footer />
    </motion.div>
  );
}
