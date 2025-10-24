import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { Plus, X, Upload, FileText, Video, Image as ImageIcon, BarChart, Quote, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useTheme } from "./ThemeContext";
import { Footer } from "./Footer";

export function DataCollection() {
  const { colors } = useTheme();
  const [observations, setObservations] = useState([
    { participant: "Sarah Chen", timestamp: "00:05:30", observation: "Hesitated at shipping cost section", severity: "High" },
    { participant: "Sarah Chen", timestamp: "00:08:15", observation: "Successfully completed form with autocomplete", severity: "Low" },
    { participant: "Marcus Johnson", timestamp: "00:03:20", observation: "Confused by payment options layout", severity: "Medium" },
  ]);

  const [quotes, setQuotes] = useState([
    { participant: "Sarah Chen", quote: "I wasn't expecting the shipping to be that expensive, it made me pause." },
    { participant: "Marcus Johnson", quote: "The payment buttons are a bit confusing - I wasn't sure which one to click." },
    { participant: "Emily Rodriguez", quote: "I really like how fast the form filled in my address automatically." },
  ]);

  const addObservation = () => {
    setObservations([...observations, { participant: "", timestamp: "", observation: "", severity: "Low" }]);
  };

  const removeObservation = (index: number) => {
    setObservations(observations.filter((_, i) => i !== index));
  };

  const addQuote = () => {
    setQuotes([...quotes, { participant: "", quote: "" }]);
  };

  const removeQuote = (index: number) => {
    setQuotes(quotes.filter((_, i) => i !== index));
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High": return "#ef4444";
      case "Medium": return "#f59e0b";
      default: return "#10b981";
    }
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
                <p className="text-sm" style={{ color: colors.textMuted }}>Total Observations</p>
                <p className="text-3xl font-bold mt-1" style={{ color: colors.primary }}>{observations.length}</p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: colors.primaryLight }}>
                <AlertCircle style={{ color: colors.primary }} className="size-8" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-all" style={{ backgroundColor: colors.cardBg, borderLeft: `4px solid ${colors.secondary}` }}>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm" style={{ color: colors.textMuted }}>User Quotes</p>
                <p className="text-3xl font-bold mt-1" style={{ color: colors.secondary }}>{quotes.length}</p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: colors.secondaryLight }}>
                <Quote style={{ color: colors.secondary }} className="size-8" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-all" style={{ backgroundColor: colors.cardBg, borderLeft: `4px solid ${colors.accent}` }}>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm" style={{ color: colors.textMuted }}>High Priority Issues</p>
                <p className="text-3xl font-bold mt-1" style={{ color: colors.accent }}>
                  {observations.filter(o => o.severity === "High").length}
                </p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: `${colors.accent}20` }}>
                <AlertCircle style={{ color: colors.accent }} className="size-8" />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Session Notes */}
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
              <FileText className="size-5" />
              Session Notes
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <Textarea
              placeholder="Take general notes during research sessions. Include context, environment, and initial impressions..."
              className="border-2 min-h-32 resize-none"
              style={{ borderColor: colors.border }}
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Observations Table */}
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
            <CardTitle style={{ color: colors.primaryDark }}>Observations & Behaviors</CardTitle>
            <Button
              onClick={addObservation}
              size="sm"
              className="shadow-md"
              style={{ backgroundColor: colors.primary }}
            >
              <Plus className="size-4 mr-1" />
              Add
            </Button>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="border-2 rounded-lg overflow-hidden" style={{ borderColor: colors.border }}>
              <Table>
                <TableHeader>
                  <TableRow style={{ backgroundColor: colors.primaryLight }}>
                    <TableHead className="font-semibold" style={{ color: colors.primaryDark }}>Participant</TableHead>
                    <TableHead className="font-semibold" style={{ color: colors.primaryDark }}>Timestamp</TableHead>
                    <TableHead className="font-semibold" style={{ color: colors.primaryDark }}>Observation</TableHead>
                    <TableHead className="font-semibold" style={{ color: colors.primaryDark }}>Severity</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <AnimatePresence>
                    {observations.map((obs, index) => (
                      <TableRow key={index} className="group hover:bg-opacity-50" style={{ backgroundColor: index % 2 === 0 ? colors.secondaryLight : 'transparent' }}>
                        <TableCell>
                          <input
                            type="text"
                            value={obs.participant}
                            onChange={(e) => {
                              const newObs = [...observations];
                              newObs[index].participant = e.target.value;
                              setObservations(newObs);
                            }}
                            placeholder="Name"
                            className="w-full bg-transparent border-0 focus:outline-none text-sm p-2"
                            style={{ color: colors.text }}
                          />
                        </TableCell>
                        <TableCell>
                          <input
                            type="text"
                            value={obs.timestamp}
                            onChange={(e) => {
                              const newObs = [...observations];
                              newObs[index].timestamp = e.target.value;
                              setObservations(newObs);
                            }}
                            placeholder="00:00:00"
                            className="w-full bg-transparent border-0 focus:outline-none text-sm p-2"
                            style={{ color: colors.text }}
                          />
                        </TableCell>
                        <TableCell>
                          <input
                            type="text"
                            value={obs.observation}
                            onChange={(e) => {
                              const newObs = [...observations];
                              newObs[index].observation = e.target.value;
                              setObservations(newObs);
                            }}
                            placeholder="What did you observe?"
                            className="w-full bg-transparent border-0 focus:outline-none text-sm p-2"
                            style={{ color: colors.text }}
                          />
                        </TableCell>
                        <TableCell>
                          <select
                            value={obs.severity}
                            onChange={(e) => {
                              const newObs = [...observations];
                              newObs[index].severity = e.target.value;
                              setObservations(newObs);
                            }}
                            className="w-full bg-transparent border-0 focus:outline-none text-sm p-2 font-medium rounded"
                            style={{ color: getSeverityColor(obs.severity) }}
                          >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                          </select>
                        </TableCell>
                        <TableCell>
                          <Button
                            onClick={() => removeObservation(index)}
                            variant="ghost"
                            size="sm"
                            className="opacity-0 group-hover:opacity-100 transition-opacity p-1 h-auto"
                            style={{ color: colors.textMuted }}
                          >
                            <X className="size-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </AnimatePresence>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* User Quotes */}
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
              <Quote className="size-5" />
              User Quotes & Feedback
            </CardTitle>
            <Button
              onClick={addQuote}
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
              {quotes.map((quote, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-5 rounded-xl shadow-md hover:shadow-lg transition-all group relative overflow-hidden"
                  style={{ backgroundColor: colors.secondaryLight }}
                >
                  {/* Quote Icon */}
                  <div 
                    className="absolute top-4 right-4 opacity-10"
                    style={{ fontSize: '4rem', color: colors.primary, lineHeight: 1 }}
                  >
                    "
                  </div>

                  <div className="flex gap-4 relative z-10">
                    <div 
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                      style={{ background: `linear-gradient(135deg, ${colors.accent}, ${colors.secondary})` }}
                    >
                      <Quote className="size-5 text-white" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <Textarea
                        value={quote.quote}
                        onChange={(e) => {
                          const newQuotes = [...quotes];
                          newQuotes[index].quote = e.target.value;
                          setQuotes(newQuotes);
                        }}
                        placeholder="Enter participant quote..."
                        className="border-0 bg-white/50 p-3 resize-none min-h-20 text-sm italic rounded-lg"
                        style={{ color: colors.text }}
                      />
                      <input
                        type="text"
                        value={quote.participant}
                        onChange={(e) => {
                          const newQuotes = [...quotes];
                          newQuotes[index].participant = e.target.value;
                          setQuotes(newQuotes);
                        }}
                        placeholder="— Participant name"
                        className="w-full bg-transparent border-0 focus:outline-none text-xs font-medium"
                        style={{ color: colors.textMuted }}
                      />
                    </div>
                    <Button
                      onClick={() => removeQuote(index)}
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity self-start"
                      style={{ color: colors.textMuted }}
                    >
                      <X className="size-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </CardContent>
        </Card>
      </motion.div>

      {/* Data Files & Recordings */}
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
            <CardTitle style={{ color: colors.primaryDark }}>Data Files & Recordings</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Video, label: "Videos", count: "8 files", color: colors.primary },
                { icon: FileText, label: "Transcripts", count: "8 files", color: colors.secondary },
                { icon: ImageIcon, label: "Screenshots", count: "24 files", color: colors.accent },
                { icon: BarChart, label: "Analytics", count: "3 reports", color: "#10b981" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-4 border-2 border-dashed rounded-xl hover:shadow-lg transition-all cursor-pointer text-center group"
                  style={{ borderColor: colors.border, backgroundColor: colors.secondaryLight }}
                >
                  <div className="p-3 rounded-lg mx-auto w-fit mb-3 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${item.color}20` }}>
                    <item.icon style={{ color: item.color }} className="size-8" />
                  </div>
                  <div className="font-medium text-sm" style={{ color: colors.text }}>{item.label}</div>
                  <div className="text-xs mt-1" style={{ color: colors.textMuted }}>{item.count}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="p-8 border-2 border-dashed rounded-xl hover:shadow-lg transition-all cursor-pointer text-center"
              style={{ borderColor: colors.primary, backgroundColor: colors.primaryLight }}
            >
              <Upload style={{ color: colors.primary }} className="size-12 mx-auto mb-4" />
              <p className="font-medium mb-1" style={{ color: colors.primaryDark }}>Upload Research Files</p>
              <p className="text-sm" style={{ color: colors.textMuted }}>Drag and drop or click to browse</p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      <Footer />
    </motion.div>
  );
}
