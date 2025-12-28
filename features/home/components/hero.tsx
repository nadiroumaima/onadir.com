'use client';
import { motion } from 'framer-motion';
import Container from '@/components/container'; 
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';
import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';


const Hero = () => {
  return (
    <div className="bg-grid py-16 lg:py-20">
      <Container>
        <div className="">
          <motion.h1
            className="font-cal from-foreground via-foreground/90 to-foreground/70 mb-4 flex flex-col justify-center gap-1 bg-gradient-to-b to-90% bg-clip-text pb-2 text-4xl font-bold text-transparent md:text-5xl lg:text-6xl"
            initial={{ x: -32, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span>
              Hi, I'm <span className="text-primary">NADIR Oumaima</span>
            </span>
            <span>Software Engineer</span>
          </motion.h1>
          <motion.div className="from-foreground via-foreground/90 to-foreground/70 bg-gradient-to-b to-90% bg-clip-text font-bold text-transparent md:text-xl">
            to be added
          </motion.div>
        </div>

        <div className="mt-6 md:mt-8">
          <motion.div
            className="relative"
            initial={{ x: -16, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
        <Button variant="shadow" className="group">
  <Link href={ROUTES.contact} className="flex items-center gap-1">
    Let's Talk
    <ChevronRightIcon className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
  </Link>
</Button>

            
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;