"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

interface TimelineItemType {
  period: string
  title: string
  completion: number
  tasks: string[]
}

interface TimelineItemProps {
  item: TimelineItemType
  index: number
  isLast: boolean
}

export default function TimelineItem({ item, index, isLast }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="mb-16 relative"
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 ml-6"></div>

      {!isLast && (
        <div
          className="absolute left-0 top-6 bottom-0 w-px bg-gradient-to-b from-teal-400 to-transparent h-full ml-6"
          style={{ height: `${item.completion}%` }}
        ></div>
      )}

      <div className="flex">
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-white border-2 border-teal-400 flex items-center justify-center z-10 relative">
            <Calendar className="h-5 w-5 text-teal-500" />
          </div>
        </div>

        <div className="ml-8 flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <span className="text-sm bg-teal-100 text-teal-800 px-3 py-1 rounded-full inline-block mt-2 md:mt-0">
              {item.period}
            </span>
          </div>

          <div className="bg-gray-100 h-2 rounded-full mb-4 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${item.completion}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-full bg-teal-400"
            ></motion.div>
          </div>

          <div className="flex items-center mb-4">
            <div className="text-sm font-medium text-teal-600">{item.completion}% Complete</div>
          </div>

          <ul className="space-y-2">
            {item.tasks.map((task, taskIndex) => (
              <motion.li
                key={taskIndex}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 + taskIndex * 0.1 }}
                viewport={{ once: true }}
                className="text-gray-700 flex items-start"
              >
                <span className="inline-block w-2 h-2 rounded-full bg-teal-400 mt-2 mr-2"></span>
                {task}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
