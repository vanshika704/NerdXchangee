
import { useState, useEffect, useRef } from "react";
import CodeEditor from "../components/codeeditor";
import LanguageSelector from "../components/languageselector";
import axios from "axios";

// Full language mapping between Monaco and Judge0
const getLanguageMapping = () => ({
  javascript: { monaco: "javascript", judge0: 63 },
  python: { monaco: "python", judge0: 71 },
  python2: { monaco: "python", judge0: 70 },
  java: { monaco: "java", judge0: 62 },
  // cpp: { monaco: "cpp", judge0: 50 },
  // c: { monaco: "c", judge0: 48 },
  ruby: { monaco: "ruby", judge0: 72 },

  swift: { monaco: "swift", judge0: 83 },
  php: { monaco: "php", judge0: 68 },
  kotlin: { monaco: "kotlin", judge0: 78 },
  rust: { monaco: "rust", judge0: 73 },
  typescript: { monaco: "typescript", judge0: 74 },
  sql: { monaco: "sql", judge0: 82 },
  html: { monaco: "html", judge0: 43 },
  css: { monaco: "css", judge0: 43 },
  json: { monaco: "json", judge0: 43 },
  bash: { monaco: "bash", judge0: 38 },
});

// Default code templates for all supported languages
const getDefaultCode = (language) => {
  const templates = {
    javascript: `console.log("Hello, World!");`,
    python: `print("Hello, World!")`,
    python2: `print "Hello, World!"`,
    java: `public class Main { public static void main(String[] args) { System.out.println("Hello, World!"); } }`,
    cpp: `#include <iostream> using namespace std; int main() { cout << "Hello, World!" << endl; return 0; }`,
    c: `#include <stdio.h> int main() { printf("Hello, World!\\n"); return 0; }`,
    ruby: `puts "Hello, World!"`,
    go: `package main import "fmt" func main() { fmt.Println("Hello, World!") }`,
    swift: `print("Hello, World!")`,
    php: `<?php echo "Hello, World!"; ?>`,
    kotlin: `fun main() { println("Hello, World!") }`,
    rust: `fn main() { println!("Hello, World!"); }`,
    typescript: `console.log("Hello, World!");`,
    sql: `SELECT 'Hello, World!';`,
    html: `<html><head><title>Hello, World!</title></head><body><h1 style="color:white">Hello, World!</h1></body></html>`,
    css: `body { font-family: Arial, sans-serif; background-color: #f0f0f0; }`,
    json: `{"message": "Hello, World!"}`,
    bash: `echo "Hello, World!"`,
  };

  return templates[language] || "// Write your code here";
};

const OnlineCodeEditor = () => {
  const [code, setCode] = useState(getDefaultCode("javascript"));
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("");  // For HTML iframe refresh

  const languageMapping = getLanguageMapping();
  const iframeRef = useRef(null);  // Reference for iframe

  useEffect(() => {
    setCode(getDefaultCode(language)); // Update the default code when the language changes
    setOutput(""); // Clear output on language change
    if (language === "html") {
      setIframeSrc(""); // Reset iframe source for HTML
    }
  }, [language]);

  const runCode = async () => {
    setIsRunning(true);
    setOutput(""); // Clear the output when running the code

    const selectedLanguage = languageMapping[language];
    if (!selectedLanguage) {
      setOutput(`Error: Unsupported language: ${language}`);
      setIsRunning(false);
      return;
    }

    const { judge0: languageId } = selectedLanguage;

    try {
      if (language === "html") {
        // For HTML, just render it in an iframe
        setIframeSrc("data:text/html;charset=utf-8," + encodeURIComponent(code));
        setIsRunning(false);
        return;
      }

      // Sending code to Judge0 API
      console.log("Sending code to Judge0...");
      const response = await axios.post(
        "https://judge0-ce.p.rapidapi.com/submissions",
        {
          source_code: code,
          language_id: languageId,
          stdin: "",
        },
        {
          headers: {
            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
            "X-RapidAPI-Key": "9b7663e33fmsh643f6f42fdd83c7p1da26fjsn3b49045b6657", // Replace with your own API key
          },
        }
      );

      const { token } = response.data;
      console.log("Token received:", token); // Debug: Show the token received
      if (!token) {
        setOutput("Error: No token received from Judge0.");
        setIsRunning(false);
        return;
      }

      const result = await getExecutionResult(token);
      console.log("Execution result:", result); // Debug: Show the execution result
      setOutput(result);
    } catch (error) {
      console.error("Error running code:", error); // Log the error if any
      setOutput(`Error: ${error.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  const getExecutionResult = async (token) => {
    let status = { id: 1 };
    let result = null;
    let retries = 5; // Limit the number of retries

    // Polling Judge0 for the execution result
    while (status.id !== 3 && retries > 0) {
      try {
        const { data } = await axios.get(
          `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
          {
            headers: {
              "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
              "X-RapidAPI-Key": "9b7663e33fmsh643f6f42fdd83c7p1da26fjsn3b49045b6657", // Replace with your own API key
            },
          }
        );
        status = data.status;
        console.log("Polling... Status:", status); // Debug: Show polling status
        if (status.id === 3) {
          result = data.stdout || data.stderr || "No output";
        } else {
          retries--;
          await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second before retrying
        }
      } catch (error) {
        console.error("Error during polling:", error);
        retries = 0; // Stop polling if there's an error
        result = `Polling Error: ${error.message}`;
      }
    }

    return result || "Execution Timeout or Error.";
  };

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-800 px-8 py-4 shadow-md flex items-center">
        <h1 className="text-2xl font-bold text-green-400 mr-auto">NerdXchange</h1>
        <div className="ml-auto">
          <LanguageSelector language={language} setLanguage={setLanguage} />
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex p-6 space-x-6">
        {/* Code Editor Section */}
        <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Code Editor</h2>
          <CodeEditor
            code={code}
            setCode={setCode}
            language={languageMapping[language]?.monaco || "plaintext"}
          />
        </div>

        {/* Output Section */}
        <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Output</h2>
          {language === "html" ? (
            // HTML output in iframe
            <iframe
              ref={iframeRef}
              src={iframeSrc}
              className="w-full h-full"
              title="HTML Output"
            ></iframe>
          ) : (
            <pre className="bg-gray-900 text-white p-4 rounded h-full overflow-auto">
              {output || "No output yet..."}
            </pre>
          )}
        </div>
      </div>

      {/* Run Button */}
      <div className="w-full flex justify-center mb-6">
        <button
          onClick={runCode}
          disabled={isRunning}
          className={`px-8 py-3 text-lg font-bold rounded-lg transition duration-300 ${
            isRunning
              ? "bg-gray-600 text-gray-300 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600 text-white"
          }`}
        >
          {isRunning ? "Running..." : "Run Code"}
        </button>
      </div>
    </div>
  );
};

export default OnlineCodeEditor;
