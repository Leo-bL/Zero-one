// Simple, dependency-free fuzzy matching.
// Tolerant of typos, missing/extra letters, and different casing.

const normalize = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[إأآا]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/[ىي]/g, 'ي')
    .replace(/\s+/g, ' ');

// Levenshtein distance - counts how many edits separate two strings.
const levenshtein = (a, b) => {
  const matrix = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] === b[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = 1 + Math.min(
          matrix[i - 1][j],
          matrix[i][j - 1],
          matrix[i - 1][j - 1]
        );
      }
    }
  }
  return matrix[a.length][b.length];
};

// Returns true if `query` reasonably matches `target`, allowing for typos.
export const fuzzyMatch = (query, target) => {
  const q = normalize(query);
  const t = normalize(target);

  if (!q) return true;
  if (t.includes(q)) return true;

  // Allow typo tolerance proportional to query length.
  const words = t.split(' ');
  const maxDistance = q.length <= 3 ? 1 : q.length <= 6 ? 2 : 3;

  return words.some((word) => levenshtein(q, word) <= maxDistance)
    || levenshtein(q, t) <= maxDistance;
};

// Filters + ranks a list of subjects by relevance to the query.
export const searchSubjects = (subjects, query) => {
  if (!query.trim()) return subjects;

  return subjects
    .map((subject) => {
      const haystack = `${subject.title} ${subject.description}`;
      const matches = fuzzyMatch(query, haystack);
      const exactBonus = normalize(haystack).includes(normalize(query)) ? 1 : 0;
      return { subject, matches, exactBonus };
    })
    .filter((r) => r.matches)
    .sort((a, b) => b.exactBonus - a.exactBonus)
    .map((r) => r.subject);
};
