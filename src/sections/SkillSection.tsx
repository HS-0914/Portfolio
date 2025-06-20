import { motion } from "motion/react";

const skills = {
  Languages: ["TypeScript", "Python", "Csharp"],
  Frameworks: ["React", "Node.js", "Nest.js"],
  Styling: ["Tailwind CSS", "shadcn", "CSS"],
  Tools: ["GitHub", "VSCode"],
  Database: ["MySQL", "PostgreSQL"],
};

const SkillSection = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gray-100 text-foreground dark:bg-background"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🛠️ Skills
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-teal-500 mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="border bg-primary/10 text-primary dark:bg-gray-900/60 px-3 py-2 rounded text-base font-medium"
                  >
                    <img
                      src={`/Portfolio/svgs/${skill}.svg`}
                      alt={skill}
                      className={`w-4 h-4 inline mr-2 ${
                        skill === "GitHub" || skill === "shadcn"
                          ? "dark:invert"
                          : ""
                      }`}
                    />
                    {`${skill.replace("sharp", "#")}`}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
