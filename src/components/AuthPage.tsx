import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Shield, Save, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useAuth } from "./AuthContext";

export function AuthPage() {
  const { signIn } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="border-indigo-200 shadow-2xl">
          <CardHeader className="text-center space-y-4 pb-8 bg-gradient-to-br from-indigo-50 to-purple-50 border-b border-indigo-100">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-indigo-600 rounded-full mx-auto"
            >
              <Sparkles className="size-10 text-white" />
            </motion.div>
            <CardTitle className="text-indigo-900 text-2xl">
              UX Research Template
            </CardTitle>
            <p className="text-slate-600 text-sm">
              Sign in to save your research progress and access it from anywhere
            </p>
          </CardHeader>
          <CardContent className="pt-8 pb-8 space-y-6">
            {/* Benefits */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50 border border-green-200">
                <Save className="size-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-green-900 font-medium text-sm">Auto-Save Progress</h4>
                  <p className="text-green-700 text-xs">
                    Your research data is automatically saved as you work
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 border border-blue-200">
                <Shield className="size-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-blue-900 font-medium text-sm">Secure & Private</h4>
                  <p className="text-blue-700 text-xs">
                    Your data is stored securely and only accessible to you
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-50 border border-purple-200">
                <Sparkles className="size-5 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-purple-900 font-medium text-sm">Access Anywhere</h4>
                  <p className="text-purple-700 text-xs">
                    Continue your research from any device with internet
                  </p>
                </div>
              </div>
            </div>

            {/* Sign In Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={signIn}
                className="w-full h-12 text-base bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 shadow-md hover:shadow-lg transition-all"
              >
                <Mail className="size-5 mr-3" />
                Sign in with Google
              </Button>
            </motion.div>

            {/* Privacy Notice */}
            <p className="text-center text-xs text-slate-500 pt-4 border-t border-slate-200">
              We'll never share your data or use it for marketing purposes.
              <br />
              Your research data belongs to you.
            </p>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-6"
        >
          <p className="text-sm text-slate-600">
            No account? Your data will be saved locally in your browser
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
