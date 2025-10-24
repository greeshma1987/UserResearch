import { useState } from "react";
import { motion } from "motion/react";
import { FileText, Users, Calendar, Lightbulb, Target, BookOpen, Palette, Menu, Info, LogOut } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { ResearchOverview } from "./components/ResearchOverview";
import { ParticipantProfile } from "./components/ParticipantProfile";
import { ResearchPlan } from "./components/ResearchPlan";
import { DataCollection } from "./components/DataCollection";
import { AnalysisInsights } from "./components/AnalysisInsights";
import { Recommendations } from "./components/Recommendations";
import { HowToUse } from "./components/HowToUse";
import { ThemeProvider, useTheme, type Theme } from "./components/ThemeContext";
import { AuthProvider, useAuth } from "./components/AuthContext";
import { AuthPage } from "./components/AuthPage";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "./components/ui/sheet";
import { Button } from "./components/ui/button";

function AppContent() {
  const [activeTab, setActiveTab] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme, colors } = useTheme();
  const { user, signOut, isLoading } = useAuth();

  const themes: { id: Theme; name: string; preview: string }[] = [
    { id: "indigo", name: "Professional", preview: "bg-gradient-to-br from-indigo-500 to-purple-500" },
    { id: "warm", name: "Warm", preview: "bg-gradient-to-br from-amber-500 to-orange-500" },
    { id: "cool", name: "Cool", preview: "bg-gradient-to-br from-teal-500 to-cyan-500" },
  ];

  const tabs = [
    { value: "overview", icon: BookOpen, label: "Overview" },
    { value: "participants", icon: Users, label: "Participants" },
    { value: "plan", icon: Calendar, label: "Plan" },
    { value: "data", icon: FileText, label: "Data" },
    { value: "insights", icon: Lightbulb, label: "Insights" },
    { value: "recommendations", icon: Target, label: "Recommendations" },
    { value: "guide", icon: Info, label: "How to Use" },
  ];

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setMobileMenuOpen(false);
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Show auth page if not logged in
  if (!user) {
    return <AuthPage />;
  }

  return (
    <div 
      className="min-h-screen transition-colors duration-500"
      style={{ background: `linear-gradient(to bottom right, ${colors.background}, ${colors.secondaryLight})` }}
    >
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 sm:mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6 mb-4">
            <div className="w-full lg:flex-1">
              <motion.h1 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                style={{ 
                  backgroundImage: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontSize: 'clamp(1.5rem, 4vw, 3.5rem)',
                  fontWeight: '800',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.1'
                }}
                className="mb-2 sm:mb-3"
              >
                🔬 UX Research Template
              </motion.h1>
              <motion.p 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{ color: colors.textMuted, fontSize: 'clamp(0.875rem, 2vw, 1.125rem)' }}
                className="max-w-2xl"
              >
                A comprehensive toolkit for documenting and visualizing user insights
              </motion.p>
            </div>
            
            {/* Theme Switcher & User */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg shadow-sm">
                <Palette style={{ color: colors.primary }} className="size-4 sm:size-5 shrink-0" />
                <div className="flex gap-1.5 sm:gap-2">
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTheme(t.id)}
                      className="group relative"
                      title={t.name}
                    >
                      <div 
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg ${t.preview} transition-all duration-300 ${ 
                          theme === t.id 
                            ? 'ring-2 sm:ring-4 ring-offset-1 sm:ring-offset-2 ring-offset-white scale-110' 
                            : 'hover:scale-105 opacity-70 hover:opacity-100'
                        }`}
                        style={theme === t.id ? { boxShadow: `0 0 0 2px ${colors.primary}` } : {}}
                      />
                      <span 
                        className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block"
                        style={{ color: colors.textMuted }}
                      >
                        {t.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* User Profile */}
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white text-sm">👤</span>
                  </div>
                  <span className="text-sm font-medium" style={{ color: colors.text }}>{user.name}</span>
                </div>
                <Button
                  onClick={signOut}
                  variant="ghost"
                  size="sm"
                  className="h-8"
                  style={{ color: colors.textMuted }}
                  title="Sign out"
                >
                  <LogOut className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden mb-4">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="w-full flex items-center justify-between p-4 rounded-lg shadow-md transition-all"
                  style={{ 
                    backgroundColor: colors.cardBg,
                    borderLeft: `4px solid ${colors.primary}`
                  }}
                >
                  <div className="flex items-center gap-3">
                    {(() => {
                      const Icon = tabs.find(t => t.value === activeTab)!.icon;
                      return <Icon className="size-5 shrink-0" style={{ color: colors.primary }} />;
                    })()}
                    <span style={{ color: colors.text, fontSize: '1.125rem', fontWeight: '600' }}>
                      {tabs.find(t => t.value === activeTab)?.label}
                    </span>
                  </div>
                  <Menu className="size-6 shrink-0" style={{ color: colors.primary }} />
                </button>
              </SheetTrigger>
              
              <SheetContent side="left" className="w-[280px] sm:w-[320px]" style={{ backgroundColor: colors.background }}>
                <SheetHeader>
                  <SheetTitle style={{ color: colors.text }}>
                    <div className="flex items-center gap-2">
                      <span>🔬</span>
                      <span>Navigation</span>
                    </div>
                  </SheetTitle>
                  <SheetDescription style={{ color: colors.textMuted }}>
                    Navigate between different sections of the UX Research Template
                  </SheetDescription>
                </SheetHeader>
                
                <div className="mt-6 space-y-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.value;
                    return (
                      <button
                        key={tab.value}
                        onClick={() => handleTabChange(tab.value)}
                        className="w-full flex items-center gap-3 p-4 rounded-lg transition-all"
                        style={{
                          backgroundColor: isActive ? colors.primary : colors.cardBg,
                          color: isActive ? 'white' : colors.text,
                          boxShadow: isActive ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
                        }}
                      >
                        <Icon className="size-5 shrink-0" />
                        <span className="font-medium">{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
                
                {/* Theme Switcher in Mobile Menu */}
                <div className="mt-8 pt-6 border-t" style={{ borderColor: colors.primaryLight }}>
                  <p className="text-sm mb-3" style={{ color: colors.textMuted }}>
                    Choose Theme
                  </p>
                  <div className="flex gap-3 justify-center">
                    {themes.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setTheme(t.id)}
                        className="flex flex-col items-center gap-2"
                        title={t.name}
                      >
                        <div 
                          className={`w-12 h-12 rounded-lg ${t.preview} transition-all duration-300 ${
                            theme === t.id 
                              ? 'ring-4 ring-offset-2 scale-110' 
                              : 'opacity-70 hover:opacity-100'
                          }`}
                          style={theme === t.id ? { boxShadow: `0 0 0 2px ${colors.primary}` } : {}}
                        />
                        <span className="text-xs" style={{ color: theme === t.id ? colors.primary : colors.textMuted }}>
                          {t.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Tabs */}
          <TabsList className="hidden lg:grid w-full grid-cols-7 mb-8 bg-white shadow-md h-auto p-2 rounded-lg border-2" style={{ borderColor: colors.primaryLight }}>
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.value;
              return (
                <TabsTrigger 
                  key={tab.value}
                  value={tab.value} 
                  className="flex flex-col gap-1 py-3 px-2 relative rounded-md transition-all duration-200"
                  style={{
                    backgroundColor: isActive ? colors.primary : 'transparent',
                    color: isActive ? 'white' : colors.textMuted,
                  }}
                >
                  <Icon className="size-5 shrink-0" />
                  <span className="text-xs font-medium">{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-md"
                      style={{ 
                        backgroundColor: colors.primary,
                        zIndex: -1
                      }}
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Page Title Indicator - Desktop Only */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden lg:block mb-6 p-4 rounded-lg shadow-sm"
            style={{ 
              backgroundColor: colors.cardBg,
              borderLeft: `4px solid ${colors.primary}`
            }}
          >
            <h2 style={{ color: colors.text, fontSize: '1.5rem' }} className="flex items-center gap-2">
              {tabs.find(t => t.value === activeTab)?.icon && (
                <span style={{ color: colors.primary }}>
                  {(() => {
                    const Icon = tabs.find(t => t.value === activeTab)!.icon;
                    return <Icon className="size-6 shrink-0" />;
                  })()}
                </span>
              )}
              <span>{tabs.find(t => t.value === activeTab)?.label}</span>
            </h2>
          </motion.div>

          <TabsContent value="overview">
            <ResearchOverview />
          </TabsContent>

          <TabsContent value="participants">
            <ParticipantProfile />
          </TabsContent>

          <TabsContent value="plan">
            <ResearchPlan />
          </TabsContent>

          <TabsContent value="data">
            <DataCollection />
          </TabsContent>

          <TabsContent value="insights">
            <AnalysisInsights />
          </TabsContent>

          <TabsContent value="recommendations">
            <Recommendations />
          </TabsContent>

          <TabsContent value="guide">
            <HowToUse />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </AuthProvider>
  );
}
