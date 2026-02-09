import { motion } from 'framer-motion';

const Loading = ({ type = "spinner", text = "Loading data..." }) => {
  if (type === "skeleton") {
    return (
      <div className="w-full h-full animate-pulse bg-[--color-surface] rounded-xl flex flex-col p-6 gap-4">
        <div className="w-12 h-12 bg-[--color-border-custom] rounded-lg"></div>
        <div className="h-6 w-3/4 bg-[--color-border-custom] rounded"></div>
        <div className="h-4 w-full bg-[--color-border-custom] rounded"></div>
        <div className="h-4 w-1/2 bg-[--color-border-custom] rounded"></div>
        <div className="mt-auto flex gap-2">
          <div className="h-8 w-24 bg-[--color-border-custom] rounded-lg"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-12 text-[--color-text-muted]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-8 h-8 border-2 border-[--color-accent] border-t-transparent rounded-full mb-4"
      />
      <p className="text-sm font-mono animate-pulse">{text}</p>
    </div>
  );
};

export default Loading;
