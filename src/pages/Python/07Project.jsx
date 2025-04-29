import React from 'react';
import ProgressBar from "../../components/ProgressBar";
import CodeBlock from "../../components/CodeBlock";
import Collapsible from "../../components/Collapsible";
import useSequentialCounter from "../../hooks/useSequentialCounter";

export default function Project07() {
  const { getCurrentNumber, getCurrentNumberAndIncrement } = useSequentialCounter(0);

  return (
    <div className="lesson-container">
      <ProgressBar />

      <section>
        <h1>Project: Student Scores Analyzer</h1>
        <p>Use for loops to process a list of quiz scores and:</p>
        <ul>
          <li>Calculate total and average score</li>
          <li>Identify highest and lowest scores</li>
          <li>Count how many students passed</li>
          <li>Build a letter grade distribution</li>
        </ul>
      </section>

      <section>
        <h2 id="for-loop-over-list"><a href="#for-loop-over-list" className="section-link">Setting Up Your Data</a></h2>
        <p>We'll start with a list of scores you define.</p>
        <CodeBlock language="python" codeString={`# Example list of 10 scores
scores = [78, 92, 85, 67, 88, 94, 73, 100, 59, 81]`} />
        <Collapsible title={`Challenge ${getCurrentNumberAndIncrement()}`}>
          <p>Modify the list with different values or more entries.</p>
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-calculate-total-average`}><a href={`#step-${getCurrentNumber()}-calculate-total-average`} className="section-link">Step {getCurrentNumberAndIncrement()}: Calculate Total &amp; Average</a></h2>
        <p>Loop over <code className="inline">scores</code> to compute the total, then calculate the average.</p>
        <Collapsible title="Hint">
          <ol>
            <li>Initialize <code className="inline">total = 0</code>.</li>
            <li>Add each score to <code className="inline">total</code> inside the loop.</li>
            <li>Compute <code className="inline">average = total / len(scores)</code>.</li>
          </ol>
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-find-high-low`}><a href={`#step-${getCurrentNumber()}-find-high-low`} className="section-link">Step {getCurrentNumberAndIncrement()}: Find Highest &amp; Lowest</a></h2>
        <p>Use a loop to set <code className="inline">max_score</code> and <code className="inline">min_score</code> from the list.</p>
        <Collapsible title="Hint">
          <p>Initialize both to <code className="inline">scores[0]</code>, then compare each score.</p>
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-count-passing`}><a href={`#step-${getCurrentNumber()}-count-passing`} className="section-link">Step {getCurrentNumberAndIncrement()}: Count Passing Scores</a></h2>
        <p>Define a passing threshold (e.g., 60) and count how many scores ≥ threshold.</p>
        <Collapsible title="Hint">
          <p>Initialize <code className="inline">pass_count = 0</code> and increment when a score meets the condition.</p>
        </Collapsible>
      </section>

      <section>
        <h2 id={`step-${getCurrentNumber()}-grade-histogram`}><a href={`#step-${getCurrentNumber()}-grade-histogram`} className="section-link">Step {getCurrentNumberAndIncrement()}: Build Grade Distribution</a></h2>
        <p>Map each score to a letter grade and count frequencies in <code className="inline">grade_freq</code>.</p>
        <Collapsible title="Hint">
          <p>Use if-elif-else: ≥90 → 'A', ≥80 → 'B', ≥70 → 'C', ≥60 → 'D', else 'F'.</p>
        </Collapsible>
      </section>

      <section>
        <h2 id="summary"><a href="#summary" className="section-link">Summary</a></h2>
        <p>You've analyzed scores: total, average, extremes, pass count, and grade distribution.</p>
        <ol>
          <li>Try reading scores from user input.</li>
          <li>Visualize distribution with '*' characters.</li>
          <li>Compute median and mode.</li>
        </ol>
      </section>

      <section>
        <h2>Sample Solution</h2>
        <Collapsible title="View Code">
          <CodeBlock language="python" codeString={`scores = [78, 92, 85, 67, 88, 94, 73, 100, 59, 81]

# Total & Average
total = 0
for s in scores:
    total += s
average = total / len(scores)
print(f"Average: {average:.2f}")

# High & Low
max_score = scores[0]
min_score = scores[0]
for s in scores:
    if s > max_score:
        max_score = s
    if s < min_score:
        min_score = s
print(f"Highest: {max_score}, Lowest: {min_score}")

# Count Passing
pass_count = 0
for s in scores:
    if s >= 60:
        pass_count += 1
print(f"Passing: {pass_count}")

# Grade Distribution
grade_freq = {}
for s in scores:
    if s >= 90:
        grade = 'A'
    elif s >= 80:
        grade = 'B'
    elif s >= 70:
        grade = 'C'
    elif s >= 60:
        grade = 'D'
    else:
        grade = 'F'
    grade_freq[grade] = grade_freq.get(grade, 0) + 1

print("Grade Distribution:")
for g, cnt in grade_freq.items():
    print(f"{g}: {cnt}")`} />
        </Collapsible>
      </section>

      <div>
        <a href="/quiz?name=07ScoresAnalyzer.py" className="button" target="_blank" rel="noopener noreferrer">Start Quiz</a>
      </div>
    </div>
  );
}