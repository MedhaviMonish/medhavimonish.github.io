"use client";
/* eslint-disable react/no-unescaped-entities */
import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function BlogJsonToYaml() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed flex justify-center items-start py-20 px-4"
      style={{ backgroundImage: "url('/images/bg-home.png')" }}
    >
      <div className="w-full max-w-4xl bg-black/80 text-white p-10 rounded-xl shadow-md">
        <Link href="/" className="text-sm text-gray-400 hover:text-white transition block mb-4">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-ember mb-2">
          Why I Moved from JSON to YAML for LLM Use cases
        </h1>
        <p className="mb-6 leading-relaxed">
          When working with large language models (LLMs), most developers use JSON for tool calls — and for good reason.
          It's simple, structured, and widely supported.
          But after building several AI products using LLMs — I realized JSON had critical drawbacks in high-performance LLM pipelines.
        </p>

        <blockquote className="border-l-4 border-ember pl-4 italic text-gray-400">
          So I made the switch to <b>YAML</b>.
        </blockquote>
        <br />

        <p className="mb-6 leading-relaxed">
          And it wasn’t just about aesthetics — it was about <b>speed, structure, and control</b>.
        </p>

        <h2 className="text-2xl font-bold text-ember mb-2">
          JSON: The Default That Breaks Under Pressure
        </h2>
        <p className="mb-6 leading-relaxed">
          JSON works great when your model is generating a small schema. But in real-world workflows:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400 leading-relaxed mb-6">
          <li>Models hallucinate trailing braces, quotes or misplace commas.</li>
          <li>Multi-level nesting gets bloated fast.</li>
          <li>Every extra quote and bracket consumes tokens.</li>
          <li>Extracting incomplete JSON during streaming becomes a nightmare.</li>
        </ul>
        <p className="mb-6 leading-relaxed">
          In my own structured-output pipeline, I was generating reasoning traces and factual blocks from the model — and YAML was the perfect choice.
        </p>

        <h2 className="text-2xl font-bold text-ember mb-2">
          YAML: Compact, Streamable, and Human-Friendly
        </h2>
        <p className="mb-6 leading-relaxed">
          The industry is pushing MCP (Model Context Protocol) as the “USB-C” for AI — but underneath, it’s still just JSON with tool descriptions. My approach skips the hype and focuses on real-world performance.
        </p>
        Here’s why I moved to YAML:
        <p className="mb-6 leading-relaxed">
          While JSON is required for tool calling, YAML shines when working with humans or LLMs directly. It avoids quotes, brackets, and nesting overhead — making outputs both faster and easier to parse.
        </p>
        <p className="mb-6 leading-relaxed">
          And it works — because it’s optimized not for interoperability, but for execution.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400 leading-relaxed mb-6">
          <li>Fewer tokens.</li>
          <li>Faster generation</li>
          <li>Lower cost per generation.</li>
          <li>Fewer bugs</li>
          <li>Clearer structure</li>
        </ul>

        <h2 className="text-2xl font-bold text-ember mb-2">
          Comparison of JSON and YAML
        </h2>
        <p className="mb-6 leading-relaxed">
          🔍 Want to test token counts yourself? Paste the JSON and YAML examples into OpenAI’s tokenizer here:
          <br />
          👉{" "}
          <Link
            href="https://platform.openai.com/tokenizer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ember underline hover:text-blue-400 transition"
          >
            https://platform.openai.com/tokenizer
          </Link>
          <br />
          See how many tokens each format uses — and why YAML can be a smarter choice for structured LLM outputs. Here’s a few examples.
        </p>
        <h3 className="text-1xl font-semibold text-ember mb-2">Example 1</h3>

        <pre className="bg-black/80 text-green-400 text-sm font-mono rounded mb-6 whitespace-pre-wrap">
          <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-400">
            241 Tokens
          </blockquote>
          <CodeBlock
  language="json"
  code={`{
  "user": {
    "id": 1023,
    "name": "Alice Johnson",
    "email": "alice.j@example.com",
    "preferences": {
      "language": "English",
      "timezone": "UTC-5",
      "notifications": {
        "email": true,
        "sms": false,
        "push": true
      }
    },
    "orders": [
      {
        "order_id": "A1001",
        "date": "2025-05-20",
        "total": 199.99,
        "items": [
          {"product_id": "P501", "name": "Wireless Mouse", "quantity": 1},
          {"product_id": "P502", "name": "Mechanical Keyboard", "quantity": 1}
        ]
      },
      {
        "order_id": "A1002",
        "date": "2025-05-25",
        "total": 89.50,
        "items": [
          {"product_id": "P503", "name": "USB-C Hub", "quantity": 2}
        ]
      }
    ]
  }
}
`}/>
        </pre>
        <pre className="bg-black/80 text-green-400 text-sm font-mono rounded mb-6 whitespace-pre-wrap">
          <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-400">
            194 Tokens
          </blockquote>
          <CodeBlock
  language="yaml"
  code={`user:
  id: 1023
  name: "Alice Johnson"
  email: "alice.j@example.com"
  preferences:
    language: "English"
    timezone: "UTC-5"
    notifications:
      email: true
      sms: false
      push: true
  orders:
    - order_id: "A1001"
      date: "2025-05-20"
      total: 199.99
      items:
        - product_id: "P501"
          name: "Wireless Mouse"
          quantity: 1
        - product_id: "P502"
          name: "Mechanical Keyboard"
          quantity: 1
    - order_id: "A1002"
      date: "2025-05-25"
      total: 89.50
      items:
        - product_id: "P503"
          name: "USB-C Hub"
          quantity: 2
`}/>
        </pre>
        <h3 className="text-1xl font-semibold text-ember mb-2">Example 2</h3>

        <pre className="bg-black/80 text-green-400 text-sm font-mono rounded mb-6 whitespace-pre-wrap">
          <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-400">
            19 Tokens
          </blockquote>
          <CodeBlock
  language="json"
  code={`{
  "values": [-10, 0, 5, 100]
}`}
          />
        </pre>

        <pre className="bg-black/80 text-green-400 text-sm font-mono rounded mb-6 whitespace-pre-wrap">
          <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-400">
            22 Tokens
          </blockquote>
          <CodeBlock
  language="yaml"
  code={`values:
- -10
- 0
- 5
- 100`}
          />
        </pre>
        <h3 className="text-1xl font-semibold text-ember mb-2">Example 3</h3>

        <pre className="bg-black/80 text-green-400 text-sm font-mono rounded mb-6 whitespace-pre-wrap">
          <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-400">
            34 Tokens
          </blockquote>
          <CodeBlock
  language="json"
  code={`{
  "user": "John",
  "active": true,
  "balance": -150.75,
  "roles": ["admin", "editor"]
}`}
          />
        </pre>

        <pre className="bg-black/80 text-green-400 text-sm font-mono rounded mb-6 whitespace-pre-wrap">
          <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-400">
            28 Tokens
          </blockquote>
          <CodeBlock
  language="yaml"
  code={`user: "John"
active: true
balance: -150.75
roles:
  - "admin"
  - "editor"`}
          />
        </pre>
        <h3 className="text-1xl font-semibold text-ember mb-2">Example 4</h3>

        <pre className="bg-black/80 text-green-400 text-sm font-mono rounded mb-6 whitespace-pre-wrap">
          <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-400">
            34 Tokens
          </blockquote>
          <CodeBlock
  language="json"
  code={`{
  "event": {
    "name": "Launch",
    "date": "2025-07-01",
    "online": false
  }
}`}
          />
        </pre>

        <pre className="bg-black/80 text-green-400 text-sm font-mono rounded mb-6 whitespace-pre-wrap">
          <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-400">
            23 Tokens
          </blockquote>
          <CodeBlock
  language="yaml"
  code={`event:
name: "Launch"
date: "2025-07-01"
online: false`}
          />
        </pre>
        <h3 className="text-1xl font-semibold text-ember mb-2">Example 5</h3>

        <pre className="bg-black/80 text-green-400 text-sm font-mono rounded mb-6 whitespace-pre-wrap">
          <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-400">
            49 Tokens
          </blockquote>
          <CodeBlock
  language="json"
  code={`{
  "config": {
    "retry": 3,
    "thresholds": {
      "warning": -1,
      "critical": -10
    },
    "modes": ["auto", "manual"]
  }
}`}
          />
        </pre>

        <pre className="bg-black/80 text-green-400 text-sm font-mono rounded mb-6 whitespace-pre-wrap">
          <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-400">
            36 Tokens
          </blockquote>
          <CodeBlock
  language="yaml"
  code={`config:
retry: 3
thresholds:
  warning: -1
  critical: -10
modes:
  - "auto"
  - "manual"`}
          />
        </pre>
        <h3 className="text-1xl font-semibold text-ember mb-2">Example 6</h3>

        <pre className="bg-black/80 text-green-400 text-sm font-mono rounded mb-6 whitespace-pre-wrap">
          <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-400">
            51 Tokens
          </blockquote>
          <CodeBlock
  language="json"
  code={`{
  "servers": [
    { "host": "192.168.1.1", "port": 8080 },
    { "host": "192.168.1.2", "port": 8081 }
  ]
}`}
          />
        </pre>

        <pre className="bg-black/80 text-green-400 text-sm font-mono rounded mb-6 whitespace-pre-wrap">
          <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-400">
            41 Tokens
          </blockquote>
          <CodeBlock
  language="yaml"
  code={`servers:
- host: "192.168.1.1"
  port: 8080
- host: "192.168.1.2"
  port: 8081`}
          />
        </pre>
        <h3 className="text-1xl font-semibold text-ember mb-2">Example 7</h3>

        <pre className="bg-black/80 text-green-400 text-sm font-mono rounded mb-6 whitespace-pre-wrap">
          <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-400">
            18 Tokens
          </blockquote>
          <CodeBlock
  language="json"
  code={`{
  "code": "007",
  "version": "1.0"
}`}
          />
        </pre>

        <pre className="bg-black/80 text-green-400 text-sm font-mono rounded mb-6 whitespace-pre-wrap">
          <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-400">
            12 Tokens
          </blockquote>
          <CodeBlock
  language="yaml"
  code={`code: "007"
version: "1.0"`}
          />
        </pre>


        <p className="mb-6 leading-relaxed">
          YAML consistently demonstrates greater token efficiency compared to JSON, with an average reduction of around 20%, 
          particularly in complex or deeply nested data structures. 
          YAML avoids repetitive punctuation like braces and commas used in JSON. 
          However, YAML’s advantage diminishes—and can even reverse—in flat structures such as simple arrays, 
          where its line-based formatting introduces overhead. 
          While YAML also enhances human readability, 
          In LLM prompts, YAML offers a compelling balance of compactness, clarity and speed over JSON, while maintaining exactly same structure.
        </p>

        <h2 className="text-2xl font-bold text-ember mb-2">
          Final Thoughts
        </h2>
        <p className="mb-6 leading-relaxed">
          I’m not saying YAML is perfect — it has its quirks. But in a reasoning-first, minimal-token-cost AI system — YAML gives me speed, clarity, and structure that JSON simply couldn’t.
          If you're using LLM to generate parameters to act as interface to agents/fucntions or streaming generation systems, try YAML.
          It might just make your system <b className="text-ember"><i>faster, smarter, and more aligned</i></b>.
          <br />
          <br />
          💡 <span className="font-semibold">Bonus Tip:</span> Since you made it to the end — here’s something I learned while optimizing prompts:
          <br />
          Try converting your input text to lowercase. There’s no fixed metric — but in many cases, it either uses the same number of tokens or slightly fewer.
          <br />
          And when you're pushing limits… every token counts. 😉
        </p>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50 bg-ember text-black px-4 py-2 rounded-full shadow-lg hover:bg-orange-400 transition"
      >
        ↑ Top
      </button>
    </main>
  );
}
