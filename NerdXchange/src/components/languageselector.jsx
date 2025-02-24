
import PropTypes from "prop-types";

const LanguageSelector = ({ language, setLanguage }) => {
  const languages = [
    { label: "JavaScript", value: "javascript" },
    { label: "Python 3", value: "python" },
    { label: "Python 2", value: "python2" },
    { label: "Java", value: "java" },
    // { label: "C++", value: "cpp" },
    // { label: "C", value: "c" },
    { label: "Ruby", value: "ruby" },
    
    { label: "Swift", value: "swift" },
    { label: "PHP", value: "php" },
    { label: "Kotlin", value: "kotlin" },
    { label: "Rust", value: "rust" },
    { label: "TypeScript", value: "typescript" },
    { label: "SQL", value: "sql" },
    { label: "HTML", value: "html" },
    { label: "CSS", value: "css" },
    { label: "JSON", value: "json" },
    { label: "Bash", value: "bash" },
  ];

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="p-2 bg-gray-800 text-white rounded"
    >
      {languages.map((lang) => (
        <option key={lang.value} value={lang.value}>
          {lang.label}
        </option>
      ))}
    </select>
  );
};

LanguageSelector.propTypes = {
  language: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
};

export default LanguageSelector;
