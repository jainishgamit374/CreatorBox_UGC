import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Store, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TopBanner() {
    const [dismissed, setDismissed] = useState(false);

    return (
        <AnimatePresence>
            {!dismissed && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-primary/90 via-primary to-orange-500 text-white overflow-hidden"
                >
                    <div className="container-custom flex items-center justify-between gap-3 py-2 px-4">
                        {/* Question */}
                        <span className="text-xs sm:text-sm font-medium whitespace-nowrap hidden sm:block opacity-90">
                            What describes you best?
                        </span>

                        {/* Buttons */}
                        <div className="flex items-center gap-2 flex-1 justify-center sm:justify-start">
                            <Link
                                to="/local-brands"
                                className="flex items-center gap-1.5 bg-white/15 hover:bg-white/30 border border-white/30 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 rounded-full transition-all duration-200 hover:scale-105 whitespace-nowrap"
                            >
                                <Store size={13} />
                                Local Brand
                            </Link>

                            <span className="text-white/60 text-xs font-light">or</span>

                            <Link
                                to="/online-brands"
                                className="flex items-center gap-1.5 bg-white/15 hover:bg-white/30 border border-white/30 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 rounded-full transition-all duration-200 hover:scale-105 whitespace-nowrap"
                            >
                                <ShoppingCart size={13} />
                                D2C / Online Brand
                            </Link>
                        </div>

                        {/* Dismiss */}
                        <button
                            onClick={() => setDismissed(true)}
                            aria-label="Dismiss banner"
                            className="p-1 rounded-full hover:bg-white/20 transition-colors flex-shrink-0"
                        >
                            <X size={14} />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
