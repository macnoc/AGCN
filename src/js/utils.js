const deepMerge = (target, source) => {
  // If content exists and has languages
  if (source.content) {
    // For each language in source content
    for (const lang in source.content) {
      // Get or create language object
      const langObj = source.content[lang] = source.content[lang] || {};
      // Merge with English defaults for missing keys
      source.content[lang] = {
        ...target.content.en,  // Use English as fallback
        ...langObj  // Override with provided language values
      };
    }
  }

  // Standard deep merge for other properties
  for (const key in source) {
    if (source[key] instanceof Object && key in target) {
      Object.assign(source[key], deepMerge(target[key], source[key]));
    }
  }

  return { ...target, ...source };
};

export { deepMerge };