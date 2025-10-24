import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Target, Plus, X, ArrowRight, Flag, Zap, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useTheme } from "./ThemeContext";
import { Footer } from "./Footer";

export function Recommendations() {
  const { colors } = useTheme();
  const [recommendations, setRecommendations] = useState([
    {
      title: "Display shipping costs earlier in the flow",
      description: "Show estimated shipping on product pages and cart summary to eliminate surprises at checkout.",
      priority: "High",
      effort: "Medium",
    },
    {
      title: "Add guest checkout option",
      description: "Allow users to complete purchases without mandatory account creation to reduce friction.",
      priority: "High",
      effort: "Low",
    },
    {
      title: "Increase trust signal visibility",
      description: "Add security badges, SSL indicators, and customer testimonials prominently near payment fields.",
      priority: "Medium",
      effort: "Low",
    },
  ]);

  const addRecommendation = () => {
    setRecommendations([...recommendations, { title: "", description: "", priority: "Medium", effort: "Medium" }]);
  };

  const removeRecommendation = (index: number) => {
    setRecommendations(recommendations.filter((_, i) => i !== index));
  };

  const updateRecommendation = (index: number, field: string, value: string) => {
    const newRecs = [...recommendations];
    newRecs[index] = { ...newRecs[index], [field]: value };
    setRecommendations(newRecs);
  };

  const highPriorityCount = recommendations.filter(r => r.priority === "High").length;
  const mediumPriorityCount = recommendations.filter(r => r.priority === "Medium").length;
  const quickWins = recommendations.filter(r => r.priority === "High" && r.effort === "Low").length;

  const getPriorityBadge = (priority: string) => {
    const configs = {
      High: { emoji: "🔴", label: "High Priority", bg: "#fee2e2", text: "#991b1b" },
      Medium: { emoji: "🟡", label: "Medium Priority", bg: "#fef3c7", text: "#92400e" },
      Low: { emoji: "🟢", label: "Low Priority", bg: "#d1fae5", text: "#065f46" },
    };
    return configs[priority as keyof typeof configs] || configs.Medium;
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
                <p className="text-sm" style={{ color: colors.textMuted }}>Total Recommendations</p>
                <p className="text-3xl font-bold mt-1" style={{ color: colors.primary }}>{recommendations.length}</p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: colors.primaryLight }}>
                <Target style={{ color: colors.primary }} className="size-8" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-all" style={{ backgroundColor: colors.cardBg, borderLeft: `4px solid #ef4444` }}>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm" style={{ color: colors.textMuted }}>High Priority</p>
                <p className="text-3xl font-bold mt-1" style={{ color: "#ef4444" }}>{highPriorityCount}</p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: "#fee2e2" }}>
                <Flag style={{ color: "#ef4444" }} className="size-8" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-all" style={{ backgroundColor: colors.cardBg, borderLeft: `4px solid #10b981` }}>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm" style={{ color: colors.textMuted }}>Quick Wins</p>
                <p className="text-3xl font-bold mt-1" style={{ color: "#10b981" }}>{quickWins}</p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: "#d1fae5" }}>
                <Zap style={{ color: "#10b981" }} className="size-8" />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Recommendations */}
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
              <Target className="size-5" />
              Design Recommendations
            </CardTitle>
            <Button
              onClick={addRecommendation}
              size="sm"
              className="shadow-md"
              style={{ backgroundColor: colors.primary }}
            >
              <Plus className="size-4 mr-1" />
              Add
            </Button>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <AnimatePresence>
              {recommendations.map((rec, index) => {
                const priorityBadge = getPriorityBadge(rec.priority);
                const isQuickWin = rec.priority === "High" && rec.effort === "Low";
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-5 rounded-xl shadow-md hover:shadow-lg transition-all group relative overflow-hidden"
                    style={{ backgroundColor: colors.secondaryLight }}
                  >
                    {/* Quick Win Badge */}
                    {isQuickWin && (
                      <div 
                        className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1"
                        style={{ backgroundColor: "#10b981", color: "white" }}
                      >
                        <Zap className="size-3" />
                        Quick Win
                      </div>
                    )}

                    {/* Decorative gradient */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{ background: `linear-gradient(90deg, ${priorityBadge.text}, ${colors.primary})` }}
                    />

                    <div className="flex items-start justify-between mb-4 mt-2">
                      <div className="flex gap-2">
                        <select
                          value={rec.priority}
                          onChange={(e) => updateRecommendation(index, "priority", e.target.value)}
                          className="text-xs px-3 py-1.5 rounded-lg border-0 font-medium shadow-sm"
                          style={{ backgroundColor: priorityBadge.bg, color: priorityBadge.text }}
                        >
                          <option value="High">🔴 High Priority</option>
                          <option value="Medium">🟡 Medium Priority</option>
                          <option value="Low">🟢 Low Priority</option>
                        </select>
                        <select
                          value={rec.effort}
                          onChange={(e) => updateRecommendation(index, "effort", e.target.value)}
                          className="text-xs px-3 py-1.5 rounded-lg border-2 font-medium"
                          style={{ borderColor: colors.border, color: colors.text }}
                        >
                          <option value="High">High Effort</option>
                          <option value="Medium">Medium Effort</option>
                          <option value="Low">Low Effort</option>
                        </select>
                      </div>
                      <Button
                        onClick={() => removeRecommendation(index)}
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
                      value={rec.title}
                      onChange={(e) => updateRecommendation(index, "title", e.target.value)}
                      placeholder="Recommendation title..."
                      className="w-full font-semibold text-lg bg-transparent border-0 focus:outline-none mb-2"
                      style={{ color: colors.text }}
                    />

                    <Textarea
                      value={rec.description}
                      onChange={(e) => updateRecommendation(index, "description", e.target.value)}
                      placeholder="Describe the recommendation and expected impact..."
                      className="border-0 bg-white/50 p-3 resize-none min-h-20 text-sm rounded-lg"
                      style={{ color: colors.textMuted }}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </CardContent>
        </Card>
      </motion.div>

      {/* Priority Matrix */}
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
            <CardTitle style={{ color: colors.primaryDark }}>Priority Overview</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                className="p-5 rounded-xl shadow-md"
                style={{ backgroundColor: "#fee2e2", borderLeft: "4px solid #ef4444" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Flag className="size-5" style={{ color: "#ef4444" }} />
                  <span className="font-semibold" style={{ color: "#7f1d1d" }}>High Priority</span>
                </div>
                <div className="text-4xl font-bold mb-1" style={{ color: "#ef4444" }}>{highPriorityCount}</div>
                <div className="text-xs" style={{ color: "#991b1b" }}>Critical improvements</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                className="p-5 rounded-xl shadow-md"
                style={{ backgroundColor: "#fef3c7", borderLeft: "4px solid #f59e0b" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Flag className="size-5" style={{ color: "#f59e0b" }} />
                  <span className="font-semibold" style={{ color: "#78350f" }}>Medium Priority</span>
                </div>
                <div className="text-4xl font-bold mb-1" style={{ color: "#f59e0b" }}>{mediumPriorityCount}</div>
                <div className="text-xs" style={{ color: "#92400e" }}>Important enhancements</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                className="p-5 rounded-xl shadow-md"
                style={{ backgroundColor: "#d1fae5", borderLeft: "4px solid #10b981" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="size-5" style={{ color: "#10b981" }} />
                  <span className="font-semibold" style={{ color: "#064e3b" }}>Quick Wins</span>
                </div>
                <div className="text-4xl font-bold mb-1" style={{ color: "#10b981" }}>{quickWins}</div>
                <div className="text-xs" style={{ color: "#065f46" }}>High impact, low effort</div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Implementation Roadmap */}
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
            <CardTitle style={{ color: colors.primaryDark }} className="flex items-center gap-2">
              <TrendingUp className="size-5" />
              Implementation Roadmap
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            {["Short-term (0-3 months)", "Medium-term (3-6 months)", "Long-term (6+ months)"].map((timeframe, idx) => (
              <div
                key={timeframe}
                className="p-5 rounded-xl shadow-sm hover:shadow-md transition-all"
                style={{ backgroundColor: colors.secondaryLight }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-bold shadow-md"
                    style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`, color: 'white' }}
                  >
                    {idx + 1}
                  </div>
                  <span className="font-semibold text-lg" style={{ color: colors.text }}>{timeframe}</span>
                </div>
                <Textarea
                  placeholder="List recommendations and initiatives for this timeframe..."
                  className="border-2 resize-none min-h-24"
                  style={{ borderColor: colors.border }}
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      {/* Success Metrics */}
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
            <CardTitle style={{ color: colors.primaryDark }}>Success Metrics</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <Textarea
              placeholder="Define how you'll measure the success of these recommendations (e.g., conversion rate increase, reduced support tickets, improved NPS)..."
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
