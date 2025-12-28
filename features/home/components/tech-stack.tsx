'use client';

import { motion } from 'framer-motion';
import type { JSX } from 'react';

import {
  Angular,
  AWS,
  Azure,
  JavaScript,
  MySQL,
  NodeJS,
  PostgreSQL,
  ReactJS,
  Spring,
  TypeScript,
} from '@/components/icons';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface Stack {
  title: string;
  className: string;
  icon: JSX.Element;
}

const stacks: Stack[] = [
  {
    title: 'TypeScript',
    className: 'hover:text-[#3178C6]',
    icon: <TypeScript />,
  },
  {
    title: 'JavaScript',
    className: 'hover:text-[#F7DF1E]',
    icon: <JavaScript />,
  },

  {
    title: 'React.js',
    className: 'hover:text-[#61DAFB]',
    icon: <ReactJS />,
  },
  {
    title: 'Angular',
    className: 'hover:text-[#00DC82]',
    icon: <Angular />,
  },
  {
    title: 'NodeJs',
    className: 'hover:text-[#83CD29]',
    icon: <NodeJS />,
  },

  {
    title: 'Spring',
    className: 'hover:text-[#6DB33F]',
    icon: <Spring />,
  },
  {
    title: 'Azure',
    className: 'hover:text-[#06B6D4]',
    icon: <Azure />,
  },
  {
    title: 'AWS',
    className: 'group',
    icon: <AWS />,
  },
  {
    title: 'MySQL',
    className: 'hover:text-[#4479A1]',
    icon: <MySQL />,
  },
  {
    title: 'PostgreSQL',
    className: 'hover:text-[#4169E1]',
    icon: <PostgreSQL />,
  },
];

const animation = {
  hide: { x: -8, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { staggerChildren: 0.1 } },
};

const TechStack = () => {
  return (
    <>
      <motion.p
        initial="hide"
        animate="show"
        variants={animation}
        transition={{ delay: 0.2 }}
        className="font-cal mb-2 text-sm"
      >
        Tech stack
      </motion.p>
      <motion.div
        initial="hide"
        animate="show"
        variants={animation}
        className="flex flex-wrap gap-2 md:gap-3"
      >
        {' '}
        <TooltipProvider>
          {stacks.map(({ title, className, icon }) => (
            <Tooltip key={title}>
              <TooltipTrigger asChild>
                <motion.div
                  className={cn(
                    'text-muted-foreground size-5 rounded-md transition-transform duration-200 hover:scale-110 md:size-6',
                    className,
                  )}
                  variants={animation}
                >
                  {icon}
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>{title}</TooltipContent>
            </Tooltip>
          ))}{' '}
        </TooltipProvider>
      </motion.div>
    </>
  );
};

export default TechStack;
