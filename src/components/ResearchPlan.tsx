import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Calendar, Clock, MapPin, Plus, X, FileText, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useTheme } from "./ThemeContext";
import { Footer } from "./Footer";

export function ResearchPlan() {
  const { colors } = useTheme();
  const [sessions, setSessions] = useState([
    { date: "2025-01-15", time: "10:00 AM", participant: "Sarah Chen", method: "Interview" },
    { date: "2025-01-15", time: "2:00 PM", participant: "Marcus Johnson", method: "Usability Test" },
    { date: "2025-01-16", time: "10:00 AM", participant: "Emily Rodriguez", method: "Interview" },
  ]);

  const [tasks, setTasks] = useState([
    { task: "Prepare interview script", completed: true },
    { task: "Set up recording equipment", completed: true },
    { task: "Send confirmation emails to participants", completed: false },
    { task: "Prepare consent forms", completed: false },
  ]);

  const addSession = () => {
    setSessions([...sessions, { date: "", time: "", participant: "", method: "" }]);
  };

  const removeSession = (index: number) => {
    setSessions(sessions.filter((_, i) => i !== index));
  };

  const updateSession = (index: number, field: string, value: string) => {
    const newSessions = [...sessions];
    newSessions[index] = { ...newSessions[index], [field]: value };
    setSessions(newSessions);
  };

  const addTask = () => setTasks([...tasks, { task: "", completed: false }]);
  const removeTask = (index: number) => setTasks(tasks.filter((_, i) => i !== index));
  const toggleTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const completedTasks = tasks.filter(t => t.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Progress Stats */}
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
                <p className="text-sm" style={{ color: colors.textMuted }}>Total Sessions</p>
                <p className="text-3xl font-bold mt-1" style={{ color: colors.primary }}>{sessions.length}</p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: colors.primaryLight }}>
                <Calendar style={{ color: colors.primary }} className="size-8" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-all" style={{ backgroundColor: colors.cardBg, borderLeft: `4px solid ${colors.secondary}` }}>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm" style={{ color: colors.textMuted }}>Tasks Completed</p>
                <p className="text-3xl font-bold mt-1" style={{ color: colors.secondary }}>{completedTasks}/{totalTasks}</p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: colors.secondaryLight }}>
                <CheckCircle2 style={{ color: colors.secondary }} className="size-8" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-all" style={{ backgroundColor: colors.cardBg, borderLeft: `4px solid ${colors.accent}` }}>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm" style={{ color: colors.textMuted }}>Progress</p>
                <p className="text-3xl font-bold mt-1" style={{ color: colors.accent }}>{Math.round(progress)}%</p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: `${colors.accent}20` }}>
                <FileText style={{ color: colors.accent }} className="size-8" />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Research Schedule */}
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
              <Calendar className="size-5" />
              Research Schedule
            </CardTitle>
            <Button
              onClick={addSession}
              size="sm"
              className="shadow-md"
              style={{ backgroundColor: colors.primary }}
            >
              <Plus className="size-4 mr-1" />
              Add Session
            </Button>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <AnimatePresence>
              {sessions.map((session, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-5 rounded-xl shadow-md hover:shadow-lg transition-all group relative overflow-hidden"
                  style={{ backgroundColor: colors.secondaryLight }}
                >
                  {/* Decorative gradient */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})` }}
                  />

                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center font-bold shadow-md"
                        style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`, color: 'white' }}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-xs font-medium" style={{ color: colors.textMuted }}>Session {index + 1}</p>
                      </div>
                    </div>
                    <Button
                      onClick={() => removeSession(index)}
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: colors.textMuted }}
                    >
                      <X className="size-4" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs mb-1.5 font-medium flex items-center gap-1.5" style={{ color: colors.text }}>
                        <Calendar className="size-3" />
                        Date
                      </label>
                      <Input
                        type="date"
                        value={session.date}
                        onChange={(e) => updateSession(index, "date", e.target.value)}
                        className="border-2 bg-white"
                        style={{ borderColor: colors.border }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs mb-1.5 font-medium flex items-center gap-1.5" style={{ color: colors.text }}>
                        <Clock className="size-3" />
                        Time
                      </label>
                      <Input
                        type="time"
                        value={session.time}
                        onChange={(e) => updateSession(index, "time", e.target.value)}
                        className="border-2 bg-white"
                        style={{ borderColor: colors.border }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs mb-1.5 font-medium" style={{ color: colors.text }}>Participant</label>
                      <Input
                        value={session.participant}
                        onChange={(e) => updateSession(index, "participant", e.target.value)}
                        placeholder="Participant name"
                        className="border-2 bg-white"
                        style={{ borderColor: colors.border }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs mb-1.5 font-medium" style={{ color: colors.text }}>Method</label>
                      <Input
                        value={session.method}
                        onChange={(e) => updateSession(index, "method", e.target.value)}
                        placeholder="e.g., Interview"
                        className="border-2 bg-white"
                        style={{ borderColor: colors.border }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </CardContent>
        </Card>
      </motion.div>

      {/* Location & Checklist Grid */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* Location & Setup */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ backgroundColor: colors.cardBg, borderColor: colors.primaryLight }}>
          <CardHeader 
            className="border-b"
            style={{ borderColor: colors.primaryLight, backgroundColor: colors.primaryLight }}
          >
            <CardTitle style={{ color: colors.primaryDark }} className="flex items-center gap-2">
              <MapPin className="size-5" />
              Location & Setup
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div>
              <label className="block text-sm mb-2 font-medium" style={{ color: colors.text }}>Location</label>
              <Input
                placeholder="e.g., Remote (Zoom), Office Room 301"
                className="border-2"
                style={{ borderColor: colors.border }}
              />
            </div>

            <div>
              <label className="block text-sm mb-2 font-medium" style={{ color: colors.text }}>Equipment & Tools</label>
              <Textarea
                placeholder="List equipment, software, and tools needed..."
                className="border-2 min-h-32 resize-none"
                style={{ borderColor: colors.border }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Preparation Checklist */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ backgroundColor: colors.cardBg, borderColor: colors.primaryLight }}>
          <CardHeader 
            className="border-b flex flex-row items-center justify-between"
            style={{ borderColor: colors.primaryLight, backgroundColor: colors.primaryLight }}
          >
            <CardTitle style={{ color: colors.primaryDark }}>Preparation Checklist</CardTitle>
            <Button
              onClick={addTask}
              size="sm"
              className="shadow-md"
              style={{ backgroundColor: colors.primary }}
            >
              <Plus className="size-4 mr-1" />
              Add
            </Button>
          </CardHeader>
          <CardContent className="pt-6 space-y-2">
            {/* Progress Bar */}
            <div className="mb-4 p-3 rounded-lg" style={{ backgroundColor: colors.secondaryLight }}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium" style={{ color: colors.text }}>Overall Progress</span>
                <span className="text-xs font-bold" style={{ color: colors.primary }}>{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-white rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})` }}
                />
              </div>
            </div>

            <AnimatePresence>
              {tasks.map((task, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="flex items-center gap-3 p-3 rounded-lg group hover:shadow-md transition-all"
                  style={{ backgroundColor: task.completed ? colors.primaryLight : colors.secondaryLight }}
                >
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => toggleTask(index)}
                    className="shrink-0"
                  />
                  <Input
                    value={task.task}
                    onChange={(e) => {
                      const newTasks = [...tasks];
                      newTasks[index].task = e.target.value;
                      setTasks(newTasks);
                    }}
                    placeholder="Task description..."
                    className={`flex-1 border-0 bg-transparent ${task.completed ? 'line-through opacity-60' : ''}`}
                    style={{ color: colors.text }}
                  />
                  <Button
                    onClick={() => removeTask(index)}
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
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

      {/* Discussion Guide */}
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
              <FileText className="size-5" />
              Discussion Guide / Script
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <Textarea
              placeholder="Outline your interview script, usability test scenarios, or discussion guide here..."
              className="border-2 min-h-40 resize-none"
              style={{ borderColor: colors.border }}
            />
          </CardContent>
        </Card>
      </motion.div>

      <Footer />
    </motion.div>
  );
}
