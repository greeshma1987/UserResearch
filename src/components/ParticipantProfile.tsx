import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Users, Plus, X, User, Award, Clock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useTheme } from "./ThemeContext";
import { Footer } from "./Footer";

export function ParticipantProfile() {
  const { colors } = useTheme();
  const [participants, setParticipants] = useState([
    { name: "Sarah Chen", age: "32", role: "Product Manager", experience: "Advanced user" },
    { name: "Marcus Johnson", age: "28", role: "Designer", experience: "Intermediate user" },
    { name: "Emily Rodriguez", age: "45", role: "Business Analyst", experience: "Beginner user" },
  ]);

  const [criteria, setCriteria] = useState([
    "Has made at least 3 online purchases in the last month",
    "Uses mobile devices for shopping",
    "Age range: 25-50",
  ]);

  const addParticipant = () => {
    setParticipants([...participants, { name: "", age: "", role: "", experience: "" }]);
  };

  const removeParticipant = (index: number) => {
    setParticipants(participants.filter((_, i) => i !== index));
  };

  const updateParticipant = (index: number, field: string, value: string) => {
    const newParticipants = [...participants];
    newParticipants[index] = { ...newParticipants[index], [field]: value };
    setParticipants(newParticipants);
  };

  const addCriteria = () => setCriteria([...criteria, ""]);
  const removeCriteria = (index: number) => setCriteria(criteria.filter((_, i) => i !== index));

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
                <p className="text-sm" style={{ color: colors.textMuted }}>Total Participants</p>
                <p className="text-3xl font-bold mt-1" style={{ color: colors.primary }}>{participants.length}</p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: colors.primaryLight }}>
                <Users style={{ color: colors.primary }} className="size-8" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-all" style={{ backgroundColor: colors.cardBg, borderLeft: `4px solid ${colors.secondary}` }}>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm" style={{ color: colors.textMuted }}>Recruitment Criteria</p>
                <p className="text-3xl font-bold mt-1" style={{ color: colors.secondary }}>{criteria.length}</p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: colors.secondaryLight }}>
                <Award style={{ color: colors.secondary }} className="size-8" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-all" style={{ backgroundColor: colors.cardBg, borderLeft: `4px solid ${colors.accent}` }}>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm" style={{ color: colors.textMuted }}>Est. Time Per Session</p>
                <p className="text-3xl font-bold mt-1" style={{ color: colors.accent }}>60m</p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: `${colors.accent}20` }}>
                <Clock style={{ color: colors.accent }} className="size-8" />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Participant Profiles */}
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
              <Users className="size-5" />
              Target Participants
            </CardTitle>
            <Button
              onClick={addParticipant}
              size="sm"
              className="shadow-md"
              style={{ backgroundColor: colors.primary }}
            >
              <Plus className="size-4 mr-1" />
              Add Participant
            </Button>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <AnimatePresence>
              {participants.map((participant, index) => (
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
                    style={{ background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})` }}
                  />

                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center shadow-md"
                        style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}
                      >
                        <User className="size-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-medium" style={{ color: colors.textMuted }}>Participant {index + 1}</p>
                        <p className="text-sm font-semibold" style={{ color: colors.text }}>
                          {participant.name || "Unnamed"}
                        </p>
                      </div>
                    </div>
                    <Button
                      onClick={() => removeParticipant(index)}
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
                      <label className="block text-xs mb-1.5 font-medium" style={{ color: colors.text }}>Full Name</label>
                      <Input
                        value={participant.name}
                        onChange={(e) => updateParticipant(index, "name", e.target.value)}
                        placeholder="Enter name"
                        className="border-2 bg-white"
                        style={{ borderColor: colors.border }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs mb-1.5 font-medium" style={{ color: colors.text }}>Age</label>
                      <Input
                        value={participant.age}
                        onChange={(e) => updateParticipant(index, "age", e.target.value)}
                        placeholder="Age"
                        className="border-2 bg-white"
                        style={{ borderColor: colors.border }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs mb-1.5 font-medium" style={{ color: colors.text }}>Role/Occupation</label>
                      <Input
                        value={participant.role}
                        onChange={(e) => updateParticipant(index, "role", e.target.value)}
                        placeholder="Job title"
                        className="border-2 bg-white"
                        style={{ borderColor: colors.border }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs mb-1.5 font-medium" style={{ color: colors.text }}>Experience Level</label>
                      <Input
                        value={participant.experience}
                        onChange={(e) => updateParticipant(index, "experience", e.target.value)}
                        placeholder="e.g., Beginner"
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

      {/* Recruitment Criteria */}
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
            <CardTitle style={{ color: colors.primaryDark }}>Recruitment Criteria</CardTitle>
            <Button
              onClick={addCriteria}
              size="sm"
              className="shadow-md"
              style={{ backgroundColor: colors.primary }}
            >
              <Plus className="size-4 mr-1" />
              Add Criteria
            </Button>
          </CardHeader>
          <CardContent className="pt-6 space-y-3">
            <AnimatePresence>
              {criteria.map((criterion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="flex gap-3 items-start p-3 rounded-lg"
                  style={{ backgroundColor: colors.secondaryLight }}
                >
                  <div 
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: colors.accent, color: 'white' }}
                  >
                    ✓
                  </div>
                  <Input
                    value={criterion}
                    onChange={(e) => {
                      const newCriteria = [...criteria];
                      newCriteria[index] = e.target.value;
                      setCriteria(newCriteria);
                    }}
                    placeholder="Enter a recruitment criterion..."
                    className="flex-1 border-2 bg-white"
                    style={{ borderColor: colors.border }}
                  />
                  <Button
                    onClick={() => removeCriteria(index)}
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

      {/* Sample Size & Compensation */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ backgroundColor: colors.cardBg, borderColor: colors.primaryLight }}>
          <CardHeader 
            className="border-b"
            style={{ borderColor: colors.primaryLight, backgroundColor: colors.primaryLight }}
          >
            <CardTitle style={{ color: colors.primaryDark }}>Sample Size & Distribution</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div>
              <label className="block text-sm mb-2 font-medium" style={{ color: colors.text }}>Total Participants</label>
              <Input
                placeholder="e.g., 8"
                className="border-2"
                style={{ borderColor: colors.border }}
              />
            </div>
            <div>
              <label className="block text-sm mb-2 font-medium" style={{ color: colors.text }}>Sessions per Participant</label>
              <Input
                placeholder="e.g., 1"
                className="border-2"
                style={{ borderColor: colors.border }}
              />
            </div>
            <div>
              <label className="block text-sm mb-2 font-medium" style={{ color: colors.text }}>Session Duration</label>
              <Input
                placeholder="e.g., 60 minutes"
                className="border-2"
                style={{ borderColor: colors.border }}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow" style={{ backgroundColor: colors.cardBg, borderColor: colors.primaryLight }}>
          <CardHeader 
            className="border-b"
            style={{ borderColor: colors.primaryLight, backgroundColor: colors.primaryLight }}
          >
            <CardTitle style={{ color: colors.primaryDark }}>Compensation & Incentives</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <Textarea
              placeholder="Describe compensation for participants (e.g., gift cards, monetary compensation, product discounts)..."
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
