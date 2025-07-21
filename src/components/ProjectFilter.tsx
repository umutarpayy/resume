import { Button } from "@/components/ui/button";

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProjectFilter = ({ categories, activeCategory, onCategoryChange }: ProjectFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`filter-button ${
            activeCategory === category ? 'active' : 'bg-secondary hover:bg-secondary/80'
          }`}
          variant={activeCategory === category ? "default" : "secondary"}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default ProjectFilter;