import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Calendar, User, Target, HelpCircle, Users, Plus, X } from "lucide-react";
import { useTheme } from "./ThemeContext";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Footer } from "./Footer";

export function ResearchOverview() {
  const { colors } = useTheme();
  const [hypotheses, setHypotheses] = useState([
    "Users abandon cart due to unexpected shipping costs",
    "Complex form fields cause friction and errors",
    "Lack of trust signals reduces completion rates"
  ]);
  const [questions, setQuestions] = useState([
    "What information do users expect to see during checkout?",
    "At what point do users feel hesitation or doubt?",
    "What would increase user confidence to complete purchase?"
  ]);
  const [methods, setMethods] = useState(["User Interviews", "Usability Testing", "Analytics Review", "Survey", "Heatmap Analysis"]);

  const addHypothesis = () => setHypotheses([...hypotheses, ""]);
  const removeHypothesis = (index: number) => setHypotheses(hypotheses.filter((_, i) => i !== index));
  const addQuestion = () => setQuestions([...questions, ""]);
  const removeQuestion = (index: number) => setQuestions(questions.filter((_, i) => i !== index));
  const toggleMethod = (method: string) => {
    if (methods.includes(method)) {
      setMethods(methods.filter(m => m !== method));
    } else {
      setMethods([...methods, method]);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Title Block */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <Card 
          className="shadow-lg hover:shadow-xl transition-shadow"
          style={{ backgroundColor: colors.cardBg, borderColor: colors.primaryLight }}
        >
          <CardHeader 
            className="border-b"
            style={{ borderColor: colors.primaryLight, backgroundColor: colors.primaryLight }}
          >
            <CardTitle style={{ color: colors.primaryDark }} className="flex items-center gap-2">
              <Target className="size-5" />
              Project Information
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div>
              <label className="block text-sm mb-2 font-medium" style={{ color: colors.text }}>Project Title</label>
              <Input 
                placeholder="e.g., E-commerce Checkout Flow Optimization"
                className="border-2 transition-all focus:ring-2"
                style={{ borderColor: colors.border }}
              />
            </div>
            
            <div>
              <label className="block text-sm mb-2 font-medium" style={{ color: colors.text }}>Research Objective</label>
              <Textarea 
                placeholder="What do you want to learn? What problem are you solving?"
                className="border-2 min-h-24 resize-none transition-all focus:ring-2"
                style={{ borderColor: colors.border }}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Key Details Row */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <Card className="shadow-md hover:shadow-lg transition-shadow" style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg" style={{ backgroundColor: colors.primaryLight }}>
                <Calendar style={{ color: colors.primary }} className="size-5" />
              </div>
              <label className="font-medium" style={{ color: colors.text }}>Timeline</label>
            </div>
            <Input 
              placeholder="e.g., 2 weeks"
              className="border-2"
              style={{ borderColor: colors.border }}
            />
          </CardContent>
        </Card>
        
        <Card className="shadow-md hover:shadow-lg transition-shadow" style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg" style={{ backgroundColor: colors.primaryLight }}>
                <User style={{ color: colors.primary }} className="size-5" />
              </div>
              <label className="font-medium" style={{ color: colors.text }}>Research Lead</label>
            </div>
            <Input 
              placeholder="Your name"
              className="border-2"
              style={{ borderColor: colors.border }}
            />
          </CardContent>
        </Card>
        
        <Card className="shadow-md hover:shadow-lg transition-shadow" style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg" style={{ backgroundColor: colors.primaryLight }}>
                <Target style={{ color: colors.primary }} className="size-5" />
              </div>
              <label className="font-medium" style={{ color: colors.text }}>Product/Feature</label>
            </div>
            <Input 
              placeholder="e.g., Checkout flow"
              className="border-2"
              style={{ borderColor: colors.border }}
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Research Hypotheses */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ backgroundColor: colors.cardBg, borderColor: colors.primaryLight }}>
          <CardHeader 
            className="border-b flex flex-row items-center justify-between"
            style={{ borderColor: colors.primaryLight, backgroundColor: colors.primaryLight }}
          >
            <CardTitle style={{ color: colors.primaryDark }}>Research Hypotheses</CardTitle>
            <Button
              onClick={addHypothesis}
              size="sm"
              className="shadow-md"
              style={{ backgroundColor: colors.primary }}
            >
              <Plus className="size-4 mr-1" />
              Add
            </Button>
          </CardHeader>
          <CardContent className="pt-6 space-y-3">
            <AnimatePresence>
              {hypotheses.map((hypothesis, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="flex gap-3 items-start p-3 rounded-lg transition-all"
                  style={{ backgroundColor: colors.secondaryLight }}
                >
                  <div 
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium"
                    style={{ backgroundColor: colors.primary, color: 'white' }}
                  >
                    {index + 1}
                  </div>
                  <Input
                    value={hypothesis}
                    onChange={(e) => {
                      const newHypotheses = [...hypotheses];
                      newHypotheses[index] = e.target.value;
                      setHypotheses(newHypotheses);
                    }}
                    placeholder="State your hypothesis..."
                    className="flex-1 border-2"
                    style={{ borderColor: colors.border }}
                  />
                  <Button
                    onClick={() => removeHypothesis(index)}
                    variant="ghost"
                    size="sm"
                    style={{ color: colors.textMuted }}
                  >
                    <X className="size-4" />
                  </Button>
                </motion.div>
              ))}
            </AnimatePresence>
          </CardContent>
        </Card>
      </motion.div>

      {/* Research Questions */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ backgroundColor: colors.cardBg, borderColor: colors.primaryLight }}>
          <CardHeader 
            className="border-b flex flex-row items-center justify-between"
            style={{ borderColor: colors.primaryLight, backgroundColor: colors.primaryLight }}
          >
            <CardTitle style={{ color: colors.primaryDark }} className="flex items-center gap-2">
              <HelpCircle className="size-5" />
              Research Questions
            </CardTitle>
            <Button
              onClick={addQuestion}
              size="sm"
              className="shadow-md"
              style={{ backgroundColor: colors.primary }}
            >
              <Plus className="size-4 mr-1" />
              Add
            </Button>
          </CardHeader>
          <CardContent className="pt-6 space-y-3">
            <AnimatePresence>
              {questions.map((question, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="flex gap-3 items-start p-3 rounded-lg transition-all"
                  style={{ backgroundColor: colors.secondaryLight }}
                >
                  <div 
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium"
                    style={{ backgroundColor: colors.accent, color: 'white' }}
                  >
                    Q{index + 1}
                  </div>
                  <Input
                    value={question}
                    onChange={(e) => {
                      const newQuestions = [...questions];
                      newQuestions[index] = e.target.value;
                      setQuestions(newQuestions);
                    }}
                    placeholder="What do you want to learn?"
                    className="flex-1 border-2"
                    style={{ borderColor: colors.border }}
                  />
                  <Button
                    onClick={() => removeQuestion(index)}
                    variant="ghost"
                    size="sm"
                    style={{ color: colors.textMuted }}
                  >
                    <X className="size-4" />
                  </Button>
                </motion.div>
              ))}
            </AnimatePresence>
          </CardContent>
        </Card>
      </motion.div>

      {/* Research Methods */}
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
            <CardTitle style={{ color: colors.primaryDark }}>Research Methods</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-2">
              {["User Interviews", "Usability Testing", "Analytics Review", "Survey", "Heatmap Analysis", "A/B Testing", "Card Sorting", "Tree Testing"].map((method) => (
                <Badge
                  key={method}
                  variant={methods.includes(method) ? "default" : "outline"}
                  className="cursor-pointer hover:scale-105 transition-transform px-3 py-1.5"
                  style={methods.includes(method) ? { backgroundColor: colors.primary, color: 'white' } : { borderColor: colors.border, color: colors.text }}
                  onClick={() => toggleMethod(method)}
                >
                  {method}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Background/Context */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ backgroundColor: colors.cardBg, borderColor: colors.primaryLight }}>
          <CardHeader 
            className="border-b"
            style={{ borderColor: colors.primaryLight, backgroundColor: colors.primaryLight }}
          >
            <CardTitle style={{ color: colors.primaryDark }}>Background & Context</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <Textarea
              placeholder="Provide context about the product, current challenges, or why this research is needed..."
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
