import { motion } from "motion/react";
import { useTheme } from "./ThemeContext";

export function Footer() {
  const { colors } = useTheme();
  
  return (
    <motion.footer
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-12 pt-6 border-t text-center"
      style={{ borderColor: colors.primaryLight }}
    >
      <p className="text-sm" style={{ color: colors.textMuted }}>
        © 2025 • UX Research Template by{" "}
        <span style={{ color: colors.primary, fontWeight: 500 }}>
          Dr Greeshma Sharma
        </span>
      </p>
    </motion.footer>
  );
}
